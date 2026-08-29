import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight, Dumbbell, History, ImageIcon, NotebookText, ShieldCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'SA Training - STRENGTH ARTS',
  description: 'トレーニングノートをベースにした、日々の筋トレ記録アプリ。',
}

const features = [
  {
    icon: NotebookText,
    title: 'ノート感覚の記録',
    text: '種目ごとに集中して、重量・回数・セットを素早く残せます。',
  },
  {
    icon: History,
    title: '前回値を確認',
    text: '種目を選ぶと、前回の重量や回数を見ながら今日の内容を決められます。',
  },
  {
    icon: Dumbbell,
    title: '自由な種目選択',
    text: '部位、器具カテゴリ、自重種目から、その日の気分に合わせて選べます。',
  },
  {
    icon: ImageIcon,
    title: '記録画像を作成',
    text: 'トレーニング後に、背景画像つきの記録画像を作成して写真アプリに保存できます。',
  },
]

export default function SATrainingProjectPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-red-900 selection:text-white pb-28">
      <section className="relative overflow-hidden border-b border-zinc-900">
        <div className="absolute inset-0 bg-[url('/strength.jpg')] bg-cover bg-center opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/80 to-black" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-28 pb-20 grid grid-cols-1 md:grid-cols-[1fr_320px] gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 text-[10px] font-mono tracking-widest text-red-300 uppercase">
              <Dumbbell className="w-3.5 h-3.5 text-red-500" />
              iOS App Project
            </div>

            <div className="space-y-5">
              <h1 className="text-4xl md:text-6xl font-black tracking-tight uppercase">
                SA Training
              </h1>
              <p className="text-sm md:text-lg text-zinc-300 leading-loose font-light max-w-2xl">
                トレーニングノートの良さを残しながら、前回値の確認、ボリューム計算、セッション履歴、記録画像の作成を少しだけ楽にするためのアプリです。
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/project/sa-training/privacy"
                className="inline-flex items-center justify-center px-5 py-3 bg-white text-black text-xs font-bold tracking-widest hover:bg-zinc-200 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/project/sa-training/support"
                className="inline-flex items-center justify-center px-5 py-3 border border-zinc-700 text-white text-xs font-bold tracking-widest hover:border-red-600 hover:text-red-200 transition-colors"
              >
                Support
              </Link>
            </div>
          </div>

          <div className="relative min-h-[320px] flex items-center justify-center">
            <div className="absolute inset-0 bg-red-600/10 blur-3xl" />
            <img
              src="/sa-logo-sikaku.png"
              alt="STRENGTH ARTS"
              className="relative w-full max-w-[300px] object-contain"
            />
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20 space-y-12">
        <div className="space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold tracking-widest">
            App Overview
          </h2>
          <p className="text-sm text-zinc-500 leading-relaxed">
            自分や友人のトレーニングを、端末内で日付・セッション単位に記録します。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {features.map((feature) => {
            const Icon = feature.icon

            return (
              <div key={feature.title} className="border border-zinc-900 bg-zinc-950/70 p-7 rounded-2xl">
                <div className="w-11 h-11 bg-zinc-900 rounded-xl border border-zinc-800 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-red-500" />
                </div>
                <h3 className="text-lg font-bold tracking-wide mb-3">{feature.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed font-light">{feature.text}</p>
              </div>
            )
          })}
        </div>

        <div className="border border-zinc-900 bg-zinc-950/60 rounded-2xl p-7 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-red-300 text-xs font-bold tracking-widest uppercase">
              <ShieldCheck className="w-4 h-4" />
              Privacy First
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">
              記録データは端末内に保存され、ログインや外部サーバーへの送信は行いません。
            </p>
          </div>
          <Link
            href="/project/sa-training/privacy"
            className="inline-flex items-center justify-center text-xs font-bold tracking-[0.2em] text-zinc-500 hover:text-red-400 transition-colors uppercase"
          >
            View Privacy <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
          </Link>
        </div>
      </section>
    </main>
  )
}
