import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Database, ImageIcon, ShieldCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'SA Training Privacy Policy - STRENGTH ARTS',
  description: 'SA Trainingのプライバシーポリシー。',
}

export default function SATrainingPrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-red-900 selection:text-white pb-28">
      <section className="max-w-3xl mx-auto px-6 pt-28 pb-16 space-y-8">
        <Link href="/project/sa-training" className="inline-flex items-center text-xs text-zinc-500 hover:text-red-400 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          SA Trainingへ戻る
        </Link>

        <div className="space-y-4">
          <p className="text-[10px] font-mono tracking-widest text-red-300 uppercase">
            Privacy Policy
          </p>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight">
            SA Training プライバシーポリシー
          </h1>
          <p className="text-sm text-zinc-500">
            制定日: 2026年8月29日
          </p>
        </div>

        <div className="space-y-10 text-sm md:text-base text-zinc-300 leading-loose font-light">
          <p>
            SA Trainingは、日々のトレーニング内容を記録するためのiOSアプリです。本アプリは、ユーザーのトレーニング記録を端末内に保存します。
          </p>

          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-red-500" />
              <h2 className="text-xl font-bold text-white">収集する情報</h2>
            </div>
            <p>
              本アプリは、トレーニング記録、プロフィール名、メモ、選択した背景画像などの情報を外部サーバーへ送信しません。第三者の広告、解析、トラッキング機能も使用していません。
            </p>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <Database className="w-5 h-5 text-red-500" />
              <h2 className="text-xl font-bold text-white">端末内に保存される情報</h2>
            </div>
            <p>
              重量、回数、セット数、種目、トレーニング日、メモ、記録する人の名前などは、ユーザーの端末内に保存されます。これらの情報はアプリ内の履歴表示や前回値の表示のために使用されます。
            </p>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <ImageIcon className="w-5 h-5 text-red-500" />
              <h2 className="text-xl font-bold text-white">写真へのアクセス</h2>
            </div>
            <p>
              本アプリは、トレーニング記録画像を写真アプリへ保存するために写真ライブラリへの追加権限を使用します。また、記録画像の背景としてユーザーが選択した画像を使用する場合があります。選択された画像は外部へ送信されません。
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white">データの削除</h2>
            <p>
              アプリ内のデータリセット機能、またはアプリの削除により、端末内に保存されたデータを削除できます。
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white">お問い合わせ</h2>
            <p>
              本ポリシーに関するお問い合わせは、サポートページをご確認ください。
            </p>
            <Link href="/project/sa-training/support" className="inline-flex items-center text-xs font-bold tracking-widest text-red-400 hover:text-red-300 transition-colors uppercase">
              Support Page
            </Link>
          </section>
        </div>
      </section>
    </main>
  )
}
