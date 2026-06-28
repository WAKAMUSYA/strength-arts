'use client'

import React, { useState, useEffect, Suspense } from 'react'
import Link from 'next/link'
import { useSearchParams, useRouter } from 'next/navigation'
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
import { GOLF_ARTICLES } from '@/data/golfArticles'
import { getBulkArticleStatus, getSAMemberStatus } from '@/app/actions/sa-member'
import { CheckCircle2, Lock } from 'lucide-react'

const OBSTACLES = [
  { label: '飛距離が伸びない', desc: 'ヘッドスピードが上がらず、ボール初速が出ない' },
  { label: 'スライスが直らない', desc: '軌道がアウトサイドインになり、フェースが開く' },
  { label: 'ダフリ・トップが出る', desc: 'アーリーエクステンション（起き上がり）が起きている' },
  { label: '腰や背中が痛い', desc: '関節の役割分担ができず、腰椎を過剰に捻っている' },
  { label: 'コースでスイングが崩れる', desc: '練習場では打てるのに、本番でフォームが分からなくなる' }
]

function ArticlesContent() {
  const router = useRouter()
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

  const [statuses, setStatuses] = useState<Record<string, { isFavorite: boolean; isRead: boolean }>>({})
  const [isMember, setIsMember] = useState<boolean | null>(null)

  useEffect(() => {
    const fetchStatuses = async () => {
      const ids = GOLF_ARTICLES.map(art => `golf/${art.slug}`)
      try {
        const res = await getBulkArticleStatus(ids)
        setStatuses(res)
      } catch (e) {
        console.error(e)
      }
    }
    
    const checkAuth = async () => {
      try {
        const status = await getSAMemberStatus()
        setIsMember(status.isMember)
      } catch (e) {
        console.error(e)
      }
    }

    checkAuth()
    fetchStatuses()
  }, [])


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
    }
  }, [searchParams])

  const handleTabChange = (tab: 'basic' | 'applied' | 'program') => {
    setActiveTab(tab);
    setSelectedObstacle(null);
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set('tab', tab);
    newParams.delete('obstacle');
    router.replace("?" + newParams.toString(), { scroll: false });
  };


  const filteredArticles = GOLF_ARTICLES.filter(art => {
    if (selectedObstacle) {
      const OBSTACLE_MAP: Record<string, string[]> = {
        '飛距離が伸びない': ['golf-1', 'golf-6', 'golf-8', 'golf-9', 'golf-15', 'golf-19'],
        'スライスが直らない': ['golf-3', 'golf-4', 'golf-11'],
        'ダフリ・トップが出る': ['golf-7', 'golf-12', 'golf-13', 'golf-21'],
        '腰や背中が痛い': ['golf-2', 'golf-5', 'golf-10', 'golf-14'],
        'コースでスイングが崩れる': ['golf-16', 'golf-17', 'golf-18', 'golf-20', 'golf-21']
      };
      const allowedIds = OBSTACLE_MAP[selectedObstacle] || [];
      return allowedIds.includes(art.id);
    }
    
    return art.type === activeTab;
  })

  return (
    <div className="max-w-6xl mx-auto px-6 mt-8">
      {/* 🚀 TAB TRIGGER CONTROLS */}
      <div className="flex justify-center mb-12">
        <div className="grid grid-cols-3 gap-1 bg-zinc-950 p-1.5 rounded-2xl border border-zinc-900 shadow-inner w-full max-w-2xl">
          <button
            onClick={() => handleTabChange('basic')}
            className={`flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-1.5 py-2 sm:py-3.5 px-1 sm:px-3 rounded-xl font-bold text-[10px] sm:text-xs transition-all duration-300 cursor-pointer ${
              activeTab === 'basic' && !selectedObstacle
                ? 'bg-gradient-to-r from-emerald-950/60 to-emerald-900/40 border border-emerald-800/40 text-white shadow-md'
                : 'text-zinc-550 hover:text-zinc-300'
            }`}
          >
            <BookOpen className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${activeTab === 'basic' && !selectedObstacle ? 'text-emerald-400' : 'text-zinc-600'}`} />
            <span>基本理論</span>
          </button>
          <button
            onClick={() => handleTabChange('applied')}
            className={`flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-1.5 py-2 sm:py-3.5 px-1 sm:px-3 rounded-xl font-bold text-[10px] sm:text-xs transition-all duration-300 cursor-pointer ${
              activeTab === 'applied' && !selectedObstacle
                ? 'bg-gradient-to-r from-emerald-950/60 to-emerald-900/40 border border-emerald-800/40 text-white shadow-md'
                : 'text-zinc-550 hover:text-zinc-300'
            }`}
          >
            <Layers className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${activeTab === 'applied' && !selectedObstacle ? 'text-emerald-400' : 'text-zinc-600'}`} />
            <span>応用・探究</span>
          </button>
          <button
            onClick={() => handleTabChange('program')}
            className={`flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-1.5 py-2 sm:py-3.5 px-1 sm:px-3 rounded-xl font-bold text-[10px] sm:text-xs transition-all duration-300 cursor-pointer ${
              activeTab === 'program' && !selectedObstacle
                ? 'bg-gradient-to-r from-emerald-950/60 to-emerald-900/40 border border-emerald-800/40 text-white shadow-md'
                : 'text-zinc-550 hover:text-zinc-300'
            }`}
          >
            <Activity className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${activeTab === 'program' && !selectedObstacle ? 'text-emerald-400' : 'text-zinc-600'}`} />
            <span>実践プログラム</span>
          </button>
        </div>
      </div>

      {/* 🛑 OBSTACLE FILTER */}
      <div className="mb-10 animate-fadeIn">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-[10px] font-extrabold text-emerald-500 tracking-wider uppercase block">
            DIAGNOSTIC FILTER
          </span>
          <span className="text-xs text-zinc-500 font-light">
            ー 現在の悩み・壁から絞り込む
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => {
              setSelectedObstacle(null);
              const newParams = new URLSearchParams(searchParams.toString());
              newParams.delete('obstacle');
              router.replace("?" + newParams.toString(), { scroll: false });
            }}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 border ${
              selectedObstacle === null
                ? 'bg-emerald-950/40 border-emerald-500 text-white shadow-md'
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
                onClick={() => {
                  const newObs = isActive ? null : obs.label;
                  setSelectedObstacle(newObs);
                  const newParams = new URLSearchParams(searchParams.toString());
                  if (newObs) newParams.set('obstacle', newObs);
                  else newParams.delete('obstacle');
                  router.replace("?" + newParams.toString(), { scroll: false });
                }}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 border flex items-center gap-2 ${
                  isActive
                    ? 'bg-emerald-950/40 border-emerald-500 text-white shadow-md shadow-emerald-500/10'
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
        
        {filteredArticles.map((art) => {
          const articleId = `golf/${art.slug}`;
          const isRead = statuses[articleId]?.isRead;
          const isFavorite = statuses[articleId]?.isFavorite;
          
          return (
          <Link
            key={art.id}
            href={`/lab/golf/${art.slug}`}
            className="group cursor-pointer bg-zinc-950/40 border border-zinc-900 hover:border-emerald-900/60 hover:bg-zinc-900/10 rounded-2xl p-6 transition-all duration-500 flex flex-col justify-between hover:shadow-2xl hover:shadow-emerald-950/10 relative overflow-hidden"
          >
            
            {/* Hover overlay for program content (Non-PRO members) */}
            {isMember === false && art.type === 'program' && (
              <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 flex items-center justify-center rounded-2xl pointer-events-none">
                <div className="bg-zinc-900 border border-blue-900/50 text-white text-xs font-bold px-5 py-3 rounded-full flex items-center gap-2 shadow-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <Lock className="w-4 h-4 text-blue-400" />
                  PROプラン限定
                </div>
              </div>
            )}
            
            {/* Soft decorative accent glow */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition-colors duration-500" />
            
            <div className="space-y-5 relative z-10">
              {/* Top meta tags */}
              
              <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 border-b border-zinc-900/60 pb-3">
                <div className="flex items-center gap-3">
                  <span className="uppercase tracking-widest font-extrabold flex items-center gap-1">
                    <Bookmark className="w-3.5 h-3.5" /> {art.category}
                  </span>
                  {isRead && (
                    <span className="flex items-center gap-1 text-emerald-500 font-bold bg-emerald-950/30 px-1.5 py-0.5 rounded border border-emerald-900/50">
                      <CheckCircle2 className="w-3 h-3" /> 既読
                    </span>
                  )}
                  {isFavorite && (
                    <span className="flex items-center gap-1 text-blue-400 font-bold bg-blue-950/30 px-1.5 py-0.5 rounded border border-blue-900/50">
                      <Bookmark className="w-3 h-3 fill-current" /> 保存済
                    </span>
                  )}
                </div>

                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 読了目安: {art.readTime}</span>
              </div>

              {/* Title */}
              <div className="space-y-1">
                <h3 className="text-lg md:text-xl font-black text-white group-hover:text-emerald-400 transition-colors leading-tight">
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
              <span className="text-zinc-400 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all flex items-center gap-1 font-bold">
                解説を開く <ChevronRight className="w-4 h-4 text-emerald-500" />
              </span>
            </div>
          </Link>
          )
        })}
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

export default function GolfArticlesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white selection:bg-emerald-900 selection:text-white pb-32">
      
      {/* 🚀 HEADER & NAVIGATION */}
      <nav className="border-b border-zinc-900 bg-zinc-950/40 backdrop-blur-md sticky top-16 z-30 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link 
            href="/lab/golf" 
            className="text-xs font-mono font-bold text-zinc-500 hover:text-emerald-500 transition-colors inline-flex items-center gap-1 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> BACK TO LAB
          </Link>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 text-[8px] font-extrabold text-emerald-500 bg-emerald-950/40 border border-emerald-900/40 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5 text-emerald-500" /> LECTURE INDEX
            </span>
            <span className="text-[10px] text-zinc-550 font-mono hidden sm:inline">SA-GOLF-LECTURES</span>
          </div>
        </div>
      </nav>

      {/* 🚀 PAGE TITLE */}
      <header className="max-w-6xl mx-auto px-6 pt-16 pb-8 text-center space-y-4">
        <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white">
          ゴルフ研究所<br className="sm:hidden" /> コラムアーカイブ
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
