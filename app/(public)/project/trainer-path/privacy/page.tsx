import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Trainer Path プライバシーポリシー - STRENGTH ARTS',
  description: 'Trainer Pathの学習履歴などのデータの取り扱いについて。',
}

const supportEmail = 'tamuranaoki425@gmail.com'

export default function TrainerPathPrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-white pb-24">
      <article className="max-w-3xl mx-auto px-6 pt-28 pb-16">
        <Link href="/project/trainer-path" className="inline-flex items-center text-xs text-zinc-400 hover:text-teal-300 mb-12">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Trainer Pathへ戻る
        </Link>
        <p className="text-xs font-mono text-teal-300 uppercase mb-3">Privacy Policy</p>
        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">Trainer Path プライバシーポリシー</h1>
        <p className="text-sm text-zinc-500 mb-12">最終更新日: 2026年10月14日</p>

        <div className="space-y-10 text-sm md:text-base text-zinc-300 leading-loose">
          <p>
            Trainer Path（以下「本アプリ」）は、資格学習とトレーナーの現場理解を目的としたオフライン学習アプリです。
            本アプリのデータの取り扱いについて説明します。
          </p>
          <section>
            <h2 className="text-xl font-bold text-white mb-3">端末内に保存する情報</h2>
            <p>
              本アプリは、選択した学習ルート、解答履歴、正誤、学習進捗、お気に入りを利用者の端末内に保存します。
              これらの情報は、学習の継続、進捗表示、復習機能のために使用します。
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-3">データの収集・第三者提供</h2>
            <p>
              現行版の本アプリは、学習情報を開発者のサーバーへ送信しません。
              アカウント登録、広告、解析SDKは使用していません。
              本アプリから第三者へ学習情報を提供しません。App Storeでの購入処理はAppleが行います。
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-3">保存期間と削除</h2>
            <p>
              学習情報は本アプリが端末にある間保存されます。本アプリを削除すると端末内のアプリデータも削除されます。
              端末のバックアップに含まれる情報の取り扱いは、利用者の端末およびバックアップ設定に従います。
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-3">本ポリシーの変更</h2>
            <p>機能やデータの取り扱いが変わる場合は、本ポリシーとApp Storeのプライバシー情報を更新します。</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-3">お問い合わせ</h2>
            <p>
              Trainer Pathに関するお問い合わせ:
              {' '}
              <a href={`mailto:${supportEmail}`} className="text-teal-300 hover:text-teal-200 underline underline-offset-4">{supportEmail}</a>
            </p>
            <Link href="/project/trainer-path/support" className="inline-block mt-3 text-teal-300 hover:text-teal-200 underline underline-offset-4">
              サポートページ
            </Link>
          </section>
        </div>
      </article>
    </main>
  )
}
