'use client'

import React, { useState, useEffect, Suspense } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { 
  ArrowLeft, 
  BookOpen, 
  Layers, 
  Clock, 
  Bookmark, 
  ChevronRight,
  Compass,
  FileText,
  Activity
} from 'lucide-react'
import { ABS_ARTICLES } from '@/data/absArticles'

const OBSTACLES = [
  { label: '腹筋が割れない', desc: 'シックスパックが見えない' },
  { label: 'くびれがない', desc: 'ウエストを細くしたい' },
  { label: '下っ腹が出る', desc: 'ぽっこりお腹をへこませたい' },
  { label: '首が痛くなる', desc: 'クランチで首が疲れる' },
  { label: '腰が痛い', desc: 'レッグレイズで腰を痛める' },
  { label: '重量が伸びない', desc: 'スクワット等で体幹がブレる' }
]

function ArticlesContent() {
  const searchParams = useSearchParams()
  const getInitialTab = () => {
    const tab = searchParams.get('tab')
    if (tab === 'applied' || tab === 'program') return tab
    return 'basic'
  }
  const initialTab = getInitialTab()
  const initialObstacle = searchParams.get('obstacle') || null
  
  const [activeTab, setActiveTab] = useState<'basic' | 'applied' | 'program'>(initialTab)
  const [selectedObstacle, setSelectedObstacle] = useState<string | null>(initialObstacle)

  // URLパラメータの変更があった場合に状態を同期
  useEffect(() => {
    const tabParam = searchParams.get('tab')
    if (tabParam === 'applied') {
      setActiveTab('applied')
    } else if (tabParam === 'program') {
      setActiveTab('program')
    } else if (tabParam === 'basic') {
      setActiveTab('basic')
    }
    
    const obsParam = searchParams.get('obstacle')
    if (obsParam) {
      setSelectedObstacle(obsParam)
      setActiveTab('basic') // 悩みは基本理論に属するため
      
      // Some obstacles might point to applied or program, auto-adjust if no basic matches
      const hasBasicMatch = ABS_ARTICLES.some(art => art.type === 'basic' && art.obstacleTag === obsParam)
      const hasAppliedMatch = ABS_ARTICLES.some(art => art.type === 'applied' && art.obstacleTag === obsParam)
      const hasProgramMatch = ABS_ARTICLES.some(art => art.type === 'program' && art.obstacleTag === obsParam)
      
      if (!hasBasicMatch) {
        if (hasAppliedMatch) setActiveTab('applied')
        else if (hasProgramMatch) setActiveTab('program')
      }
    }
  }, [searchParams])

  const filteredArticles = ABS_ARTICLES.filter(art => {
    if (art.type !== activeTab) return false;
    if (selectedObstacle && art.obstacleTag !== selectedObstacle) return false;
    return true;
  })

  return (
    <div className="max-w-6xl mx-auto px-6 mt-8">
      {/* 🚀 TAB TRIGGER CONTROLS */}
      <div className="flex justify-center mb-12">
        <div className="grid grid-cols-3 gap-1 bg-zinc-950 p-1.5 rounded-2xl border border-zinc-900 shadow-inner w-full max-w-2xl">
          <button
            onClick={() => setActiveTab('basic')}
            className={`flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-1.5 py-2 sm:py-3.5 px-1 sm:px-3 rounded-xl font-bold text-[10px] sm:text-xs transition-all duration-300 cursor-pointer ${
              activeTab === 'basic'
                ? 'bg-gradient-to-r from-orange-950/60 to-orange-900/40 border border-orange-800/40 text-white shadow-md'
                : 'text-zinc-550 hover:text-zinc-300'
            }`}
          >
            <BookOpen className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${activeTab === 'basic' ? 'text-orange-400' : 'text-zinc-600'}`} />
            <span>基本理論</span>
          </button>
          <button
            onClick={() => setActiveTab('applied')}
            className={`flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-1.5 py-2 sm:py-3.5 px-1 sm:px-3 rounded-xl font-bold text-[10px] sm:text-xs transition-all duration-300 cursor-pointer ${
              activeTab === 'applied'
                ? 'bg-gradient-to-r from-orange-950/60 to-orange-900/40 border border-orange-800/40 text-white shadow-md'
                : 'text-zinc-550 hover:text-zinc-300'
            }`}
          >
            <Layers className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${activeTab === 'applied' ? 'text-orange-400' : 'text-zinc-600'}`} />
            <span>応用・探究</span>
          </button>
          <button
            onClick={() => setActiveTab('program')}
            className={`flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-1.5 py-2 sm:py-3.5 px-1 sm:px-3 rounded-xl font-bold text-[10px] sm:text-xs transition-all duration-300 cursor-pointer ${
              activeTab === 'program'
                ? 'bg-gradient-to-r from-orange-950/60 to-orange-900/40 border border-orange-800/40 text-white shadow-md'
                : 'text-zinc-550 hover:text-zinc-300'
            }`}
          >
            <Activity className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${activeTab === 'program' ? 'text-orange-400' : 'text-zinc-600'}`} />
            <span>実践プログラム</span>
          </button>
        </div>
      </div>

      {/* 🛑 OBSTACLE FILTER */}
      <div className="mb-10 animate-fadeIn">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-[10px] font-extrabold text-orange-500 tracking-wider uppercase block">
            DIAGNOSTIC FILTER
          </span>
          <span className="text-xs text-zinc-500 font-light">
            ー 現在の悩み・壁から絞り込む
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedObstacle(null)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 border ${
              selectedObstacle === null
                ? 'bg-orange-950/40 border-orange-500 text-white shadow-md'
                : 'bg-zinc-950 border-zinc-900 text-zinc-500 hover:border-zinc-800 hover:text-zinc-300'
            }`}
          >
            すべて表示
          </button>
          {OBSTACLES.map((obs) => {
            const isActive = selectedObstacle === obs.label
            return (
              <button
                key={obs.label}
                onClick={() => setSelectedObstacle(isActive ? null : obs.label)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 border flex items-center gap-2 ${
                  isActive
                    ? 'bg-orange-950/40 border-orange-500 text-white shadow-md shadow-orange-500/10'
                    : 'bg-zinc-950 border-zinc-900 text-zinc-400 hover:border-zinc-800 hover:text-zinc-300'
                }`}
              >
                {obs.label}
              </button>
            )
          })}
        </div>
      </div>

      {/* 📖 ARTICLE LIST GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredArticles.map((art) => (
          <Link
            key={art.id}
            href={`/lab/abs/${art.slug}`}
            className="group cursor-pointer bg-zinc-950/40 border border-zinc-900 hover:border-orange-900/60 hover:bg-zinc-900/10 rounded-2xl p-6 transition-all duration-500 flex flex-col justify-between hover:shadow-2xl hover:shadow-orange-950/10 relative overflow-hidden"
          >
            {/* Soft decorative accent glow */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/5 rounded-full blur-2xl group-hover:bg-orange-500/10 transition-colors duration-500" />
            
            <div className="space-y-5 relative z-10">
              {/* Top meta tags */}
              <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 border-b border-zinc-900/60 pb-3">
                <span className="uppercase tracking-widest text-orange-500 font-extrabold flex items-center gap-1">
                  <Bookmark className="w-3.5 h-3.5 text-orange-500" /> {art.category}
                </span>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 読了目安: {art.readTime}</span>
              </div>

              {/* Title */}
              <div className="space-y-1">
                <h3 className="text-lg md:text-xl font-black text-white group-hover:text-orange-400 transition-colors leading-tight">
                  {art.title}
                </h3>
              </div>

              {/* Article description */}
              <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-light">
                {art.desc}
              </p>
            </div>

            {/* Bottom metadata */}
            <div className="mt-8 pt-4 border-t border-zinc-900 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-zinc-500 relative z-10">
              <div className="flex flex-wrap gap-1.5">
                <span className="text-[9px] bg-zinc-900 border border-zinc-850 text-zinc-400 px-2.5 py-0.5 rounded font-bold uppercase">
                  LEVEL: {art.level}
                </span>
                {art.tags.map((tag, i) => (
                  <span key={i} className="text-[9px] bg-zinc-900/40 border border-zinc-900 text-zinc-500 px-2 py-0.5 rounded">
                    #{tag}
                  </span>
                ))}
              </div>
              <span className="text-zinc-400 group-hover:text-orange-400 group-hover:translate-x-1 transition-all flex items-center gap-1 font-bold">
                解説を開く <ChevronRight className="w-4 h-4 text-orange-500" />
              </span>
            </div>
          </Link>
        ))}
      </div>

      {filteredArticles.length === 0 && (
        <div className="text-center py-20 bg-zinc-950/20 border border-zinc-900 rounded-2xl">
          <FileText className="w-12 h-12 text-zinc-700 mx-auto mb-4" />
          <p className="text-sm text-zinc-500">現在、このカテゴリーに公開されているコラムはありません。</p>
        </div>
      )}
    </div>
  )
}

export default function AbsArticlesPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-orange-900 selection:text-white pb-32">
      
      {/* 🚀 HEADER & NAVIGATION */}
      <nav className="border-b border-zinc-900 bg-zinc-950/40 backdrop-blur-md sticky top-16 z-30 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link 
            href="/lab/abs" 
            className="text-xs font-mono font-bold text-zinc-500 hover:text-orange-500 transition-colors inline-flex items-center gap-1 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> BACK TO LAB
          </Link>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 text-[8px] font-extrabold text-orange-500 bg-orange-950/40 border border-orange-900/40 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5 text-orange-500" /> LECTURE INDEX
            </span>
            <span className="text-[10px] text-zinc-550 font-mono hidden sm:inline">SA-ABS-LECTURES</span>
          </div>
        </div>
      </nav>

      {/* 🚀 PAGE TITLE */}
      <header className="max-w-6xl mx-auto px-6 pt-16 pb-8 text-center space-y-4">
        <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white">
          腹トレ研究所<br className="sm:hidden" /> コラムアーカイブ
        </h1>
      </header>

      {/* 🚀 ARTICLES CONTENT WRAPPER */}
      <Suspense fallback={
        <div className="flex items-center justify-center py-20 text-zinc-550 font-mono text-xs">
          LOADING RESEARCH DATA...
        </div>
      }>
        <ArticlesContent />
      </Suspense>

    </main>
  )
}
