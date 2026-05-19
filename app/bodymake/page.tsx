'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  ArrowUpRight,
  Compass,
  Lock,
  Sparkles,
  X,
  Info
} from 'lucide-react'

// Defined items for each category
const regions = [
  { id: 'chest', title: '胸 (Chest)', isLab: false },
  { id: 'back', title: '背中 (Back)', isLab: false },
  { id: 'shoulder', title: '肩 (Shoulder)', isLab: false },
  { id: 'arms', title: '腕 (Arms)', isLab: false },
  { id: 'legs', title: '脚 (Legs)', isLab: false },
  { id: 'abs', title: '腹 (Abs)', isLab: false },
]

const exercises = [
  { id: 'benchpress', title: 'ベンチプレス', href: '/lab/benchpress', isLab: true },
  { id: 'dumbbellpress', title: 'ダンベルプレス', isLab: false },
  { id: 'dumbbellfly', title: 'ダンベルフライ', isLab: false },
  { id: 'sideraise', title: 'サイドレイズ', isLab: false },
  { id: 'shoulderpress', title: 'ショルダープレス', isLab: false },
  { id: 'pullup', title: '懸垂', isLab: false },
  { id: 'bentoverrow', title: 'ベントオーバーロー', isLab: false },
  { id: 'squat', title: 'スクワット系', isLab: false },
  { id: 'deadlift', title: 'デッドリフト', isLab: false },
  { id: 'hipthrust', title: 'ヒップスラスト', isLab: false },
]

const goals = [
  { id: 'hypertrophy', title: '筋肥大', isLab: false },
  { id: 'diet', title: 'ダイエット', isLab: false },
  { id: 'glutes', title: 'ヒップアップ', isLab: false },
  { id: 'posture', title: '姿勢改善', isLab: false },
  { id: 'backpain', title: '腰痛予防', isLab: false },
  { id: 'painfree', title: '痛みなく鍛える', isLab: false },
]

export default function BodymakeDirectoryPage() {
  const [activePortal, setActivePortal] = useState<string | null>(null)

  const handlePortalClick = (item: { title: string; isLab: boolean; href?: string }) => {
    if (!item.isLab) {
      setActivePortal(item.title)
    }
  }

  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-900 selection:text-white pb-28">
      
      {/* 1. Ultra-Minimalist Hero Header */}
      <section className="relative pt-28 pb-16 text-center">
        <div className="max-w-3xl mx-auto px-6 space-y-4">
          <div className="inline-flex items-center gap-2 text-[10px] font-mono tracking-widest text-zinc-500 uppercase bg-zinc-950 border border-zinc-900 px-3 py-1 rounded-full">
            <Compass className="w-3.5 h-3.5 text-blue-500" /> Biomechanics Hub
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            ボディメイク解説
          </h1>
          <p className="max-w-lg mx-auto text-xs md:text-sm text-zinc-400 leading-relaxed font-light">
            解剖学と力学に基づくアプローチ。部位・種目・目的のテーマを選択してください。
          </p>
        </div>
      </section>

      {/* 2. Simplified Minimal Directory Lists */}
      <section className="max-w-5xl mx-auto px-6 mt-12 space-y-20">

        {/* --- Category A: 部位別 --- */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-zinc-900 pb-2.5">
            <h2 className="text-sm font-bold tracking-wider text-zinc-400 uppercase">
              部位別
            </h2>
            <span className="text-[10px] font-mono text-zinc-650">Select Target Region</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {regions.map((item) => (
              <button
                key={item.id}
                onClick={() => handlePortalClick(item)}
                className="group relative text-left w-full bg-zinc-950 hover:bg-zinc-900/30 border border-zinc-900 hover:border-zinc-800 rounded-lg p-5 transition-all duration-300 shadow-md flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm md:text-base font-bold text-zinc-300 group-hover:text-white transition-colors duration-300">
                    {item.title}
                  </span>
                </div>
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

        {/* --- Category B: 種目別 --- */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-zinc-900 pb-2.5">
            <h2 className="text-sm font-bold tracking-wider text-zinc-400 uppercase">
              種目別
            </h2>
            <span className="text-[10px] font-mono text-zinc-650">Select Target Exercise</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {exercises.map((item) => {
              if (item.isLab && item.href) {
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="group relative block bg-zinc-950 hover:bg-zinc-900/30 border border-blue-950/60 hover:border-blue-900 rounded-lg p-5 transition-all duration-300 shadow-md"
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className="text-sm md:text-base font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                          {item.title}
                        </span>
                        <span className="text-[8px] font-mono text-blue-400 bg-blue-950/50 border border-blue-900/50 px-2 py-0.5 rounded uppercase tracking-wider font-extrabold flex items-center gap-0.5">
                          <Sparkles className="w-2.5 h-2.5" /> Active Lab
                        </span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-zinc-700 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                  </Link>
                )
              }

              return (
                <button
                  key={item.id}
                  onClick={() => handlePortalClick(item)}
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
              )
            })}
          </div>
        </div>

        {/* --- Category C: 目的別 --- */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-zinc-900 pb-2.5">
            <h2 className="text-sm font-bold tracking-wider text-zinc-400 uppercase">
              目的別
            </h2>
            <span className="text-[10px] font-mono text-zinc-650">Select Target Goal</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {goals.map((item) => (
              <button
                key={item.id}
                onClick={() => handlePortalClick(item)}
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
          className="inline-flex items-center justify-center text-xs text-zinc-500 hover:text-zinc-350 transition-colors font-medium border-b border-zinc-900 hover:border-zinc-850 pb-1"
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
            <div className="flex items-center gap-2 text-blue-400 text-xs font-mono">
              <Info className="w-4 h-4" />
              <span>UNDER CONSTRUCTION</span>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-black text-white leading-tight">
                「{activePortal}研究所」構築中
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-light">
                現在、Strength Arts研究チームが最新のスポーツバイオメカニクス論文と解剖データモデルを解析し、この種目の特化研究ページ（ベンチプレス研究所と同様のインタラクティブ構成）を全力で編纂しております。
              </p>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-850/60 rounded-xl p-4 space-y-2.5">
              <span className="text-[9px] font-extrabold uppercase tracking-widest text-zinc-500 block">
                公開予定の専門コンテンツ例
              </span>
              <ul className="text-[11px] text-zinc-400 space-y-1.5 list-disc pl-4 font-light">
                <li>骨格比率に応じたフォームのパーソナライズ測定</li>
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
