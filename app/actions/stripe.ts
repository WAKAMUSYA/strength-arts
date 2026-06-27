'use server'

import { createClient } from '@/utils/supabase/server'
import Stripe from 'stripe'
import { redirect } from 'next/navigation'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '')
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export async function createCheckoutSession() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  const priceId = process.env.NEXT_PUBLIC_STRIPE_PRICE_ID
  if (!priceId) {
    throw new Error('Price ID is not configured.')
  }

  // Look for existing stripe_customer_id
  let customerId: string | undefined
  const { data: subData } = await supabase
    .from('sa_subscriptions')
    .select('stripe_customer_id')
    .eq('user_id', user.id)
    .maybeSingle()

  if (subData?.stripe_customer_id) {
    customerId = subData.stripe_customer_id
  } else {
    // Check main profiles table or just create a new customer
    const { data: profileData } = await supabase
      .from('profiles')
      .select('email, full_name')
      .eq('id', user.id)
      .single()

    const newCustomer = await stripe.customers.create({
      email: profileData?.email || user.email,
      name: profileData?.full_name || undefined,
      metadata: {
        supabaseUUID: user.id
      }
    })
    customerId = newCustomer.id
  }

  const session = await stripe.checkout.sessions.create({
    customer: customerId,
    client_reference_id: user.id, // IMPORTANT for webhook
    payment_method_types: ['card'],
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    mode: 'subscription',
    success_url: `${siteUrl}/dashboard?success=true`,
    cancel_url: `${siteUrl}/dashboard?canceled=true`,
  })

  if (session.url) {
    redirect(session.url)
  }
}

export async function createPortalSession() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  const { data: subData } = await supabase
    .from('sa_subscriptions')
    .select('stripe_customer_id')
    .eq('user_id', user.id)
    .maybeSingle()

  if (!subData?.stripe_customer_id) {
    // They are PRO manually via database, not via Stripe
    throw new Error('No Stripe subscription found for this account.')
  }

  const session = await stripe.billingPortal.sessions.create({
    customer: subData.stripe_customer_id,
    return_url: `${siteUrl}/dashboard`,
  })

  if (session.url) {
    redirect(session.url)
  }
}
