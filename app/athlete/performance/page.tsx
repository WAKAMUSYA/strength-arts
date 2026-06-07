'use client'

import React, { useMemo } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  Clock,
  ChevronRight,
  Activity,
  BookOpen,
  ChevronLeft
} from 'lucide-react'
import { PERFORMANCE_ARTICLES } from '@/data/performanceArticles'

const OBSTACLES = [
  { label: '足を速くしたい', desc: 'スタートダッシュと最高速度の向上' },
  { label: 'ジャンプ力を上げたい', desc: '垂直跳びや滞空時間の最大化' },
  { label: '切り返しを速くしたい', desc: 'アジリティと減速能力の強化' },
  { label: '当たり負けしない身体', desc: '絶対筋力とコアスタビリティ' },
  { label: '柔軟性を高めたい', desc: '可動域とモビリティの獲得' }
]

export default function PerformanceLab() {
  const mustReadArticles = useMemo(() => {
    return PERFORMANCE_ARTICLES.filter(art => art.level === 'BASIC')
  }, [])

  const advancedArticles = useMemo(() => {
    return PERFORMANCE_ARTICLES.filter(art => art.level === 'INTERMEDIATE' || art.level === 'ADVANCED')
  }, [])

  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-900 selection:text-white pb-32">

      {/* 1. Portal Branded Hero Banner */}
      <section className="relative overflow-hidden border-b border-zinc-900 pt-32 pb-20 bg-zinc-950">
        <div className="absolute inset-0 bg-[url('/sports2.jpg')] bg-cover bg-center bg-no-repeat opacity-40 grayscale-[30%]" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-cyan-900/30 via-transparent to-transparent" />

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="bg-black/40 backdrop-blur-md rounded-3xl border border-white/5 shadow-2xl p-6 md:p-12 text-center space-y-6">
            
            <div className="flex items-center justify-center gap-2 mb-4">
              <Link href="/athlete" className="text-xs font-bold text-zinc-500 hover:text-cyan-400 transition-colors flex items-center gap-1 absolute top-6 left-6 md:top-8 md:left-8">
                <ChevronLeft className="w-4 h-4" /> 競技別一覧に戻る
              </Link>
              <span className="inline-flex items-center gap-1.5 text-[10px] font-extrabold text-cyan-400 bg-cyan-950/40 border border-cyan-900/40 px-3 py-1 rounded-full uppercase tracking-widest mt-8 md:mt-0">
                <Activity className="w-3.5 h-3.5 text-cyan-400" /> Athlete Performance Lab
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-tight">
              アスリート能力<span className="text-cyan-500 font-extrabold relative inline-block">研究所</span>
            </h1>

            <p className="text-base md:text-lg font-bold text-zinc-300">
              ー 筋肥大を超えた、競技パフォーマンス向上のための科学と実践 ー
            </p>

            <p className="text-xs md:text-sm text-zinc-300 leading-relaxed font-light max-w-2xl mx-auto">
              スプリント、ジャンプ力、敏捷性、柔軟性。高校生からトップアスリート、そして指導者に至るまで、スポーツパフォーマンスを本質から引き上げるための身体能力を探究する研究所。
            </p>

            <div className="pt-6 flex justify-center">
              <Link
                href="/athlete/performance/articles"
                className="group relative inline-flex items-center justify-center gap-2 bg-cyan-900 hover:bg-cyan-800 text-white font-bold py-3.5 px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-cyan-900/40 border border-cyan-700/50"
              >
                <BookOpen className="w-4 h-4" />
                全コラム一覧を見る
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 2. 基礎理論 (Basic Theory) */}
      <section className="py-20 bg-black border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center space-y-3 mb-12">
            <span className="text-[10px] font-extrabold text-cyan-500 tracking-wider uppercase block">
              BASIC THEORY
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
              基本理論
            </h2>
            <p className="text-xs text-zinc-450 max-w-xl mx-auto leading-relaxed font-light">
              身体能力向上の大前提となる、土台の科学的アプローチ。
            </p>
          </div>

          <div className="overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-zinc-950 flex gap-6 -mx-6 px-6">
            {mustReadArticles.map((art, idx) => (
              <Link
                key={art.id}
                href={`/athlete/performance/${art.slug}`}
                className="w-[280px] md:w-[350px] shrink-0 bg-zinc-950/40 border border-zinc-900 hover:border-zinc-800 rounded-xl p-4 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-xl hover:bg-zinc-900/10 cursor-pointer"
              >
                <div className="space-y-4">
                  <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden bg-zinc-900">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
                    <img
                      src={art.image}
                      alt={art.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 opacity-80"
                    />
                    <span className="absolute top-2 left-2 z-20 text-[8px] font-extrabold text-cyan-400 bg-zinc-950/90 border border-zinc-900 px-2 py-0.5 rounded tracking-widest uppercase">
                      LECTURE 0{idx + 1}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[9px] font-mono text-zinc-500">
                      <span className="uppercase tracking-widest text-cyan-400 font-semibold">{art.category}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {art.readTime}</span>
                    </div>
                    <h3 className="text-sm md:text-base font-bold text-white group-hover:text-cyan-400 transition-colors leading-snug">
                      {art.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed font-light line-clamp-3">
                      {art.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-zinc-900 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                  <span className="bg-zinc-900 text-zinc-400 border border-zinc-850 px-2.5 py-0.5 rounded text-[8px] uppercase tracking-wider font-semibold">LEVEL: {art.level}</span>
                  <span className="text-zinc-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all flex items-center gap-1 font-bold">
                    探究する <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 応用・探究 (Advanced Lecture) */}
      <section className="py-20 bg-zinc-950/20 border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center space-y-3 mb-12">
            <span className="text-[10px] font-extrabold text-cyan-500 tracking-wider uppercase block">
              ADVANCED LECTURE
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
              応用・探究
            </h2>
            <p className="text-xs text-zinc-450 max-w-xl mx-auto leading-relaxed font-light">
              バイオメカニクスや力学の視点から、競技パフォーマンスの深い本質を探求します。
            </p>
          </div>

          <div className="overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-zinc-950 flex gap-6 -mx-6 px-6">
            {advancedArticles.map((art) => (
              <Link
                key={art.id}
                href={`/athlete/performance/${art.slug}`}
                className="w-[280px] md:w-[350px] shrink-0 bg-zinc-950 border border-zinc-900 hover:border-cyan-900/50 rounded-xl p-4 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-xl hover:bg-zinc-900/10 cursor-pointer"
              >
                <div className="space-y-4">
                  <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden bg-zinc-900">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
                    <img
                      src={art.image}
                      alt={art.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 opacity-80"
                    />
                    <span className="absolute top-2 left-2 z-20 text-[8px] font-extrabold text-zinc-300 bg-zinc-900/90 border border-zinc-700 px-2 py-0.5 rounded tracking-widest uppercase">
                      ADVANCED
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[9px] font-mono text-zinc-500">
                      <span className="uppercase tracking-widest text-cyan-400 font-semibold">{art.category}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {art.readTime}</span>
                    </div>
                    <h3 className="text-sm md:text-base font-bold text-white group-hover:text-cyan-400 transition-colors leading-snug">
                      {art.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed font-light line-clamp-3">
                      {art.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-zinc-900 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                  <span className="bg-zinc-900 text-zinc-400 border border-zinc-850 px-2.5 py-0.5 rounded text-[8px] uppercase tracking-wider font-semibold">LEVEL: {art.level}</span>
                  <span className="text-zinc-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all flex items-center gap-1 font-bold">
                    探究する <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/athlete/performance/articles"
              className="inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-cyan-900/50 text-zinc-300 hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-md group"
            >
              <BookOpen className="w-4 h-4 text-cyan-500 group-hover:scale-110 transition-transform" />
              すべての記事を見る
            </Link>
          </div>
        </div>
      </section>

      {/* 4. 悩み・壁から探す (Diagnostic Network) */}
      <section className="py-20 bg-black border-b border-zinc-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center space-y-3 mb-12">
            <span className="text-[10px] font-extrabold text-cyan-500 tracking-wider uppercase block">
              DIAGNOSTIC NETWORK
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
              目的・壁から探す
            </h2>
            <p className="text-xs text-zinc-450 max-w-md mx-auto leading-relaxed font-light">
              アスリートが直面する課題を選択し、解決策となるコラムを絞り込みます。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {OBSTACLES.map((obs) => (
              <Link
                href={`/athlete/performance/articles?goal=${obs.label}`}
                key={obs.label}
                className="p-5 rounded-xl border border-zinc-900 bg-zinc-950 text-left flex flex-col justify-between hover:border-cyan-500 hover:bg-cyan-950/20 hover:shadow-xl hover:shadow-cyan-500/10 text-zinc-300 transition-all duration-300 group cursor-pointer block"
              >
                <div className="space-y-2">
                  <span className="text-[8px] font-extrabold font-mono tracking-widest uppercase block text-zinc-550 group-hover:text-cyan-400">
                    GOAL SEARCH
                  </span>
                  <h3 className="text-sm md:text-base font-bold leading-tight group-hover:text-white">
                    {obs.label}
                  </h3>
                </div>
                <p className="text-xs leading-relaxed font-light mt-4 block text-zinc-500 group-hover:text-zinc-300">
                  {obs.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
