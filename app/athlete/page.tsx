'use client'

import Link from 'next/link'
import { 
  ArrowUpRight,
  Compass
} from 'lucide-react'

// Defined items for each Athlete category
const sports = [
  { id: 'baseball', title: '野球 (Baseball)', href: '/athlete/sport/baseball' },
  { id: 'handball', title: 'ハンドボール (Handball)', href: '/athlete/sport/handball' },
  { id: 'soccer', title: 'サッカー (Soccer)', href: '/athlete/sport/soccer' },
  { id: 'basketball', title: 'バスケット (Basketball)', href: '/athlete/sport/basketball' },
  { id: 'athletics', title: '陸上 (Track & Field)', href: '/athlete/sport/athletics' },
]

const goals = [
  { id: 'speedup', title: '足を速くしたい', href: '/athlete/goal/speedup' },
  { id: 'jumppower', title: 'ジャンプ力を上げたい', href: '/athlete/goal/jumppower' },
  { id: 'contactpower', title: '当たりを強くしたい', href: '/athlete/goal/contactpower' },
  { id: 'ballspeed', title: '球速を上げたい', href: '/athlete/goal/ballspeed' },
  { id: 'rotation', title: '回旋を強くしたい', href: '/athlete/goal/rotation' },
  { id: 'injuryfree', title: 'ケガを予防したい', href: '/athlete/goal/injuryfree' },
]

const practices = [
  { id: 'pitching150', title: '150km投げるための考え方', href: '/athlete/practice/pitching150' },
  { id: 'jumpstretch', title: 'ジャンプ力が高い選手の特徴', href: '/athlete/practice/jumpstretch' },
  { id: 'prosenshu', title: 'プロ選手の自主練', href: '/athlete/practice/prosenshu' },
]

export default function AthleteDirectoryPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-purple-900 selection:text-white pb-28">
      
      {/* 1. Ultra-Minimalist Hero Header */}
      <section className="relative pt-28 pb-16 text-center bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-purple-950/20 via-black to-black">
        <div className="max-w-3xl mx-auto px-6 space-y-4">
          <div className="inline-flex items-center gap-2 text-[10px] font-mono tracking-widest text-zinc-550 uppercase">
            <Compass className="w-3.5 h-3.5 text-purple-500" /> Athlete Explorer
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            アスリート個別強化探究
          </h1>
          <p className="max-w-lg mx-auto text-xs md:text-sm text-zinc-400 leading-relaxed font-light">
            競技特性と力学のアプローチ。競技別・目的別・自主練のテーマを選択してください。
          </p>
        </div>
      </section>

      {/* 2. Simplified Minimal Directory Lists */}
      <section className="max-w-5xl mx-auto px-6 mt-12 space-y-20">

        {/* --- Category A: 競技別 --- */}
        <div className="space-y-6">
          <h2 className="text-sm font-bold tracking-wider text-zinc-450 border-b border-zinc-905 pb-2.5 uppercase">
            競技別
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sports.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="group relative block bg-zinc-950 hover:bg-zinc-900/30 border border-zinc-900 hover:border-zinc-800 rounded-lg p-5 transition-all duration-300 shadow-md"
              >
                <div className="flex justify-between items-center">
                  <span className="text-sm md:text-base font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                    {item.title}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-700 group-hover:text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* --- Category B: 目的別 --- */}
        <div className="space-y-6">
          <h2 className="text-sm font-bold tracking-wider text-zinc-450 border-b border-zinc-905 pb-2.5 uppercase">
            目的別
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {goals.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="group relative block bg-zinc-950 hover:bg-zinc-900/30 border border-zinc-900 hover:border-zinc-800 rounded-lg p-5 transition-all duration-300 shadow-md"
              >
                <div className="flex justify-between items-center">
                  <span className="text-sm md:text-base font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                    {item.title}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-700 group-hover:text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* --- Category C: 一流の自主練 --- */}
        <div className="space-y-6">
          <h2 className="text-sm font-bold tracking-wider text-zinc-450 border-b border-zinc-905 pb-2.5 uppercase">
            一流の自主練
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {practices.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="group relative block bg-zinc-950 hover:bg-zinc-900/30 border border-zinc-900 hover:border-zinc-800 rounded-lg p-5 transition-all duration-300 shadow-md"
              >
                <div className="flex justify-between items-center">
                  <span className="text-sm md:text-base font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                    {item.title}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-700 group-hover:text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
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
