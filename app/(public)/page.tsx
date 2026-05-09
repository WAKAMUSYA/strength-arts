import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white selection:bg-blue-900 selection:text-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 overflow-hidden">
        {/* Subtle Background */}
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900 via-black to-black" />
        
        <div className="relative z-10 flex flex-col items-center text-center space-y-12 max-w-5xl w-full">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-blue-50 to-blue-900/50">
            STRENGHT ARTS
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
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/90 z-10" />
              {/* Image Placeholder / Abstract Background */}
              <div className="absolute inset-0 bg-black bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-950/40 to-black scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out" />
              
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
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/90 z-10" />
              <div className="absolute inset-0 bg-black bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-950/40 to-black scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out" />
              
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
              フォームを真似するだけではなく、<br />
              「なぜその動きになるのか」を学ぶ。
            </p>

            <p>
              ストレングスアーツは、<br />
              身体を理解しながら、<br />
              もっと上手く動けることを探究する<br />
              オンラインプラットフォームです。
            </p>
          </div>
        </div>
      </section>

      {/* Free Content Section */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden border border-blue-900/30 bg-black p-12 md:p-20 text-center">
            {/* Blue subtle glow */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600 via-black to-black" />
            
            <div className="relative z-10 space-y-10">
              <h2 className="text-3xl md:text-4xl font-bold tracking-widest text-white uppercase">
                Free Content
              </h2>
              <div className="space-y-6 text-zinc-300 font-light leading-relaxed max-w-2xl mx-auto text-sm md:text-base">
                <p>
                  「知りたい」と思った時に、<br />
                  すぐ学べる場所でありたい。
                </p>
                <p>
                  ストレングスアーツでは、<br />
                  多くのコンテンツを無料で公開しています。
                </p>
              </div>
              <div className="pt-4">
                <Link 
                  href="/free" 
                  className="inline-flex items-center justify-center px-10 py-5 bg-white text-black font-bold tracking-[0.2em] text-sm hover:bg-blue-50 hover:text-blue-900 transition-colors duration-300"
                >
                  無料コンテンツを見る
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Research Section */}
      <section className="py-24 md:py-32 px-6 border-t border-zinc-900 bg-black/50">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold tracking-widest text-white">育成・研究</h2>
            <div className="space-y-2 text-zinc-400 font-light leading-relaxed text-sm md:text-base">
              <p>ストレングスアーツは資格対策も行っています。</p>
              <p>NSCAの勉強、試験対策に活用してください。</p>
              <p>LABは僕の個人ブログへつながります。</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Academy Card */}
            <Link 
              href="/academy" 
              className="group block relative p-10 bg-black overflow-hidden transition-all duration-500 hover:-translate-y-1 border border-zinc-900 hover:border-blue-900/60"
            >
              <div className="relative z-20">
                <h3 className="text-2xl font-bold tracking-widest mb-3 uppercase text-white group-hover:text-blue-100 transition-colors duration-300">Academy</h3>
                <p className="text-zinc-500 text-sm leading-loose">
                  資格対策・基礎科学の学習
                </p>
                <div className="mt-10 flex items-center text-xs font-semibold tracking-[0.2em] text-zinc-600 group-hover:text-blue-400 transition-colors duration-300">
                  ENTER <span className="ml-3 group-hover:translate-x-2 transition-transform duration-300">→</span>
                </div>
              </div>
            </Link>

            {/* LAB Card */}
            <Link 
              href="https://tamuranaoki-lab.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative p-10 bg-black overflow-hidden transition-all duration-500 hover:-translate-y-1 border border-zinc-900 hover:border-blue-900/60"
            >
              <div className="relative z-20">
                <h3 className="text-2xl font-bold tracking-widest mb-3 uppercase text-white group-hover:text-blue-100 transition-colors duration-300">LAB</h3>
                <p className="text-zinc-500 text-sm leading-loose">
                  個人の研究・ブログ
                </p>
                <div className="mt-10 flex items-center text-xs font-semibold tracking-[0.2em] text-zinc-600 group-hover:text-blue-400 transition-colors duration-300">
                  VISIT <span className="ml-3 group-hover:translate-x-2 transition-transform duration-300">↗</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
