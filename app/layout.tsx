import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import BottomNav from '@/components/layout/BottomNav'

export const metadata: Metadata = {
  title: 'Strength Arts - 強さの構造を解き明かす',
  description: '科学、研究、身体トレーニング、感覚認識、そして哲学。複数の視点から「強さ」を探求し、発展させるプラットフォーム。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className="bg-slate-50 text-gray-900 min-h-screen pb-16 md:pb-0 flex flex-col">
        <Navbar />
        <div className="flex-1">
          {children}
        </div>
        <BottomNav />
      </body>
    </html>
  )
}
