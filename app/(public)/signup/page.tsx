import Link from 'next/link'
import { signup } from '../login/actions'
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
          
          <form className="space-y-6" action={signup}>
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">アカウントを作成</h2>
              <p className="text-zinc-400 text-sm">メールアドレスとパスワードを入力してください。</p>
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
  )
}
