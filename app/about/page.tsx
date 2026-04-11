import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ストレングスアーツとは - Strength Arts',
  description: '力とは何か、技術と感覚と関係性の中で力を理解し、扱うための体系。',
}

export default function AboutPage() {
  return (
    <main className="w-full bg-black text-white">
      {/* Hero Section */}
      <section className="w-full py-20 sm:py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-lg mb-6 text-white">
              ストレングスアーツとは
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              力を理解し、扱うための体系。
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: Introduction */}
      <section className="w-full py-16 sm:py-24 bg-black border-b border-gray-800">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
              <p>
                ストレングスアーツは、単なる筋力向上やトレーニングではありません。
              </p>
              <p>
                パフォーマンスを高めるために、「力とは何か」を多角的に捉え、扱うための体系です。
              </p>
              <p>
                私たちは、科学・トレーニング・感覚・哲学といった要素を分けて考えるのではなく、
                <br />
                それらすべてを手がかりとして、身体と向き合います。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: What is Strength? */}
      <section className="w-full py-16 sm:py-24 bg-gray-950 border-b border-gray-800">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-md mb-8 text-white">
              Strengthとは何か
            </h2>
            <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
              <p>
                ストレングスとは、単なる筋力ではありません。
              </p>
              <p className="text-gray-200 italic">
                発揮される力、伝わる力、そして状況の中で"通る力"。
              </p>
              <p>
                それは個人の中に閉じたものではなく、環境や対象との関係の中で現れるものです。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: What is Arts? */}
      <section className="w-full py-16 sm:py-24 bg-black border-b border-gray-800">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-md mb-8 text-white">
              Artsとは何か
            </h2>
            <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
              <p>
                アーツとは、力を扱うための技術であり、感覚であり、関係性です。
              </p>

              <div className="space-y-4 pl-6 border-l-2 border-blue-500">
                <div>
                  <p className="text-white font-semibold mb-2">技術としてのアーツ</p>
                  <p>
                    トレーニングやフォームといった再現可能な方法を指します。
                  </p>
                </div>

                <div>
                  <p className="text-white font-semibold mb-2">感覚としてのアーツ</p>
                  <p>
                    タイミングや脱力といった言語化しきれない認識を含みます。
                  </p>
                </div>

                <div>
                  <p className="text-white font-semibold mb-2">関係としてのアーツ</p>
                  <p>
                    身体・地面・相手・空間とのつながりの中で力が成立するという視点です。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Definition */}
      <section className="w-full py-16 sm:py-24 bg-gray-950 border-b border-gray-800">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-md mb-8 text-white">
              ストレングスアーツの定義
            </h2>
            <div className="space-y-8 text-gray-300 leading-relaxed text-lg">
              <div className="bg-black rounded-lg p-8 border border-gray-800">
                <p className="text-white text-xl font-semibold mb-4">
                  ストレングスアーツとは、
                </p>
                <p>
                  力（Strength）を、技術・感覚・関係の中で理解し、扱うための体系です。
                </p>
              </div>

              <div className="space-y-4">
                <p>
                  力を新たに生み出すのではなく、
                  <br />
                  すでに存在する力を、適切な状態と関係の中で"通す"。
                </p>
                <p>
                  そのために、知識だけでなく、感覚や認識を含めて育てていくことを目指します。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Our Vision */}
      <section className="w-full py-16 sm:py-24 bg-black border-b border-gray-800">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-md mb-8 text-white">
              目指すもの
            </h2>
            <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
              <p>
                ストレングスアーツは、「正しい動き」を教える場所ではありません。
              </p>

              <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
                <p className="text-white mb-3">
                  自らの身体と向き合い、評価し、修正し、
                  <br />
                  状況に応じて最適な動きを選べるようになること。
                </p>
              </div>

              <p>
                その積み重ねの先に、
                <br />
                競技・日常・指導のすべてにおいて、より高いパフォーマンスが実現されると考えています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 sm:py-24 bg-gray-950">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-md mb-6 text-white">
              今から始める
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              ストレングスアーツの世界を探求してください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/" className="button-primary inline-block">
                ホームに戻る
              </a>
              <a href="#" className="button-secondary inline-block">
                プログラムを見る
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
