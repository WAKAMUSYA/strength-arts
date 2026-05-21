'use client'

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import { 
  ArrowRight, 
  Dumbbell, 
  TrendingUp, 
  Layers, 
  Clock, 
  ChevronRight,
  Sparkles,
  ExternalLink,
  Activity,
  Lock,
  X,
  Info,
  BookOpen
} from 'lucide-react'
import { BENCHPRESS_ARTICLES } from '@/data/benchpressArticles'

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
  { label: '胸に入らない', desc: '大胸筋に刺激を集中させたい' },
  { label: '肩が痛い', desc: '挙上時に肩前面に違和感がある' },
  { label: '停滞した', desc: 'MAX重量が数ヶ月更新されていない' },
  { label: '腰が反る', desc: 'アーチ形成で腰が痛む・浮いてしまう' }
]

const RESEARCH_PAPERS: ResearchPaper[] = [
  {
    id: 'res-1',
    title: '限界セット数（ボリューム）と大胸筋肥大の相関関係：ランダム化比較試験',
    journal: 'Journal of Strength and Conditioning Research',
    year: 2022,
    doi: '10.1519/JSC.0000000000004123',
    findings: '週あたり10セットと20セットの比較において、漸進的過負荷が維持されている限り、高ボリューム群で大胸筋の横断面積（CSA）が著しく増加した。',
    citationCount: 42,
    tag: 'ボリューム設計'
  },
  {
    id: 'res-2',
    title: '異なるベンチプレス角度（0°, 30°, 45°）が筋肉活性化に及ぼす筋電図（EMG）分析',
    journal: 'European Journal of Sport Science',
    year: 2020,
    doi: '10.1080/17461391.2019.1695952',
    findings: '大胸筋上部繊維の活性化は30°のインクラインで最大となり、45°以上では三角筋前部の活性化が急増し大胸筋上部の貢献度は減少した。',
    citationCount: 68,
    tag: '角度力学'
  },
  {
    id: 'res-3',
    title: '挙上速度低下フィードバックによるベンチプレスのプログラム処方と筋力向上率',
    journal: 'International Journal of Sports Physiology and Performance',
    year: 2021,
    doi: '10.1123/ijspp.2020-0321',
    findings: '挙上中のバー速度（Velocity Loss）を指標にセット終了を決定することで、過度な疲労を蓄積させることなく最大筋力を向上できることが実証された。',
    citationCount: 31,
    tag: '速度制御（VBT）'
  },
  {
    id: 'res-4',
    title: 'ブリッジの高さが肩関節への圧縮力および剪断ストレスに及ぼす生体力学的モデリング',
    journal: 'Clinical Biomechanics',
    year: 2023,
    doi: '10.1016/j.clinbiomech.2023.105942',
    findings: '過度な胸椎伸展ブリッジは挙上距離を約35%削減し、肩関節の最大外転トルクを軽減させる一方で、腰椎部の圧縮ストレスが増加することを示唆した。',
    citationCount: 15,
    tag: '関節応力'
  }
]

const RELATED_LABS = [
  { title: '胸研究所', label: 'Chest Biomechanics Hub', slug: 'chest', glowColor: 'hover:border-blue-500/40 hover:bg-blue-950/10' },
  { title: '肩研究所', label: 'Shoulder Kinetic Hub', slug: 'shoulder', glowColor: 'hover:border-purple-500/40 hover:bg-purple-950/10' },
  { title: 'スクワット研究所', label: 'Squat & Lower-Body Hub', slug: 'squat', glowColor: 'hover:border-amber-500/40 hover:bg-amber-950/10' }
]

export default function BenchPressLab() {
  const [activePortal, setActivePortal] = useState<string | null>(null)
  
  // Categorize articles from shared data file
  const mustReadArticles = useMemo(() => {
    return BENCHPRESS_ARTICLES.filter(art => art.type === 'basic')
  }, [])

  const columnArticles = useMemo(() => {
    return BENCHPRESS_ARTICLES.filter(art => art.type === 'applied')
  }, [])

  // Dynamically generate roadmap steps from articles with a `roadmapNumber` (sorted ascending)
  const roadmapSteps = useMemo(() => {
    return BENCHPRESS_ARTICLES
      .filter(art => typeof art.roadmapNumber === 'number')
      .sort((a, b) => (a.roadmapNumber || 0) - (b.roadmapNumber || 0))
  }, [])

  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-900 selection:text-white pb-32">
      
      {/* ----------------- SECTION ①: HERO ----------------- */}
      <section className="relative overflow-hidden border-b border-zinc-900 pt-20 pb-12 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-950/20 via-black to-black">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center space-y-6">
          <div className="flex items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-[9px] font-extrabold text-blue-400 bg-blue-950/40 border border-blue-900/40 px-3 py-1 rounded-full uppercase tracking-widest">
              <Activity className="w-3.5 h-3.5 text-blue-500" /> Bench Press Research Facility
            </span>
            <span className="text-[10px] text-zinc-550 font-mono">CODE: BP-LAB-01</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-tight">
            ベンチプレス<span className="text-blue-500 font-extrabold relative inline-block">研究所</span>
          </h1>

          <p className="text-base md:text-lg font-bold text-zinc-300">
            ー ベンチプレスを極める ー
          </p>

          <p className="text-xs md:text-sm text-zinc-450 leading-relaxed font-light max-w-2xl mx-auto">
            単に挙上重量を競うだけでなく、関節の機能解剖学やバイオメカニクス、そして神経系の動員メカニズムからベンチプレスの動作を徹底的に再設計します。科学的なアプローチとSA独自の研究結果を融合させ、あなたのパフォーマンスを次の次元へと引き上げます。
          </p>


        </div>
      </section>

      {/* ----------------- SECTION ②: まず読んでほしい基礎講義 ----------------- */}
      <section className="py-20 bg-black border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-900 pb-6 mb-10">
            <div className="space-y-2">
              <span className="text-[10px] font-extrabold text-blue-400 tracking-wider uppercase block">
                FACILITY DIRECTORY
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                基本理論
              </h2>
            </div>
            <p className="text-xs text-zinc-550 max-w-sm font-light mt-2 md:mt-0 leading-relaxed">
              怪我を防ぎ、大胸筋への刺激を最大化する必須の基礎理論。
            </p>
          </div>

          {/* Horizontal Swipe Card Container */}
          <div className="overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-zinc-950 flex gap-6 -mx-6 px-6">
            {mustReadArticles.map((art, idx) => (
              <Link 
                key={art.id} 
                href={`/lab/benchpress/${art.slug}`}
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
                    <span className="absolute top-2 left-2 z-20 text-[8px] font-extrabold text-blue-400 bg-zinc-950/90 border border-zinc-900 px-2 py-0.5 rounded tracking-widest uppercase">
                      LECTURE 0{idx + 1}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[9px] font-mono text-zinc-500">
                      <span className="uppercase tracking-widest text-blue-450 font-semibold">{art.category}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {art.readTime}</span>
                    </div>

                    <h3 className="text-sm md:text-base font-bold text-white group-hover:text-blue-400 transition-colors leading-snug">
                      {art.title}
                    </h3>

                    <p className="text-xs text-zinc-400 leading-relaxed font-light line-clamp-3">
                      {art.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-zinc-900 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                  <span className="bg-zinc-900 text-zinc-400 border border-zinc-850 px-2.5 py-0.5 rounded text-[8px] uppercase tracking-wider font-semibold">LEVEL: {art.level}</span>
                  <span className="text-zinc-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all flex items-center gap-1 font-bold">
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
            <span className="text-[10px] font-extrabold text-blue-400 tracking-wider uppercase bg-blue-950/40 border border-blue-900/40 px-3 py-1 rounded-full">
              STRUCTURED PATHWAY
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
              ロードマップ
            </h2>
            <p className="text-xs text-zinc-400 max-w-xl mx-auto leading-relaxed font-light">
              バイオメカニクスに基づく10段階の習得ステップ。
            </p>
          </div>

          {/* Steps Horizontal/Vertical Responsive Scroll (Dynamically populated from common data) */}
          <div className="overflow-x-auto pb-4 -mx-6 px-6 scrollbar-thin scrollbar-thumb-zinc-800">
            <div className="flex gap-5 min-w-[1700px]">
              {roadmapSteps.map((st, idx) => (
                <Link 
                  key={st.id}
                  href={`/lab/benchpress/${st.slug}`}
                  className="relative w-[280px] shrink-0 bg-zinc-950 border border-zinc-900 rounded-xl p-5 hover:border-blue-900 hover:bg-zinc-900/10 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                >
                  {idx < roadmapSteps.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 bg-zinc-950 rounded-full p-1 border border-zinc-900 text-zinc-650 group-hover:text-blue-400 group-hover:bg-blue-950/30 transition-colors">
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  )}

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-black text-blue-950 group-hover:text-blue-900 transition-colors font-mono">
                        0{st.roadmapNumber}
                      </span>
                      <span className="text-[8px] font-mono text-zinc-550 uppercase tracking-widest">
                        STEP {st.roadmapNumber}
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <p className="text-[9px] font-mono text-blue-400/80 uppercase tracking-wide">
                        {st.category}
                      </p>
                      <h3 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors leading-tight">
                        {st.title}
                      </h3>
                      <p className="text-[11px] text-zinc-500 leading-relaxed font-light line-clamp-3">
                        {st.desc}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 pt-3 border-t border-zinc-900 flex items-center justify-between text-[9px] font-mono text-zinc-500">
                    <span>BP-STEP-{st.slug.slice(0, 6)}</span>
                    <span className="text-zinc-400 group-hover:text-blue-400 font-bold flex items-center gap-0.5">
                      READ <ArrowRight className="w-2.5 h-2.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ----------------- SECTION ④: 障害・壁から探す ----------------- */}
      <section className="py-20 bg-black border-b border-zinc-900">
        <div className="max-w-4xl mx-auto px-6">

          <div className="text-center space-y-3 mb-12">
            <span className="text-[10px] font-extrabold text-blue-400 tracking-wider uppercase block">
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
                href={`/lab/benchpress/articles?tab=basic&obstacle=${encodeURIComponent(obs.label)}`}
                className="p-4 rounded-xl border border-zinc-900 bg-zinc-950 text-left flex flex-col justify-between hover:border-blue-500 hover:bg-blue-950/20 hover:shadow-xl hover:shadow-blue-500/10 text-zinc-300 transition-all duration-300 group cursor-pointer"
              >
                <div className="space-y-2">
                  <span className="text-[8px] font-extrabold font-mono tracking-widest uppercase block text-zinc-550 group-hover:text-blue-400">
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
              href="/lab/benchpress/articles?tab=basic"
              className="relative inline-flex items-center gap-2 bg-gradient-to-r from-blue-950/50 to-blue-900/30 hover:from-blue-900/60 hover:to-blue-800/40 border border-blue-800/50 hover:border-blue-500 text-white font-bold text-xs md:text-sm px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 tracking-wider group cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-blue-400 group-hover:text-blue-300 group-hover:scale-110 transition-all shrink-0" />
              <span>すべての基本理論コラムを見る</span>
              <ChevronRight className="w-4 h-4 text-blue-500 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

        </div>
      </section>

      {/* ----------------- SECTION ⑤: 専門探究コラム ----------------- */}
      <section className="py-20 bg-zinc-950/10 border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6">

          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-900 pb-6 mb-10">
            <div className="space-y-2">
              <span className="text-[10px] font-extrabold text-blue-400 tracking-wider uppercase block">
                SPECIALIST INQUIRY
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                応用・探究
              </h2>
            </div>
            <p className="text-xs text-zinc-550 max-w-sm font-light leading-relaxed">
              物理学と解剖学の観点からプレス動作をより深くハックする。
            </p>
          </div>

          {/* Horizontal Swipe Card Container */}
          <div className="overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-zinc-950 flex gap-6 -mx-6 px-6">
            {columnArticles.map((col) => (
              <Link 
                key={col.id} 
                href={`/lab/benchpress/${col.slug}`}
                className="w-[280px] md:w-[350px] shrink-0 group cursor-pointer bg-zinc-950 border border-zinc-900 hover:border-zinc-800 rounded-xl p-6 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:bg-zinc-900/10"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-[9px] font-mono text-zinc-500">
                    <span className="uppercase tracking-widest text-blue-450 font-semibold">{col.category}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {col.readTime}</span>
                  </div>

                  <h3 className="text-base md:text-lg font-black text-white group-hover:text-blue-450 transition-colors leading-snug">
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
                  <span className="text-zinc-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all flex items-center gap-1 font-bold">
                    講読する <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* 🌟 USER REQUEST: 「応用・探究コラムをすべて見る」ボタンを追加 */}
          <div className="mt-12 flex justify-center">
            <Link 
              href="/lab/benchpress/articles?tab=applied"
              className="relative inline-flex items-center gap-2 bg-gradient-to-r from-zinc-900/70 to-zinc-850/50 hover:from-zinc-850/80 hover:to-zinc-800/60 border border-zinc-800 hover:border-zinc-650 text-white font-bold text-xs md:text-sm px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-zinc-800/10 tracking-wider group cursor-pointer"
            >
              <Layers className="w-4 h-4 text-blue-400 group-hover:text-blue-300 group-hover:scale-110 transition-all shrink-0" />
              <span>応用・探究コラムをすべて見る</span>
              <ChevronRight className="w-4 h-4 text-blue-500 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

        </div>
      </section>

      {/* ----------------- SECTION ⑥: 学術研究レビュー ----------------- */}
      <section className="py-20 bg-black border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center space-y-3 mb-16">
            <span className="text-[10px] font-extrabold text-blue-400 tracking-wider uppercase bg-blue-950/40 border border-blue-900/40 px-3 py-1 rounded-full">
              ACADEMIC DATABASE
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
              研究データ
            </h2>
            <p className="text-xs text-zinc-450 max-w-xl mx-auto leading-relaxed font-light">
              世界中の科学論文から、ベンチプレスに関する重要エビデンスを要約。
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
                    <span className="text-[8px] font-bold text-blue-400 bg-blue-950/50 border border-blue-900/50 px-2.5 py-0.5 rounded-full uppercase tracking-wider font-mono">
                      {paper.tag}
                    </span>
                  </div>

                  {/* Paper Title */}
                  <h3 className="text-sm md:text-base font-extrabold text-white leading-snug group-hover:text-blue-400 transition-colors">
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
                    className="flex items-center gap-1 text-zinc-450 hover:text-blue-400 transition-colors font-bold"
                  >
                    ORIGINAL PAPER <ExternalLink className="w-3 h-3" />
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
            <span className="text-[10px] font-extrabold text-blue-400 tracking-wider uppercase block">
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
              className="text-xs font-mono font-bold text-zinc-550 hover:text-blue-400 transition-colors inline-flex items-center gap-1.5"
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
            <div className="flex items-center gap-2 text-blue-400 text-xs font-mono">
              <Info className="w-4 h-4" />
              <span>UNDER CONSTRUCTION</span>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-black text-white leading-tight">
                「{activePortal}」構築中
              </h3>
              <p className="text-xs text-zinc-450 leading-relaxed font-light">
                現在、Strength Arts研究チームが最新のスポーツバイオメカニクス論文と解剖データモデルを解析し、この種目の特化研究ページ（ベンチプレス研究所と同様のインタラクティブ構成）を全力で編纂しております。
              </p>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-850/60 rounded-xl p-4 space-y-2.5">
              <span className="text-[9px] font-extrabold uppercase tracking-widest text-zinc-550 block">
                公開予定の専門コンテンツ例
              </span>
              <ul className="text-[11px] text-zinc-400 space-y-1.5 list-disc pl-4 font-light">
                <li>骨格比率に応じたフォームのパーソナライズ測定</li>
                <li>関節モーメントアームの最適化とエラー軌道分析</li>
                <li>対象筋の筋電図（EMG）に基づく収縮誘導テクニック</li>
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
