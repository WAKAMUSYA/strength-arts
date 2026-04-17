import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import BottomNav from '@/components/layout/BottomNav'
import { createClient } from '@/utils/supabase/server'

export const metadata: Metadata = {
  title: 'Strength Arts - 強さの構造を解き明かす',
  description: '科学、研究、身体トレーニング、感覚認識、そして哲学。複数の視点から「強さ」を探求し、発展させるプラットフォーム。',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <html lang="ja">
      <body className="bg-slate-50 text-gray-900 min-h-screen pb-16 md:pb-0 flex flex-col">
        <Navbar />
        <div className="flex-1">
          {children}
        </div>
        <BottomNav isLoggedIn={!!user} />
      </body>
    </html>
  )
}
