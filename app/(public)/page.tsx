import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white selection:bg-blue-900 selection:text-white">
      {/* Hero Section */}
      <section className="relative min-h-[70svh] md:min-h-[90vh] flex flex-col justify-center items-center px-4 md:px-6 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/dedlift.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/60" /> {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black" /> {/* Gradient to blend with next section */}

        <div className="relative z-10 flex flex-col items-center text-center space-y-8 md:space-y-10 max-w-5xl w-full mt-[-4rem]">
          <h1 className="text-4xl md:text-8xl lg:text-9xl font-extrabold tracking-widest text-white">
            STRENGTH <span className="text-red-600">ARTS</span>
          </h1>
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-lg md:text-3xl font-medium tracking-[0.2em] md:tracking-[0.3em] text-white">
              知る、学ぶ、試す、深める
            </h2>
            <p className="text-xs md:text-lg font-light tracking-widest text-zinc-300 leading-loose">
              トレーニング・身体操作・技術・競技力を<br className="md:hidden" />
              科学と実践の両面から探究する
            </p>
          </div>
        </div>

        {/* SA About Button */}
        <div className="absolute bottom-12 flex justify-center w-full z-10">
          <Link
            href="/about"
            className="group flex items-center justify-center px-6 py-3 border border-red-600/50 bg-red-600/10 hover:bg-red-600 hover:border-red-600 text-white text-xs md:text-sm font-semibold tracking-widest transition-all duration-300 backdrop-blur-sm"
          >
            SAについて
            <span className="ml-3 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </div>
      </section>

      {/* Main Categories Section */}
      <section className="py-8 md:py-24 px-4 md:px-6 bg-black relative">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 gap-4 md:gap-12">

            {/* Athlete Card */}
            <Link
              href="/athlete"
              className="group block relative aspect-[4/5] md:aspect-auto md:h-[500px] bg-black overflow-hidden transition-transform duration-700 hover:-translate-y-2 border border-zinc-900 hover:border-red-900/60"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/90 z-10" />
              <div className="absolute inset-0 bg-[url('/sports2.jpg')] bg-cover bg-center opacity-85 scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out" />

              <div className="relative z-20 h-full p-4 md:p-10 flex flex-col justify-end">
                <h2 className="text-xl md:text-4xl font-bold tracking-widest mb-2 md:mb-6 uppercase text-white group-hover:text-red-100 transition-colors duration-500">ATHLETE</h2>
                <p className="text-zinc-400 text-[10px] md:text-base leading-relaxed md:leading-loose mb-4 md:mb-10 font-light">
                  競技理解・トレーニング・<br className="md:hidden" />戦術・パフォーマンス。
                </p>
                <div className="flex items-center text-[10px] md:text-xs font-semibold tracking-[0.1em] md:tracking-[0.2em] text-zinc-500 group-hover:text-red-400 transition-colors duration-300">
                  READ MORE <span className="ml-2 md:ml-3 group-hover:translate-x-2 transition-transform duration-300">→</span>
                </div>
              </div>
            </Link>

            {/* Bodymake Card */}
            <Link
              href="/bodymake"
              className="group block relative aspect-[4/5] md:aspect-auto md:h-[500px] bg-black overflow-hidden transition-transform duration-700 hover:-translate-y-2 border border-zinc-900 hover:border-red-900/60"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/90 z-10" />
              <div className="absolute inset-0 bg-[url('/bodymake.jpg')] bg-cover bg-center opacity-85 scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out" />

              <div className="relative z-20 h-full p-4 md:p-10 flex flex-col justify-end">
                <h2 className="text-xl md:text-4xl font-bold tracking-widest mb-2 md:mb-6 uppercase text-white group-hover:text-red-100 transition-colors duration-500">BODYMAKE</h2>
                <p className="text-zinc-400 text-[10px] md:text-base leading-relaxed md:leading-loose mb-4 md:mb-10 font-light">
                  筋肥大・ダイエット・<br className="md:hidden" />方法・継続。
                </p>
                <div className="flex items-center text-[10px] md:text-xs font-semibold tracking-[0.1em] md:tracking-[0.2em] text-zinc-500 group-hover:text-red-400 transition-colors duration-300">
                  READ MORE <span className="ml-2 md:ml-3 group-hover:translate-x-2 transition-transform duration-300">→</span>
                </div>
              </div>
            </Link>

          </div>

          {/* Special Card */}
          <Link
            href="/special"
            className="group block relative h-[120px] md:h-[300px] mt-4 md:mt-12 bg-black overflow-hidden transition-transform duration-700 hover:-translate-y-2 border border-zinc-900 hover:border-red-900/60"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/80 z-10" />
            <div className="absolute inset-0 bg-[url('/special.jpg')] bg-cover bg-center opacity-80 scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out grayscale group-hover:grayscale-0" />

            <div className="relative z-20 h-full p-4 md:p-10 flex flex-col justify-center">
              <h2 className="text-2xl md:text-4xl font-bold tracking-widest mb-2 md:mb-4 uppercase text-white group-hover:text-red-100 transition-colors duration-500">SPECIAL</h2>
              <p className="text-zinc-400 text-xs md:text-base leading-relaxed md:leading-loose mb-4 md:mb-6 font-light">
                武道・哲学・身体操作。
              </p>
              <div className="flex items-center text-[10px] md:text-xs font-semibold tracking-[0.1em] md:tracking-[0.2em] text-zinc-500 group-hover:text-red-400 transition-colors duration-300">
                READ MORE <span className="ml-2 md:ml-3 group-hover:translate-x-2 transition-transform duration-300">→</span>
              </div>
            </div>
          </Link>


        </div>
      </section>

      {/* Lab Directory Section */}
      <section className="py-24 md:py-32 px-6 border-t border-zinc-900 bg-black/50">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/lab"
            className="group block relative rounded-2xl overflow-hidden border border-zinc-900 bg-black p-12 md:p-20 text-center transition-all duration-500 hover:border-blue-900/50 hover:-translate-y-1 shadow-lg"
          >
            {/* Background Image and Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black/90 z-10" />
            <div className="absolute inset-0 bg-[url('/coach.jpg')] bg-cover bg-center opacity-60 scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out grayscale group-hover:grayscale-0" />

            {/* Blue subtle glow */}
            <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-40 transition-opacity duration-700 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600 via-transparent to-transparent pointer-events-none" />

            <div className="relative z-20 space-y-10">
              <h2 className="text-3xl md:text-4xl font-bold tracking-widest text-white uppercase group-hover:text-blue-50 transition-colors">
                Lab Directory
              </h2>
              <div className="space-y-6 text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto text-sm md:text-base">
                <p>
                  研究所一覧
                </p>
              </div>
              <div className="pt-4 flex justify-center items-center text-xs font-semibold tracking-[0.2em] text-zinc-500 group-hover:text-blue-400 transition-colors duration-300">
                VIEW LAB DIRECTORY <span className="ml-3 group-hover:translate-x-2 transition-transform duration-300">→</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 md:py-32 px-6 border-t border-zinc-900 bg-black/50">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/project"
            className="group block relative rounded-2xl overflow-hidden border border-zinc-900 bg-black p-12 md:p-20 text-center transition-all duration-500 hover:border-emerald-900/50 hover:-translate-y-1 shadow-lg"
          >
            {/* Background Image and Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black/90 z-10" />
            <div className="absolute inset-0 bg-[url('/project.png')] bg-cover bg-center opacity-60 scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out grayscale group-hover:grayscale-0" />

            {/* Emerald subtle glow */}
            <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-40 transition-opacity duration-700 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-600 via-transparent to-transparent pointer-events-none" />

            <div className="relative z-20 space-y-10">
              <h2 className="text-3xl md:text-4xl font-bold tracking-widest text-white uppercase group-hover:text-emerald-50 transition-colors">
                Projects
              </h2>
              <div className="space-y-6 text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto text-sm md:text-base">
                <p>
                  アカデミー（資格対策）、個人の研究ブログ、<br />
                  その他SAの枠に収まらない多様な制作物・アーカイブス。
                </p>
              </div>
              <div className="pt-4 flex justify-center items-center text-xs font-semibold tracking-[0.2em] text-zinc-500 group-hover:text-emerald-400 transition-colors duration-300">
                VIEW PROJECTS <span className="ml-3 group-hover:translate-x-2 transition-transform duration-300">→</span>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
