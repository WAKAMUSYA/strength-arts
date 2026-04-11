'use client'

interface CategoryCard {
  title: string
  description: string
  icon: string
}

const categories: CategoryCard[] = [
  {
    title: 'ボディメイク',
    description: '脂肪減少、筋肉増加、体型開発',
    icon: '💪',
  },
  {
    title: 'アスリートトレーニング',
    description: 'パフォーマンス、スピード、強さ、競技',
    icon: '🏃',
  },
  {
    title: 'ムーブメントマスタリー',
    description: '効率的な動き、力の伝達、非衝突的なダイナミクス',
    icon: '🎯',
  },
  {
    title: 'トレーナー教育',
    description: 'コーチングスキル、NSCA準備、暗記より理解',
    icon: '📚',
  },
]

export default function CategoriesSection() {
  return (
    <section className="w-full py-20 sm:py-32 bg-black">
      <div className="section-container">
        <h2 className="heading-md mb-4 text-white text-center">
          私たちのアプローチ
        </h2>
        
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          強さの発展の4つの柱。それぞれが人間のパフォーマンスの異なる次元を探求します
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-blue-500 hover:bg-gray-800 transition-all duration-300 overflow-hidden"
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300"></div>

              <div className="relative z-10">
                <div className="text-4xl mb-4">
                  {category.icon}
                </div>

                <h3 className="heading-sm mb-3 text-white">
                  {category.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
