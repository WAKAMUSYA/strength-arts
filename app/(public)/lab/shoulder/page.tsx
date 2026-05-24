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
import { SHOULDER_ARTICLES } from '@/data/shoulderArticles'

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
  { label: '肩幅が広がらない', desc: 'メロンのような丸みが作れない' },
  { label: '肩が痛い', desc: 'プレスやレイズで関節が引っかかる' },
  { label: '首がすくんで痛い', desc: 'サイドレイズで僧帽筋ばかり疲れる' },
  { label: '重量が伸びない', desc: 'ショルダープレスが重くならない' }
]

const RESEARCH_PAPERS: ResearchPaper[] = [
  {
    id: 'res-sh-1',
    title: '肩関節の外転角度と三角筋中部のEMG活動の相関',
    journal: 'Journal of Biomechanics',
    year: 2012,
    doi: '10.1016/j.jbiomech.2012.08.005',
    findings: '腕を横に開く際、60度〜90度の範囲で三角筋中部の活動が最大化し、それ以上上げると僧帽筋上部の関与が優位になる。',
    citationCount: 142,
    tag: '挙上角度'
  },
  {
    id: 'res-sh-2',
    title: 'アーノルドプレス vs ダンベルショルダープレスの筋電図分析',
    journal: 'Journal of Strength and Conditioning Research',
    year: 2017,
    doi: '10.1519/JSC.0000000000001705',
    findings: 'アーノルドプレスは通常のショルダープレスと比較して、三角筋前部および中部の活動時間を有意に延長させる（TUTが長い）ことが示された。',
    citationCount: 89,
    tag: '種目比較'
  },
  {
    id: 'res-sh-3',
    title: 'スキャプラプレーンでの挙上がインピンジメントに与える影響',
    journal: 'Clinical Biomechanics',
    year: 2015,
    doi: '10.1016/j.clinbiomech.2015.03.011',
    findings: '腕を体の真横ではなく、前方約30度（肩甲骨面）で挙上することで、肩峰下のスペースが確保され、インピンジメントのリスクが大幅に減少する。',
    citationCount: 205,
    tag: '怪我予防'
  }
]

const RELATED_LABS = [
  { title: '胸トレ研究所', label: 'Chest Training Hub', slug: 'chest', glowColor: 'hover:border-red-500/40 hover:bg-red-950/10' },
  { title: '背中トレ研究所', label: 'Back Kinetic Hub', slug: 'back', glowColor: 'hover:border-emerald-500/40 hover:bg-emerald-950/10' },
  { title: '腕トレ研究所', label: 'Arm Training Hub', slug: 'arms', glowColor: 'hover:border-purple-500/40 hover:bg-purple-950/10' }
]

export default function ShoulderLab() {

  const mustReadArticles = useMemo(() => {
    return SHOULDER_ARTICLES.filter(art => art.type === 'basic')
  }, [])

  const columnArticles = useMemo(() => {
    return SHOULDER_ARTICLES.filter(art => art.type === 'applied')
  }, [])

  const roadmapSteps = useMemo(() => {
    return SHOULDER_ARTICLES
      .filter(art => typeof art.roadmapNumber === 'number')
      .sort((a, b) => (a.roadmapNumber || 0) - (b.roadmapNumber || 0))
  }, [])

  const programArticles = useMemo(() => {
    return SHOULDER_ARTICLES.filter(art => art.type === 'program')
  }, [])

  return (
    <main className="min-h-screen bg-black text-white selection:bg-purple-900 selection:text-white pb-32">

{/* ----------------- SECTION ①: HERO ----------------- */}
      <section className="relative overflow-hidden border-b border-zinc-900 pt-32 pb-20 bg-zinc-950">
        <div className="absolute inset-0 bg-[url('/shoulder/shoulder1.jpg')] bg-cover bg-center bg-no-repeat opacity-60" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <div className="bg-black/60 backdrop-blur-md rounded-3xl border border-white/10 shadow-2xl p-6 md:p-10 text-center space-y-6">
            <div className="flex items-center justify-center gap-2">
              <span className="inline-flex items-center gap-1.5 text-[9px] font-extrabold text-purple-400 bg-purple-950/40 border border-purple-900/40 px-3 py-1 rounded-full uppercase tracking-widest">
                <Activity className="w-3.5 h-3.5 text-purple-500" /> Shoulder Training
              </span>
              <span className="text-[10px] text-zinc-400 font-mono">CODE: SH-LAB-01</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-tight">
              肩トレ<span className="text-purple-500 font-extrabold relative inline-block">研究所</span>
            </h1>

            <p className="text-base md:text-lg font-bold text-zinc-300">
              ー メロン肩と逆三角形のバイオメカニクス ー
            </p>

            <p className="text-xs md:text-sm text-zinc-300 leading-relaxed font-light max-w-2xl mx-auto">
              肩幅の絶対的要。三角筋の3つの顔（前・中・後）の解剖学と力学的アプローチを紐解き、怪我を防ぎながら立体的な3Dショルダーを構築します。
            </p>

            <div className="pt-6 flex justify-center">
              <Link
                href="/lab/shoulder/articles"
                className="group relative inline-flex items-center justify-center gap-2 bg-purple-900 hover:bg-purple-800 text-white font-bold py-3.5 px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-purple-900/40 border border-purple-700/50"
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
            <span className="text-[10px] font-extrabold text-purple-400 tracking-wider uppercase block">
              FACILITY DIRECTORY
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
              基本理論
            </h2>
            <p className="text-xs text-zinc-450 max-w-xl mx-auto leading-relaxed font-light">
              肩トレの解剖学と力学的アプローチの基本。
            </p>
          </div>

          <div className="overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-zinc-950 flex gap-6 -mx-6 px-6">
            {mustReadArticles.map((art, idx) => (
              <Link
                key={art.id}
                href={`/lab/shoulder/${art.slug}`}
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
                    <span className="absolute top-2 left-2 z-20 text-[8px] font-extrabold text-purple-400 bg-zinc-950/90 border border-zinc-900 px-2 py-0.5 rounded tracking-widest uppercase">
                      LECTURE 0{idx + 1}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[9px] font-mono text-zinc-500">
                      <span className="uppercase tracking-widest text-purple-450 font-semibold">{art.category}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {art.readTime}</span>
                    </div>
                    <h3 className="text-sm md:text-base font-bold text-white group-hover:text-purple-400 transition-colors leading-snug">
                      {art.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed font-light line-clamp-3">
                      {art.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-zinc-900 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                  <span className="bg-zinc-900 text-zinc-400 border border-zinc-850 px-2.5 py-0.5 rounded text-[8px] uppercase tracking-wider font-semibold">LEVEL: {art.level}</span>
                  <span className="text-zinc-400 group-hover:text-purple-400 group-hover:translate-x-1 transition-all flex items-center gap-1 font-bold">
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
            <span className="text-[10px] font-extrabold text-purple-400 tracking-wider uppercase bg-purple-950/40 border border-purple-900/40 px-3 py-1 rounded-full">
              STRUCTURED PATHWAY
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
              順番に学ぶ
            </h2>
            <p className="text-xs text-zinc-450 max-w-xl mx-auto leading-relaxed font-light">
              バイオメカニクスに基づく肩トレの習得ステップ。
            </p>
          </div>

          <div className="overflow-x-auto pb-4 -mx-6 px-6 scrollbar-thin scrollbar-thumb-zinc-800">
            <div className="flex gap-5 min-w-max">
              {roadmapSteps.map((st, idx) => (
                <Link
                  key={st.id}
                  href={`/lab/shoulder/${st.slug}`}
                  className="relative w-[280px] shrink-0 bg-zinc-950 border border-zinc-900 rounded-xl p-5 hover:border-purple-900 hover:bg-zinc-900/10 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                >
                  {idx < roadmapSteps.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 bg-zinc-950 rounded-full p-1 border border-zinc-900 text-zinc-650 group-hover:text-purple-400 group-hover:bg-purple-950/30 transition-colors">
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  )}

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-black text-purple-600/80 group-hover:text-purple-400 transition-colors font-mono">
                        0{st.roadmapNumber}
                      </span>
                      <span className="text-[8px] font-mono text-zinc-550 uppercase tracking-widest">
                        STEP {st.roadmapNumber}
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <p className="text-[9px] font-mono text-purple-400/80 uppercase tracking-wide">
                        {st.category}
                      </p>
                      <h3 className="text-sm font-bold text-white group-hover:text-purple-400 transition-colors leading-tight">
                        {st.title}
                      </h3>
                      <p className="text-[11px] text-zinc-500 leading-relaxed font-light line-clamp-3">
                        {st.desc}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 pt-3 border-t border-zinc-900 flex items-center justify-between text-[9px] font-mono text-zinc-500">
                    <span>SH-STEP-{st.slug.slice(0, 6)}</span>
                    <span className="text-zinc-400 group-hover:text-purple-400 font-bold flex items-center gap-0.5">
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
            <span className="text-[10px] font-extrabold text-purple-400 tracking-wider uppercase block">
              ADVANCED LECTURE
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
              応用・探究
            </h2>
            <p className="text-xs text-zinc-450 max-w-xl mx-auto leading-relaxed font-light">
              バイオメカニクスや生理学の視点から、肩トレのより深い知識を探求します。
            </p>
          </div>

          <div className="overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-zinc-950 flex gap-6 -mx-6 px-6">
            {columnArticles.map((art) => (
              <Link
                key={art.id}
                href={`/lab/shoulder/${art.slug}`}
                className="w-[280px] md:w-[350px] shrink-0 bg-zinc-950 border border-zinc-900 hover:border-purple-900/50 rounded-xl p-4 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-xl hover:bg-zinc-900/10 cursor-pointer"
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
                      <span className="uppercase tracking-widest text-purple-450 font-semibold">{art.category}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {art.readTime}</span>
                    </div>
                    <h3 className="text-sm md:text-base font-bold text-white group-hover:text-purple-400 transition-colors leading-snug">
                      {art.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed font-light line-clamp-3">
                      {art.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-zinc-900 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                  <span className="bg-zinc-900 text-zinc-400 border border-zinc-850 px-2.5 py-0.5 rounded text-[8px] uppercase tracking-wider font-semibold">LEVEL: {art.level}</span>
                  <span className="text-zinc-400 group-hover:text-purple-400 group-hover:translate-x-1 transition-all flex items-center gap-1 font-bold">
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
            <span className="text-[10px] font-extrabold text-purple-400 tracking-wider uppercase block">
              DIAGNOSTIC NETWORK
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
              悩み・壁から探す
            </h2>
            <p className="text-xs text-zinc-450 max-w-md mx-auto leading-relaxed font-light">
              現在の悩みを選択すると、関連する解決策を表示します。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {OBSTACLES.map((obs) => (
              <Link
                href={`/lab/shoulder/articles?obstacle=${obs.label}`}
                key={obs.label}
                className="p-4 rounded-xl border border-zinc-900 bg-zinc-950 text-left flex flex-col justify-between hover:border-purple-500 hover:bg-purple-950/20 hover:shadow-xl hover:shadow-purple-500/10 text-zinc-300 transition-all duration-300 group cursor-pointer block"
              >
                <div className="space-y-2">
                  <span className="text-[8px] font-extrabold font-mono tracking-widest uppercase block text-zinc-550 group-hover:text-purple-400">
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
            <span className="text-[10px] font-extrabold text-purple-400 tracking-wider uppercase block">
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
                href={`/lab/shoulder/${art.slug}`}
                className="w-[280px] md:w-[350px] shrink-0 bg-zinc-950 border border-zinc-900 hover:border-purple-900/50 rounded-xl p-4 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-xl hover:bg-zinc-900/10 cursor-pointer"
              >
                <div className="space-y-4">
                  <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden bg-zinc-900">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
                    <img
                      src={art.image}
                      alt={art.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 opacity-80"
                    />
                    <span className="absolute top-2 left-2 z-20 text-[8px] font-extrabold text-white bg-purple-900/90 border border-purple-800 px-2 py-0.5 rounded tracking-widest uppercase">
                      PROGRAM
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[9px] font-mono text-zinc-500">
                      <span className="uppercase tracking-widest text-purple-450 font-semibold">{art.category}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {art.readTime}</span>
                    </div>
                    <h3 className="text-sm md:text-base font-bold text-white group-hover:text-purple-400 transition-colors leading-snug">
                      {art.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed font-light line-clamp-3">
                      {art.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-zinc-900 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                  <span className="bg-zinc-900 text-zinc-400 border border-zinc-850 px-2.5 py-0.5 rounded text-[8px] uppercase tracking-wider font-semibold">LEVEL: {art.level}</span>
                  <span className="text-zinc-400 group-hover:text-purple-400 group-hover:translate-x-1 transition-all flex items-center gap-1 font-bold">
                    メニューを見る <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/lab/shoulder/articles"
              className="inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-purple-900/50 text-zinc-300 hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-md group"
            >
              <BookOpen className="w-4 h-4 text-purple-500 group-hover:scale-110 transition-transform" />
              全コラム一覧を見る
            </Link>
          </div>
        </div>
      </section>

{/* ----------------- SECTION ⑦: 学術研究レビュー ----------------- */}
      <section className="py-20 bg-black border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center space-y-3 mb-16">
            <span className="text-[10px] font-extrabold text-purple-400 tracking-wider uppercase bg-purple-950/40 border border-purple-900/40 px-3 py-1 rounded-full">
              ACADEMIC DATABASE
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
              研究データ
            </h2>
            <p className="text-xs text-zinc-450 max-w-xl mx-auto leading-relaxed font-light">
              肩トレに関する重要エビデンスを要約。
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
                    <span className="text-[8px] font-bold text-purple-400 bg-purple-950/50 border border-purple-900/50 px-2.5 py-0.5 rounded-full uppercase tracking-wider font-mono">
                      {paper.tag}
                    </span>
                  </div>

                  <h3 className="text-sm md:text-base font-extrabold text-white leading-snug group-hover:text-purple-400 transition-colors">
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
                    className="flex items-center gap-1 text-zinc-450 hover:text-purple-400 transition-colors font-bold"
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
            <span className="text-[10px] font-extrabold text-purple-400 tracking-wider uppercase block">
              RESEARCH NETWORK
            </span>
            <h2 className="text-2xl font-black text-white tracking-tight">
              関連ページ
            </h2>
            <p className="text-xs text-zinc-550 leading-relaxed font-light">
              他の部位や種目に特化した専門研究ページへ進みます。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
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
