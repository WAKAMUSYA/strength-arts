import Link from 'next/link'
import { login, signInWithGoogle } from './actions'
import { ChevronRight } from 'lucide-react'

export default function LoginPage({
  searchParams,
}: {
  searchParams: { message: string }
}) {
  return (
    <div className="min-h-[90vh] bg-zinc-950 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-md relative z-10">
        
        {/* Login Form */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 md:p-10 shadow-2xl relative">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-black text-white mb-2">おかえりなさい</h2>
            <p className="text-zinc-400 text-sm">STRENGTH ARTS アカウントにログイン</p>
          </div>
          
          <div className="space-y-6">
            <form action={signInWithGoogle}>
              <button className="w-full bg-white hover:bg-zinc-100 text-black font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-3 transition-colors shadow-sm">
                <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Googleでログイン
              </button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-zinc-800"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-zinc-900 text-zinc-500 font-medium">またはメールアドレスでログイン</span>
              </div>
            </div>

            <form className="space-y-6" action={login}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-1" htmlFor="email">
                    メールアドレス
                  </label>
                  <input
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-1" htmlFor="password">
                    パスワード
                  </label>
                  <input
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    type="password"
                    name="password"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>

              <button className="w-full bg-white text-black hover:bg-zinc-200 transition-colors py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 shadow-lg shadow-white/10 group mt-4">
                ログイン
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              {searchParams?.message && (
                <p className="p-4 bg-red-950/50 border border-red-900 text-red-400 text-sm text-center rounded-xl font-medium mt-4">
                  {searchParams.message}
                </p>
              )}

              <p className="text-center text-sm text-zinc-500 pt-6 border-t border-zinc-800 mt-6">
                アカウントをお持ちでないですか？{" "}
                <Link href="/signup" className="text-blue-400 hover:text-blue-300 transition-colors font-medium underline underline-offset-4">
                  新規登録はこちら
                </Link>
              </p>
            </form>
          </div>
        </div>

      </div>
    </div>
  )
}
