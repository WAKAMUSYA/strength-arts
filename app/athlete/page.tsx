'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'

type Concern = {
  key: string
  title: string
  state: string[]
  causes: string[]
  advice: string[]
  ctaHref: string
  ctaLabel: string
}

export default function AthleteLPPage() {
  const [openKey, setOpenKey] = useState<string | null>(null)

  const concerns = useMemo<Concern[]>(
    () => [
      {
        key: 'contact-power',
        title: '当たり負ける・力が出せない',
        state: ['筋トレしているのに競り合いで負ける', '力はあるはずなのに出せない'],
        causes: ['力がぶつかって止まっている', '身体全体で使えていない'],
        advice: ['力を出す前に身体が崩れていないか確認する', '一部で踏ん張っていないか意識する'],
        ctaHref: '/training#athlete',
        ctaLabel: '改善プログラムを見る',
      },
      {
        key: 'heavy-slow',
        title: '動きが重い・遅い',
        state: ['走る、切り返す、動き出しが遅い', '力はあるのにスピードに変わらない'],
        causes: ['身体が動きを邪魔している', '力の方向がズレている'],
        advice: ['速く動こうとする前に無駄な力を抜く', '動き出しで引っかかる感覚がないか確認する'],
        ctaHref: '/training#athlete',
        ctaLabel: '改善プログラムを見る',
      },
      {
        key: 'disconnected',
        title: '身体がバラバラで力がつながらない',
        state: ['上半身と下半身が別々に動いている', '力が分散してしまう'],
        causes: ['一部だけで動いている', '全身の連動が取れていない'],
        advice: ['全身で動いているかを意識する', '一箇所だけ頑張っていないか確認する'],
        ctaHref: '/training#athlete',
        ctaLabel: '改善プログラムを見る',
      },
    ],
    [],
  )

  const containerClass = 'mx-auto w-full max-w-5xl px-6'

  return (
    <main id="top" className="bg-white text-slate-900">
      {/* ① Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        <div className="absolute inset-0 opacity-20 [background:radial-gradient(900px_circle_at_20%_20%,rgba(56,189,248,0.35),transparent_55%),radial-gradient(900px_circle_at_80%_30%,rgba(168,85,247,0.28),transparent_55%)]" />
        <div className={`${containerClass} relative py-20 md:py-28`}>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.25em] text-white/70">
              ATHLETE LP
            </p>
            <h1 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight">
              トレーニングしているのに変わらない人へ
            </h1>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-white/80">
              筋トレはしているのに、競技で変化を感じない。
              <br />
              その原因を、身体の使い方から見直す。
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Link
                href="#empathy"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                悩みから見る
              </Link>
              <Link
                href="#accordion"
                className="inline-flex items-center justify-center rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/20 transition-colors hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                無料アドバイスを見る
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ② 共感 */}
      <section id="empathy" className="bg-white">
        <div className={`${containerClass} py-16 md:py-20`}>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            こんな悩みはありませんか？
          </h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              '筋トレしているのに競技で変化を感じない',
              '当たり負けする、力が出せない',
              '動きが重い、スピードが上がらない',
              '身体がバラバラで力がつながらない',
              'ケガを繰り返してしまう',
            ].map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5 text-slate-800"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ③ 原因 */}
      <section className="bg-white">
        <div className={`${containerClass} py-16 md:py-20`}>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            うまくいかない原因は、この4つです
          </h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              '一部だけで動いている',
              '力がぶつかって止まっている',
              '身体が動きを邪魔している',
              '姿勢を保つために力を使ってしまっている',
            ].map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-slate-200 bg-white px-6 py-5"
              >
                <p className="text-lg font-semibold text-slate-900">{item}</p>
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-3xl leading-relaxed text-slate-700">
            本来は「動く」「出力する」ために力を使うはずが、
            <br />
            姿勢や見た目を保つことに力を使ってしまい、
            <br />
            競技動作に力が使えていない状態です。
          </p>
        </div>
      </section>

      {/* Future / Outcome */}
      <section className="bg-white">
        <div className={`${containerClass} py-16 md:py-20`}>
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              この状態が変わると、動きはこう変わります
            </h2>
            <p className="mt-6 leading-relaxed text-slate-700">
              大きく何かを変えるというより、
              <br />
              まずは「力がそのまま使える感覚」を取り戻していきます。
              <br />
              その結果、競技中の動きにも次のような変化が出てきます。
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                title: '当たり負けしにくくなる',
                body: '無駄に力まずに、出した力がそのまま相手や地面に伝わりやすくなります。',
              },
              {
                title: '動き出しが軽くなる',
                body: '速く動こうとしなくても、引っかかりが減り、最初の一歩が出しやすくなります。',
              },
              {
                title: '上半身と下半身がつながってくる',
                body: 'バラバラに頑張るのではなく、全身で動ける感覚が出てきます。',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-6"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-slate-700">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-10 max-w-3xl leading-relaxed text-slate-700">
            これはフォームを真似することではなく、
            <br />
            身体の中で力が通る状態を作っていく作業です。
          </p>
        </div>
      </section>

      {/* ④ 悩み選択（展開式） */}
      <section id="accordion" className="bg-slate-950 text-white">
        <div className={`${containerClass} py-16 md:py-20`}>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            悩みを選ぶ（クリックで展開）
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-white/75">
            診断ではなく、よくある「つまずき」から順番にほどいていきます。
            まずは当てはまるものを開いてください。
          </p>

          <div className="mt-10 space-y-4">
            {concerns.map((item, index) => {
              const isOpen = openKey === item.key
              const contentId = `concern-panel-${index}`
              return (
                <div
                  key={item.key}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    onClick={() => setOpenKey(isOpen ? null : item.key)}
                  >
                    <span className="text-lg md:text-xl font-semibold">
                      {item.title}
                    </span>
                    <span className="shrink-0 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80">
                      {isOpen ? '閉じる' : '開く'}
                    </span>
                  </button>

                  {isOpen ? (
                    <div id={contentId} className="px-6 pb-6">
                      <div className="grid gap-6 md:grid-cols-3">
                        <div className="rounded-xl bg-white/5 p-5">
                          <p className="text-xs font-semibold tracking-[0.2em] text-white/70">
                            状態
                          </p>
                          <ul className="mt-3 space-y-2 text-white/85">
                            {item.state.map((line) => (
                              <li key={line}>・{line}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="rounded-xl bg-white/5 p-5">
                          <p className="text-xs font-semibold tracking-[0.2em] text-white/70">
                            原因
                          </p>
                          <ul className="mt-3 space-y-2 text-white/85">
                            {item.causes.map((line) => (
                              <li key={line}>・{line}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="rounded-xl bg-white/5 p-5">
                          <p className="text-xs font-semibold tracking-[0.2em] text-white/70">
                            無料アドバイス
                          </p>
                          <ul className="mt-3 space-y-2 text-white/85">
                            {item.advice.map((line) => (
                              <li key={line}>・{line}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="mt-8 flex flex-col sm:flex-row gap-3">
                        <Link
                          href={item.ctaHref}
                          className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                        >
                          {item.ctaLabel}
                        </Link>
                        <Link
                          href="#cta"
                          className="inline-flex items-center justify-center rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/20 transition-colors hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                        >
                          次に進む
                        </Link>
                      </div>
                    </div>
                  ) : null}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ⑤ 最下部CTA */}
      <section id="cta" className="bg-white text-slate-900">
        <div className={`${containerClass} py-16 md:py-20`}>
          <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              まずはここから始めてみる
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-slate-700">
              「筋力」を増やす前に、「競技で出る形」に整える。
              小さく試して、出力が出る方向に寄せていきましょう。
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/training#athlete"
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                アスリート向けプログラムを見る
              </Link>
              <Link
                href="#top"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 transition-colors hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                トップに戻る
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
