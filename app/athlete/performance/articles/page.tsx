'use client'

import React, { useMemo, Suspense } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Clock, ChevronLeft, ArrowRight, Filter } from 'lucide-react'
import { PERFORMANCE_ARTICLES } from '@/data/performanceArticles'

function ArticlesList() {
  const searchParams = useSearchParams()
  const goal = searchParams.get('goal')

  const filteredArticles = useMemo(() => {
    let articles = [...PERFORMANCE_ARTICLES]
    if (goal) {
      if (goal === '足を速くしたい') {
        articles = articles.filter(a => a.type === 'sprint' || a.type === 'power')
      } else if (goal === 'ジャンプ力を上げたい') {
        articles = articles.filter(a => a.type === 'jump' || a.type === 'power' || a.type === 'strength')
      } else if (goal === '切り返しを速くしたい') {
        articles = articles.filter(a => a.type === 'agility' || a.type === 'balance')
      } else if (goal === '当たり負けしない身体') {
        articles = articles.filter(a => a.type === 'strength' || a.type === 'balance')
      } else if (goal === '柔軟性を高めたい') {
        articles = articles.filter(a => a.type === 'flexibility')
      }
    }
    return articles
  }, [goal])

  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-900 selection:text-white pb-32">
      <section className="relative pt-32 pb-12 border-b border-zinc-900 bg-zinc-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-cyan-950/20 via-black to-black" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-500 mb-8">
            <Link href="/athlete" className="hover:text-cyan-400 transition-colors">ATHLETE</Link>
            <span>/</span>
            <Link href="/athlete/performance" className="hover:text-cyan-400 transition-colors">PERFORMANCE LAB</Link>
            <span>/</span>
            <span className="text-cyan-500 font-semibold">ALL ARTICLES</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4">
            研究コラム一覧
          </h1>
          {goal && (
            <div className="inline-flex items-center gap-2 bg-cyan-950/40 border border-cyan-900/50 px-4 py-2 rounded-lg text-cyan-400 text-xs font-bold">
              <Filter className="w-4 h-4" />
              目的別フィルター: {goal}
            </div>
          )}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredArticles.map((art) => (
            <Link
              key={art.id}
              href={`/athlete/performance/${art.slug}`}
              className="group relative bg-zinc-950/60 border border-zinc-900 hover:border-cyan-900/60 rounded-2xl overflow-hidden transition-all duration-500 shadow-lg hover:shadow-cyan-900/20 flex flex-col h-full"
            >
              <div className="relative h-48 w-full overflow-hidden bg-zinc-900">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent z-10" />
                <img
                  src={art.image}
                  alt={art.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-80"
                />
                <span className="absolute top-4 left-4 z-20 text-[9px] font-extrabold text-cyan-300 bg-cyan-950/80 border border-cyan-800/50 px-2.5 py-1 rounded tracking-widest uppercase shadow-sm">
                  {art.category}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-grow justify-between bg-gradient-to-b from-zinc-950 to-zinc-950/80">
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500">
                    <span className="bg-zinc-900 text-zinc-400 border border-zinc-850 px-2 py-0.5 rounded uppercase font-semibold">
                      LEVEL: {art.level}
                    </span>
                    <span className="flex items-center gap-1.5 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-850 text-zinc-400">
                      <Clock className="w-3 h-3" /> {art.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-cyan-400 transition-colors leading-snug">
                    {art.title}
                  </h3>
                  <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/50">
                    <span className="text-[10px] font-bold text-cyan-500 block mb-1">【研究テーマ】</span>
                    <p className="text-xs text-zinc-300 leading-relaxed font-medium">
                      {art.theme.question}
                    </p>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed font-light line-clamp-2">
                    {art.desc}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-zinc-900/80 flex items-center justify-end text-[10px] font-mono text-zinc-500">
                  <span className="text-cyan-500 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    講読する <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 mt-12 text-center border-t border-zinc-900 pt-12">
        <Link 
          href="/athlete/performance" 
          className="inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white font-bold py-3.5 px-8 rounded-full transition-all duration-300 shadow-md group"
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          研究所トップへ戻る
        </Link>
      </section>
    </main>
  )
}

export default function ArticlesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black text-white flex items-center justify-center">Loading...</div>}>
      <ArticlesList />
    </Suspense>
  )
}
