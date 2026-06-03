'use client'

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  Layers,
  Clock,
  ChevronRight,
  ExternalLink,
  Activity,
  Lock,
  X,
  Info,
  BookOpen,
  Dumbbell
} from 'lucide-react'
import { HYPERTROPHY_ARTICLES } from '@/data/hypertrophyArticles'

// --- DATA TYPES ---
interface ResearchPaper {
  id: string
  title: string
  journal: string
  year: number
  doi: string
  findings: string
  citationCount: number
  tag: string
}

const OBSTACLES = [
  { label: '筋肉が大きくならない', desc: '筋トレしてもサイズが変わらない' },
  { label: '形が変わらない', desc: '全体的にのっぺりしている' },
  { label: '筋肉痛がこない', desc: '効いている感覚が全くない' },
  { label: '疲労だけ溜まる', desc: '関節が痛くなるだけで発達しない' }
]

const RESEARCH_PAPERS: ResearchPaper[] = [
  {
    id: 'res-1',
    title: '筋力トレーニングのボリュームと筋肥大の用量反応関係',
    journal: 'Journal of Sports Sciences',
    year: 2017,
    doi: '10.1080/02640414.2016.1210197',
    findings: '週あたりのセット数が多いほど筋肥大効果は高まる傾向にあるが、過剰なボリュームはオーバートレーニングを招く。',
    citationCount: 412,
    tag: 'ボリューム'
  },
  {
    id: 'res-2',
    title: '筋肥大における低負荷と高負荷トレーニングの比較',
    journal: 'European Journal of Sport Science',
    year: 2015,
    doi: '10.1080/17461391.2014.989922',
    findings: '限界まで追い込めば、低負荷（30% 1RM）でも高負荷（80% 1RM）と同等の筋肥大が起こり得る。',
    citationCount: 285,
    tag: '負荷強度'
  }
]

const RELATED_LABS = [
  { title: '胸研究所', label: 'Chest Biomechanics Hub', slug: 'chest', glowColor: 'hover:border-red-500/40 hover:bg-red-950/10' },
  { title: '背中研究所', label: 'Back Biomechanics Hub', slug: 'back', glowColor: 'hover:border-blue-500/40 hover:bg-blue-950/10' },
  { title: '脚トレ研究所', label: 'Legs Training Hub', slug: 'legs', glowColor: 'hover:border-amber-500/40 hover:bg-amber-950/10' }
]

export default function HypertrophyLab() {
  const [activePortal, setActivePortal] = useState<string | null>(null)

  const mustReadArticles = useMemo(() => {
    return HYPERTROPHY_ARTICLES.filter(art => art.type === 'basic')
  }, [])

  const columnArticles = useMemo(() => {
    return HYPERTROPHY_ARTICLES.filter(art => art.type === 'applied')
  }, [])

  const practicalArticles = useMemo(() => {
    return HYPERTROPHY_ARTICLES.filter(art => art.type === 'practical')
  }, [])

  const roadmapSteps = useMemo(() => {
    return HYPERTROPHY_ARTICLES
      .filter(art => typeof art.roadmapNumber === 'number')
      .sort((a, b) => (a.roadmapNumber || 0) - (b.roadmapNumber || 0))
  }, [])

  return (
    <main className="min-h-screen bg-black text-white selection:bg-red-900 selection:text-white pb-32">

{/* ----------------- SECTION ①: HERO ----------------- */}
      <section className="relative overflow-hidden border-b border-zinc-900 pt-32 pb-20 bg-zinc-950">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-[url('/muscle.jpg')] bg-cover bg-center bg-no-repeat opacity-40 grayscale"
        />

        {/* Overlays for readability */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <div className="bg-black/60 backdrop-blur-md rounded-3xl border border-white/10 shadow-2xl p-6 md:p-10 text-center space-y-6">
            <div className="flex items-center justify-center gap-2">
              <span className="inline-flex items-center gap-1.5 text-[9px] font-extrabold text-red-400 bg-red-950/40 border border-red-900/40 px-3 py-1 rounded-full uppercase tracking-widest">
                <Dumbbell className="w-3.5 h-3.5 text-red-500" /> Hypertrophy Science
              </span>
              <span className="text-[10px] text-zinc-400 font-mono">CODE: HYP-LAB-01</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-tight">
              筋肥大<span className="text-red-500 font-extrabold relative inline-block">研究所</span>
            </h1>

            <p className="text-base md:text-lg font-bold text-zinc-300">
              ー 筋肉を最大化する科学的アプローチ ー
            </p>

            <p className="text-xs md:text-sm text-zinc-300 leading-relaxed font-light max-w-2xl mx-auto">
              機械的張力、代謝的ストレス、筋損傷。生理学と力学のエビデンスに基づき、最短で筋量を追加するための理論と実践。
            </p>

            <div className="pt-6 flex justify-center">
              <Link
                href="/lab/hypertrophy/articles"
                className="group relative inline-flex items-center justify-center gap-2 bg-red-900 hover:bg-red-800 text-white font-bold py-3.5 px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-red-900/40 border border-red-700/50"
              >
                <BookOpen className="w-4 h-4" />
                全コラム一覧を見る
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

{/* ----------------- SECTION ②: まず読んでほしい基礎講義 ----------------- */}
      <section className="py-20 bg-black border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center space-y-3 mb-12">
            <span className="text-[10px] font-extrabold text-red-400 tracking-wider uppercase block">
              FACILITY DIRECTORY
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
              基本理論
            </h2>
            <p className="text-xs text-zinc-450 max-w-xl mx-auto leading-relaxed font-light">
              筋肥大の原則を学ぶ基礎講義。
            </p>
          </div>

          {/* Horizontal Swipe Card Container */}
          <div className="overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-zinc-950 flex gap-6 -mx-6 px-6">
            {mustReadArticles.map((art, idx) => (
              <Link
                key={art.id}
                href={`/lab/hypertrophy/${art.slug}`}
                className="w-[280px] md:w-[350px] shrink-0 bg-zinc-950/40 border border-zinc-900 hover:border-zinc-800 rounded-xl p-4 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-xl hover:bg-zinc-900/10 cursor-pointer"
              >
                <div className="space-y-4">
                  {/* Card visual header */}
                  <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden bg-zinc-900">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
                    <img
                      src={art.image}
                      alt={art.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 opacity-80"
                    />
                    <span className="absolute top-2 left-2 z-20 text-[8px] font-extrabold text-red-400 bg-zinc-950/90 border border-zinc-900 px-2 py-0.5 rounded tracking-widest uppercase">
                      LECTURE 0{idx + 1}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[9px] font-mono text-zinc-500">
                      <span className="uppercase tracking-widest text-red-400 font-semibold">{art.category}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {art.readTime}</span>
                    </div>

                    <h3 className="text-sm md:text-base font-bold text-white group-hover:text-red-400 transition-colors leading-snug">
                      {art.title}
                    </h3>

                    <p className="text-xs text-zinc-400 leading-relaxed font-light line-clamp-3">
                      {art.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-zinc-900 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                  <span className="bg-zinc-900 text-zinc-400 border border-zinc-850 px-2.5 py-0.5 rounded text-[8px] uppercase tracking-wider font-semibold">LEVEL: {art.level}</span>
                  <span className="text-zinc-400 group-hover:text-red-400 group-hover:translate-x-1 transition-all flex items-center gap-1 font-bold">
                    探究する <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

{/* ----------------- SECTION ③: 基本から順番に読む「ロードマップ」 ----------------- */}
      <section className="py-20 bg-zinc-950/20 border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center space-y-3 mb-16">
            <span className="text-[10px] font-extrabold text-red-400 tracking-wider uppercase bg-red-950/40 border border-red-900/40 px-3 py-1 rounded-full">
              STRUCTURED PATHWAY
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
              順番に学ぶ
            </h2>
            <p className="text-xs text-zinc-450 max-w-xl mx-auto leading-relaxed font-light">
              筋肥大理論の段階的習得ステップ。
            </p>
          </div>

          {/* Steps Horizontal/Vertical Responsive Scroll */}
          <div className="overflow-x-auto pb-4 -mx-6 px-6 scrollbar-thin scrollbar-thumb-zinc-800">
            <div className="flex gap-5 min-w-[max-content]">
              {roadmapSteps.map((st, idx) => (
                <Link
                  key={st.id}
                  href={`/lab/hypertrophy/${st.slug}`}
                  className="relative w-[280px] shrink-0 bg-zinc-950 border border-zinc-900 rounded-xl p-5 hover:border-red-900 hover:bg-zinc-900/10 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                >
                  {idx < roadmapSteps.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 bg-zinc-950 rounded-full p-1 border border-zinc-900 text-zinc-650 group-hover:text-red-400 group-hover:bg-red-950/30 transition-colors">
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  )}

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-black text-red-600/80 group-hover:text-red-400 transition-colors font-mono">
                        0{st.roadmapNumber}
                      </span>
                      <span className="text-[8px] font-mono text-zinc-550 uppercase tracking-widest">
                        STEP {st.roadmapNumber}
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <p className="text-[9px] font-mono text-red-400/80 uppercase tracking-wide">
                        {st.category}
                      </p>
                      <h3 className="text-sm font-bold text-white group-hover:text-red-400 transition-colors leading-tight">
                        {st.title}
                      </h3>
                      <p className="text-[11px] text-zinc-500 leading-relaxed font-light line-clamp-3">
                        {st.desc}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 pt-3 border-t border-zinc-900 flex items-center justify-between text-[9px] font-mono text-zinc-500">
                    <span>HYP-STEP-{st.slug.slice(0, 6)}</span>
                    <span className="text-zinc-400 group-hover:text-red-400 font-bold flex items-center gap-0.5">
                      READ <ArrowRight className="w-2.5 h-2.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>

{/* ----------------- SECTION ④: 専門探究コラム ----------------- */}
      <section className="py-20 bg-zinc-950/10 border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center space-y-3 mb-12">
            <span className="text-[10px] font-extrabold text-red-400 tracking-wider uppercase block">
              SPECIALIST INQUIRY
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
              応用・探究
            </h2>
            <p className="text-xs text-zinc-450 max-w-xl mx-auto leading-relaxed font-light">
              より高度な筋肥大アプローチと最新エビデンスの応用。
            </p>
          </div>

          {/* Horizontal Swipe Card Container */}
          <div className="overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-zinc-950 flex gap-6 -mx-6 px-6">
            {columnArticles.map((col) => (
              <Link
                key={col.id}
                href={`/lab/hypertrophy/${col.slug}`}
                className="w-[280px] md:w-[350px] shrink-0 group cursor-pointer bg-zinc-950 border border-zinc-900 hover:border-zinc-800 rounded-xl p-6 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:bg-zinc-900/10"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-[9px] font-mono text-zinc-500">
                    <span className="uppercase tracking-widest text-red-400 font-semibold">{col.category}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {col.readTime}</span>
                  </div>

                  <h3 className="text-base md:text-lg font-black text-white group-hover:text-red-400 transition-colors leading-snug">
                    {col.title}
                  </h3>

                  <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-light">
                    {col.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-zinc-900 flex flex-wrap items-center justify-between gap-3 text-[10px] font-mono text-zinc-500">
                  <div className="flex flex-wrap gap-1">
                    {col.tags.map((tag, i) => (
                      <span key={i} className="text-[8px] bg-zinc-900 border border-zinc-850 text-zinc-450 px-2 py-0.5 rounded font-semibold">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-zinc-400 group-hover:text-red-400 group-hover:translate-x-1 transition-all flex items-center gap-1 font-bold">
                    講読する <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link
              href="/lab/hypertrophy/articles?tab=applied"
              className="relative inline-flex items-center gap-2 bg-gradient-to-r from-zinc-900/70 to-zinc-850/50 hover:from-zinc-850/80 hover:to-zinc-800/60 border border-zinc-800 hover:border-zinc-650 text-white font-bold text-xs md:text-sm px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-zinc-800/10 tracking-wider group cursor-pointer"
            >
              <Layers className="w-4 h-4 text-red-400 group-hover:text-red-300 group-hover:scale-110 transition-all shrink-0" />
              <span>応用・探究コラムをすべて見る</span>
              <ChevronRight className="w-4 h-4 text-red-500 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

        </div>
      </section>

{/* ----------------- SECTION 4.5: 実践プログラム ----------------- */}
      <section className="py-20 bg-black border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center space-y-3 mb-12">
            <span className="text-[10px] font-extrabold text-red-400 tracking-wider uppercase block">
              PRACTICAL PROTOCOLS
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
              実践プログラム
            </h2>
            <p className="text-xs text-zinc-450 max-w-xl mx-auto leading-relaxed font-light">
              筋肥大に特化した具体的なトレーニングルーティンとテクニック。
            </p>
          </div>

          {/* Horizontal Swipe Card Container */}
          <div className="overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-zinc-950 flex gap-6 -mx-6 px-6">
            {practicalArticles.map((art) => (
              <Link
                key={art.id}
                href={`/lab/hypertrophy/${art.slug}`}
                className="w-[280px] md:w-[350px] shrink-0 bg-zinc-950/40 border border-zinc-900 hover:border-red-900/50 rounded-xl p-4 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-xl hover:bg-zinc-900/10 cursor-pointer"
              >
                <div className="space-y-4">
                  <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden bg-zinc-900">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
                    <img
                      src={art.image}
                      alt={art.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 opacity-80"
                    />
                    <span className="absolute top-2 right-2 z-20 text-[8px] font-extrabold text-white bg-red-600 border border-red-500 px-2 py-0.5 rounded tracking-widest uppercase shadow-md">
                      PRACTICAL
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[9px] font-mono text-zinc-500">
                      <span className="uppercase tracking-widest text-red-400 font-semibold">{art.category}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {art.readTime}</span>
                    </div>

                    <h3 className="text-sm md:text-base font-bold text-white group-hover:text-red-400 transition-colors leading-snug">
                      {art.title}
                    </h3>

                    <p className="text-xs text-zinc-400 leading-relaxed font-light line-clamp-3">
                      {art.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-zinc-900 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                  <span className="bg-zinc-900 text-zinc-400 border border-zinc-850 px-2.5 py-0.5 rounded text-[8px] uppercase tracking-wider font-semibold">LEVEL: {art.level}</span>
                  <span className="text-zinc-400 group-hover:text-red-400 group-hover:translate-x-1 transition-all flex items-center gap-1 font-bold">
                    実践する <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link
              href="/lab/hypertrophy/articles?tab=practical"
              className="relative inline-flex items-center gap-2 bg-gradient-to-r from-red-950/20 to-zinc-900/50 hover:from-red-900/30 hover:to-zinc-800/60 border border-red-900/30 hover:border-red-700/50 text-white font-bold text-xs md:text-sm px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-red-900/10 tracking-wider group cursor-pointer"
            >
              <Dumbbell className="w-4 h-4 text-red-400 group-hover:text-red-300 group-hover:scale-110 transition-all shrink-0" />
              <span>実践プログラムをすべて見る</span>
              <ChevronRight className="w-4 h-4 text-red-500 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

        </div>
      </section>

{/* ----------------- SECTION ⑤: 障害・壁から探す ----------------- */}
      <section className="py-20 bg-black border-b border-zinc-900">
        <div className="max-w-4xl mx-auto px-6">

          <div className="text-center space-y-3 mb-12">
            <span className="text-[10px] font-extrabold text-red-400 tracking-wider uppercase block">
              DIAGNOSTIC NETWORK
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
              悩み・壁から探す
            </h2>
            <p className="text-xs text-zinc-450 max-w-md mx-auto leading-relaxed font-light">
              現在の悩みを選択すると、コラム一覧ページにて関連する解決策を絞り込んで表示します。
            </p>
          </div>

          {/* Obstacle Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {OBSTACLES.map((obs) => (
              <Link
                key={obs.label}
                href={`/lab/hypertrophy/articles?tab=basic&obstacle=${encodeURIComponent(obs.label)}`}
                className="p-4 rounded-xl border border-zinc-900 bg-zinc-950 text-left flex flex-col justify-between hover:border-red-500 hover:bg-red-950/20 hover:shadow-xl hover:shadow-red-500/10 text-zinc-300 transition-all duration-300 group cursor-pointer"
              >
                <div className="space-y-2">
                  <span className="text-[8px] font-extrabold font-mono tracking-widest uppercase block text-zinc-550 group-hover:text-red-400">
                    OBSTACLE
                  </span>
                  <h3 className="text-xs md:text-sm font-bold leading-tight group-hover:text-white">
                    {obs.label}
                  </h3>
                </div>

                <p className="text-[10px] leading-relaxed font-light mt-4 block text-zinc-550 group-hover:text-zinc-300">
                  {obs.desc}
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link
              href="/lab/hypertrophy/articles?tab=basic"
              className="relative inline-flex items-center gap-2 bg-gradient-to-r from-red-950/50 to-red-900/30 hover:from-red-900/60 hover:to-red-800/40 border border-red-800/50 hover:border-red-500 text-white font-bold text-xs md:text-sm px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10 tracking-wider group cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-red-400 group-hover:text-red-300 group-hover:scale-110 transition-all shrink-0" />
              <span>すべての基本理論コラムを見る</span>
              <ChevronRight className="w-4 h-4 text-red-500 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/lab/hypertrophy/articles"
              className="inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-red-900/50 text-zinc-300 hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-md group"
            >
              <BookOpen className="w-4 h-4 text-red-500 group-hover:scale-110 transition-transform" />
              全コラム一覧を見る
            </Link>
          </div>        </div>
      </section>

{/* ----------------- SECTION ⑥: 学術研究レビュー ----------------- */}
      <section className="py-20 bg-black border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center space-y-3 mb-16">
            <span className="text-[10px] font-extrabold text-red-400 tracking-wider uppercase bg-red-950/40 border border-red-900/40 px-3 py-1 rounded-full">
              ACADEMIC DATABASE
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
              研究データ
            </h2>
            <p className="text-xs text-zinc-450 max-w-xl mx-auto leading-relaxed font-light">
              世界中の科学論文から、筋肥大に関する重要エビデンスを要約。
            </p>
          </div>

          {/* Horizontal Swipe Card Container */}
          <div className="overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-zinc-950 flex gap-6 -mx-6 px-6">
            {RESEARCH_PAPERS.map((paper) => (
              <div
                key={paper.id}
                className="w-[280px] md:w-[350px] shrink-0 bg-zinc-950 border border-zinc-900 rounded-xl p-6 hover:shadow-xl hover:bg-zinc-900/10 hover:border-zinc-800 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">

                  {/* Paper Header */}
                  <div className="flex items-start justify-between border-b border-zinc-900 pb-3">
                    <div className="space-y-1">
                      <span className="text-[8px] font-mono text-zinc-550 bg-zinc-900 px-2 py-0.5 rounded uppercase tracking-widest border border-zinc-850">
                        DOI SEARCHABLE
                      </span>
                      <h4 className="text-[10px] font-mono text-zinc-500 mt-1">
                        {paper.journal} ({paper.year})
                      </h4>
                    </div>
                    <span className="text-[8px] font-bold text-red-400 bg-red-950/50 border border-red-900/50 px-2.5 py-0.5 rounded-full uppercase tracking-wider font-mono">
                      {paper.tag}
                    </span>
                  </div>

                  {/* Paper Title */}
                  <h3 className="text-sm md:text-base font-extrabold text-white leading-snug group-hover:text-red-400 transition-colors">
                    {paper.title}
                  </h3>

                  {/* Findings */}
                  <div className="p-4 rounded-lg bg-black border border-zinc-900 text-xs md:text-sm text-zinc-450 leading-relaxed font-light shadow-inner">
                    <span className="font-bold text-zinc-300 block mb-1 text-xs">【生体力学的知見・エビデンス】</span>
                    {paper.findings}
                  </div>

                </div>

                {/* Paper Footer */}
                <div className="mt-6 pt-4 border-t border-zinc-900 flex items-center justify-between text-[9px] font-mono text-zinc-500">
                  <span>CITATIONS: {paper.citationCount}</span>
                  <a
                    href={`https://doi.org/${paper.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-zinc-450 hover:text-red-400 transition-colors font-bold"
                  >
                    論文ページへ飛ぶ <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

{/* ----------------- SECTION ⑦: 関連研究所 (Related Portals) ----------------- */}
      <section className="py-20 bg-zinc-950/20">
        <div className="max-w-4xl mx-auto px-6">

          <div className="text-center space-y-3 mb-12">
            <span className="text-[10px] font-extrabold text-red-400 tracking-wider uppercase block">
              RESEARCH NETWORK
            </span>
            <h2 className="text-2xl font-black text-white tracking-tight">
              関連ページ
            </h2>
            <p className="text-xs text-zinc-550 leading-relaxed font-light">
              部位ごとの専門研究ページへ進みます。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {RELATED_LABS.map((lab) => (
              <button
                key={lab.slug}
                onClick={() => setActivePortal(lab.title)}
                className={`group p-5 rounded-xl border border-zinc-900 bg-zinc-950 text-center transition-all duration-300 block shadow-md hover:shadow-xl ${lab.glowColor}`}
              >
                <span className="text-[8px] font-mono text-zinc-550 uppercase tracking-widest block mb-1.5">
                  SA PORTAL HUB
                </span>
                <div className="flex items-center justify-center gap-1">
                  <h3 className="text-sm font-bold text-zinc-300 group-hover:text-white transition-colors">
                    {lab.title}
                  </h3>
                  <Lock className="w-3.5 h-3.5 text-zinc-700" />
                </div>
                <p className="text-[10px] text-zinc-500 leading-relaxed font-light mt-1">
                  {lab.label}
                </p>
              </button>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/bodymake"
              className="text-xs font-mono font-bold text-zinc-550 hover:text-red-400 transition-colors inline-flex items-center gap-1.5"
            >
              <ChevronRight className="w-3.5 h-3.5 rotate-180" /> BACK TO BODYMAKE MAIN
            </Link>
          </div>

        </div>
      
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
            <div className="flex items-center gap-2 text-red-400 text-xs font-mono">
              <Info className="w-4 h-4" />
              <span>UNDER CONSTRUCTION</span>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-black text-white leading-tight">
                「{activePortal}」構築中
              </h3>
              <p className="text-xs text-zinc-450 leading-relaxed font-light">
                現在、STRENGTH ARTS研究チームが最新の研究データと解剖データを解析し、この部位の特化研究ページを全力で編纂しております。
              </p>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-850/60 rounded-xl p-4 space-y-2.5">
              <span className="text-[9px] font-extrabold uppercase tracking-widest text-zinc-550 block">
                公開予定の専門コンテンツ例
              </span>
              <ul className="text-[11px] text-zinc-400 space-y-1.5 list-disc pl-4 font-light">
                <li>筋群ごとの最適な収縮・伸張ポジション解析</li>
                <li>対象筋への刺激を逃がさないフォーム最適化</li>
                <li>筋肥大のための部位別ボリューム設定</li>
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
