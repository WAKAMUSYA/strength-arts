'use client'

export default function ContentSection() {
  return (
    <section className="w-full py-20 sm:py-32 bg-gray-950">
      <div className="section-container">
        <h2 className="heading-md mb-4 text-white text-center">
          プラットフォーム
        </h2>
        
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          強さの知識と実践のより深い層を探索する
        </p>

        <div className="space-y-8">
          {/* たむ研 */}
          <div className="group relative bg-black border border-gray-800 rounded-xl p-8 sm:p-12 hover:border-blue-500 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent group-hover:from-blue-500/10 transition-all duration-300"></div>

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="heading-sm text-white mb-2">
                    たむ研
                  </h3>
                  <p className="text-blue-400 font-semibold">実験的・研究ベース</p>
                </div>
                <div className="text-3xl opacity-50 group-hover:opacity-100 transition-opacity">
                  🔬
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                科学的視点から強さを探求する実験的・研究ベースのコンテンツです。ここではコンセプトをテストし、理論を検証し、パフォーマンス科学の境界を押し広げる知見を共有します。
              </p>

              <button className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-2 group/btn">
                探索する
                <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* OSA (Origin Strength Arts) */}
          <div className="group relative bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-800 rounded-xl p-8 sm:p-12 hover:border-purple-500 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-transparent group-hover:from-purple-500/10 transition-all duration-300"></div>

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="heading-sm text-white mb-2">
                    OSA (Origin Strength Arts)
                  </h3>
                  <p className="text-purple-400 font-semibold">深い探求の層</p>
                </div>
                <div className="text-3xl opacity-50 group-hover:opacity-100 transition-opacity">
                  🌌
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                身体、知覚、そして強さそのものの本質を、哲学的かつ体験的に深く探求します。OSAは科学と直感が出会う場所。人間の動きと可能性の本質を探索します。
              </p>

              <button className="text-purple-400 hover:text-purple-300 font-semibold flex items-center gap-2 group/btn">
                深い探求に進む
                <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
