'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Compass,
  Lock,
  X,
  Info
} from 'lucide-react'

// Defined items for each Athlete category
const sports = [
  { id: 'baseball', title: '野球 (Baseball)', href: '/athlete/sport/baseball' },
  { id: 'handball', title: 'ハンドボール (Handball)', href: '/athlete/sport/handball' },
  { id: 'soccer', title: 'サッカー (Soccer)', href: '/athlete/sport/soccer' },
  { id: 'basketball', title: 'バスケット (Basketball)', href: '/athlete/sport/basketball' },
  { id: 'athletics', title: '陸上 (Track & Field)', href: '/athlete/sport/athletics' },
  { id: 'golf', title: 'ゴルフ (Golf)', href: '/athlete/sport/golf' },
]

const goals = [
  { id: 'speedup', title: '足を速くしたい', href: '/athlete/goal/speedup' },
  { id: 'jumppower', title: 'ジャンプ力を上げたい', href: '/athlete/goal/jumppower' },
  { id: 'contactpower', title: '当たりを強くしたい', href: '/athlete/goal/contactpower' },
  { id: 'ballspeed', title: '球速を上げたい', href: '/athlete/goal/ballspeed' },
  { id: 'rotation', title: '回旋を強くしたい', href: '/athlete/goal/rotation' },
  { id: 'injuryfree', title: 'ケガを予防したい', href: '/athlete/goal/injuryfree' },
]

const practices = [
  { id: 'pitching150', title: '150km投げるための考え方', href: '/athlete/practice/pitching150' },
  { id: 'jumpstretch', title: 'ジャンプ力が高い選手の特徴', href: '/athlete/practice/jumpstretch' },
  { id: 'prosenshu', title: 'プロ選手の自主練', href: '/athlete/practice/prosenshu' },
]

export default function AthleteDirectoryPage() {
  const [activePortal, setActivePortal] = useState<string | null>(null)

  return (
    <main className="min-h-screen bg-black text-white selection:bg-purple-900 selection:text-white pb-28">
      
      {/* 1. Ultra-Minimalist Hero Header */}
      <section className="relative pt-28 pb-16 text-center bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-purple-950/20 via-black to-black">
        <div className="max-w-3xl mx-auto px-6 space-y-4">
          <div className="inline-flex items-center gap-2 text-[10px] font-mono tracking-widest text-zinc-550 uppercase">
            <Compass className="w-3.5 h-3.5 text-purple-500" /> Athlete Explorer
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            アスリート・スポーツの研究
          </h1>
          <p className="max-w-lg mx-auto text-xs md:text-sm text-zinc-400 leading-relaxed font-light tracking-widest">
            各研究所一覧
          </p>
        </div>
      </section>

      {/* 2. Simplified Minimal Directory Lists */}
      <section className="max-w-5xl mx-auto px-6 mt-12 space-y-20">

        {/* --- Category A: 競技別 --- */}
        <div className="space-y-6">
          <h2 className="text-sm font-bold tracking-wider text-zinc-450 border-b border-zinc-905 pb-2.5 uppercase">
            競技別
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sports.map((item) => {
              if (item.id === 'golf') {
                return (
                  <Link
                    key={item.id}
                    href="/lab/golf"
                    className="group relative text-left w-full bg-zinc-950 hover:bg-zinc-900/30 border border-zinc-900 hover:border-purple-900/50 rounded-lg p-5 transition-all duration-300 shadow-md flex items-center justify-between"
                  >
                    <span className="text-sm md:text-base font-bold text-zinc-300 group-hover:text-white transition-colors duration-300">
                      {item.title}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-[8px] font-mono text-purple-400 bg-purple-950/40 border border-purple-900/40 px-2 py-0.5 rounded uppercase tracking-wider">
                        Open
                      </span>
                    </div>
                  </Link>
                );
              }
              return (
                <button
                  key={item.id}
                  onClick={() => setActivePortal(item.title)}
                  className="group relative text-left w-full bg-zinc-950 hover:bg-zinc-900/30 border border-zinc-900 hover:border-zinc-800 rounded-lg p-5 transition-all duration-300 shadow-md flex items-center justify-between"
                >
                  <span className="text-sm md:text-base font-bold text-zinc-300 group-hover:text-white transition-colors duration-300">
                    {item.title}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[8px] font-mono text-zinc-600 bg-zinc-900 border border-zinc-850 px-2 py-0.5 rounded uppercase tracking-wider">
                      Coming Soon
                    </span>
                    <Lock className="w-3.5 h-3.5 text-zinc-700" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* --- Category B: 目的別 --- */}
        <div className="space-y-6">
          <h2 className="text-sm font-bold tracking-wider text-zinc-450 border-b border-zinc-905 pb-2.5 uppercase">
            目的別
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {goals.map((item) => (
              <button
                key={item.id}
                onClick={() => setActivePortal(item.title)}
                className="group relative text-left w-full bg-zinc-950 hover:bg-zinc-900/30 border border-zinc-900 hover:border-zinc-800 rounded-lg p-5 transition-all duration-300 shadow-md flex items-center justify-between"
              >
                <span className="text-sm md:text-base font-bold text-zinc-300 group-hover:text-white transition-colors duration-300">
                  {item.title}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-[8px] font-mono text-zinc-600 bg-zinc-900 border border-zinc-850 px-2 py-0.5 rounded uppercase tracking-wider">
                    Coming Soon
                  </span>
                  <Lock className="w-3.5 h-3.5 text-zinc-700" />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* --- Category C: 一流の自主練 --- */}
        <div className="space-y-6">
          <h2 className="text-sm font-bold tracking-wider text-zinc-450 border-b border-zinc-905 pb-2.5 uppercase">
            一流の自主練
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {practices.map((item) => (
              <button
                key={item.id}
                onClick={() => setActivePortal(item.title)}
                className="group relative text-left w-full bg-zinc-950 hover:bg-zinc-900/30 border border-zinc-900 hover:border-zinc-800 rounded-lg p-5 transition-all duration-300 shadow-md flex items-center justify-between"
              >
                <span className="text-sm md:text-base font-bold text-zinc-300 group-hover:text-white transition-colors duration-300">
                  {item.title}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-[8px] font-mono text-zinc-600 bg-zinc-900 border border-zinc-850 px-2 py-0.5 rounded uppercase tracking-wider">
                    Coming Soon
                  </span>
                  <Lock className="w-3.5 h-3.5 text-zinc-700" />
                </div>
              </button>
            ))}
          </div>
        </div>

      </section>

      {/* 3. Bottom Return Button */}
      <section className="max-w-5xl mx-auto px-6 mt-20 text-center">
        <Link 
          href="/" 
          className="inline-flex items-center justify-center text-xs text-zinc-500 hover:text-zinc-350 transition-colors font-medium border-b border-zinc-900 hover:border-zinc-800 pb-1"
        >
          トップページへ戻る
        </Link>
      </section>
      {/* --- Elegant Coming Soon Portal Dialog --- */}
      {activePortal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn"
          onClick={() => setActivePortal(null)}
        >
          <div 
            className="w-full max-w-md bg-zinc-950 border border-zinc-900 rounded-2xl p-6 md:p-8 space-y-6 shadow-2xl relative animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header info bar */}
            <div className="flex items-center gap-2 text-purple-400 text-xs font-mono">
              <Info className="w-4 h-4" />
              <span>UNDER CONSTRUCTION</span>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-black text-white leading-tight">
                「{activePortal}」研究ハブ構築中
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-light">
                現在、STRENGTH ARTS研究チームが最新のスポーツバイオメカニクス論文と解剖データモデルを解析し、この分野に特化した研究ページを全力で編纂しております。
              </p>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-850/60 rounded-xl p-4 space-y-2.5">
              <span className="text-[9px] font-extrabold uppercase tracking-widest text-zinc-500 block">
                公開予定の専門コンテンツ例
              </span>
              <ul className="text-[11px] text-zinc-400 space-y-1.5 list-disc pl-4 font-light">
                <li>骨格比率や動作タイプに応じたパーソナライズ測定</li>
                <li>関節モーメントアームの最適化とエラー軌道分析</li>
                <li>対象筋の筋電図（EMG）に基づく収縮誘導テクニック</li>
              </ul>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                onClick={() => setActivePortal(null)}
                className="w-full py-3 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white font-bold text-xs rounded-xl transition-all border border-zinc-850"
              >
                ライブラリに戻る
              </button>
            </div>

            {/* Absolute close button */}
            <button
              onClick={() => setActivePortal(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </main>
  )
}
