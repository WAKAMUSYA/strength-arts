import React from 'react'
import Link from 'next/link'
import { FlaskConical, Dumbbell, ArrowRight, Activity, Layers, ShieldAlert, Sparkles } from 'lucide-react'

export default function LabPage() {
  return (
    <div className="min-h-screen bg-slate-50/40 text-neutral-800 font-sans antialiased pb-32">
      
      {/* Hero Banner */}
      <section className="bg-white border-b border-zinc-150/80 pt-20 pb-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-50 border border-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
              <FlaskConical className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-extrabold text-blue-600 uppercase tracking-widest bg-blue-50/50 px-2.5 py-0.5 rounded-full">
              SA Research Division
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-black text-zinc-900 tracking-tight leading-tight">
            LAB / <span className="text-blue-600">強さの研究所</span>
          </h1>
          <p className="mt-4 text-xs md:text-sm text-zinc-500 leading-relaxed font-light max-w-xl">
            単なるトレーニング記事の集積地ではありません。解剖学、力学、スポーツ生理学の理論を結集し、身体の限界と可能性を徹底追求するSAのフラッグシップ研究所ネットワーク。
          </p>
        </div>
      </section>

      {/* Grid of Labs */}
      <section className="max-w-5xl mx-auto px-6 mt-12">
        <div className="space-y-6">
          <div className="border-b border-zinc-100 pb-3">
            <h2 className="text-lg font-black text-zinc-900 tracking-tight">稼働中の研究所</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Active Hub: Bench Press Lab */}
            <Link 
              href="/lab/benchpress"
              className="bg-white border border-zinc-200/80 rounded-2xl p-6 md:p-8 hover:border-blue-500 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle background decoration */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50/50 rounded-bl-full -z-10 group-hover:scale-125 transition-transform" />

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 text-[9px] font-extrabold text-blue-600 bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    <Activity className="w-3 h-3" /> ACTIVE FACILITY
                  </span>
                  <span className="text-[10px] text-zinc-400 font-mono">BP-LAB</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl md:text-2xl font-black text-zinc-900 group-hover:text-blue-600 transition-colors leading-tight">
                    ベンチプレス研究所
                  </h3>
                  <p className="text-xs md:text-sm text-zinc-550 leading-relaxed font-light">
                    フォーム、力学的支点、肩関節インピンジメント予防、筋肥大、そして最新の神経系活性プログラミングまで。ベンチプレスのすべてを学術的・体得的アプローチで解き明かします。
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-zinc-50 flex items-center justify-between text-xs text-zinc-450 font-mono">
                <span className="flex items-center gap-1.5"><Dumbbell className="w-4 h-4 text-blue-500" /> 6 Core Lessons Ready</span>
                <span className="text-blue-600 group-hover:translate-x-1.5 transition-all flex items-center gap-1 font-bold">
                  研究所に入る <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>

            {/* Upcoming Hub: Squat Lab (Coming Soon) */}
            <div className="bg-white border border-dashed border-zinc-200 rounded-2xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden opacity-75">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 text-[9px] font-extrabold text-zinc-500 bg-zinc-50 border border-zinc-150 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    <Layers className="w-3 h-3" /> UNDER CONSTRUCTION
                  </span>
                  <span className="text-[10px] text-zinc-400 font-mono">SQ-LAB</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl md:text-2xl font-black text-zinc-900 leading-tight">
                    スクワット研究所
                  </h3>
                  <p className="text-xs md:text-sm text-zinc-500 leading-relaxed font-light">
                    骨格アライメントの崩れ、バットウィンクの力学要因、足首可動性と膝関節の連動、トリプルエクステンションのエネルギー伝達理論。下半身を極める学術ハブ。
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-zinc-50 flex items-center justify-between text-xs text-zinc-450 font-mono">
                <span className="flex items-center gap-1.5"><Sparkles className="w-4 h-4 text-zinc-400" /> Coming in Q3 2026</span>
                <span className="text-zinc-400 flex items-center gap-1 font-bold">
                  準備中
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Philosophy Callout */}
        <div className="mt-16 p-6 md:p-8 rounded-2xl bg-white border border-zinc-150/70 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold text-zinc-700">
            <ShieldAlert className="w-4 h-4 text-blue-500" />
            <span>SA研究所ポリシー：本質とエビデンスの融合</span>
          </div>
          <p className="text-xs md:text-sm text-zinc-500 leading-relaxed font-light">
            SAにおける「研究所」は、単にインフルエンサーの感覚的なアドバイスを掲載する場所ではありません。すべての推奨フォームやプログラミングには、解剖学的なアライメントの裏付け、または査読付き学術論文の客観的データが存在します。主観的体得（Art）と客観的検証（Science）の幸福な融合が、私たちの探究テーマです。
          </p>
        </div>
      </section>

    </div>
  )
}
