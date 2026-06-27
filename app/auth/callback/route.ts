import { NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server'

export async function GET(request: Request) {
  const requestUrl = new URL(request.url)
  const origin = requestUrl.origin
  const code = requestUrl.searchParams.get('code')

  if (code) {
    const supabase = createClient()
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    
    if (error) {
      console.error('Auth Callback Error:', error)
      return NextResponse.redirect(`${origin}/login?message=${encodeURIComponent(error.message)}`)
    }
  } else {
    // No code present
    const errorDesc = requestUrl.searchParams.get('error_description')
    if (errorDesc) {
      return NextResponse.redirect(`${origin}/login?message=${encodeURIComponent(errorDesc)}`)
    }
  }

  // 認証が成功したらダッシュボードへリダイレクト
  return NextResponse.redirect(`${origin}/dashboard`)
}
