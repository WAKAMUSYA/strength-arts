import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
  try {
    let supabaseResponse = NextResponse.next({
      request: {
        headers: request.headers,
      },
    })

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) {
            return request.cookies.get(name)?.value
          },
          set(name: string, value: string, options: CookieOptions) {
            request.cookies.set({
              name,
              value,
              ...options,
            })
            supabaseResponse.cookies.set({
              name,
              value,
              ...options,
            })
          },
          remove(name: string, options: CookieOptions) {
            request.cookies.set({
              name,
              value: '',
              ...options,
            })
            supabaseResponse.cookies.set({
              name,
              value: '',
              ...options,
            })
          },
        },
      }
    )

    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (
      !user &&
      request.nextUrl.pathname.startsWith('/dashboard')
    ) {
      const url = request.nextUrl.clone()
      url.pathname = '/login'
      return NextResponse.redirect(url)
    }
    
    if (user) {
      if (request.nextUrl.pathname === '/' || request.nextUrl.pathname === '/login' || request.nextUrl.pathname === '/signup') {
        const url = request.nextUrl.clone()
        url.pathname = '/dashboard'
        return NextResponse.redirect(url)
      }
      
      if (request.nextUrl.pathname.startsWith('/academy')) {
        const url = request.nextUrl.clone()
        url.pathname = request.nextUrl.pathname.replace('/academy', '/dashboard/academy')
        return NextResponse.redirect(url)
      }

      if (request.nextUrl.pathname.startsWith('/training')) {
        const url = request.nextUrl.clone()
        url.pathname = request.nextUrl.pathname.replace('/training', '/dashboard/training')
        return NextResponse.redirect(url)
      }

      if (request.nextUrl.pathname.startsWith('/lab')) {
        const url = request.nextUrl.clone()
        url.pathname = request.nextUrl.pathname.replace('/lab', '/dashboard/lab')
        return NextResponse.redirect(url)
      }
    }

    return supabaseResponse
  } catch (error: any) {
    // Return the exact error so we can see it on the screen
    return new NextResponse(
      JSON.stringify({
        error: 'Middleware Error',
        message: error?.message || String(error),
        stack: error?.stack
      }),
      { status: 500, headers: { 'content-type': 'application/json' } }
    )
  }
}
