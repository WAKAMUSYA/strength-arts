import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Strength Arts - 高いパフォーマンスを求める者たちへ',
  description: '科学、研究、身体トレーニング、感覚認識、そして哲学。複数の視点から「強さ」を探求し、発展させるプラットフォーム。',
  keywords: ['強さ', 'トレーニング', 'パフォーマンス', '哲学', '身体'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  )
}
