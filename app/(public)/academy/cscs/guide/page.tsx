import Link from "next/link";

export const metadata = {
  title: "NSCA-CSCS試験対策｜基礎科学と実践をつなぐ合格のための勉強法 | Strength Arts",
  description:
    "NSCA-CSCS試験対策（CSCS試験対策）を、基礎科学と現場の判断に結びつけて整理。CSCS 勉強法のつまずき、学習の流れ、CSCS 基礎科学への内部リンクをまとめた記事ページです。",
};

export default function CscsSeoGuidePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* 1. Hero / Article Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="max-w-5xl mx-auto px-4 py-10 md:py-14">
          <p className="text-xs font-semibold tracking-[0.2em] text-slate-500">
            ACADEMY / CSCS
          </p>
          <h1 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            NSCA-CSCS試験対策｜基礎科学と実践をつなぐ合格のための勉強法
          </h1>
          <p className="mt-6 max-w-3xl leading-relaxed text-slate-700">
            NSCA-CSCS試験は、ストレングス＆コンディショニングの理論と実践を幅広く問う資格試験です。
            基礎科学の理解に加え、テストと評価、エクササイズテクニック、プログラムデザインなどを、
            実際の指導現場と結びつけて理解する力が求められます。
          </p>
          <div className="mt-6 max-w-3xl space-y-1 text-slate-700">
            <p>「知識はあるのに問題で迷う」</p>
            <p>「科目ごとに学んでいるが、全体像がつながらない」</p>
          </div>
          <p className="mt-6 max-w-3xl leading-relaxed text-slate-700">
            このページでは、<span className="font-semibold">CSCS試験対策</span>
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
          {/* 2. NSCA-CSCS試験とは */}
          <section aria-labelledby="what-is-cscs">
            <h2 id="what-is-cscs">NSCA-CSCS試験とは</h2>
            <p>
              NSCA-CSCSは、アスリートのパフォーマンス向上を支えるストレングス＆コンディショニングの専門知識を評価する資格です。
            </p>
            <p>主な学習領域は以下の通りです。</p>
            <ul>
              <li>基礎科学</li>
              <li>テストと評価</li>
              <li>エクササイズテクニック</li>
              <li>プログラムデザイン</li>
              <li>栄養</li>
              <li>組織運営・施設管理 など</li>
            </ul>
            <p className="font-semibold">
              単なる暗記ではなく、「評価して、組み立てて、指導に落とす」視点が重要になります。
            </p>
          </section>

          {/* 3. よくあるつまずき */}
          <section aria-labelledby="stumble">
            <h2 id="stumble">CSCS試験対策でよくあるつまずき</h2>
            <p>多くの受験者が、次のような壁に当たります。</p>
            <ul>
              <li>科目ごとの知識はあるが、全体像がつながらない</li>
              <li>基礎科学とプログラムデザインが結びつかない</li>
              <li>評価の意味は分かるが、現場でどう使うかが曖昧</li>
              <li>問題文が長くなると判断に迷う</li>
              <li>実技・種目・負荷設定の整理が不十分</li>
            </ul>
            <p className="font-semibold">
              CSCS試験は、「知っているか」だけでなく「どう使うか」を問われる試験です。
            </p>
          </section>

          {/* 4. 考え方 */}
          <section aria-labelledby="mindset">
            <h2 id="mindset">合格するために必要な考え方</h2>
            <p>
              重要なのは、知識を科目ごとに分断して覚えるのではなく、評価・技術・設計の流れの中で理解することです。
            </p>
            <p>例えば、</p>
            <ul>
              <li>基礎科学 → 身体に何が起きるかを理解する</li>
              <li>テストと評価 → 現状を把握する</li>
              <li>エクササイズテクニック → 正しく実施する</li>
              <li>プログラムデザイン → 目的に合わせて組み立てる</li>
            </ul>
            <p>
              この流れがつながると、CSCSの問題も「知識の丸暗記」ではなく「判断」として整理しやすくなります。
              これがCSCS 勉強法の軸になります。
            </p>
          </section>

          {/* 5. 基礎科学 */}
          <section id="basics" aria-labelledby="basics-title">
            <h2 id="basics-title">基礎科学の学習が土台になる理由</h2>
            <p>
              CSCS試験でも、基礎科学はすべての土台です。解剖学・運動生理学・バイオメカニクスの理解があることで、
              テストやプログラムデザインの意味が見えやすくなります。
            </p>
            <h3>基礎科学の主な内容</h3>
            <ul>
              <li>解剖学（筋・関節・動作の構造）</li>
              <li>運動生理学（エネルギー供給、疲労、適応）</li>
              <li>バイオメカニクス（力、トルク、出力、動作）</li>
            </ul>

            <div className="not-prose mt-6">
              <Link
                href="/academy/basics/anatomy-01"
                className="block rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-sm transition-shadow"
              >
                <p className="text-xs font-semibold tracking-[0.2em] text-slate-500">
                  INTERNAL LINK
                </p>
                <h4 className="mt-2 text-lg font-bold text-slate-900">
                  CSCS基礎科学の学習ページを見る
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  CSCS学習の土台になる基礎科学から整理していきます。
                </p>
                <p className="mt-4 text-sm font-semibold text-slate-900">読む →</p>
              </Link>
            </div>
          </section>

          {/* 6. 間違い */}
          <section aria-labelledby="mistakes">
            <h2 id="mistakes">よくある勉強法の間違い</h2>
            <div className="not-prose mt-6 grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "科目ごとに分けすぎる",
                  body: "知識が独立してしまい、プログラム設計やケース問題でつながらなくなります。",
                },
                {
                  title: "暗記だけで進める",
                  body: "用語は覚えられても、現場での判断や応用問題で迷いやすくなります。",
                },
                {
                  title: "問題演習だけを増やす",
                  body: "なぜその答えになるのかを整理しないままでは、知識が定着しにくくなります。",
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
                { step: "1", title: "基礎を理解する" },
                { step: "2", title: "評価・技術・設計につなげる" },
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
              この流れを繰り返すことで、CSCS試験対策の知識が「覚えている」から「使える」へ変わっていきます。
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

          <section aria-label="keywords" className="sr-only">
            <p>NSCA-CSCS試験対策</p>
            <p>CSCS試験対策</p>
            <p>CSCS 勉強法</p>
            <p>CSCS 基礎科学</p>
          </section>
        </div>
      </article>
    </main>
  );
}

