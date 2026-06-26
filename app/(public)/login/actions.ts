'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export async function login(formData: FormData) {
  const supabase = createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    redirect(`/login?message=${error.message}`)
  }

  revalidatePath('/', 'layout')
  redirect('/dashboard')
}

export async function signup(formData: FormData) {
  const supabase = createClient()

  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const { data: authData, error } = await supabase.auth.signUp({
    email,
    password,
  })

  if (error) {
    redirect(`/signup?message=${error.message}`)
  }

  // Create Stripe Checkout Session
  const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
  const priceId = process.env.NEXT_PUBLIC_STRIPE_PRICE_ID

  if (!priceId || !process.env.STRIPE_SECRET_KEY) {
    // Fallback if Stripe is not configured yet
    console.warn("Stripe is not configured. Redirecting to dashboard.")
    revalidatePath('/', 'layout')
    redirect('/dashboard')
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/dashboard?checkout_success=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/signup?canceled=true`,
      customer_email: email,
      client_reference_id: authData.user?.id,
    })

    if (session.url) {
      redirect(session.url)
    }
  } catch (err: any) {
    console.error("Stripe session creation error:", err)
    redirect(`/signup?message=決済画面の作成に失敗しました: ${err.message}`)
  }

  revalidatePath('/', 'layout')
  redirect('/dashboard')
}
