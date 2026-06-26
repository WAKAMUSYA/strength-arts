import Link from 'next/link'
import { login } from './actions'
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
          
          <form className="space-y-6" action={login}>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-black text-white mb-2">おかえりなさい</h2>
              <p className="text-zinc-400 text-sm">STRENGTH ARTS アカウントにログイン</p>
            </div>

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
  )
}
