import React from 'react'
import Link from 'next/link'
import { FlaskConical, ArrowRight } from 'lucide-react'

const big3Labs = [
  { id: 'benchpress', title: 'ベンチプレス研究所', desc: 'フォーム、力学的支点、肩関節インピンジメント予防、プログラミング。', href: '/lab/benchpress' },
  { id: 'squat', title: 'スクワット研究所', desc: '骨格アライメントの崩れ、バットウィンク、トリプルエクステンションの力学。', href: '/lab/squat' },
  { id: 'deadlift', title: 'デッドリフト研究所', desc: 'ヒップヒンジの習得、広背筋の動員、床から重量を引き剥がすメカニズム。', href: '/lab/deadlift' },
  { id: 'power', title: 'クリーン＆スナッチ研究所', desc: '瞬発力とボディコントロール。五輪リフティングの叡智を体系化。', href: '/lab/power' },
  { id: 'ziju', title: '自重トレーニング研究所', desc: 'バイオメカニクスに基づく自重トレーニングの真髄。プッシュアップ、懸垂、ピストルスクワット。', href: '/lab/ziju' },
]

const bodyLabs = [
  { id: 'chest', title: '胸トレ研究所', desc: '大胸筋の解剖学的走行、最適なストレッチと収縮ポジション。', href: '/lab/chest' },
  { id: 'back', title: '背中トレ研究所', desc: '広背筋・僧帽筋の機能解剖、肩甲骨の連動と軌道制御。', href: '/lab/back' },
  { id: 'shoulder', title: '肩トレ研究所', desc: '三角筋前・中・後部の選択的肥大、肩関節の安定性強化。', href: '/lab/shoulder' },
  { id: 'arms', title: '腕トレ研究所', desc: '上腕二頭筋・三頭筋のバイオメカニクス、モーメントアームの最大化。', href: '/lab/arms' },
  { id: 'legs', title: '脚トレ研究所', desc: '大腿四頭筋・ハムストリングス・臀部の特異的肥大理論。', href: '/lab/legs' },
  { id: 'abs', title: '腹筋研究所', desc: '体幹の屈曲と安定化、腹直筋・腹斜筋のコントラクション。', href: '/lab/abs' },
]

const sportsLabs = [
  { id: 'golf', title: 'ゴルフ研究所', desc: 'スイングの力学、床反力と回旋、飛距離アップのバイオメカニクス。', href: '/lab/golf' },
  { id: 'athlete', title: 'アスリート能力研究所', desc: '競技パフォーマンス向上、スピード・アジリティ・パワーのスポーツ科学。', href: '/athlete/performance' },
]

const goalLabs = [
  { id: 'hypertrophy', title: '筋肥大研究所', desc: '筋量増加のメカニズム、筋タンパク質合成とボリューム理論。', href: '/lab/hypertrophy' },
]

const specialLabs = [
  { id: 'special', title: '武道・哲学研究所', desc: '筋力を超えた「勁」と、精神修養としての身体操作を探究。', href: '/special' },
]

export default function LabPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-900 selection:text-white pb-28">
      
      {/* 1. Hero Header with Background Image */}
      <section className="relative pt-32 pb-24 text-center overflow-hidden">
        {/* Background Image & Overlays */}
        <div className="absolute inset-0 bg-[url('/coach.jpg')] bg-cover bg-center opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/80 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 space-y-4">
          <div className="inline-flex items-center gap-2 text-[10px] font-mono tracking-widest text-blue-300 uppercase">
            <FlaskConical className="w-3.5 h-3.5 text-blue-500" /> SA Research Division
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            研究所
          </h1>
          <p className="max-w-lg mx-auto text-xs md:text-sm text-zinc-400 leading-relaxed font-light tracking-widest">
            各分野に特化した研究所一覧
          </p>
        </div>
      </section>

      {/* 2. Directory Lists */}
      <section className="max-w-5xl mx-auto px-6 mt-12 space-y-16">

        {/* --- Category A: BIG3 & リフティング --- */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-zinc-900 pb-2.5">
            <h2 className="text-sm font-bold tracking-wider text-zinc-300 uppercase">
              BIG3・リフティング系
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {big3Labs.map((lab) => (
              <Link
                key={lab.id}
                href={lab.href}
                className="group relative block bg-zinc-950 hover:bg-zinc-900/40 border border-zinc-900 hover:border-zinc-700 rounded-xl p-5 transition-all duration-300 shadow-md"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <h3 className="text-base md:text-lg font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {lab.title}
                    </h3>
                    <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                  </div>
                  <p className="text-xs text-zinc-500 leading-relaxed font-light">
                    {lab.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* --- Category B: 部位別 --- */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-zinc-900 pb-2.5">
            <h2 className="text-sm font-bold tracking-wider text-zinc-300 uppercase">
              部位別トレーニング
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {bodyLabs.map((lab) => (
              <Link
                key={lab.id}
                href={lab.href}
                className="group relative block bg-zinc-950 hover:bg-zinc-900/40 border border-zinc-900 hover:border-zinc-700 rounded-xl p-5 transition-all duration-300 shadow-md"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {lab.title}
                    </h3>
                    <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                  </div>
                  <p className="text-xs text-zinc-500 leading-relaxed font-light">
                    {lab.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* --- Category C: アスリート・スポーツ系 --- */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-zinc-900 pb-2.5">
            <h2 className="text-sm font-bold tracking-wider text-zinc-300 uppercase">
              競技別特化
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {sportsLabs.map((lab) => (
              <Link
                key={lab.id}
                href={lab.href}
                className="group relative block bg-zinc-950 hover:bg-zinc-900/40 border border-zinc-900 hover:border-emerald-900/50 rounded-xl p-5 transition-all duration-300 shadow-md"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <h3 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                      {lab.title}
                    </h3>
                    <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
                  </div>
                  <p className="text-xs text-zinc-500 leading-relaxed font-light">
                    {lab.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* --- Category D: 目的別 --- */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-zinc-900 pb-2.5">
            <h2 className="text-sm font-bold tracking-wider text-zinc-300 uppercase">
              目的別
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {goalLabs.map((lab) => (
              <Link
                key={lab.id}
                href={lab.href}
                className="group relative block bg-zinc-950 hover:bg-zinc-900/40 border border-zinc-900 hover:border-blue-900/50 rounded-xl p-5 transition-all duration-300 shadow-md"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {lab.title}
                    </h3>
                    <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                  </div>
                  <p className="text-xs text-zinc-500 leading-relaxed font-light">
                    {lab.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* --- Category E: スペシャル・特化型 --- */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-zinc-900 pb-2.5">
            <h2 className="text-sm font-bold tracking-wider text-zinc-300 uppercase">
              スペシャル・特化型
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {specialLabs.map((lab) => (
              <Link
                key={lab.id}
                href={lab.href}
                className="group relative block bg-zinc-950 hover:bg-zinc-900/40 border border-zinc-900 hover:border-indigo-900/50 rounded-xl p-5 transition-all duration-300 shadow-md"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <h3 className="text-base font-bold text-white group-hover:text-indigo-400 transition-colors duration-300">
                      {lab.title}
                    </h3>
                    <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
                  </div>
                  <p className="text-xs text-zinc-500 leading-relaxed font-light">
                    {lab.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </section>

      {/* 3. Bottom Return Button */}
      <section className="max-w-5xl mx-auto px-6 mt-20 text-center">
        <Link 
          href="/" 
          className="inline-flex items-center justify-center text-xs text-zinc-500 hover:text-zinc-350 transition-colors font-medium border-b border-zinc-900 hover:border-zinc-800 pb-1"
        >
          トップページへ戻る
        </Link>
      </section>

    </main>
  )
}
