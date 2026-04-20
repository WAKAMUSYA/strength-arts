import Link from 'next/link';

export default function Home() {
  const containerClass = 'mx-auto w-full max-w-6xl px-6';
  const buttonBaseClass =
    'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';

  return (
    <div className="flex flex-col min-h-screen">
      {/* New Lead-in Sections (keep existing content below) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        <div className="absolute inset-0 opacity-20 [background:radial-gradient(900px_circle_at_20%_20%,rgba(56,189,248,0.35),transparent_55%),radial-gradient(900px_circle_at_80%_30%,rgba(168,85,247,0.28),transparent_55%),radial-gradient(900px_circle_at_50%_80%,rgba(34,197,94,0.18),transparent_60%)]" />
        <div className={`${containerClass} relative py-20 md:py-28`}>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.25em] text-white/70">
              STRENGTH / TRAINING / LEARNING / LAB
            </p>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight">
              Strength Arts
            </h1>
            <p className="mt-6 text-xl md:text-2xl font-semibold text-white/90">
              やり方ではなく、見方を変える
            </p>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-white/80">
              頑張っているのに変わらない人へ。
              <br />
              強くなるための知識と実践をつなぐ場所。
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Link
                href="#entrances"
                className={`${buttonBaseClass} bg-white text-slate-950 hover:bg-white/90 focus-visible:ring-white focus-visible:ring-offset-slate-950`}
              >
                自分に合う入口を見る
              </Link>
              <Link
                href="#academy"
                className={`${buttonBaseClass} bg-white/10 text-white hover:bg-white/15 ring-1 ring-white/20 focus-visible:ring-white focus-visible:ring-offset-slate-950`}
              >
                アカデミーを見る
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="entrances" className="bg-white text-slate-900">
        <div className={`${containerClass} py-16 md:py-20 space-y-10`}>
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              入口は3つ。目的から選ぶ。
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              「何をやるか」より先に、「何を変えたいか」から。
              今のあなたに合う導線を用意します。
            </p>
          </div>

          <div className="space-y-6">
            <section
              id="athlete"
              className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-sky-50 via-white to-white"
            >
              <div className="grid md:grid-cols-12 gap-8 p-8 md:p-12 items-center">
                <div className="md:col-span-6">
                  <p className="text-xs font-semibold tracking-[0.2em] text-sky-700">
                    ATHLETE
                  </p>
                  <h3 className="mt-3 text-2xl md:text-3xl font-bold tracking-tight">
                    強くなりたい人へ
                  </h3>
                  <p className="mt-4 text-slate-700 leading-relaxed">
                    部活で何をすればいいかわからない。
                    <br />
                    競技力を高めたい。
                    <br />
                    そんな人のための実践型プログラム。
                  </p>
                  <div className="mt-8">
                    <Link
                      href="/athlete"
                      className={`${buttonBaseClass} bg-slate-900 text-white hover:bg-slate-800 focus-visible:ring-slate-900 focus-visible:ring-offset-white`}
                    >
                      アスリート向けを見る
                    </Link>
                  </div>
                </div>
                <div className="md:col-span-6">
                  <div className="h-48 md:h-64 rounded-2xl bg-gradient-to-br from-sky-200 via-sky-100 to-white ring-1 ring-sky-200/70" />
                </div>
              </div>
            </section>

            <section
              id="bodymake"
              className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-rose-50 via-white to-white"
            >
              <div className="grid md:grid-cols-12 gap-8 p-8 md:p-12 items-center">
                <div className="md:col-span-6">
                  <p className="text-xs font-semibold tracking-[0.2em] text-rose-700">
                    BODYMAKE
                  </p>
                  <h3 className="mt-3 text-2xl md:text-3xl font-bold tracking-tight">
                    伸び悩んでいる人へ
                  </h3>
                  <p className="mt-4 text-slate-700 leading-relaxed">
                    頑張っているのに変わらない。
                    <br />
                    効いている気がしない。
                    <br />
                    その原因を、構造から見直す。
                  </p>
                  <div className="mt-8">
                    <Link
                      href="/bodymake"
                      className={`${buttonBaseClass} bg-slate-900 text-white hover:bg-slate-800 focus-visible:ring-slate-900 focus-visible:ring-offset-white`}
                    >
                      ボディメイクを見る
                    </Link>
                  </div>
                </div>
                <div className="md:col-span-6">
                  <div className="h-48 md:h-64 rounded-2xl bg-gradient-to-br from-rose-200 via-rose-100 to-white ring-1 ring-rose-200/70" />
                </div>
              </div>
            </section>

            <section
              id="beginner"
              className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-emerald-50 via-white to-white"
            >
              <div className="grid md:grid-cols-12 gap-8 p-8 md:p-12 items-center">
                <div className="md:col-span-6">
                  <p className="text-xs font-semibold tracking-[0.2em] text-emerald-700">
                    BEGINNER
                  </p>
                  <h3 className="mt-3 text-2xl md:text-3xl font-bold tracking-tight">
                    初めての人へ
                  </h3>
                  <p className="mt-4 text-slate-700 leading-relaxed">
                    何から始めればいいかわからない。
                    <br />
                    まずは基本から、安心してスタート。
                  </p>
                  <div className="mt-8">
                    <Link
                      href="/training#beginner"
                      className={`${buttonBaseClass} bg-slate-900 text-white hover:bg-slate-800 focus-visible:ring-slate-900 focus-visible:ring-offset-white`}
                    >
                      基本から始める
                    </Link>
                  </div>
                </div>
                <div className="md:col-span-6">
                  <div className="h-48 md:h-64 rounded-2xl bg-gradient-to-br from-emerald-200 via-emerald-100 to-white ring-1 ring-emerald-200/70" />
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      <section className="bg-white text-slate-900">
        <div className={`${containerClass} py-16 md:py-20`}>
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Strength Artsとは
            </h2>
            <p className="mt-6 text-slate-700 leading-relaxed">
              ストレングスアーツは、単にトレーニング方法を学ぶ場所ではありません。
              <br />
              知識、動作、評価、そして探究をつなぎ、
              <br />
              自分で理解し、修正し、積み上げていくための土台をつくる場所です。
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className={`${containerClass} py-14 md:py-16`}>
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              ここから先は、より深く学びたい方へ
            </h2>
            <p className="mt-4 text-white/75 leading-relaxed">
              指導者、学習者、探究者のためのコンテンツです。
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white text-slate-900">
        <div className={`${containerClass} py-16 md:py-20 space-y-6`}>
          <section
            id="academy"
            className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-white"
          >
            <div className="grid md:grid-cols-12 gap-8 p-8 md:p-12 items-center">
              <div className="md:col-span-6">
                <p className="text-xs font-semibold tracking-[0.2em] text-slate-700">
                  ACADEMY
                </p>
                <h3 className="mt-3 text-2xl md:text-3xl font-bold tracking-tight">
                  アカデミー
                </h3>
                <p className="mt-4 text-slate-700 leading-relaxed">
                  解剖学、生理学、バイオメカニクス、栄養学。
                  <br />
                  CSCS / CPTにも対応した基礎知識を学ぶ。
                </p>
                <div className="mt-8">
                  <Link
                    href="/academy"
                    className={`${buttonBaseClass} bg-slate-900 text-white hover:bg-slate-800 focus-visible:ring-slate-900 focus-visible:ring-offset-white`}
                  >
                    アカデミーを見る
                  </Link>
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="h-48 md:h-64 rounded-2xl bg-gradient-to-br from-slate-200 via-slate-100 to-white ring-1 ring-slate-200/70" />
              </div>
            </div>
          </section>

          <section
            id="lab"
            className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-violet-50 via-white to-white"
          >
            <div className="grid md:grid-cols-12 gap-8 p-8 md:p-12 items-center">
              <div className="md:col-span-6">
                <p className="text-xs font-semibold tracking-[0.2em] text-violet-700">
                  LAB
                </p>
                <h3 className="mt-3 text-2xl md:text-3xl font-bold tracking-tight">
                  LAB
                </h3>
                <p className="mt-4 text-slate-700 leading-relaxed">
                  身体の使い方を探究する場所。
                  <br />
                  仮説と検証、まだ言い切れないものを扱う。
                </p>
                <div className="mt-8">
                  <Link
                    href="/lab"
                    className={`${buttonBaseClass} bg-slate-900 text-white hover:bg-slate-800 focus-visible:ring-slate-900 focus-visible:ring-offset-white`}
                  >
                    LABを見る
                  </Link>
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="h-48 md:h-64 rounded-2xl bg-gradient-to-br from-violet-200 via-violet-100 to-white ring-1 ring-violet-200/70" />
              </div>
            </div>
          </section>
        </div>
      </section>

      <section className="bg-white text-slate-900">
        <div className={`${containerClass} py-16 md:py-20`}>
          <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 md:p-12">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                まずは自分に合う入口から
              </h2>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="#athlete"
                  className={`${buttonBaseClass} bg-slate-900 text-white hover:bg-slate-800 focus-visible:ring-slate-900 focus-visible:ring-offset-white`}
                >
                  アスリート
                </Link>
                <Link
                  href="#bodymake"
                  className={`${buttonBaseClass} bg-slate-900 text-white hover:bg-slate-800 focus-visible:ring-slate-900 focus-visible:ring-offset-white`}
                >
                  ボディメイク
                </Link>
                <Link
                  href="#beginner"
                  className={`${buttonBaseClass} bg-slate-900 text-white hover:bg-slate-800 focus-visible:ring-slate-900 focus-visible:ring-offset-white`}
                >
                  初心者
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Existing top page content (kept as-is) */}
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
