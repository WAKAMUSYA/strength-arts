import Link from 'next/link'
import { signup, signInWithGoogle } from '../login/actions'
import { CheckCircle2, Shield, ChevronRight } from 'lucide-react'

export default function SignupPage({
  searchParams,
}: {
  searchParams: { message: string }
}) {
  return (
    <div className="min-h-[90vh] bg-zinc-950 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-5xl grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left column: Benefits & Plan Details */}
        <div className="text-white space-y-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight leading-tight">
              強くなるための<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                最初の一歩。
              </span>
            </h1>
            <p className="text-zinc-400 text-lg">
              無料メンバー登録で、STRENGTH ARTSの様々な基礎学習コンテンツや保存機能が利用可能になります。
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
              <div>
                <h3 className="font-bold text-zinc-200">学習進捗の自動保存</h3>
                <p className="text-sm text-zinc-500">自分だけのダッシュボードで、読んだコラムや既読状態を管理できます。</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
              <div>
                <h3 className="font-bold text-zinc-200">お気に入り機能</h3>
                <p className="text-sm text-zinc-500">気になった記事をブックマークし、いつでもすぐに読み返すことができます。</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
              <div>
                <h3 className="font-bold text-zinc-200">無料PDF教材のダウンロード</h3>
                <p className="text-sm text-zinc-500">筋肥大や腰痛など、体系的にまとめられた限定配布のPDFをダウンロード可能です。</p>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 flex items-center justify-between backdrop-blur-sm">
            <div>
              <p className="text-zinc-400 font-bold mb-1">STRENGTH ARTS MEMBER</p>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-black text-white">完全無料</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-zinc-500 bg-zinc-950 px-4 py-2 rounded-full text-xs font-bold border border-zinc-900">
              <Shield className="w-4 h-4" /> クレジットカード不要
            </div>
          </div>
        </div>

        {/* Right column: Signup Form */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 md:p-10 shadow-2xl relative">
          <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white text-xs font-black uppercase tracking-wider py-2 px-4 rounded-full shadow-lg transform rotate-3">
            無料登録
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
                Googleで無料登録する
              </button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-zinc-800"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-zinc-900 text-zinc-500 font-medium">またはメールアドレスで登録</span>
              </div>
            </div>

            <form className="space-y-6" action={signup}>

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

            <button className="w-full bg-blue-600 hover:bg-blue-500 transition-colors py-4 rounded-xl text-white font-bold text-lg flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.3)] group mt-4">
              無料で登録する
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            {searchParams?.message && (
              <p className={`p-4 border text-sm text-center rounded-xl font-medium ${
                searchParams.message.includes('確認メール') 
                  ? 'bg-emerald-950/50 border-emerald-900 text-emerald-400' 
                  : 'bg-red-950/50 border-red-900 text-red-400'
              }`}>
                {searchParams.message}
              </p>
            )}

            <p className="text-center text-sm text-zinc-500 pt-4 border-t border-zinc-800 mt-6">
              すでにアカウントをお持ちですか？{" "}
              <Link href="/login" className="text-blue-400 hover:text-blue-300 transition-colors font-medium underline underline-offset-4">
                ログインはこちら
              </Link>
            </p>
            </form>
          </div>
        </div>

      </div>
    </div>
  )
}
