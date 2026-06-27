import Link from 'next/link'
import { signup, signInWithGoogle } from '../login/actions'
import { CheckCircle2, Shield, ChevronRight, Zap, Star } from 'lucide-react'

export default function SignupPage({
  searchParams,
}: {
  searchParams: { message: string }
}) {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden selection:bg-blue-900 selection:text-white">
      {/* Background ambient effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900/50 via-black to-black pointer-events-none -z-10" />

      <div className="w-full max-w-6xl grid lg:grid-cols-12 gap-12 lg:gap-8 items-start relative z-10">
        
        {/* Left column: Plan Details */}
        <div className="lg:col-span-7 space-y-8">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight leading-tight text-white">
              強くなるための<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-400 to-emerald-300">
                最初の一歩。
              </span>
            </h1>
            <p className="text-zinc-400 text-base md:text-lg max-w-xl leading-relaxed font-light">
              まずは無料のアカウントを作成し、STRENGTH ARTS の基礎コンテンツに触れてください。
              いつでもPROプランへアップグレード可能です。
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mt-8">
            {/* Free Plan Card */}
            <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-6 md:p-8 backdrop-blur-xl relative overflow-hidden group hover:border-zinc-700 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-white tracking-wider">FREE</h2>
                  <span className="px-3 py-1 bg-zinc-800 text-zinc-300 text-xs font-bold rounded-full border border-zinc-700">¥0 / 月</span>
                </div>
                <p className="text-zinc-400 text-sm mb-6 pb-6 border-b border-zinc-800/50">
                  基礎学習と機能体験のための無料プラン
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-zinc-200 text-sm font-medium">一部の基礎コラムの閲覧</span>
                      <p className="text-xs text-zinc-500 mt-1">トレーニングの基礎知識が学べます</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-zinc-200 text-sm font-medium">無料PDF教材のダウンロード</span>
                      <p className="text-xs text-zinc-500 mt-1">筋肥大や腰痛などの限定PDFを取得可能</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* PRO Plan Card */}
            <div className="bg-gradient-to-b from-blue-950/40 to-zinc-900/40 border border-blue-900/50 rounded-3xl p-6 md:p-8 backdrop-blur-xl relative overflow-hidden group hover:border-blue-700/50 transition-colors shadow-[0_0_40px_-15px_rgba(37,99,235,0.2)]">
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-600/20 blur-3xl rounded-full" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-blue-400" />
                    <h2 className="text-xl font-bold text-white tracking-wider">PRO</h2>
                  </div>
                  <span className="px-3 py-1 bg-blue-600/20 text-blue-300 text-xs font-bold rounded-full border border-blue-500/30">アップグレード可能</span>
                </div>
                <p className="text-zinc-400 text-sm mb-6 pb-6 border-b border-zinc-800/50">
                  限界突破のための完全アクセスプラン
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-white text-sm font-bold">SA提供ツールの横断アクセス</span>
                      <p className="text-xs text-zinc-400 mt-1">SAの他のサイトや専用ツールをシームレスに利用可能</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-white text-sm font-bold">全プレミアム記事の読み放題</span>
                      <p className="text-xs text-zinc-400 mt-1">解剖学・バイオメカニクスに基づく深い洞察</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-white text-sm font-bold">学習進捗・お気に入り保存</span>
                      <p className="text-xs text-zinc-400 mt-1">既読管理とブックマークで効率的なインプット</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Right column: Signup Form */}
        <div className="lg:col-span-5 w-full max-w-md mx-auto lg:mx-0">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-2xl relative">
            
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-2">アカウント作成</h2>
              <p className="text-zinc-400 text-sm">
                まずは無料アカウントでSTRENGTH ARTSを体験
              </p>
            </div>
            
            <div className="space-y-6">
              <form action={signInWithGoogle}>
                <button className="w-full bg-white hover:bg-zinc-100 text-black font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-3 transition-colors shadow-sm">
                  <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  Googleで登録する
                </button>
              </form>

              <div className="relative py-2">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-zinc-800"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-3 bg-zinc-900 text-zinc-500 font-medium text-xs">またはメールアドレスで登録</span>
                </div>
              </div>

              <form className="space-y-5" action={signup}>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-400 mb-1.5 uppercase tracking-wider" htmlFor="email">
                      メールアドレス
                    </label>
                    <input
                      className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-sm"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs font-semibold text-zinc-400 mb-1.5 uppercase tracking-wider" htmlFor="password">
                      パスワード
                    </label>
                    <input
                      className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-sm"
                      type="password"
                      name="password"
                      placeholder="••••••••"
                      required
                      minLength={6}
                    />
                  </div>
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-500 transition-all duration-300 py-3.5 rounded-xl text-white font-bold text-sm md:text-base flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.2)] hover:shadow-[0_0_25px_rgba(37,99,235,0.4)] group mt-2">
                  無料でアカウントを作成
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

                <p className="text-center text-sm text-zinc-500 pt-6">
                  すでにアカウントをお持ちですか？{" "}
                  <Link href="/login" className="text-blue-400 hover:text-blue-300 transition-colors font-medium underline underline-offset-4">
                    ログインはこちら
                  </Link>
                </p>
              </form>
            </div>
            
            <div className="mt-8 pt-6 border-t border-zinc-800/50 flex items-center justify-center gap-2 text-zinc-500 text-xs">
              <Shield className="w-4 h-4" /> 
              <span>アカウント作成により、<Link href="/terms" className="underline hover:text-zinc-300">利用規約</Link>と<Link href="/privacy" className="underline hover:text-zinc-300">プライバシーポリシー</Link>に同意したものとみなされます。</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
