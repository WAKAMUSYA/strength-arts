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
  FileText
} from 'lucide-react'
import { BENCHPRESS_ARTICLES } from '@/data/benchpressArticles'

function ArticlesContent() {
  const searchParams = useSearchParams()
  const initialTab = searchParams.get('tab') === 'applied' ? 'applied' : 'basic'
  const [activeTab, setActiveTab] = useState<'basic' | 'applied'>(initialTab)

  // URLパラメータの変更があった場合にタブ状態を同期
  useEffect(() => {
    const tabParam = searchParams.get('tab')
    if (tabParam === 'applied') {
      setActiveTab('applied')
    } else if (tabParam === 'basic') {
      setActiveTab('basic')
    }
  }, [searchParams])

  const filteredArticles = BENCHPRESS_ARTICLES.filter(art => art.type === activeTab)

  return (
    <div className="max-w-6xl mx-auto px-6 mt-8">
      {/* 🚀 TAB TRIGGER CONTROLS */}
      <div className="flex justify-center mb-12">
        <div className="flex bg-zinc-950 p-1.5 rounded-2xl border border-zinc-900 shadow-inner w-full max-w-md">
          <button
            onClick={() => setActiveTab('basic')}
            className={`flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-xs md:text-sm transition-all duration-300 cursor-pointer ${
              activeTab === 'basic'
                ? 'bg-gradient-to-r from-blue-950/60 to-blue-900/40 border border-blue-800/40 text-white shadow-md'
                : 'text-zinc-550 hover:text-zinc-300'
            }`}
          >
            <BookOpen className={`w-4 h-4 ${activeTab === 'basic' ? 'text-blue-400' : 'text-zinc-600'}`} />
            <span>基本理論コラム</span>
          </button>
          <button
            onClick={() => setActiveTab('applied')}
            className={`flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-xs md:text-sm transition-all duration-300 cursor-pointer ${
              activeTab === 'applied'
                ? 'bg-gradient-to-r from-zinc-900 to-zinc-850 border border-zinc-800 text-white shadow-md'
                : 'text-zinc-550 hover:text-zinc-300'
            }`}
          >
            <Layers className={`w-4 h-4 ${activeTab === 'applied' ? 'text-blue-400' : 'text-zinc-600'}`} />
            <span>応用・探究コラム</span>
          </button>
        </div>
      </div>

      {/* 📖 ARTICLE LIST GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredArticles.map((art, idx) => (
          <Link
            key={art.id}
            href={`/lab/benchpress/${art.slug}`}
            className="group cursor-pointer bg-zinc-950/40 border border-zinc-900 hover:border-blue-900/60 hover:bg-zinc-900/10 rounded-2xl p-6 transition-all duration-500 flex flex-col justify-between hover:shadow-2xl hover:shadow-blue-950/10 relative overflow-hidden"
          >
            {/* Soft decorative accent glow */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-colors duration-500" />
            
            <div className="space-y-5 relative z-10">
              {/* Top meta tags */}
              <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 border-b border-zinc-900/60 pb-3">
                <span className="uppercase tracking-widest text-blue-450 font-extrabold flex items-center gap-1">
                  <Bookmark className="w-3.5 h-3.5 text-blue-500" /> {art.category}
                </span>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 読了目安: {art.readTime}</span>
              </div>

              {/* Title & Subtitle */}
              <div className="space-y-1">
                <h3 className="text-lg md:text-xl font-black text-white group-hover:text-blue-400 transition-colors leading-tight">
                  {art.title}
                </h3>
                <p className="text-[11px] md:text-xs text-zinc-500 italic">
                  ー {art.subtitle}
                </p>
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
              <span className="text-zinc-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all flex items-center gap-1 font-bold">
                解説を開く <ChevronRight className="w-4 h-4 text-blue-500" />
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

export default function BenchpressArticlesPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-900 selection:text-white pb-32">
      
      {/* 🚀 HEADER & NAVIGATION */}
      <nav className="border-b border-zinc-900 bg-zinc-950/40 backdrop-blur-md sticky top-16 z-30 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link 
            href="/lab/benchpress" 
            className="text-xs font-mono font-bold text-zinc-500 hover:text-blue-450 transition-colors inline-flex items-center gap-1 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> BACK TO LAB
          </Link>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 text-[8px] font-extrabold text-blue-400 bg-blue-950/40 border border-blue-900/40 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5 text-blue-500" /> LECTURE INDEX
            </span>
            <span className="text-[10px] text-zinc-550 font-mono hidden sm:inline">SA-BP-LECTURES</span>
          </div>
        </div>
      </nav>

      {/* 🚀 PAGE TITLE */}
      <header className="max-w-6xl mx-auto px-6 pt-16 pb-8 text-center space-y-4">
        <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white">
          ベンチプレス研究所<br className="sm:hidden" /> コラムアーカイブ
        </h1>
        <p className="text-xs md:text-sm text-zinc-450 max-w-xl mx-auto leading-relaxed font-light">
          解剖学に基づいた基本フォームから、物理学によるトルク計算、プログラム設計、最新のバイオメカニクス論文解説まで、すべての講義資料を網羅。
        </p>
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
