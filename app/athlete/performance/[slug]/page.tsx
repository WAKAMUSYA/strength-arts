'use client'

import React, { useMemo } from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { 
  ChevronLeft, 
  Activity, 
  FlaskConical,
  Users,
  Compass,
  Lightbulb,
  Target
} from 'lucide-react'
import { PERFORMANCE_ARTICLES } from '@/data/performanceArticles'
import ArticleRenderer from '@/components/ArticleRenderer'

export default function PerformanceArticlePage({ params }: { params: { slug: string } }) {
  const { slug } = params

  const article = useMemo(() => {
    return PERFORMANCE_ARTICLES.find(art => art.slug === slug)
  }, [slug])

  if (!article) {
    return notFound()
  }

  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-900 selection:text-white pb-32">
      
      {/* 1. Hero Header */}
      <section className="relative pt-32 pb-16 border-b border-zinc-900 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-cyan-950/40 via-black to-black">
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-500 mb-8">
            <Link href="/athlete" className="hover:text-cyan-400 transition-colors">ATHLETE</Link>
            <span>/</span>
            <Link href="/athlete/performance" className="hover:text-cyan-400 transition-colors">PERFORMANCE LAB</Link>
            <span>/</span>
            <span className="text-cyan-500 font-semibold">{slug.toUpperCase()}</span>
          </div>

          <span className="inline-flex items-center gap-1.5 text-[9px] font-extrabold text-cyan-400 bg-cyan-950/40 border border-cyan-900/40 px-3 py-1 rounded-full uppercase tracking-widest mb-6 shadow-sm">
            <Activity className="w-3.5 h-3.5 text-cyan-500" /> {article.category}
          </span>

          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
            {article.title}
          </h1>

          <div className="mt-8 flex items-center gap-4 text-xs font-mono text-zinc-500 border-t border-zinc-900/80 pt-6">
            <span className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded">LEVEL: {article.level}</span>
            <span>READ TIME: {article.readTime}</span>
          </div>

        </div>
      </section>

      {/* 2. Article Content Body (4-Part Structure) */}
      <section className="max-w-4xl mx-auto px-6 mt-16 space-y-20">

        {/* ① テーマ (Theme) */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 border-b border-zinc-900 pb-4">
            <div className="p-2 bg-cyan-950/30 rounded-lg border border-cyan-900/50">
              <Compass className="w-5 h-5 text-cyan-500" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white">① 探究テーマ</h2>
          </div>
          <div className="p-6 md:p-8 rounded-2xl border border-cyan-900/30 bg-cyan-950/10 shadow-lg space-y-4">
            <h3 className="text-lg font-bold text-cyan-400">{article.theme.question}</h3>
            <p className="text-sm text-zinc-300 leading-relaxed font-light">
              {article.theme.overview}
            </p>
          </div>
        </div>

        {/* ② 科学的な解説 (Science) */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 border-b border-zinc-900 pb-4">
            <div className="p-2 bg-blue-950/30 rounded-lg border border-blue-900/50">
              <FlaskConical className="w-5 h-5 text-blue-500" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white">② 科学的な解説</h2>
          </div>
          <div className="prose prose-invert prose-zinc max-w-none prose-headings:text-white prose-p:text-zinc-300 prose-p:font-light prose-p:leading-relaxed prose-strong:text-blue-400">
            <h3 className="text-lg font-bold text-zinc-100">{article.science.title}</h3>
            <ArticleRenderer content={article.science.content} />
          </div>
        </div>

        {/* ③ 実践への応用 (Practical) */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 border-b border-zinc-900 pb-4">
            <div className="p-2 bg-emerald-950/30 rounded-lg border border-emerald-900/50">
              <Users className="w-5 h-5 text-emerald-500" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white">③ 現場での思考転換</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-zinc-950 border border-zinc-900 p-6 rounded-xl space-y-3 hover:border-emerald-900/40 transition-colors">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-500">For High School</span>
              <h4 className="text-sm font-bold text-white">高校生アスリート</h4>
              <p className="text-xs text-zinc-400 leading-relaxed font-light whitespace-pre-wrap">{article.practical.highSchool.replace('高校生アスリート：\n', '')}</p>
            </div>
            <div className="bg-zinc-950 border border-zinc-900 p-6 rounded-xl space-y-3 hover:border-emerald-900/40 transition-colors">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-500">For General</span>
              <h4 className="text-sm font-bold text-white">一般アスリート</h4>
              <p className="text-xs text-zinc-400 leading-relaxed font-light whitespace-pre-wrap">{article.practical.general.replace('一般アスリート：\n', '')}</p>
            </div>
            <div className="bg-zinc-950 border border-zinc-900 p-6 rounded-xl space-y-3 hover:border-emerald-900/40 transition-colors">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-500">For Coaches</span>
              <h4 className="text-sm font-bold text-white">指導者</h4>
              <p className="text-xs text-zinc-400 leading-relaxed font-light whitespace-pre-wrap">{article.practical.coach.replace('指導者：\n', '')}</p>
            </div>
          </div>
        </div>

        {/* ④ 選手のための実践アクション (Action Plan) */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 border-b border-zinc-900 pb-4">
            <div className="p-2 bg-cyan-950/30 rounded-lg border border-cyan-900/50">
              <Target className="w-5 h-5 text-cyan-500" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white">④ 選手のための実践アクション</h2>
          </div>
          <div className="p-8 rounded-2xl border border-cyan-900/30 bg-gradient-to-br from-zinc-950 to-cyan-950/10 shadow-lg space-y-6">
            <h3 className="text-lg font-bold text-cyan-400 border-l-4 border-cyan-500 pl-4">{article.actionPlan?.title || '実践プラン'}</h3>
            <div className="prose prose-invert prose-zinc max-w-none prose-headings:text-white prose-p:text-zinc-300 prose-p:font-light prose-p:leading-relaxed prose-strong:text-cyan-400">
              <ArticleRenderer content={article.actionPlan?.content || ''} />
            </div>
          </div>
        </div>

        {/* ⑤ Strength Artsの考察 (Insight) */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 border-b border-zinc-900 pb-4">
            <div className="p-2 bg-purple-950/30 rounded-lg border border-purple-900/50">
              <Lightbulb className="w-5 h-5 text-purple-500" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white">⑤ Strength Artsの考察</h2>
          </div>
          <div className="p-8 rounded-2xl border border-purple-900/30 bg-gradient-to-br from-zinc-950 to-purple-950/10 shadow-lg space-y-6">
            <h3 className="text-lg font-bold text-purple-400 border-l-4 border-purple-500 pl-4">{article.insight.title}</h3>
            <div className="prose prose-invert prose-zinc max-w-none prose-headings:text-white prose-p:text-zinc-300 prose-p:font-light prose-p:leading-relaxed prose-strong:text-purple-400">
              <ArticleRenderer content={article.insight.content} />
            </div>
          </div>
        </div>

      </section>

      {/* 3. Footer Navigation */}
      <section className="max-w-4xl mx-auto px-6 mt-24 text-center border-t border-zinc-900 pt-12">
        <Link 
          href="/athlete/performance" 
          className="inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white font-bold py-3.5 px-8 rounded-full transition-all duration-300 shadow-md group"
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          アスリート能力研究所トップへ戻る
        </Link>
      </section>

    </main>
  )
}
