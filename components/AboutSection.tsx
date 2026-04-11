'use client'

export default function AboutSection() {
  return (
    <section className="w-full py-20 sm:py-32 bg-gray-950">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <h2 className="heading-md mb-8 text-white">
            Strength Artsとは
          </h2>
          
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p className="text-lg">
              Strength Artsは単なるトレーニングではありません。強さのあらゆる次元を理解し、コントロールするための包括的なシステムです。
            </p>

            <p className="text-lg">
              真の強さは、複数の視点の交点から生まれると考えています：
            </p>

            <ul className="space-y-4 ml-6">
              <li className="flex items-start">
                <span className="text-blue-400 mr-4 text-xl">•</span>
                <span><strong className="text-white">科学・研究：</strong> 生体力学、生理学、パフォーマンスに基づいた理解</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-4 text-xl">•</span>
                <span><strong className="text-white">身体トレーニング：</strong> 筋肉、パワー、持久力の体系的な発展</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-4 text-xl">•</span>
                <span><strong className="text-white">感覚認識：</strong> 知覚と固有感覚の深化</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-4 text-xl">•</span>
                <span><strong className="text-white">哲学：</strong> 構造、関係性、力の流れの理解</span>
              </li>
            </ul>

            <p className="text-lg">
              科学、感覚、哲学のいずれも否定しません。むしろそれらを統合して、自分自身を評価・調整できる個人を育成することで、継続的な改善の基盤を作ります。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-gray-700">
              <a href="/about" className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-2 group/btn">
                詳しく知る
                <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
