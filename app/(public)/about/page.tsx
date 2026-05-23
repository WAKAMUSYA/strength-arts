import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'ストレングスアーツについて - STRENGTH ARTS',
  description: 'ストレングスアーツの思想・考え方',
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white selection:bg-blue-900 selection:text-white pb-32">
      {/* Header Section */}
      <section className="relative py-32 md:py-48 px-6 flex flex-col items-center justify-center text-center overflow-hidden">
        {/* SA Logo Watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.30] pointer-events-none select-none">
          <img
            src="/sa-logo-maru.png"
            alt="STRENGTH ARTS Watermark"
            className="w-[80vw] h-[80vw] max-w-[600px] max-h-[600px] object-contain mix-blend-screen"
          />
        </div>

        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold tracking-widest uppercase mb-4">
            About
          </h1>
          <p className="text-sm md:text-base tracking-[0.3em] text-zinc-400">
            ストレングスアーツについて
          </p>
        </div>
      </section>

      {/* Main Philosophy Section */}
      <section className="py-16 md:py-24 px-6 flex justify-center">
        <div className="max-w-3xl space-y-12 text-base md:text-lg lg:text-xl font-light leading-loose md:leading-[2.5] text-zinc-300 tracking-wide">
          <p>
            強くなる方法は、一つではないと思っています。
          </p>
          <p>
            同じフォームを真似しても、同じ結果になるとは限りません。<br />
            身体の特徴、競技、経験、環境。人によって条件は違います。
          </p>
          <p>
            だからストレングスアーツでは、「正しい形を教えること」よりも、<br />
            「なぜそうなるのか」を理解することを大切にしています。
          </p>
          <p>
            知識を集めるだけではなく、試してみる。<br />
            試して終わりではなく、考えて深める。
          </p>
          <p>
            専門ページ、研究所、コラムを通して、<br />
            身体やパフォーマンスについて探究しながら、<br />
            自分なりの答えを見つけていく。
          </p>
          <p>
            ストレングスアーツは、そんな場所を目指しています。
          </p>
        </div>
      </section>

      {/* 3 Cards Section */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="p-12 border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 transition-colors duration-500 flex flex-col items-center text-center group">
            <h3 className="text-2xl md:text-3xl font-bold tracking-widest mb-6 text-white group-hover:text-blue-100 transition-colors duration-300">知る</h3>
            <p className="text-zinc-400 text-sm md:text-base leading-loose font-light">
              研究や基礎知識を学ぶ
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-12 border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 transition-colors duration-500 flex flex-col items-center text-center group">
            <h3 className="text-2xl md:text-3xl font-bold tracking-widest mb-6 text-white group-hover:text-blue-100 transition-colors duration-300">試す</h3>
            <p className="text-zinc-400 text-sm md:text-base leading-loose font-light">
              実践しながら身体で確かめる
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-12 border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 transition-colors duration-500 flex flex-col items-center text-center group">
            <h3 className="text-2xl md:text-3xl font-bold tracking-widest mb-6 text-white group-hover:text-blue-100 transition-colors duration-300">深める</h3>
            <p className="text-zinc-400 text-sm md:text-base leading-loose font-light">
              考察し、自分なりの答えを作る
            </p>
          </div>
        </div>
      </section>

      {/* 知識をひらく Section */}
      <section className="py-20 md:py-32 px-6 bg-zinc-950/30 border-t border-zinc-900">
        <div className="max-w-3xl mx-auto text-center space-y-16">
          <h2 className="text-2xl md:text-3xl font-bold tracking-widest text-white">
            知識をひらく
          </h2>
          <div className="space-y-12 text-base md:text-lg font-light leading-loose md:leading-[2.5] text-zinc-300 tracking-wide text-left md:text-center">
            <p>
              ストレングスアーツでは、<br />
              すべての知識は、もっとひらかれていいと考えています。
            </p>
            <p>
              知りたい。うまくなりたい。強くなりたい。
            </p>
            <p>
              その気持ちがあるのに、環境やお金の問題で学べないのは、<br className="hidden md:block" />少し違うと思っています。
            </p>
            <p>
              知ることができれば、変えられることもある。
            </p>
            <p>
              だからストレングスアーツは、<br className="hidden md:block" />知識をできるだけ多くの人に届けたいと考えています。
            </p>
          </div>
        </div>
      </section>

      {/* Links Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <Link href="/athlete" className="group block p-8 border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 hover:border-blue-900/60 transition-all duration-500 hover:-translate-y-1 text-center">
              <h3 className="text-xl md:text-2xl font-bold tracking-widest text-white group-hover:text-blue-100 transition-colors uppercase">Athlete</h3>
              <p className="text-zinc-500 text-sm mt-3 tracking-wider">アスリート</p>
            </Link>

            <Link href="/bodymake" className="group block p-8 border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 hover:border-blue-900/60 transition-all duration-500 hover:-translate-y-1 text-center">
              <h3 className="text-xl md:text-2xl font-bold tracking-widest text-white group-hover:text-blue-100 transition-colors uppercase">Bodymake</h3>
              <p className="text-zinc-500 text-sm mt-3 tracking-wider">ボディメイク</p>
            </Link>

            <Link href="/academy" className="group block p-8 border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 hover:border-blue-900/60 transition-all duration-500 hover:-translate-y-1 text-center">
              <h3 className="text-xl md:text-2xl font-bold tracking-widest text-white group-hover:text-blue-100 transition-colors uppercase">Academy</h3>
              <p className="text-zinc-500 text-sm mt-3 tracking-wider">アカデミー</p>
            </Link>

            <Link href="https://tamuranaoki-lab.com" target="_blank" rel="noopener noreferrer" className="group block p-8 border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 hover:border-blue-900/60 transition-all duration-500 hover:-translate-y-1 text-center">
              <h3 className="text-xl md:text-2xl font-bold tracking-widest text-white group-hover:text-blue-100 transition-colors uppercase">LAB</h3>
              <p className="text-zinc-500 text-sm mt-3 tracking-wider">個人の研究・ブログ</p>
            </Link>

            <Link href="/free" className="group block p-8 border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 hover:border-blue-900/60 transition-all duration-500 hover:-translate-y-1 text-center sm:col-span-2 lg:col-span-2">
              <h3 className="text-xl md:text-2xl font-bold tracking-widest text-white group-hover:text-blue-100 transition-colors uppercase">Contents</h3>
              <p className="text-zinc-500 text-sm mt-3 tracking-wider">まとめコンテンツ</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
