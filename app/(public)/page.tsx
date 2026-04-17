import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative px-6 py-24 md:py-32 lg:py-40 bg-gradient-to-b from-slate-50 to-white overflow-hidden flex flex-col items-center text-center">
        <div className="absolute inset-0 bg-grid-slate-100/[0.04] bg-[bottom_1px_center] [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
        <div className="relative z-10 max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900">
            強くなる構造を学ぶ
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            トレーニング、専門知識、身体の使い方、そして探究。
            バラバラだったピースを繋ぎ合わせ、自分だけの強さの形を創り上げるためのプラットフォーム。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link 
              href="/signup" 
              className="w-full sm:w-auto px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              無料登録して始める
            </Link>
            <Link 
              href="/login" 
              className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-medium hover:bg-slate-50 transition-all"
            >
              ログイン
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Academy Card */}
          <Link href="/academy" className="group block relative overflow-hidden rounded-3xl bg-white border border-slate-200 p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">Academy</h3>
            <p className="text-slate-600 mb-6 line-clamp-3">
              CSCS、CPTなどの資格対策から、トレーニングの基礎科学まで。体系的な知識を学び、あなたの基盤を確固たるものにします。
            </p>
            <span className="inline-flex items-center text-sm font-medium text-blue-600">
              体系的に学ぶ <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </Link>

          {/* Training Card */}
          <Link href="/training" className="group block relative overflow-hidden rounded-3xl bg-white border border-slate-200 p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6.5 6.5 11 11"/><path d="m21 21-1-1"/><path d="m3 3 1 1"/><path d="m18 22 4-4"/><path d="m2 6 4-4"/><path d="m3 10 7-7"/><path d="m14 21 7-7"/></svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors">Training</h3>
            <p className="text-slate-600 mb-6 line-clamp-3">
              実践の記録と分析。RPEやボリューム管理など、科学的アプローチに基づいたトレーニング管理で、成長を可視化します。
            </p>
            <span className="inline-flex items-center text-sm font-medium text-red-600">
              実践を記録する <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </Link>

          {/* LAB Card */}
          <Link href="/lab" className="group block relative overflow-hidden rounded-3xl bg-white border border-slate-200 p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 2v7.31"/><path d="M14 9.3V1.99"/><path d="M8.5 2h7"/><path d="M14 9.3a6.5 6.5 0 1 1-4 0"/><path d="M5.52 16h12.96"/></svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors">LAB</h3>
            <p className="text-slate-600 mb-6 line-clamp-3">
              最新の研究論文のレビューや、身体の使い方に関する深い考察。答えのない領域を探求し、新たな視点を獲得します。
            </p>
            <span className="inline-flex items-center text-sm font-medium text-purple-600">
              知識を深める <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </Link>

        </div>
      </section>
    </div>
  );
}
