import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, BookOpen, ClipboardCheck, BriefcaseBusiness, ShieldCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Trainer Path - STRENGTH ARTS',
  description: 'トレーナーを目指す人のためのiOS学習アプリ。共通基礎、CPT・CSCSルート、現場での判断を講義と問題で学ぶ。',
}

const stages = [
  {
    number: '01',
    title: '共通基礎',
    text: '解剖学、運動生理学、栄養、安全管理など、トレーナーに必要な土台を学びます。',
    icon: BookOpen,
  },
  {
    number: '02',
    title: '資格学習',
    text: 'CPTまたはCSCSの目標を選び、講義・四択問題・ミニ模試で理解を確かめます。',
    icon: ClipboardCheck,
  },
  {
    number: '03',
    title: '現場理解',
    text: '食事指導やクライアント対応、プログラム作成などをケースから考えます。',
    icon: BriefcaseBusiness,
  },
]

export default function TrainerPathProjectPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-teal-900 selection:text-white pb-24">
      <section className="max-w-5xl mx-auto px-6 pt-28 pb-20 border-b border-zinc-800">
        <Link href="/project" className="inline-flex items-center text-xs text-zinc-400 hover:text-teal-300 transition-colors mb-12">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Projectsへ戻る
        </Link>

        <div className="max-w-3xl space-y-6">
          <p className="text-xs font-mono text-teal-300 uppercase">iOS App Project</p>
          <h1 className="text-4xl md:text-6xl font-black text-white">Trainer Path</h1>
          <p className="text-lg md:text-xl text-zinc-200 leading-relaxed">
            資格のために学び、現場のために考える。
          </p>
          <p className="text-sm md:text-base text-zinc-400 leading-loose max-w-2xl">
            トレーナーを目指す人が、基礎知識からCPT・CSCSを見据えた学習、
            そして現場での判断まで、一つの流れで学べるiOSアプリです。
          </p>
          <p className="text-sm text-teal-300">App Store公開準備中</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="mb-10">
          <p className="text-xs font-mono text-teal-300 uppercase mb-3">Learning Path</p>
          <h2 className="text-2xl md:text-3xl font-bold">学びの3段階</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stages.map((stage) => {
            const Icon = stage.icon
            return (
              <div key={stage.number} className="border-t border-zinc-700 pt-6">
                <div className="flex items-center justify-between mb-8">
                  <Icon className="w-6 h-6 text-teal-400" aria-hidden="true" />
                  <span className="text-xs font-mono text-zinc-600">{stage.number}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{stage.title}</h3>
                <p className="text-sm text-zinc-400 leading-loose">{stage.text}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section className="border-y border-zinc-800 bg-zinc-950">
        <div className="max-w-5xl mx-auto px-6 py-16 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-teal-300 mb-3">
              <ShieldCheck className="w-5 h-5" aria-hidden="true" />
              <h2 className="text-xl font-bold text-white">オフラインで学べる</h2>
            </div>
            <p className="text-sm text-zinc-400 leading-loose">
              教材はアプリに同梱し、学習履歴は端末内に保存します。ログインは不要です。
            </p>
          </div>
          <Link href="/project/trainer-path/privacy" className="inline-flex items-center text-sm text-teal-300 hover:text-teal-200">
            プライバシーについて <ArrowUpRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pt-12 text-sm text-zinc-500 space-y-3">
        <p>本アプリは独立した教材であり、資格認定団体の公式アプリではありません。資格取得や実務能力を保証するものではありません。</p>
        <Link href="/project/trainer-path/support" className="inline-flex items-center text-teal-300 hover:text-teal-200">
          サポート・お問い合わせ <ArrowUpRight className="w-4 h-4 ml-2" />
        </Link>
      </section>
    </main>
  )
}
