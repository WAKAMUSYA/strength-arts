'use client'

import React from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { 
  ArrowLeft, 
  Clock, 
  Activity, 
  ShieldAlert, 
  BookOpen, 
  CornerDownRight, 
  Bookmark, 
  Compass, 
  ChevronRight,
  Info,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react'
import { BENCHPRESS_ARTICLES } from '@/data/benchpressArticles'

export default function ArticleDetailPage() {
  const params = useParams()
  const slug = params?.slug as string
  
  const article = BENCHPRESS_ARTICLES.find(art => art.slug === slug)

  if (!article) {
    return (
      <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center p-6 text-center text-zinc-100">
        <div className="w-16 h-16 bg-red-950/30 border border-red-900/50 text-red-400 rounded-2xl flex items-center justify-center mb-4">
          <ShieldAlert className="w-8 h-8" />
        </div>
        <h1 className="text-xl font-bold text-white mb-2">コラムが見つかりませんでした</h1>
        <p className="text-sm text-zinc-400 mb-6">
          指定されたコラム（ID: {slug}）は現在執筆中、または存在しないURLです。
        </p>
        <Link 
          href="/lab/benchpress" 
          className="text-xs font-mono font-bold text-blue-400 hover:underline inline-flex items-center gap-1"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> ベンチプレス研究所へ戻る
        </Link>
      </div>
    )
  }

  // ノートのタイプごとに適切なアイコンを返すヘルパー
  const getNoteIcon = (type: 'warning' | 'info' | 'success') => {
    switch (type) {
      case 'warning':
        return <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5 text-amber-400" />
      case 'success':
        return <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-emerald-400" />
      case 'info':
      default:
        return <Info className="w-5 h-5 shrink-0 mt-0.5 text-blue-400" />
    }
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-200 font-sans antialiased selection:bg-blue-900/50 selection:text-blue-100 pb-32">
      
      {/* 🚀 STICKY READING PROGRESS SHEET HEADER */}
      <div className="sticky top-16 z-30 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900 px-6 py-3.5 flex items-center justify-between text-xs text-zinc-500 font-mono">
        <div className="flex items-center gap-2 max-w-lg truncate">
          <Link 
            href="/lab/benchpress" 
            className="hover:text-blue-400 transition-colors flex items-center gap-1 shrink-0 font-bold"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> LAB HUB
          </Link>
          <span className="text-zinc-700">/</span>
          <span className="truncate text-zinc-300 font-bold">{article.title}</span>
        </div>
        <div className="hidden sm:flex items-center gap-4 shrink-0">
          <span className="flex items-center gap-1 uppercase text-blue-400 font-bold"><Activity className="w-3.5 h-3.5" /> {article.category}</span>
          <span className="bg-zinc-900 text-zinc-400 px-2 py-0.5 rounded text-[10px] border border-zinc-800">LEVEL: {article.level}</span>
        </div>
      </div>

      {/* ARTICLE CONTAINER */}
      <div className="max-w-4xl mx-auto px-6 mt-12">
        
        {/* Article Title Meta Header */}
        <div className="space-y-4 mb-10 pb-8 border-b border-zinc-900">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 text-[9px] font-extrabold text-blue-400 bg-blue-950/50 border border-blue-900/50 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              <BookOpen className="w-3 h-3" /> SA SPECIAL LECTURE
            </span>
            <span className="text-[10px] text-zinc-500 font-mono">CODE: BP-ART-{slug.toUpperCase()}</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
            {article.title}
          </h1>

          <p className="text-base md:text-lg text-zinc-400 font-medium leading-relaxed italic">
            ー {article.subtitle}
          </p>

          <div className="flex items-center gap-4 text-xs text-zinc-500 font-mono pt-2">
            <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 読了時間: {article.readTime}</span>
            <span>レベル: {article.level}</span>
          </div>
        </div>

        {/* Overview Box / 要約 */}
        <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-900 shadow-sm mb-12 space-y-3">
          <h3 className="text-xs font-mono font-extrabold text-blue-400 flex items-center gap-1.5 uppercase tracking-widest">
            <Compass className="w-4 h-4 text-blue-400" /> 要約
          </h3>
          <p className="text-sm md:text-base text-zinc-300 leading-relaxed font-light whitespace-pre-line">
            {article.overview}
          </p>
        </div>

        {/* Dynamic Section Contents */}
        <div className="space-y-16">
          {article.sections.map((sect, i) => (
            <div key={i} className="space-y-6">
              
              {/* Section Title */}
              <h2 className="text-xl md:text-2xl font-black text-white tracking-tight border-b border-zinc-900 pb-3 flex items-center gap-2">
                <CornerDownRight className="w-5 h-5 text-blue-400 shrink-0" />
                {sect.title}
              </h2>

              {/* Section Paragraphs */}
              <div className="space-y-4">
                {sect.paragraphs.map((p, idx) => (
                  <p key={idx} className="text-sm md:text-base text-zinc-300 leading-relaxed font-light whitespace-pre-line">
                    {p}
                  </p>
                ))}
              </div>

              {/* Section Note Block */}
              {sect.note && (
                <div className={`p-5 rounded-xl border flex gap-3.5 ${
                  sect.note.type === 'warning' 
                    ? 'bg-amber-950/20 border-amber-900/30 text-amber-200' 
                    : sect.note.type === 'success'
                    ? 'bg-emerald-950/20 border-emerald-900/30 text-emerald-200'
                    : 'bg-blue-950/20 border-blue-900/30 text-blue-200'
                }`}>
                  {getNoteIcon(sect.note.type)}
                  <div className="space-y-1.5">
                    <span className="font-bold text-xs md:text-sm block">{sect.note.title}</span>
                    <p className="text-xs md:text-sm leading-relaxed font-light whitespace-pre-line">
                      {sect.note.content}
                    </p>
                  </div>
                </div>
              )}

              {/* Section Bullets */}
              {sect.bullets && (
                <ul className="space-y-3.5 pl-1.5 my-6">
                  {sect.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-blue-950/50 border border-blue-900/40 text-blue-400 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span className="text-zinc-300 text-sm md:text-[15px] leading-relaxed font-light">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              )}

            </div>
          ))}
        </div>

        {/* Conclusion Summary Sheet / まとめ */}
        <div className="mt-20 p-6 md:p-8 rounded-2xl bg-zinc-900/80 border border-zinc-800 text-zinc-100 shadow-xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold text-blue-400 font-mono">
            <Bookmark className="w-4 h-4 text-blue-400" />
            <span>まとめ</span>
          </div>
          <p className="text-xs md:text-sm text-zinc-300 leading-relaxed font-light whitespace-pre-line">
            {article.conclusion}
          </p>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-20 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link 
            href="/lab/benchpress" 
            className="text-xs font-mono font-bold text-zinc-500 hover:text-blue-400 transition-colors inline-flex items-center gap-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> BACK TO BENCHPRESS LAB
          </Link>

          {article.nextArticle && (
            <Link 
              href={`/lab/benchpress/${article.nextArticle.slug}`}
              className="group p-4 rounded-xl border border-zinc-850 bg-zinc-900/20 hover:border-blue-900/60 hover:shadow-md transition-all duration-300 text-right flex flex-col items-end gap-1"
            >
              <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest flex items-center gap-1">
                NEXT LECTURE <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </span>
              <span className="text-xs font-bold text-zinc-300 group-hover:text-blue-400 transition-colors">
                {article.nextArticle.title}
              </span>
            </Link>
          )}
        </div>

      </div>

    </main>
  )
}
