import Link from "next/link";

export const metadata = {
  title: "NSCA-CPT試験対策｜基礎科学から理解する合格のための勉強法 | Strength Arts",
  description:
    "NSCA-CPT試験対策（CPT試験対策）を、暗記に寄せすぎず基礎科学（解剖学・運動生理学・バイオメカニクス）から整理。CPT 勉強法のつまずき、学習手順、内部リンクもまとめた記事ページです。",
};

export default function CptSeoGuidePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* 1. Hero / Article Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="max-w-5xl mx-auto px-4 py-10 md:py-14">
          <p className="text-xs font-semibold tracking-[0.2em] text-slate-500">
            ACADEMY / CPT
          </p>
          <h1 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            NSCA-CPT試験対策｜基礎科学から理解する合格のための勉強法
          </h1>
          <p className="mt-6 max-w-3xl leading-relaxed text-slate-700">
            NSCA-CPT試験は、単なる暗記では対応しきれない試験です。
            解剖学・運動生理学・バイオメカニクスといった
            <span className="font-semibold">基礎科学</span>の理解を前提に、
            クライアント評価やプログラム設計へとつなげる力が求められます。
          </p>
          <div className="mt-6 max-w-3xl space-y-1 text-slate-700">
            <p>「覚えているのに解けない」</p>
            <p>「用語は分かるが、問題になると迷う」</p>
          </div>
          <p className="mt-6 max-w-3xl leading-relaxed text-slate-700">
            このページでは、<span className="font-semibold">CPT試験対策</span>
            として必要な考え方と学習の進め方を整理します。
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="#basics"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
            >
              基礎科学から読む
            </Link>
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 transition-colors hover:bg-slate-50"
            >
              アカデミーを見る
            </Link>
          </div>
        </div>
      </header>

      <article className="max-w-5xl mx-auto px-4 py-10 md:py-14">
        <div className="prose prose-slate max-w-none prose-headings:tracking-tight">
          {/* 2. NSCA-CPT試験とは */}
          <section aria-labelledby="what-is-cpt">
            <h2 id="what-is-cpt">NSCA-CPT試験とは</h2>
            <p>
              NSCA-CPTは、パーソナルトレーナーとしての基礎知識と実務能力を評価する資格です。
            </p>
            <p>主な出題分野は以下の通りです。</p>
            <ul>
              <li>基礎科学（解剖学・生理学・バイオメカニクス）</li>
              <li>栄養学</li>
              <li>行動変容・心理学</li>
              <li>クライアント評価</li>
              <li>プログラムデザイン</li>
              <li>エクササイズテクニック</li>
              <li>安全管理</li>
              <li>ビジネス・コミュニケーション</li>
            </ul>
          </section>

          {/* 3. よくあるつまずき */}
          <section aria-labelledby="stumble">
            <h2 id="stumble">CPT試験対策でよくあるつまずき</h2>
            <p>多くの受験者が次のような壁に当たります。</p>
            <ul>
              <li>用語は覚えているが、問題になると判断できない</li>
              <li>筋肉やエネルギー系の知識がバラバラでつながらない</li>
              <li>なぜその選択肢が正しいのかが分からない</li>
              <li>現場のイメージが持てない</li>
            </ul>
            <p className="font-semibold">
              CPT試験は、単なる知識量ではなく「判断できるか」が問われる試験です。
            </p>
          </section>

          {/* 4. 考え方 */}
          <section aria-labelledby="mindset">
            <h2 id="mindset">合格するために必要な考え方</h2>
            <p>重要なのは、知識を「使える状態」にすることです。</p>
            <p>例えば基礎科学では、</p>
            <ul>
              <li>解剖学 → 構造</li>
              <li>運動生理学 → 機能</li>
              <li>バイオメカニクス → 力の流れ</li>
            </ul>
            <p>
              これらを別々に覚えるのではなく、「動きの中でどう関係しているか」として理解する必要があります。
              ここがCPT 勉強法の分かれ道になりやすいポイントです。
            </p>
          </section>

          {/* 5. 基礎科学 */}
          <section id="basics" aria-labelledby="basics-title">
            <h2 id="basics-title">基礎科学の学習が重要な理由</h2>
            <p>
              CPT試験対策の中でも、基礎科学は土台になる領域です。以下の内容を押さえておくことで、
              他の科目の理解も進みやすくなります。
            </p>
            <h3>基礎科学の主な内容</h3>
            <ul>
              <li>解剖学（筋・関節の構造）</li>
              <li>運動生理学（エネルギー供給・疲労）</li>
              <li>バイオメカニクス（力・トルク・動作）</li>
            </ul>

            <div className="not-prose mt-6">
              <Link
                href="/academy/cpt/basics/cpt-basic-science-01"
                className="block rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-sm transition-shadow"
              >
                <p className="text-xs font-semibold tracking-[0.2em] text-slate-500">
                  INTERNAL LINK
                </p>
                <h4 className="mt-2 text-lg font-bold text-slate-900">
                  基礎科学：定義・解剖・生理・バイオメカニクス
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  まず最初に押さえておきたい基礎科学の整理ページです。
                </p>
                <p className="mt-4 text-sm font-semibold text-slate-900">
                  読む →
                </p>
              </Link>
            </div>
          </section>

          {/* 6. 間違い */}
          <section aria-labelledby="mistakes">
            <h2 id="mistakes">よくある勉強法の間違い</h2>
            <div className="not-prose mt-6 grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "暗記中心で進める",
                  body: "用語は覚えられても、応用問題で判断しにくくなります。",
                },
                {
                  title: "科目ごとに分断して学ぶ",
                  body: "知識がつながらず、実務やケース問題で迷いやすくなります。",
                },
                {
                  title: "問題だけを繰り返す",
                  body: "なぜ間違えたのかが整理されず、理解が浅いままになります。",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
                >
                  <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-700">{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 7. 正しい流れ */}
          <section aria-labelledby="flow">
            <h2 id="flow">正しい学習の流れ</h2>
            <div className="not-prose mt-6 grid gap-4 md:grid-cols-3">
              {[
                { step: "1", title: "構造を理解する" },
                { step: "2", title: "動きや実務と結びつける" },
                { step: "3", title: "問題で確認する" },
              ].map((item) => (
                <div key={item.step} className="rounded-2xl border border-slate-200 bg-white p-6">
                  <p className="text-xs font-semibold tracking-[0.2em] text-slate-500">
                    STEP {item.step}
                  </p>
                  <p className="mt-3 text-base font-bold text-slate-900">{item.title}</p>
                </div>
              ))}
            </div>
            <p className="mt-6">
              この流れを繰り返すことで、知識が「覚えている」から「判断できる」へ変わっていきます。
            </p>
          </section>

          {/* 8. Academy誘導 */}
          <section aria-labelledby="academy-cta">
            <h2 id="academy-cta">より体系的に学びたい方へ</h2>
            <p>
              アカデミーでは、科目ごとの整理、実務との接続、確認問題、模擬テストなどを用意しています。
              ここから先は、より深く理解したい方向けの内容です。
            </p>
            <div className="not-prose mt-6">
              <Link
                href="/academy"
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
              >
                アカデミーを見る
              </Link>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}

