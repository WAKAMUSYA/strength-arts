'use client'

import React, { useMemo } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  Clock,
  ChevronRight,
  ExternalLink,
  Activity,
  BookOpen
} from 'lucide-react'
import { POWER_ARTICLES } from '@/data/powerArticles'

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
  { label: 'バーが肩まで上がらない', desc: '胸や太ももの高さでバーが止まってしまう' },
  { label: '腕が先に曲がる', desc: 'セカンドプルでアームベンド（腕引き）が起きる' },
  { label: 'キャッチで鎖骨が痛い', desc: 'フロントラックが組めず、手首や鎖骨にバーが当たる' },
  { label: 'パワー（速度）が出ない', desc: 'どうしても動作がゆっくりになってしまう' }
]

const RESEARCH_PAPERS: ResearchPaper[] = [
  {
    id: 'res-pw-1',
    title: 'オリンピック・ウエイトリフティングとスプリントパフォーマンスの相関関係',
    journal: 'Journal of Strength and Conditioning Research',
    year: 2005,
    doi: '10.1519/00124278-200511000-00010',
    findings: 'クリーンのMAX重量（体重比）と、10mおよび30mスプリントタイムには極めて高い負の相関（重量が上がるほどタイムが縮まる）が見られた。',
    citationCount: 385,
    tag: 'スポーツ転移'
  },
  {
    id: 'res-pw-2',
    title: 'パワークリーンにおけるトリプルエクステンションの生体力学的分析',
    journal: 'Sports Biomechanics',
    year: 2012,
    doi: '10.1080/14763141.2012.671355',
    findings: 'セカンドプルの瞬間、股関節の伸展パワーはスクワットやデッドリフトなど他のどの抵抗トレーニング種目よりも高い値（W/kg）を記録した。',
    citationCount: 294,
    tag: 'RFD/パワー出力'
  },
  {
    id: 'res-pw-3',
    title: 'フックグリップ使用時の前腕筋電図（EMG）分析と運動単位の動員',
    journal: 'International Journal of Sports Science & Coaching',
    year: 2018,
    doi: '10.1177/1747954118771181',
    findings: 'フックグリップ使用時は前腕屈筋群の活動が有意に低下し、結果として下肢から体幹を介したエネルギー伝達効率が向上することが示唆された。',
    citationCount: 122,
    tag: 'グリップ技術'
  }
]

const RELATED_LABS = [
  { title: 'デッドリフト研究所', label: 'Deadlift Hub', slug: 'deadlift', glowColor: 'hover:border-emerald-500/40 hover:bg-emerald-950/10' },
  { title: 'スクワット研究所', label: 'Squat Hub', slug: 'squat', glowColor: 'hover:border-red-500/40 hover:bg-red-950/10' },
  { title: '脚トレ研究所', label: 'Legs Training Hub', slug: 'legs', glowColor: 'hover:border-amber-500/40 hover:bg-amber-950/10' }
]

export default function PowerLab() {

  const mustReadArticles = useMemo(() => {
    return POWER_ARTICLES.filter(art => art.type === 'basic')
  }, [])

  const columnArticles = useMemo(() => {
    return POWER_ARTICLES.filter(art => art.type === 'applied')
  }, [])

  const roadmapSteps = useMemo(() => {
    return POWER_ARTICLES
      .filter(art => typeof art.roadmapNumber === 'number')
      .sort((a, b) => (a.roadmapNumber || 0) - (b.roadmapNumber || 0))
  }, [])

  const programArticles = useMemo(() => {
    return POWER_ARTICLES.filter(art => art.type === 'program')
  }, [])

  return (
    <main className="min-h-screen bg-black text-white selection:bg-orange-900 selection:text-white pb-32">

{/* ----------------- SECTION ①: HERO ----------------- */}
      <section className="relative overflow-hidden border-b border-zinc-900 pt-32 pb-20 bg-zinc-950">
        <div className="absolute inset-0 bg-[url('/power.jpg')] bg-cover bg-center bg-no-repeat opacity-60 grayscale-[50%]" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <div className="bg-black/60 backdrop-blur-md rounded-3xl border border-white/10 shadow-2xl p-6 md:p-10 text-center space-y-6">
            <div className="flex items-center justify-center gap-2">
              <span className="inline-flex items-center gap-1.5 text-[9px] font-extrabold text-orange-500 bg-orange-950/40 border border-orange-900/40 px-3 py-1 rounded-full uppercase tracking-widest">
                <Activity className="w-3.5 h-3.5 text-orange-500" /> Power Mechanics
              </span>
              <span className="text-[10px] text-zinc-400 font-mono">CODE: PW-LAB-01</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-tight">
              クリーン＆スナッチ<span className="text-orange-500 font-extrabold relative inline-block">研究所</span>
            </h1>

            <p className="text-base md:text-lg font-bold text-zinc-300">
              ー 競技パフォーマンスに直結する究極の瞬発力とボディコントロール ー
            </p>

            <p className="text-xs md:text-sm text-zinc-300 leading-relaxed font-light max-w-2xl mx-auto">
              トリプルエクステンションの力学、RFD（力の立ち上がり率）の極大化、SSCの活用と神経系の適応。重力を超え、爆発的なスピードを手に入れるための五輪リフティングの学術ハブ。
            </p>

            <div className="pt-6 flex justify-center">
              <Link
                href="/lab/power/articles"
                className="group relative inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-500 text-black font-bold py-3.5 px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-orange-900/40 border border-orange-500"
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
            <span className="text-[10px] font-extrabold text-orange-500 tracking-wider uppercase block">
              FACILITY DIRECTORY
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
              基本理論
            </h2>
            <p className="text-xs text-zinc-450 max-w-xl mx-auto leading-relaxed font-light">
              クリーンとスナッチの解剖学と力学的アプローチの基本。
            </p>
          </div>

          <div className="overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-zinc-950 flex gap-6 -mx-6 px-6">
            {mustReadArticles.map((art, idx) => (
              <Link
                key={art.id}
                href={`/lab/power/${art.slug}`}
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
                    <span className="absolute top-2 left-2 z-20 text-[8px] font-extrabold text-orange-500 bg-zinc-950/90 border border-zinc-900 px-2 py-0.5 rounded tracking-widest uppercase">
                      LECTURE 0{idx + 1}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[9px] font-mono text-zinc-500">
                      <span className="uppercase tracking-widest text-orange-500 font-semibold">{art.category}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {art.readTime}</span>
                    </div>
                    <h3 className="text-sm md:text-base font-bold text-white group-hover:text-orange-500 transition-colors leading-snug">
                      {art.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed font-light line-clamp-3">
                      {art.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-zinc-900 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                  <span className="bg-zinc-900 text-zinc-400 border border-zinc-850 px-2.5 py-0.5 rounded text-[8px] uppercase tracking-wider font-semibold">LEVEL: {art.level}</span>
                  <span className="text-zinc-400 group-hover:text-orange-500 group-hover:translate-x-1 transition-all flex items-center gap-1 font-bold">
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
            <span className="text-[10px] font-extrabold text-orange-500 tracking-wider uppercase bg-orange-950/40 border border-orange-900/40 px-3 py-1 rounded-full">
              STRUCTURED PATHWAY
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
              順番に学ぶ
            </h2>
            <p className="text-xs text-zinc-450 max-w-xl mx-auto leading-relaxed font-light">
              バイオメカニクスに基づくクイックリフトの習得ステップ。
            </p>
          </div>

          <div className="overflow-x-auto pb-4 -mx-6 px-6 scrollbar-thin scrollbar-thumb-zinc-800">
            <div className="flex gap-5 min-w-max">
              {roadmapSteps.map((st, idx) => (
                <Link
                  key={st.id}
                  href={`/lab/power/${st.slug}`}
                  className="relative w-[280px] shrink-0 bg-zinc-950 border border-zinc-900 rounded-xl p-5 hover:border-orange-900 hover:bg-zinc-900/10 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                >
                  {idx < roadmapSteps.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 bg-zinc-950 rounded-full p-1 border border-zinc-900 text-zinc-650 group-hover:text-orange-500 group-hover:bg-orange-950/30 transition-colors">
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  )}

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-black text-orange-600/80 group-hover:text-orange-500 transition-colors font-mono">
                        0{st.roadmapNumber}
                      </span>
                      <span className="text-[8px] font-mono text-zinc-550 uppercase tracking-widest">
                        STEP {st.roadmapNumber}
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <p className="text-[9px] font-mono text-orange-500/80 uppercase tracking-wide">
                        {st.category}
                      </p>
                      <h3 className="text-sm font-bold text-white group-hover:text-orange-500 transition-colors leading-tight">
                        {st.title}
                      </h3>
                      <p className="text-[11px] text-zinc-500 leading-relaxed font-light line-clamp-3">
                        {st.desc}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 pt-3 border-t border-zinc-900 flex items-center justify-between text-[9px] font-mono text-zinc-500">
                    <span>PW-STEP-{st.slug.slice(0, 6)}</span>
                    <span className="text-zinc-400 group-hover:text-orange-500 font-bold flex items-center gap-0.5">
                      READ <ArrowRight className="w-2.5 h-2.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>

{/* ----------------- SECTION ④: 応用・探究 ----------------- */}
      <section className="py-20 bg-zinc-950/20 border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center space-y-3 mb-12">
            <span className="text-[10px] font-extrabold text-orange-500 tracking-wider uppercase block">
              ADVANCED LECTURE
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
              応用・探究
            </h2>
            <p className="text-xs text-zinc-450 max-w-xl mx-auto leading-relaxed font-light">
              バイオメカニクスや生理学の視点から、競技力向上のためのより深い知識を探求します。
            </p>
          </div>

          <div className="overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-zinc-950 flex gap-6 -mx-6 px-6">
            {columnArticles.map((art) => (
              <Link
                key={art.id}
                href={`/lab/power/${art.slug}`}
                className="w-[280px] md:w-[350px] shrink-0 bg-zinc-950 border border-zinc-900 hover:border-orange-900/50 rounded-xl p-4 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-xl hover:bg-zinc-900/10 cursor-pointer"
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
                      <span className="uppercase tracking-widest text-orange-500 font-semibold">{art.category}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {art.readTime}</span>
                    </div>
                    <h3 className="text-sm md:text-base font-bold text-white group-hover:text-orange-500 transition-colors leading-snug">
                      {art.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed font-light line-clamp-3">
                      {art.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-zinc-900 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                  <span className="bg-zinc-900 text-zinc-400 border border-zinc-850 px-2.5 py-0.5 rounded text-[8px] uppercase tracking-wider font-semibold">LEVEL: {art.level}</span>
                  <span className="text-zinc-400 group-hover:text-orange-500 group-hover:translate-x-1 transition-all flex items-center gap-1 font-bold">
                    探究する <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

{/* ----------------- SECTION ⑤: 障害・壁から探す ----------------- */}
      <section className="py-20 bg-black border-b border-zinc-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center space-y-3 mb-12">
            <span className="text-[10px] font-extrabold text-orange-500 tracking-wider uppercase block">
              DIAGNOSTIC NETWORK
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
              悩み・壁から探す
            </h2>
            <p className="text-xs text-zinc-450 max-w-md mx-auto leading-relaxed font-light">
              現在の悩みを選択すると、関連する解決策を表示します。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
            {OBSTACLES.map((obs) => (
              <Link
                href={`/lab/power/articles?obstacle=${obs.label}`}
                key={obs.label}
                className="p-4 rounded-xl border border-zinc-900 bg-zinc-950 text-left flex flex-col justify-between hover:border-orange-500 hover:bg-orange-950/20 hover:shadow-xl hover:shadow-orange-500/10 text-zinc-300 transition-all duration-300 group cursor-pointer block"
              >
                <div className="space-y-2">
                  <span className="text-[8px] font-extrabold font-mono tracking-widest uppercase block text-zinc-550 group-hover:text-orange-500">
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
        </div>
      </section>

{/* ----------------- SECTION ⑥: 実践プログラム ----------------- */}
      <section className="py-20 bg-black border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center space-y-3 mb-12">
            <span className="text-[10px] font-extrabold text-orange-500 tracking-wider uppercase block">
              TRAINING PROGRAMS
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
              実践プログラム
            </h2>
            <p className="text-xs text-zinc-450 max-w-xl mx-auto leading-relaxed font-light">
              目的別・レベル別に組まれた、効果を最大化するトレーニングメニュー。
            </p>
          </div>

          <div className="overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-zinc-950 flex gap-6 -mx-6 px-6">
            {programArticles.map((art) => (
              <Link
                key={art.id}
                href={`/lab/power/${art.slug}`}
                className="w-[280px] md:w-[350px] shrink-0 bg-zinc-950 border border-zinc-900 hover:border-orange-900/50 rounded-xl p-4 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-xl hover:bg-zinc-900/10 cursor-pointer"
              >
                <div className="space-y-4">
                  <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden bg-zinc-900">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
                    <img
                      src={art.image}
                      alt={art.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 opacity-80"
                    />
                    <span className="absolute top-2 left-2 z-20 text-[8px] font-extrabold text-white bg-orange-600/90 border border-orange-500 px-2 py-0.5 rounded tracking-widest uppercase">
                      PROGRAM
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[9px] font-mono text-zinc-500">
                      <span className="uppercase tracking-widest text-orange-500 font-semibold">{art.category}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {art.readTime}</span>
                    </div>
                    <h3 className="text-sm md:text-base font-bold text-white group-hover:text-orange-500 transition-colors leading-snug">
                      {art.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed font-light line-clamp-3">
                      {art.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-zinc-900 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                  <span className="bg-zinc-900 text-zinc-400 border border-zinc-850 px-2.5 py-0.5 rounded text-[8px] uppercase tracking-wider font-semibold">LEVEL: {art.level}</span>
                  <span className="text-zinc-400 group-hover:text-orange-500 group-hover:translate-x-1 transition-all flex items-center gap-1 font-bold">
                    メニューを見る <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/lab/power/articles"
              className="inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-orange-900/50 text-zinc-300 hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-md group"
            >
              <BookOpen className="w-4 h-4 text-orange-500 group-hover:scale-110 transition-transform" />
              全コラム一覧を見る
            </Link>
          </div>
        </div>
      </section>

{/* ----------------- SECTION ⑦: 学術研究レビュー ----------------- */}
      <section className="py-20 bg-black border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center space-y-3 mb-16">
            <span className="text-[10px] font-extrabold text-orange-500 tracking-wider uppercase bg-orange-950/40 border border-orange-900/40 px-3 py-1 rounded-full">
              ACADEMIC DATABASE
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
              研究データ
            </h2>
            <p className="text-xs text-zinc-450 max-w-xl mx-auto leading-relaxed font-light">
              クイックリフトに関する重要エビデンスを要約。
            </p>
          </div>

          <div className="overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-zinc-950 flex gap-6 -mx-6 px-6">
            {RESEARCH_PAPERS.map((paper) => (
              <div
                key={paper.id}
                className="w-[280px] md:w-[350px] shrink-0 bg-zinc-950 border border-zinc-900 rounded-xl p-6 hover:shadow-xl hover:bg-zinc-900/10 hover:border-zinc-800 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between border-b border-zinc-900 pb-3">
                    <div className="space-y-1">
                      <span className="text-[8px] font-mono text-zinc-550 bg-zinc-900 px-2 py-0.5 rounded uppercase tracking-widest border border-zinc-850">
                        DOI SEARCHABLE
                      </span>
                      <h4 className="text-[10px] font-mono text-zinc-500 mt-1">
                        {paper.journal} ({paper.year})
                      </h4>
                    </div>
                    <span className="text-[8px] font-bold text-orange-500 bg-orange-950/50 border border-orange-900/50 px-2.5 py-0.5 rounded-full uppercase tracking-wider font-mono">
                      {paper.tag}
                    </span>
                  </div>

                  <h3 className="text-sm md:text-base font-extrabold text-white leading-snug group-hover:text-orange-500 transition-colors">
                    {paper.title}
                  </h3>

                  <div className="p-4 rounded-lg bg-black border border-zinc-900 text-xs md:text-sm text-zinc-450 leading-relaxed font-light shadow-inner">
                    <span className="font-bold text-zinc-300 block mb-1 text-xs">【生体力学的知見・エビデンス】</span>
                    {paper.findings}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-900 flex items-center justify-between text-[9px] font-mono text-zinc-500">
                  <span>CITATIONS: {paper.citationCount}</span>
                  <a
                    href={`https://doi.org/${paper.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-zinc-450 hover:text-orange-500 transition-colors font-bold"
                  >
                    論文ページへ飛ぶ <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* ----------------- SECTION ⑧: 関連研究所 (Related Portals) ----------------- */}
      <section className="py-20 bg-zinc-950/20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center space-y-3 mb-12">
            <span className="text-[10px] font-extrabold text-orange-500 tracking-wider uppercase block">
              RESEARCH NETWORK
            </span>
            <h2 className="text-2xl font-black text-white tracking-tight">
              関連ページ
            </h2>
            <p className="text-xs text-zinc-550 leading-relaxed font-light">
              他の部位や種目に特化した専門研究ページへ進みます。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {RELATED_LABS.map((lab) => (
              <Link
                href={`/lab/${lab.slug}`}
                key={lab.slug}
                className={`group p-5 rounded-xl border border-zinc-900 bg-zinc-950 text-center transition-all duration-300 block shadow-md hover:shadow-xl ${lab.glowColor}`}
              >
                <span className="text-[8px] font-mono text-zinc-550 uppercase tracking-widest block mb-1.5">
                  SA PORTAL HUB
                </span>
                <div className="flex items-center justify-center gap-1">
                  <h3 className="text-sm font-bold text-zinc-300 group-hover:text-white transition-colors">
                    {lab.title}
                  </h3>
                </div>
                <p className="text-[10px] text-zinc-500 leading-relaxed font-light mt-1">
                  {lab.label}
                </p>
              </Link>
            ))}
          </div>

        </div>
      </section>

                                                    </main>
  )
}
