'use client'

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="heading-lg mb-4 text-white">
            STRENGTH ARTS
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl">
            さらなる高みへ
          </p>
          
          <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-2xl leading-relaxed">
            科学、トレーニング、感覚、哲学、
            使えるものは、全て使う。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <button className="button-primary">
              探索する
            </button>
            <button className="button-secondary">
              詳しく知る
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
