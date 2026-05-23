'use client'

import React, { useMemo } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  Clock,
  ChevronRight,
  ExternalLink,
  Activity,
  BookOpen,
  Zap
} from 'lucide-react'
import { SPECIAL_ARTICLES } from '@/data/specialArticles'

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
  { label: '力みが抜けない', desc: 'どうしても居着いてしまう' },
  { label: 'スピードが出ない', desc: '爆発力や発勁の感覚が掴めない' },
  { label: '軸がブレる', desc: '丹田とIAPのコントロール不良' },
  { label: '目的を見失った', desc: 'ただ重いものを挙げることに疑問がある' }
]

const RESEARCH_PAPERS: ResearchPaper[] = [
  {
    id: 'res-sp-1',
    title: '弾性エネルギー（伸張反射）とプレテンションの力学的相関',
    journal: 'Journal of Sports Biomechanics',
    year: 2018,
    doi: '10.1080/14763141.2018.1503322',
    findings: '完全な脱力状態よりも、深層筋にわずかなプレテンションをかけた状態からのSSC（ストレッチ・ショートニング・サイクル）の方が、力の立ち上がり率（RFD）が有意に向上する。',
    citationCount: 245,
    tag: '脱力と爆発力'
  },
  {
    id: 'res-sp-2',
    title: '横隔膜の下降が骨盤底筋群および体幹剛性に与える影響：武道呼吸の解剖学',
    journal: 'International Journal of Martial Arts Science',
    year: 2021,
    doi: '10.1016/j.ijmas.2021.09.004',
    findings: '武道で言われる「丹田への気おろし」は、横隔膜の最大収縮とそれに拮抗する腹壁・骨盤底筋群の同調収縮（IAPの最適化）と一致し、重心の下方シフトをもたらす。',
    citationCount: 112,
    tag: '丹田・IAP'
  }
]

const RELATED_LABS = [
  { title: 'ベンチプレス研究所', label: 'Bench Press Hub', slug: 'benchpress', glowColor: 'hover:border-purple-500/40 hover:bg-purple-950/10' },
  { title: 'スクワット研究所', label: 'Squat Hub', slug: 'squat', glowColor: 'hover:border-red-500/40 hover:bg-red-950/10' },
  { title: '脚トレ研究所', label: 'Legs Training Hub', slug: 'legs', glowColor: 'hover:border-amber-500/40 hover:bg-amber-950/10' }
]

export default function SpecialLab() {

  const mustReadArticles = useMemo(() => {
    return SPECIAL_ARTICLES.filter(art => art.type === 'basic')
  }, [])

  const columnArticles = useMemo(() => {
    return SPECIAL_ARTICLES.filter(art => art.type === 'applied')
  }, [])

  const roadmapSteps = useMemo(() => {
    return SPECIAL_ARTICLES
      .filter(art => typeof art.roadmapNumber === 'number')
      .sort((a, b) => (a.roadmapNumber || 0) - (b.roadmapNumber || 0))
  }, [])

  const programArticles = useMemo(() => {
    return SPECIAL_ARTICLES.filter(art => art.type === 'program')
  }, [])

  return (
    <main className="min-h-screen bg-black text-white selection:bg-indigo-900 selection:text-white pb-32">

      {/* ----------------- SECTION ①: HERO ----------------- */}
      <section className="relative overflow-hidden border-b border-zinc-900 pt-32 pb-20 bg-zinc-950">
        <div className="absolute inset-0 bg-[url('/special.jpg')] bg-cover bg-center bg-no-repeat opacity-40 grayscale-[80%]" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <div className="bg-black/60 backdrop-blur-md rounded-3xl border border-white/10 shadow-2xl p-6 md:p-10 text-center space-y-6">
            <div className="flex items-center justify-center gap-2">
              <span className="inline-flex items-center gap-1.5 text-[9px] font-extrabold text-indigo-500 bg-indigo-950/40 border border-indigo-900/40 px-3 py-1 rounded-full uppercase tracking-widest">
                <Zap className="w-3.5 h-3.5 text-indigo-500" /> Strength Philosophy
              </span>
              <span className="text-[10px] text-zinc-400 font-mono">CODE: SP-LAB-01</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-tight">
              武道・哲学<span className="text-indigo-500 font-extrabold relative inline-block">研究所</span>
            </h1>

            <p className="text-base md:text-lg font-bold text-zinc-300">
              ー 筋力を超えた「勁」と、精神修養としての身体操作 ー
            </p>

            <p className="text-xs md:text-sm text-zinc-300 leading-relaxed font-light max-w-2xl mx-auto">
              筋肉を大きくし、重いものを挙げるだけがトレーニングではない。西洋のスポーツ科学と東洋の武道・哲学が交差し、脱力、落下、丹田、発勁といった高度な身体操作を探究する特務研究所。
            </p>

            <div className="pt-6 flex justify-center">
              <Link
                href="/special/articles"
                className="group relative inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3.5 px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-indigo-900/40 border border-indigo-500"
              >
                <BookOpen className="w-4 h-4" />
                全コラム一覧を見る
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- SECTION ②: EXCLUSIVE ARTICLES ----------------- */}
      <section className="py-20 bg-black border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center space-y-3 mb-12">
            <span className="text-[10px] font-extrabold text-indigo-500 tracking-wider uppercase block">
              PHILOSOPHY & SCIENCE
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
              特別コラム
            </h2>
            <p className="text-xs text-zinc-450 max-w-xl mx-auto leading-relaxed font-light">
              この研究所でしか読めない、哲学と身体操作に関する深淵な考察。
            </p>
          </div>

          <div className="overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-zinc-950 flex gap-6 -mx-6 px-6">
            {mustReadArticles.map((art, idx) => (
              <Link
                key={art.id}
                href={`/special/${art.slug}`}
                className="w-[280px] md:w-[350px] shrink-0 bg-zinc-950/40 border border-zinc-900 hover:border-zinc-800 rounded-xl p-4 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-xl hover:bg-zinc-900/10 cursor-pointer"
              >
                <div className="space-y-4">
                  <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden bg-zinc-900">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
                    <img
                      src={art.image}
                      alt={art.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 opacity-60 grayscale group-hover:grayscale-0"
                    />
                    <span className="absolute top-2 left-2 z-20 text-[8px] font-extrabold text-indigo-400 bg-zinc-950/90 border border-zinc-900 px-2 py-0.5 rounded tracking-widest uppercase">
                      EXCLUSIVE 0{idx + 1}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[9px] font-mono text-zinc-500">
                      <span className="uppercase tracking-widest text-indigo-500 font-semibold">{art.category}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {art.readTime}</span>
                    </div>
                    <h3 className="text-sm md:text-base font-bold text-white group-hover:text-indigo-400 transition-colors leading-snug">
                      {art.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed font-light line-clamp-3">
                      {art.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-zinc-900 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                  <span className="bg-zinc-900 text-zinc-400 border border-zinc-850 px-2.5 py-0.5 rounded text-[8px] uppercase tracking-wider font-semibold">LEVEL: {art.level}</span>
                  <span className="text-zinc-400 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all flex items-center gap-1 font-bold">
                    探究する <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- SECTION ③: 武術・身体操作の応用 ----------------- */}
      <section className="py-20 bg-zinc-950/20 border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center space-y-3 mb-12">
            <span className="text-[10px] font-extrabold text-indigo-500 tracking-wider uppercase block">
              MARTIAL ARTS CROSSOVER
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
              武術とバイオメカニクスの融合
            </h2>
            <p className="text-xs text-zinc-450 max-w-xl mx-auto leading-relaxed font-light">
              西洋のウエイトトレーニング理論を、東洋の武道・身体操作の視点で再構築する。
            </p>
          </div>

          <div className="overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-zinc-950 flex gap-6 -mx-6 px-6">
            {columnArticles.map((art) => (
              <Link
                key={art.id}
                href={`/special/${art.slug}`}
                className="w-[280px] md:w-[350px] shrink-0 bg-zinc-950 border border-zinc-900 hover:border-indigo-900/50 rounded-xl p-4 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-xl hover:bg-zinc-900/10 cursor-pointer"
              >
                <div className="space-y-4">
                  <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden bg-zinc-900">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
                    <img
                      src={art.image}
                      alt={art.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 opacity-60 grayscale-[50%] group-hover:grayscale-0"
                    />
                    <span className="absolute top-2 left-2 z-20 text-[8px] font-extrabold text-zinc-300 bg-zinc-900/90 border border-zinc-700 px-2 py-0.5 rounded tracking-widest uppercase">
                      CROSSOVER
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[9px] font-mono text-zinc-500">
                      <span className="uppercase tracking-widest text-indigo-500 font-semibold">{art.category}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {art.readTime}</span>
                    </div>
                    <h3 className="text-sm md:text-base font-bold text-white group-hover:text-indigo-400 transition-colors leading-snug">
                      {art.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed font-light line-clamp-3">
                      {art.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-zinc-900 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                  <span className="bg-zinc-900 text-zinc-400 border border-zinc-850 px-2.5 py-0.5 rounded text-[8px] uppercase tracking-wider font-semibold">LEVEL: {art.level}</span>
                  <span className="text-zinc-400 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all flex items-center gap-1 font-bold">
                    探究する <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- SECTION ④: 実践行法（プログラム） ----------------- */}
      <section className="py-20 bg-black border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center space-y-3 mb-12">
            <span className="text-[10px] font-extrabold text-indigo-500 tracking-wider uppercase block">
              TRAINING PROTOCOLS
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
              武術的プログラム
            </h2>
            <p className="text-xs text-zinc-450 max-w-xl mx-auto leading-relaxed font-light">
              脱力と床反力を身体に叩き込むための、筋肥大を目的としない特殊な鍛錬法。
            </p>
          </div>

          <div className="overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-zinc-950 flex gap-6 -mx-6 px-6">
            {programArticles.map((art) => (
              <Link
                key={art.id}
                href={`/special/${art.slug}`}
                className="w-[280px] md:w-[350px] shrink-0 bg-zinc-950 border border-zinc-900 hover:border-indigo-900/50 rounded-xl p-4 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-xl hover:bg-zinc-900/10 cursor-pointer"
              >
                <div className="space-y-4">
                  <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden bg-zinc-900">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
                    <img
                      src={art.image}
                      alt={art.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 opacity-60 grayscale-[70%] group-hover:grayscale-0"
                    />
                    <span className="absolute top-2 left-2 z-20 text-[8px] font-extrabold text-white bg-indigo-600/90 border border-indigo-500 px-2 py-0.5 rounded tracking-widest uppercase">
                      PROTOCOL
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[9px] font-mono text-zinc-500">
                      <span className="uppercase tracking-widest text-indigo-500 font-semibold">{art.category}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {art.readTime}</span>
                    </div>
                    <h3 className="text-sm md:text-base font-bold text-white group-hover:text-indigo-400 transition-colors leading-snug">
                      {art.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed font-light line-clamp-3">
                      {art.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-zinc-900 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                  <span className="bg-zinc-900 text-zinc-400 border border-zinc-850 px-2.5 py-0.5 rounded text-[8px] uppercase tracking-wider font-semibold">LEVEL: {art.level}</span>
                  <span className="text-zinc-400 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all flex items-center gap-1 font-bold">
                    行法を見る <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- SECTION ⑤: 哲学的な壁から探す ----------------- */}
      <section className="py-20 bg-black border-b border-zinc-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center space-y-3 mb-12">
            <span className="text-[10px] font-extrabold text-indigo-500 tracking-wider uppercase block">
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
                href={`/special/articles?obstacle=${obs.label}`}
                key={obs.label}
                className="p-4 rounded-xl border border-zinc-900 bg-zinc-950 text-left flex flex-col justify-between hover:border-indigo-500 hover:bg-indigo-950/20 hover:shadow-xl hover:shadow-indigo-500/10 text-zinc-300 transition-all duration-300 group cursor-pointer block"
              >
                <div className="space-y-2">
                  <span className="text-[8px] font-extrabold font-mono tracking-widest uppercase block text-zinc-550 group-hover:text-indigo-500">
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

      {/* ----------------- SECTION ⑥: 関連研究所 (Related Portals) ----------------- */}
      <section className="py-20 bg-zinc-950/20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center space-y-3 mb-12">
            <span className="text-[10px] font-extrabold text-indigo-500 tracking-wider uppercase block">
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
