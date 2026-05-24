'use client'

import React from 'react'
import Link from 'next/link'
import { useParams, notFound } from 'next/navigation'
import {
  ArrowLeft,
  Clock,
  Share2,
  Bookmark,
  ChevronRight,
  ChevronLeft,
  AlertTriangle,
  Info,
  CheckCircle2,
  Activity
} from 'lucide-react'
import { DEADLIFT_ARTICLES } from '@/data/deadliftArticles'

export default function DeadliftArticleDetail() {
  const params = useParams()
  const slug = params.slug as string

  const articleIndex = DEADLIFT_ARTICLES.findIndex(art => art.slug === slug)
  const article = DEADLIFT_ARTICLES[articleIndex]

  if (!article) {
    notFound()
  }

  // Pre-calculate adjacent articles for navigation
  const prevArticle = articleIndex > 0 ? DEADLIFT_ARTICLES[articleIndex - 1] : null
  const nextArticleInList = articleIndex < DEADLIFT_ARTICLES.length - 1 ? DEADLIFT_ARTICLES[articleIndex + 1] : null

  return (
    <main className="min-h-screen bg-black text-white selection:bg-emerald-900 selection:text-white pb-32">

      {/* 🚀 TOP NAVIGATION BAR */}
      <nav className="border-b border-zinc-900 bg-zinc-950/80 backdrop-blur-md sticky top-16 z-40 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link
            href="/lab/deadlift"
            className="text-xs font-mono font-bold text-zinc-400 hover:text-emerald-500 transition-colors inline-flex items-center gap-1.5 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> BACK TO LAB
          </Link>

          <div className="flex gap-4">
            <button className="text-zinc-500 hover:text-white transition-colors">
              <Share2 className="w-4 h-4" />
            </button>
            <button className="text-zinc-500 hover:text-emerald-500 transition-colors">
              <Bookmark className="w-4 h-4" />
            </button>
          </div>
        </div>
      </nav>

      {/* 🚀 ARTICLE HEADER */}
      <header className="relative w-full">
        {/* Cover Image Background */}
        <div className="absolute inset-0 h-[60vh] w-full">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-20" />
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover opacity-50 grayscale"
          />
        </div>

        <div className="relative z-30 max-w-4xl mx-auto px-6 pt-32 pb-16">
          <div className="space-y-6">
            {/* Meta Tags */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
              <span className="bg-emerald-950/80 border border-emerald-900 text-emerald-500 px-3 py-1 rounded-full font-bold tracking-widest flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5" /> {article.category}
              </span>
              <span className="text-zinc-400 flex items-center gap-1 bg-zinc-950/50 px-3 py-1 rounded-full border border-zinc-800">
                <Clock className="w-3.5 h-3.5" /> {article.readTime}
              </span>
              <span className="text-zinc-400 bg-zinc-950/50 px-3 py-1 rounded-full border border-zinc-800">
                LEVEL: {article.level}
              </span>
            </div>

            {/* Titles */}
            <div className="space-y-4 max-w-3xl">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
                {article.title}
              </h1>
              <p className="text-lg md:text-xl text-emerald-500/90 font-bold leading-relaxed">
                {article.subtitle}
              </p>
            </div>

            {/* Author / Date Meta (Mock) */}
            <div className="pt-6 flex items-center gap-4 text-xs font-mono text-zinc-500">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center">
                  <span className="text-[10px] text-zinc-400">SA</span>
                </div>
                <span>STRENGTH ARTS LAB</span>
              </div>
              <span>•</span>
              <span>VER 1.0.0</span>
            </div>
          </div>
        </div>
      </header>

      {/* 🚀 MAIN CONTENT */}
      <article className="max-w-3xl mx-auto px-6 py-12 relative z-30">

        {/* Overview Box */}
        <div className="bg-zinc-950/50 border-l-4 border-emerald-500 p-6 md:p-8 rounded-r-2xl mb-16 text-zinc-300 leading-relaxed font-light text-[15px] md:text-[17px]">
          <p>{article.overview}</p>
        </div>

        {/* Dynamic Sections */}
        <div className="space-y-16">
          {article.sections.map((section, idx) => (
            <section key={idx} className="space-y-6">

              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
                <span className="text-emerald-500/70 text-4xl font-black font-mono">{(idx + 1).toString().padStart(2, '0')}</span>
                {section.title}
              </h2>

              <div className="space-y-6 text-zinc-400 leading-[1.8] font-light text-[15px] md:text-[17px]">
                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>

              {/* Optional Bullets */}
              {section.bullets && (
                <ul className="bg-zinc-950 border border-zinc-900 rounded-xl p-6 space-y-3 mt-8">
                  {section.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-zinc-300 text-sm md:text-base">
                      <ChevronRight className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Optional Callout Note */}
              {section.note && (
                <div className={`mt-8 p-5 rounded-xl border flex gap-4 items-start ${section.note.type === 'warning' ? 'bg-emerald-950/20 border-emerald-900/50 text-emerald-200' :
                    section.note.type === 'success' ? 'bg-emerald-950/20 border-emerald-900/50 text-emerald-200' :
                      'bg-blue-950/20 border-blue-900/50 text-blue-200'
                  }`}>
                  <div className="shrink-0 mt-0.5">
                    {section.note.type === 'warning' && <AlertTriangle className="w-5 h-5 text-emerald-500" />}
                    {section.note.type === 'success' && <CheckCircle2 className="w-5 h-5 text-emerald-500" />}
                    {section.note.type === 'info' && <Info className="w-5 h-5 text-blue-500" />}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">{section.note.title}</h4>
                    <p className="text-sm opacity-80 leading-relaxed">{section.note.content}</p>
                  </div>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* 🚀 CONCLUSION */}
        {article.conclusion && (
          <div className="mt-20 pt-12 border-t border-zinc-900">
            <h3 className="text-lg font-bold text-emerald-500 mb-4 flex items-center gap-2">
              <Bookmark className="w-5 h-5" /> まとめ
            </h3>
            <p className="text-zinc-300 leading-relaxed font-light text-[15px] md:text-[17px]">
              {article.conclusion}
            </p>
          </div>
        )}

        {/* 🚀 ARTICLE TAGS */}
        <div className="mt-12 flex flex-wrap gap-2">
          {article.tags && article.tags.map(tag => (
            <Link
              href={`/lab/deadlift/articles?tag=${tag}`}
              key={tag}
              className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 px-3 py-1.5 rounded-lg text-xs font-mono transition-colors"
            >
              #{tag}
            </Link>
          ))}
        </div>
      </article>

      {/* 🚀 BOTTOM NAVIGATION */}
      <div className="max-w-4xl mx-auto px-6 mt-16">
        
        <div className="flex justify-center mb-12">
          <Link 
            href="/lab/deadlift/articles" 
            className="px-8 py-4 rounded-full bg-zinc-900 hover:bg-emerald-950/50 border border-zinc-800 hover:border-emerald-900 text-sm font-bold text-zinc-300 hover:text-emerald-400 transition-all flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" /> コラム一覧へ戻る
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          {prevArticle ? (
            <Link
              href={`/lab/deadlift/${prevArticle.slug}`}
              className="group p-6 rounded-2xl border border-zinc-900 bg-zinc-950 hover:border-zinc-700 hover:bg-zinc-900 transition-all flex flex-col justify-center"
            >
              <div className="flex items-center gap-2 text-zinc-500 text-xs font-mono mb-2 group-hover:text-white transition-colors">
                <ChevronLeft className="w-4 h-4" /> PREVIOUS ARTICLE
              </div>
              <h4 className="font-bold text-white text-sm md:text-base leading-tight group-hover:text-emerald-500 transition-colors">
                {prevArticle.title}
              </h4>
            </Link>
          ) : <div />}

          {/* Next Article */}
          {(article.nextArticle || nextArticleInList) ? (
            <Link
              href={`/lab/deadlift/${article.nextArticle?.slug || nextArticleInList?.slug}`}
              className="group p-6 rounded-2xl border border-zinc-900 bg-zinc-950 hover:border-emerald-900/50 hover:bg-emerald-950/10 transition-all flex flex-col justify-center text-right"
            >
              <div className="flex items-center justify-end gap-2 text-zinc-500 text-xs font-mono mb-2 group-hover:text-emerald-500 transition-colors">
                NEXT LECTURE <ChevronRight className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-white text-sm md:text-base leading-tight group-hover:text-emerald-500 transition-colors">
                {article.nextArticle?.title || nextArticleInList?.title}
              </h4>
            </Link>
          ) : <div />}

        </div>
      </div>

    </main>
  )
}
