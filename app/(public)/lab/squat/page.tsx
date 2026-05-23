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
import { SQUAT_ARTICLES } from '@/data/squatArticles'

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
  { label: '重量が伸びない', desc: 'ある重量から全く挙がらない' },
  { label: '深くしゃがめない', desc: 'パラレルまで下りない' },
  { label: '腰が痛い', desc: 'バットウィンクや腰椎の痛み' },
  { label: '停滞した', desc: 'プラトーに陥っている' }
]

const RESEARCH_PAPERS: ResearchPaper[] = [
  {
    id: 'res-sq-1',
    title: 'スクワットの深さが大臀筋および大腿四頭筋の筋電図活動に与える影響',
    journal: 'Journal of Strength and Conditioning Research',
    year: 2002,
    doi: '10.1519/1533-4287(2002)016<0428:TEOSDO>2.0.CO;2',
    findings: '大臀筋の筋活動は、大腿が床と平行になるパラレルスクワットで最大となり、それ以上深くしゃがんでも有意な増加は見られない。四頭筋の活動は深さに比例して増加する。',
    citationCount: 452,
    tag: 'しゃがみの深さ'
  },
  {
    id: 'res-sq-2',
    title: 'ハイバーとローバーのキネマティクスおよびキネティクス比較',
    journal: 'Journal of Human Kinetics',
    year: 2017,
    doi: '10.1515/hukin-2017-0027',
    findings: 'ローバースクワットはハイバーに比べ、股関節伸展モーメントが有意に大きく、膝関節伸展モーメントが小さい。これにより、背面筋群の出力がより要求される。',
    citationCount: 184,
    tag: 'バーポジション'
  },
  {
    id: 'res-sq-3',
    title: 'ウェイトリフティングベルトが腹腔内圧（IAP）に及ぼす影響',
    journal: 'Medicine and Science in Sports and Exercise',
    year: 1989,
    doi: '10.1249/00005768-198904000-00010',
    findings: '高重量のスクワット中にベルトを着用することで腹腔内圧（IAP）が有意に上昇し、脊柱にかかる圧縮力が減少し、体幹の安定性が高まる。',
    citationCount: 356,
    tag: '腹圧 (IAP)'
  }
]

const RELATED_LABS = [
  { title: 'ベンチプレス研究所', label: 'Bench Press Hub', slug: 'benchpress', glowColor: 'hover:border-blue-500/40 hover:bg-blue-950/10' },
  { title: 'デッドリフト研究所', label: 'Deadlift Hub', slug: 'deadlift', glowColor: 'hover:border-emerald-500/40 hover:bg-emerald-950/10' },
  { title: '脚トレ研究所', label: 'Legs Training Hub', slug: 'legs', glowColor: 'hover:border-amber-500/40 hover:bg-amber-950/10' }
]

export default function SquatLab() {

  const mustReadArticles = useMemo(() => {
    return SQUAT_ARTICLES.filter(art => art.type === 'basic')
  }, [])

  const columnArticles = useMemo(() => {
    return SQUAT_ARTICLES.filter(art => art.type === 'applied')
  }, [])

  const roadmapSteps = useMemo(() => {
    return SQUAT_ARTICLES
      .filter(art => typeof art.roadmapNumber === 'number')
      .sort((a, b) => (a.roadmapNumber || 0) - (b.roadmapNumber || 0))
  }, [])

  const programArticles = useMemo(() => {
    return SQUAT_ARTICLES.filter(art => art.type === 'program')
  }, [])

  return (
    <main className="min-h-screen bg-black text-white selection:bg-red-900 selection:text-white pb-32">

      {/* ----------------- SECTION ①: HERO ----------------- */}
      <section className="relative overflow-hidden border-b border-zinc-900 pt-32 pb-20 bg-zinc-950">
        <div className="absolute inset-0 bg-[url('/squat/sq1.jpg')] bg-cover bg-center bg-no-repeat opacity-60 grayscale-[50%]" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <div className="bg-black/60 backdrop-blur-md rounded-3xl border border-white/10 shadow-2xl p-6 md:p-10 text-center space-y-6">
            <div className="flex items-center justify-center gap-2">
              <span className="inline-flex items-center gap-1.5 text-[9px] font-extrabold text-red-500 bg-red-950/40 border border-red-900/40 px-3 py-1 rounded-full uppercase tracking-widest">
                <Activity className="w-3.5 h-3.5 text-red-500" /> Squat Mechanics
              </span>
              <span className="text-[10px] text-zinc-400 font-mono">CODE: SQ-LAB-01</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-tight">
              スクワット<span className="text-red-500 font-extrabold relative inline-block">研究所</span>
            </h1>

            <p className="text-base md:text-lg font-bold text-zinc-300">
              ー 全身の筋力を統合する「キング・オブ・エクササイズ」の力学解剖 ー
            </p>

            <p className="text-xs md:text-sm text-zinc-300 leading-relaxed font-light max-w-2xl mx-auto">
              骨格アライメントの崩れ、バットウィンクの力学要因、足首可動性と膝関節の連動、トリプルエクステンションのエネルギー伝達理論。脚と体幹の出力を最大化する究極の学術ハブ。
            </p>

            <div className="pt-6 flex justify-center">
              <Link
                href="/lab/squat/articles"
                className="group relative inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-black font-bold py-3.5 px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-red-900/40 border border-red-500"
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
            <span className="text-[10px] font-extrabold text-red-500 tracking-wider uppercase block">
              FACILITY DIRECTORY
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
              基本理論
            </h2>
            <p className="text-xs text-zinc-450 max-w-xl mx-auto leading-relaxed font-light">
              スクワットの解剖学と力学的アプローチの基本。
            </p>
          </div>

          <div className="overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-zinc-950 flex gap-6 -mx-6 px-6">
            {mustReadArticles.map((art, idx) => (
              <Link
                key={art.id}
                href={`/lab/squat/${art.slug}`}
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
                    <span className="absolute top-2 left-2 z-20 text-[8px] font-extrabold text-red-500 bg-zinc-950/90 border border-zinc-900 px-2 py-0.5 rounded tracking-widest uppercase">
                      LECTURE 0{idx + 1}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[9px] font-mono text-zinc-500">
                      <span className="uppercase tracking-widest text-red-500 font-semibold">{art.category}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {art.readTime}</span>
                    </div>
                    <h3 className="text-sm md:text-base font-bold text-white group-hover:text-red-500 transition-colors leading-snug">
                      {art.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed font-light line-clamp-3">
                      {art.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-zinc-900 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                  <span className="bg-zinc-900 text-zinc-400 border border-zinc-850 px-2.5 py-0.5 rounded text-[8px] uppercase tracking-wider font-semibold">LEVEL: {art.level}</span>
                  <span className="text-zinc-400 group-hover:text-red-500 group-hover:translate-x-1 transition-all flex items-center gap-1 font-bold">
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
            <span className="text-[10px] font-extrabold text-red-500 tracking-wider uppercase bg-red-950/40 border border-red-900/40 px-3 py-1 rounded-full">
              STRUCTURED PATHWAY
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
              順番に学ぶ
            </h2>
            <p className="text-xs text-zinc-450 max-w-xl mx-auto leading-relaxed font-light">
              バイオメカニクスに基づくスクワットの習得ステップ。
            </p>
          </div>

          <div className="overflow-x-auto pb-4 -mx-6 px-6 scrollbar-thin scrollbar-thumb-zinc-800">
            <div className="flex gap-5 min-w-max">
              {roadmapSteps.map((st, idx) => (
                <Link
                  key={st.id}
                  href={`/lab/squat/${st.slug}`}
                  className="relative w-[280px] shrink-0 bg-zinc-950 border border-zinc-900 rounded-xl p-5 hover:border-red-900 hover:bg-zinc-900/10 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                >
                  {idx < roadmapSteps.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 bg-zinc-950 rounded-full p-1 border border-zinc-900 text-zinc-650 group-hover:text-red-500 group-hover:bg-red-950/30 transition-colors">
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  )}

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-black text-red-600/80 group-hover:text-red-500 transition-colors font-mono">
                        0{st.roadmapNumber}
                      </span>
                      <span className="text-[8px] font-mono text-zinc-550 uppercase tracking-widest">
                        STEP {st.roadmapNumber}
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <p className="text-[9px] font-mono text-red-500/80 uppercase tracking-wide">
                        {st.category}
                      </p>
                      <h3 className="text-sm font-bold text-white group-hover:text-red-500 transition-colors leading-tight">
                        {st.title}
                      </h3>
                      <p className="text-[11px] text-zinc-500 leading-relaxed font-light line-clamp-3">
                        {st.desc}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 pt-3 border-t border-zinc-900 flex items-center justify-between text-[9px] font-mono text-zinc-500">
                    <span>SQ-STEP-{st.slug.slice(0, 6)}</span>
                    <span className="text-zinc-400 group-hover:text-red-500 font-bold flex items-center gap-0.5">
                      READ <ArrowRight className="w-2.5 h-2.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/lab/squat/articles"
              className="inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-red-900/50 text-zinc-300 hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-md group"
            >
              <BookOpen className="w-4 h-4 text-red-500 group-hover:scale-110 transition-transform" />
              全コラム一覧を見る
            </Link>
          </div>
        </div>
      </section>

      {/* ----------------- SECTION ④: 実践プログラム ----------------- */}
      <section className="py-20 bg-black border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center space-y-3 mb-12">
            <span className="text-[10px] font-extrabold text-red-500 tracking-wider uppercase block">
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
                href={`/lab/squat/${art.slug}`}
                className="w-[280px] md:w-[350px] shrink-0 bg-zinc-950 border border-zinc-900 hover:border-red-900/50 rounded-xl p-4 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-xl hover:bg-zinc-900/10 cursor-pointer"
              >
                <div className="space-y-4">
                  <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden bg-zinc-900">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
                    <img
                      src={art.image}
                      alt={art.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 opacity-80"
                    />
                    <span className="absolute top-2 left-2 z-20 text-[8px] font-extrabold text-white bg-red-600/90 border border-red-500 px-2 py-0.5 rounded tracking-widest uppercase">
                      PROGRAM
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[9px] font-mono text-zinc-500">
                      <span className="uppercase tracking-widest text-red-500 font-semibold">{art.category}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {art.readTime}</span>
                    </div>
                    <h3 className="text-sm md:text-base font-bold text-white group-hover:text-red-500 transition-colors leading-snug">
                      {art.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed font-light line-clamp-3">
                      {art.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-zinc-900 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                  <span className="bg-zinc-900 text-zinc-400 border border-zinc-850 px-2.5 py-0.5 rounded text-[8px] uppercase tracking-wider font-semibold">LEVEL: {art.level}</span>
                  <span className="text-zinc-400 group-hover:text-red-500 group-hover:translate-x-1 transition-all flex items-center gap-1 font-bold">
                    メニューを見る <ArrowRight className="w-3.5 h-3.5" />
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
            <span className="text-[10px] font-extrabold text-red-500 tracking-wider uppercase block">
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
                href={`/lab/squat/articles?obstacle=${obs.label}`}
                key={obs.label}
                className="p-4 rounded-xl border border-zinc-900 bg-zinc-950 text-left flex flex-col justify-between hover:border-red-500 hover:bg-red-950/20 hover:shadow-xl hover:shadow-red-500/10 text-zinc-300 transition-all duration-300 group cursor-pointer block"
              >
                <div className="space-y-2">
                  <span className="text-[8px] font-extrabold font-mono tracking-widest uppercase block text-zinc-550 group-hover:text-red-500">
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

      {/* ----------------- SECTION ⑥: 応用・探究 ----------------- */}
      <section className="py-20 bg-zinc-950/20 border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center space-y-3 mb-12">
            <span className="text-[10px] font-extrabold text-red-500 tracking-wider uppercase block">
              ADVANCED LECTURE
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
              応用・探究
            </h2>
            <p className="text-xs text-zinc-450 max-w-xl mx-auto leading-relaxed font-light">
              バイオメカニクスや生理学の視点から、スクワットのより深い知識を探求します。
            </p>
          </div>

          <div className="overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-zinc-950 flex gap-6 -mx-6 px-6">
            {columnArticles.map((art) => (
              <Link
                key={art.id}
                href={`/lab/squat/${art.slug}`}
                className="w-[280px] md:w-[350px] shrink-0 bg-zinc-950 border border-zinc-900 hover:border-red-900/50 rounded-xl p-4 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-xl hover:bg-zinc-900/10 cursor-pointer"
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
                      <span className="uppercase tracking-widest text-red-500 font-semibold">{art.category}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {art.readTime}</span>
                    </div>
                    <h3 className="text-sm md:text-base font-bold text-white group-hover:text-red-500 transition-colors leading-snug">
                      {art.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed font-light line-clamp-3">
                      {art.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-zinc-900 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                  <span className="bg-zinc-900 text-zinc-400 border border-zinc-850 px-2.5 py-0.5 rounded text-[8px] uppercase tracking-wider font-semibold">LEVEL: {art.level}</span>
                  <span className="text-zinc-400 group-hover:text-red-500 group-hover:translate-x-1 transition-all flex items-center gap-1 font-bold">
                    探究する <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- SECTION ⑦: 学術研究レビュー ----------------- */}
      <section className="py-20 bg-black border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center space-y-3 mb-16">
            <span className="text-[10px] font-extrabold text-red-500 tracking-wider uppercase bg-red-950/40 border border-red-900/40 px-3 py-1 rounded-full">
              ACADEMIC DATABASE
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
              研究データ
            </h2>
            <p className="text-xs text-zinc-450 max-w-xl mx-auto leading-relaxed font-light">
              スクワットに関する重要エビデンスを要約。
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
                    <span className="text-[8px] font-bold text-red-500 bg-red-950/50 border border-red-900/50 px-2.5 py-0.5 rounded-full uppercase tracking-wider font-mono">
                      {paper.tag}
                    </span>
                  </div>

                  <h3 className="text-sm md:text-base font-extrabold text-white leading-snug group-hover:text-red-500 transition-colors">
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
                    className="flex items-center gap-1 text-zinc-450 hover:text-red-500 transition-colors font-bold"
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
            <span className="text-[10px] font-extrabold text-red-500 tracking-wider uppercase block">
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
