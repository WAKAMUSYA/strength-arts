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
              やり方ではなく、見方を変える
            </h1>
            <p className="mt-6 text-xl md:text-2xl font-semibold text-white/90">
              現場と理論を、パフォーマンスにつなげる
            </p>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-white/80">
              トレーニング、競技、身体の使い方。
              <br />
              分かっているのに使えないを、少しずつ減らしていくためのサイトです。
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Link
                href="#entrances"
                className={`${buttonBaseClass} bg-white text-slate-950 hover:bg-white/90 focus-visible:ring-white focus-visible:ring-offset-slate-950`}
              >
                自分に合う入口を見る
              </Link>
              <Link
                href="/bodymake"
                className={`${buttonBaseClass} bg-white/10 text-white hover:bg-white/15 ring-1 ring-white/20 focus-visible:ring-white focus-visible:ring-offset-slate-950`}
              >
                まず試す
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
                    アスリート
                  </h3>
                  <p className="mt-4 text-slate-700 leading-relaxed">
                    筋トレしているのに競技で変化を感じない。
                    <br />
                    力が出ない、動きが重い、身体がつながらない。
                    <br />
                    そんな人のための入口です。
                  </p>
                  <div className="mt-8">
                    <Link
                      href="/athlete"
                      className={`${buttonBaseClass} bg-slate-900 text-white hover:bg-slate-800 focus-visible:ring-slate-900 focus-visible:ring-offset-white`}
                    >
                      アスリートを見る
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
                    ボディメイク
                  </h3>
                  <p className="mt-4 text-slate-700 leading-relaxed">
                    頑張っているのに効いている実感がない。
                    <br />
                    肩や腕ばかり疲れる、狙った部位に入らない。
                    <br />
                    そんな人のための入口です。
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
                    初心者
                  </h3>
                  <p className="mt-4 text-slate-700 leading-relaxed">
                    何から始めればいいか分からない。
                    <br />
                    まずは基本から、安心して始めたい人のための入口です。
                  </p>
                  <div className="mt-8">
                    <Link
                      href="/beginner"
                      className={`${buttonBaseClass} bg-slate-900 text-white hover:bg-slate-800 focus-visible:ring-slate-900 focus-visible:ring-offset-white`}
                    >
                      初心者向けを見る
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
        <div className={`${containerClass} py-12 md:py-14`}>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 px-6 py-8 md:px-10 md:py-10">
            <h2 className="text-xl md:text-2xl font-bold tracking-tight">
              こんな感覚ありませんか？
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {['効いている気がしない', '力が出ている感じがしない', 'なんか違う', '分かっているのに使えない'].map(
                (item) => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700"
                  >
                    {item}
                  </span>
                ),
              )}
            </div>
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
              理論を、使える形にするための場所です。
            </p>
            <p className="mt-4 text-sm text-slate-500">
              S&amp;Cコーチとしての現場経験をもとに構築しています。
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
                  解剖学、生理学、バイオメカニクス、栄養学など、
                  <br />
                  基礎から学びたい人のための学習コンテンツ。
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
                  身体の使い方、感覚、技術を探究する場所。
                  <br />
                  仮説と検証、まだ言い切れないものも扱います。
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
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              使い方とプログラム
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              情報を読むだけではなく、試して、気づいて、進めていくための仕組みです。
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 md:p-10">
              <p className="text-xs font-semibold tracking-[0.2em] text-slate-600">
                FREE
              </p>
              <h3 className="mt-3 text-2xl font-bold tracking-tight">
                無料で試す
              </h3>
              <p className="mt-2 text-slate-700 font-semibold">
                まずは違いに気づく
              </p>
              <ul className="mt-6 space-y-2 text-slate-700">
                <li>・1つの悩みの入口を体験できる</li>
                <li>・簡単なドリルを試せる</li>
                <li>・自分のズレに気づける</li>
              </ul>
              <div className="mt-8">
                <Link
                  href="/bodymake"
                  className={`${buttonBaseClass} bg-slate-900 text-white hover:bg-slate-800 focus-visible:ring-slate-900 focus-visible:ring-offset-white`}
                >
                  無料で始める
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 md:p-10">
              <p className="text-xs font-semibold tracking-[0.2em] text-slate-600">
                PROGRAM
              </p>
              <h3 className="mt-3 text-2xl font-bold tracking-tight">
                プログラムを進める
              </h3>
              <p className="mt-2 text-slate-700 font-semibold">
                変化を定着させる
              </p>
              <ul className="mt-6 space-y-2 text-slate-700">
                <li>・DAY形式で段階的に進める</li>
                <li>・動画、ドリル、チェックで確認できる</li>
                <li>・問題ごとの改善プログラムに進める</li>
              </ul>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="#"
                  className={`${buttonBaseClass} bg-slate-900 text-white hover:bg-slate-800 focus-visible:ring-slate-900 focus-visible:ring-offset-white`}
                >
                  改善プログラムを見る
                </Link>
                <span className="text-xs text-slate-500 self-center">
                  ※準備中でもOK
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white text-slate-900">
        <div className={`${containerClass} py-16 md:py-20`}>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            使い方はシンプルです
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              { step: '1', title: '悩みを選ぶ', body: '今の課題に近い入口を選びます。' },
              { step: '2', title: '少し試す', body: '短いドリルで手応えを確認します。' },
              { step: '3', title: 'プログラムを進める', body: '段階的に整えて、変化を定着させます。' },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-6"
              >
                <p className="text-xs font-semibold tracking-[0.2em] text-slate-600">
                  STEP {item.step}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-slate-700">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white text-slate-900">
        <div className={`${containerClass} py-16 md:py-20`}>
          <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 md:p-12">
            <div className="max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                まずは違和感から確認してみる
              </h2>
              <p className="mt-4 text-slate-700 leading-relaxed">
                自分の課題を選び、少し試すところから始められます。
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/bodymake"
                  className={`${buttonBaseClass} bg-slate-900 text-white hover:bg-slate-800 focus-visible:ring-slate-900 focus-visible:ring-offset-white`}
                >
                  無料で試す
                </Link>
                <Link
                  href="/bodymake"
                  className={`${buttonBaseClass} bg-white text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50 focus-visible:ring-slate-900 focus-visible:ring-offset-white`}
                >
                  ボディメイクを見る
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
