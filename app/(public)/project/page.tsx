import React from 'react'
import Link from 'next/link'
import { ArrowUpRight, BookOpen, GraduationCap, Archive, Activity, Smartphone } from 'lucide-react'

export default function ProjectPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-emerald-900 selection:text-white pb-28">
      
      {/* 1. Hero Header with Background Image */}
      <section className="relative pt-32 pb-24 text-center overflow-hidden">
        {/* Background Image & Overlays */}
        <div className="absolute inset-0 bg-[url('/project.png')] bg-cover bg-center opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/80 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 space-y-4">
          <div className="inline-flex items-center gap-2 text-[10px] font-mono tracking-widest text-emerald-300 uppercase">
            <Archive className="w-3.5 h-3.5 text-emerald-500" /> Project Archives
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase">
            PROJECTS
          </h1>
          <p className="max-w-lg mx-auto text-xs md:text-sm text-zinc-400 leading-relaxed font-light tracking-widest">
            SAの枠に収まらない多様な制作物・研究アーカイブ
          </p>
        </div>
      </section>

      {/* 2. Project Links Grid */}
      <section className="max-w-5xl mx-auto px-6 mt-12 space-y-20">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* SA Training */}
          <Link
            href="/project/sa-training"
            className="group relative flex flex-col justify-between bg-zinc-950 hover:bg-zinc-900/40 border border-zinc-900 hover:border-red-900/60 rounded-2xl p-8 transition-all duration-500 shadow-md hover:-translate-y-1 h-[280px]"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center border border-zinc-800 group-hover:bg-red-950/30 group-hover:border-red-900/50 transition-colors">
                <Smartphone className="w-6 h-6 text-zinc-400 group-hover:text-red-500 transition-colors" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors mb-2 tracking-wide">
                  SA Training
                </h3>
                <p className="text-xs md:text-sm text-zinc-500 font-light leading-relaxed">
                  トレーニングノートをベースにした、日々の筋トレ記録アプリ。種目選択、前回値、履歴、共有画像作成に対応。
                </p>
              </div>
            </div>
            <div className="flex items-center text-[10px] font-bold tracking-[0.2em] text-zinc-600 group-hover:text-red-500 transition-colors uppercase">
              View App Project <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
            </div>
          </Link>

          {/* Academy */}
          <Link
            href="/academy"
            className="group relative flex flex-col justify-between bg-zinc-950 hover:bg-zinc-900/40 border border-zinc-900 hover:border-emerald-900/50 rounded-2xl p-8 transition-all duration-500 shadow-md hover:-translate-y-1 h-[280px]"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center border border-zinc-800 group-hover:bg-emerald-950/30 group-hover:border-emerald-900/50 transition-colors">
                <GraduationCap className="w-6 h-6 text-zinc-400 group-hover:text-emerald-500 transition-colors" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors mb-2 tracking-wide">
                  ACADEMY
                </h3>
                <p className="text-xs md:text-sm text-zinc-500 font-light leading-relaxed">
                  ストレングスアーツのアカデミー部門。NSCAなどの資格対策や、より学術的な基礎科学の学習ハブ。
                </p>
              </div>
            </div>
            <div className="flex items-center text-[10px] font-bold tracking-[0.2em] text-zinc-600 group-hover:text-emerald-500 transition-colors uppercase">
              Enter Academy <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
            </div>
          </Link>

          {/* Personal Blog (LAB) */}
          <Link
            href="https://tamuranaoki-lab.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col justify-between bg-zinc-950 hover:bg-zinc-900/40 border border-zinc-900 hover:border-emerald-900/50 rounded-2xl p-8 transition-all duration-500 shadow-md hover:-translate-y-1 h-[280px]"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center border border-zinc-800 group-hover:bg-emerald-950/30 group-hover:border-emerald-900/50 transition-colors">
                <Archive className="w-6 h-6 text-zinc-400 group-hover:text-emerald-500 transition-colors" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors mb-2 tracking-wide">
                  たむ研
                </h3>
                <p className="text-xs md:text-sm text-zinc-500 font-light leading-relaxed">
                  田村直巳の研究室。筋力・神経科学・武道などの観点から、筋肥大やパワー向上に関する知見を発信中。
                </p>
              </div>
            </div>
            <div className="flex items-center text-[10px] font-bold tracking-[0.2em] text-zinc-600 group-hover:text-emerald-500 transition-colors uppercase">
              Visit Website <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
            </div>
          </Link>

          {/* Backpain Recovery */}
          <Link
            href="https://backpain.strength-arts.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col justify-between bg-zinc-950 hover:bg-zinc-900/40 border border-zinc-900 hover:border-emerald-900/50 rounded-2xl p-8 transition-all duration-500 shadow-md hover:-translate-y-1 h-[280px]"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center border border-zinc-800 group-hover:bg-emerald-950/30 group-hover:border-emerald-900/50 transition-colors">
                <Activity className="w-6 h-6 text-zinc-400 group-hover:text-emerald-500 transition-colors" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors mb-2 tracking-wide">
                  腰痛からの復帰を目指す
                </h3>
                <p className="text-xs md:text-sm text-zinc-500 font-light leading-relaxed">
                  腰痛からの復帰を目指すためのサイト。
                </p>
              </div>
            </div>
            <div className="flex items-center text-[10px] font-bold tracking-[0.2em] text-zinc-600 group-hover:text-emerald-500 transition-colors uppercase">
              Visit Website <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
            </div>
          </Link>

          {/* Free Contents */}
          <Link
            href="/free"
            className="group relative flex flex-col justify-between bg-zinc-950 hover:bg-zinc-900/40 border border-zinc-900 hover:border-emerald-900/50 rounded-2xl p-8 transition-all duration-500 shadow-md hover:-translate-y-1 h-[280px]"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center border border-zinc-800 group-hover:bg-emerald-950/30 group-hover:border-emerald-900/50 transition-colors">
                <BookOpen className="w-6 h-6 text-zinc-400 group-hover:text-emerald-500 transition-colors" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors mb-2 tracking-wide">
                  FREE CONTENTS
                </h3>
                <p className="text-xs md:text-sm text-zinc-500 font-light leading-relaxed">
                  「知りたい」と思った時にすぐ学べる、既存のまとめコンテンツ群。PDF等の無料配布資料もこちら。
                </p>
              </div>
            </div>
            <div className="flex items-center text-[10px] font-bold tracking-[0.2em] text-zinc-600 group-hover:text-emerald-500 transition-colors uppercase">
              View Contents <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
            </div>
          </Link>

        </div>

        {/* Future Projects Placeholder */}
        <div className="mt-16 p-8 rounded-2xl border border-zinc-900/50 border-dashed bg-zinc-950/30 text-center space-y-4 flex flex-col items-center justify-center min-h-[160px]">
          <span className="text-[10px] font-mono tracking-widest text-zinc-600 uppercase">
            Upcoming
          </span>
          <p className="text-xs md:text-sm text-zinc-500 font-light max-w-md leading-relaxed">
            今後もストレングスアーツとは異なる、様々な制作物や新しいプロジェクトをこのページに追加していく予定です。
          </p>
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
