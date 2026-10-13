import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Trainer Path サポート - STRENGTH ARTS',
  description: 'Trainer Pathのお問い合わせ先とサポート情報。',
}

const supportEmail = 'tamuranaoki425@gmail.com'

export default function TrainerPathSupportPage() {
  return (
    <main className="min-h-screen bg-black text-white pb-24">
      <section className="max-w-3xl mx-auto px-6 pt-28 pb-16">
        <Link href="/project/trainer-path" className="inline-flex items-center text-xs text-zinc-400 hover:text-teal-300 mb-12">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Trainer Pathへ戻る
        </Link>
        <p className="text-xs font-mono text-teal-300 uppercase mb-3">Support</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Trainer Path サポート</h1>
        <p className="text-sm md:text-base text-zinc-300 leading-loose mb-12">
          アプリの不具合、教材内容、購入後の利用についてはメールでお問い合わせください。
        </p>
        <div className="border-t border-zinc-700 pt-8 space-y-4">
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-teal-400" aria-hidden="true" />
            <h2 className="text-xl font-bold">お問い合わせ先</h2>
          </div>
          <a href={`mailto:${supportEmail}`} className="inline-block text-teal-300 hover:text-teal-200 underline underline-offset-4 break-all">
            {supportEmail}
          </a>
          <p className="text-sm text-zinc-400 leading-loose">
            ご連絡の際は、端末の機種、iOSのバージョン、問題が起きた画面や操作を添えてください。
            学習履歴や健康情報などの個人情報は、必要がない限り送らないでください。
          </p>
        </div>
        <p className="mt-12 text-sm text-zinc-500 leading-loose">
          本アプリは資格認定団体の公式アプリではありません。
          学習の完了は、資格取得、実務能力、診断・治療能力を保証するものではありません。
        </p>
        <Link href="/project/trainer-path/privacy" className="inline-block mt-8 text-sm text-teal-300 hover:text-teal-200 underline underline-offset-4">
          プライバシーポリシー
        </Link>
      </section>
    </main>
  )
}
