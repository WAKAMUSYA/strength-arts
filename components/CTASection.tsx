'use client'

export default function CTASection() {
  return (
    <section className="w-full py-20 sm:py-32 bg-black">
      <div className="section-container">
        <div className="relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-12 sm:p-16 overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h2 className="heading-md mb-6 text-white">
              あなたの強さを変える準備はできていますか？
            </h2>

            <p className="text-lg text-gray-300 mb-12 leading-relaxed">
              本物の強さを理解し発展させることに献身する、実践者、アスリート、コーチ、そして哲学者のコミュニティに参加してください。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="button-primary">
                学習を開始
              </button>
              <button className="button-secondary">
                コミュニティに参加
              </button>
            </div>

            <p className="text-sm text-gray-500 mt-8">
              今日から探求を始めましょう。前の経験は必要ありません。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
