import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Bug, LifeBuoy, Mail, MessageSquare } from 'lucide-react'

export const metadata: Metadata = {
  title: 'SA Training Support - STRENGTH ARTS',
  description: 'SA Trainingのサポート情報。',
}

const supportEmail = 'tamuranaoki425@gmail.com'

export default function SATrainingSupportPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-red-900 selection:text-white pb-28">
      <section className="max-w-3xl mx-auto px-6 pt-28 pb-16 space-y-8">
        <Link href="/project/sa-training" className="inline-flex items-center text-xs text-zinc-500 hover:text-red-400 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          SA Trainingへ戻る
        </Link>

        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 text-[10px] font-mono tracking-widest text-red-300 uppercase">
            <LifeBuoy className="w-3.5 h-3.5 text-red-500" />
            Support
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight">
            SA Training サポート
          </h1>
          <p className="text-sm md:text-base text-zinc-400 leading-loose font-light">
            アプリの不具合、使い方、改善要望についてはこちらをご確認ください。
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5">
          <section className="border border-zinc-900 bg-zinc-950/70 p-7 rounded-2xl space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-red-500" />
              <h2 className="text-xl font-bold text-white">お問い合わせ先</h2>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">
              メール: <a href={`mailto:${supportEmail}`} className="text-red-400 hover:text-red-300 transition-colors">{supportEmail}</a>
            </p>
            <p className="text-xs text-zinc-600 leading-relaxed">
              不具合報告、使い方、改善要望を受け付けています。
            </p>
          </section>

          <section className="border border-zinc-900 bg-zinc-950/70 p-7 rounded-2xl space-y-4">
            <div className="flex items-center gap-3">
              <Bug className="w-5 h-5 text-red-500" />
              <h2 className="text-xl font-bold text-white">不具合報告</h2>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">
              アプリ名、使用端末、iOSバージョン、発生した画面、操作内容を添えてご連絡ください。
            </p>
          </section>

          <section className="border border-zinc-900 bg-zinc-950/70 p-7 rounded-2xl space-y-4">
            <div className="flex items-center gap-3">
              <MessageSquare className="w-5 h-5 text-red-500" />
              <h2 className="text-xl font-bold text-white">改善要望</h2>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">
              トレーニング中に感じた小さなストレスや、記録しにくかった点があればお知らせください。
            </p>
          </section>
        </div>
      </section>
    </main>
  )
}
