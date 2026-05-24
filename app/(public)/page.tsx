import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white selection:bg-blue-900 selection:text-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 overflow-hidden">
        {/* Subtle Background */}
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900 via-black to-black" />

        {/* SA Logo Watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.08] pointer-events-none select-none">
          <img
            src="/sa-logo-maru.png"
            alt="STRENGTH ARTS Watermark"
            className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] object-contain mix-blend-screen"
          />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center space-y-12 max-w-5xl w-full">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-blue-50 to-blue-900/50">
            STRENGTH ARTS
          </h1>
          <p className="text-lg md:text-2xl font-light tracking-[0.25em] md:tracking-[0.4em] text-zinc-300 leading-relaxed ml-2 md:ml-4">
            身体を、もっと上手く使う。
          </p>
        </div>
      </section>

      {/* Main Categories Section */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

            {/* Athlete Card */}
            <Link
              href="/athlete"
              className="group block relative h-[450px] md:h-[500px] bg-black overflow-hidden transition-transform duration-700 hover:-translate-y-2 border border-zinc-900 hover:border-blue-900/60"
            >
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/80 z-10" />
              {/* Background Image */}
              <div className="absolute inset-0 bg-[url('/sports2.jpg')] bg-cover bg-center opacity-85 scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out" />

              <div className="relative z-20 h-full p-10 flex flex-col justify-end">
                <h2 className="text-3xl md:text-4xl font-bold tracking-widest mb-6 uppercase text-white group-hover:text-blue-100 transition-colors duration-500">Athlete</h2>
                <p className="text-zinc-400 text-sm md:text-base leading-loose mb-10 font-light">
                  競技理解・身体操作・戦術・パフォーマンス。
                </p>
                <div className="flex items-center text-xs font-semibold tracking-[0.2em] text-zinc-600 group-hover:text-blue-400 transition-colors duration-300">
                  READ MORE <span className="ml-3 group-hover:translate-x-2 transition-transform duration-300">→</span>
                </div>
              </div>
            </Link>

            {/* Bodymake Card */}
            <Link
              href="/bodymake"
              className="group block relative h-[450px] md:h-[500px] bg-black overflow-hidden transition-transform duration-700 hover:-translate-y-2 border border-zinc-900 hover:border-blue-900/60"
            >
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/80 z-10" />
              {/* Background Image */}
              <div className="absolute inset-0 bg-[url('/bodymake.jpg')] bg-cover bg-center opacity-85 scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out" />

              <div className="relative z-20 h-full p-10 flex flex-col justify-end">
                <h2 className="text-3xl md:text-4xl font-bold tracking-widest mb-6 uppercase text-white group-hover:text-blue-100 transition-colors duration-500">Bodymake</h2>
                <p className="text-zinc-400 text-sm md:text-base leading-loose mb-10 font-light">
                  ダイエット・筋肥大・姿勢・痛み・継続。
                </p>
                <div className="flex items-center text-xs font-semibold tracking-[0.2em] text-zinc-600 group-hover:text-blue-400 transition-colors duration-300">
                  READ MORE <span className="ml-3 group-hover:translate-x-2 transition-transform duration-300">→</span>
                </div>
              </div>
            </Link>

          </div>

          {/* Special Card */}
          <Link
            href="/special"
            className="group block relative h-[250px] md:h-[300px] mt-8 md:mt-12 bg-black overflow-hidden transition-transform duration-700 hover:-translate-y-2 border border-zinc-900 hover:border-blue-900/60"
          >
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-black/70 z-10" />
            {/* Background Image */}
            <div className="absolute inset-0 bg-[url('/special.jpg')] bg-cover bg-center opacity-80 scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out grayscale group-hover:grayscale-0" />

            <div className="relative z-20 h-full p-10 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-widest mb-4 uppercase text-white group-hover:text-blue-100 transition-colors duration-500">Special</h2>
              <p className="text-zinc-400 text-sm md:text-base leading-loose mb-6 font-light">
                武道・哲学・身体操作。
              </p>
              <div className="flex items-center text-xs font-semibold tracking-[0.2em] text-zinc-600 group-hover:text-blue-400 transition-colors duration-300">
                READ MORE <span className="ml-3 group-hover:translate-x-2 transition-transform duration-300">→</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 md:py-48 px-6 flex justify-center text-center">
        <div className="max-w-3xl space-y-16">
          <p className="text-xs font-semibold tracking-[0.4em] text-blue-500/50 uppercase">
            Philosophy
          </p>
          <div className="space-y-12 text-lg md:text-2xl font-light leading-loose text-zinc-300 tracking-wide">
            <p>
              知る、学ぶ、試す、深める
            </p>

            <p>
              ストレングスアーツは、<br />
              知識と実践を行き来しながら<br />
              自分なりの答えを探究していく場所です。
            </p>
          </div>
        </div>
      </section>

      {/* Lab Directory Section */}
      <section className="py-24 md:py-32 px-6 border-t border-zinc-900 bg-black/50">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/lab"
            className="group block relative rounded-2xl overflow-hidden border border-zinc-900 bg-zinc-950 p-12 md:p-20 text-center transition-all duration-500 hover:border-blue-900/50 hover:bg-zinc-900/50 hover:-translate-y-1 shadow-lg"
          >
            {/* Blue subtle glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600 via-transparent to-transparent" />

            <div className="relative z-10 space-y-10">
              <h2 className="text-3xl md:text-4xl font-bold tracking-widest text-white uppercase group-hover:text-blue-50 transition-colors">
                Lab Directory
              </h2>
              <div className="space-y-6 text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto text-sm md:text-base">
                <p>
                  10を超える専門領域に特化した、<br />
                  強さと身体操作の探求ハブ。
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
            className="group block relative rounded-2xl overflow-hidden border border-zinc-900 bg-zinc-950 p-12 md:p-20 text-center transition-all duration-500 hover:border-emerald-900/50 hover:bg-zinc-900/50 hover:-translate-y-1 shadow-lg"
          >
            {/* Emerald subtle glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-600 via-transparent to-transparent" />

            <div className="relative z-10 space-y-10">
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
