'use client'

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { 
  ChevronLeft, 
  Brain, 
  ArrowRight, 
  Award,
  Layers,
  X,
  Clock,
  ChevronRight
} from 'lucide-react'
import ArticleRenderer from '@/components/ArticleRenderer'

// Types
interface ColumnSection {
  title: string
  content: string
  readTime?: string
}

// Fallback dynamic database of pre-built mini-sites for practice
const fallbackPractice: Record<string, {
  title: string
  desc: string
  keywords: string[]
  theme: string
  glowColor: string
  overview: string
  columns: ColumnSection[]
}> = {
  pitching150: {
    title: '150km投げるための考え方（投球理論）',
    desc: '筋力を球速に変えるキネティックチェーン（運動連鎖）の設計図。スピード＝出力×連動性。ウェイトルームの数値を並進・回転動作に100%変換する力学ルート。',
    keywords: ['球速150km', 'キネティックチェーン', '並進回転変換', '手首リリース'],
    theme: 'BLUE ATHLETE PRACTICE',
    glowColor: 'from-blue-950/20',
    overview: '球速150km/hという数字は、特別な才能だけのものではありません。筋力トレーニングによって作られた巨大なエンジン（パワー）を、下半身から指先へ1%のロスもなく伝える「力学ロード」を完成させることで、現実的に達成可能なパフォーマンス水準となります。',
    columns: [
      {
        title: '1. 出力×連動性：ウェイトルームからマウンドへの転移',
        readTime: '3 min',
        content: `### 筋力トレーニングを単なる重りから球速に変える
スクワットやデッドリフトで200kgを挙げる力があっても、それがマウンドでの0.15秒の投球動作に同期しなければ、球速には一切反映されません。

* **並進エネルギーの設計**: プレートを強く押す推進力を、ステップ足のブロッキングによって瞬間ストップします。この急ブレーキが、上半身を射出するカタパルトのエネルギー源です。
* **トリプルエクステンションからローテーションへの同期**: 股関節の伸展パワーが骨盤の先行回旋を呼び、それが胸郭の遅れ（しなり）を生んで指先まで波及する力学フローを体得します。`
      },
      {
        title: '2. リリース手首の解剖学：回転効率（Spin Efficiency）の極限',
        readTime: '3 min',
        content: `### 伸びる球質を設計するリリース指先の物理
球速が同じでも、打者が手元で速く感じるのはバックスピンの回転効率が高い（ジャイロ成分が少ない）ボールです。

* **リリース時の前腕回内（プロネーション）**: 手首を無理にひねって変化球を投げるのは肩肘の寿命を縮めるエラーです。前腕の自然な回内モーメントを利用し、人差し指と中指で均等にボールの回転軸を押し込みます。
* **ブレーキ筋力の獲得**: 腕を投げ切った後、肩が前に抜けるのを防ぐローテーターカフ（棘下筋・小円筋など）の偏心性ブレーキ筋力を高めることで、脳がリミッターを解除し、マキシマムの加速ができるようになります。`
      }
    ]
  },
  jumpstretch: {
    title: 'ジャンプ力が高い選手の特徴（跳躍特性）',
    desc: '腱の弾性エネルギー（SSC）の活用レベルと腱剛性（Tendon Stiffness）。ジャンプの瞬間に沈み込みすぎず、極小の一瞬の接地だけで高く跳び上がるバネ。',
    keywords: ['腱剛性', 'SSC反射', 'アキレス腱バネ', 'Stiffness'],
    theme: 'FUCHSIA ATHLETE PRACTICE',
    glowColor: 'from-fuchsia-950/20',
    overview: '跳躍力が傑出した選手は、沈み込みの深い「力まかせのジャンプ」をしません。彼らはアキレス腱を中心とした腱のバネ剛性が極めて高く、接地した一瞬の衝撃を強烈な上方反発力へと自動変換する「バネ脚」を持っています。',
    columns: [
      {
        title: '1. 腱剛性（Tendon Stiffness）とスーパーボールの弾性',
        readTime: '3 min',
        content: `### 筋肉の収縮を超えた「腱のバネ」による跳躍
ジャンプ力を支配するのは、筋肉の収縮速度よりも、アキレス腱や足底腱膜が持つ「剛性（Stiffness：硬さ）」です。

* **硬いバネの力学**: 柔らかい粘土を床に落としても弾みませんが、カチカチのスーパーボールは高く跳ね返ります。跳躍の際、足首が「グニャリ」と潰れるのを排除し、関節をガチッと固く保つことで、地球からの反力を100%跳躍高へと変換します。
* **プライオメトリクスによる腱の養成**: デプスジャンプや連続アンクルホップを行い、着地から離地までのアモルティゼーション相（切り返し）を一瞬でこなす神経回路と腱剛性を鍛え上げます。`
      },
      {
        title: '2. SSC（ストレッチショートニングサイクル）の力学的増幅',
        readTime: '3 min',
        content: `### 筋肉を引き伸ばして一気に収縮させる反射システム
筋肉は「引き伸ばされながら力を発揮し、その直後に縮む」と、通常時の数倍の出力を発揮します。これがSSC（伸張反射）です。

* **反射速度の最適化**: 接地時に腱が瞬時にストレッチされ、脳が危険を感じて反射的に強力な収縮命令を下します。
* **全身の姿勢協調性**: 踏み切る瞬間に骨盤が丸まったり、上体がブレたりすると、反射のエネルギーが体幹で吸収されてしまいます。体幹を腹圧で鉄柱のようにロックし、下半身のバネ出力をダイレクトに空中へと伝えます。`
      }
    ]
  },
  prosenshu: {
    title: 'プロ選手の自主練（超高解像度の思考法）',
    desc: '量より「質（感覚の超高解像度フィードバック）」を徹底追求する姿勢。動作のズレにミリ単位でリアルタイムに気付き、自発的に即座に自己修正できる感度を養う訓練。',
    keywords: ['超高解像度フィードバック', '自己対話ルール', '感覚と物理の一致', '量より質'],
    theme: 'PURPLE ATHLETE PRACTICE',
    glowColor: 'from-purple-950/20',
    overview: 'プロ選手とアマチュア選手の決定的な違いは、「練習の量」ではありません。「自分の身体の動きに対する認知解像度」です。ミリ単位で感覚のズレを察知し、自分自身で瞬時に最適アライメントへと修正できる脳内マップの構築アプローチです。',
    columns: [
      {
        title: '1. 感覚の超高解像度化と自己修正アプローチ',
        readTime: '3 min',
        content: `### 鏡に頼らず、自身の骨格関節のモーメントを感じ取る
がむしゃらに数だけこなす自主練習は、悪い動作の癖を強化するだけの毒になります。一流選手は1レップごとに身体のセンサーを極限まで研ぎ澄まします。

* **骨盤と足裏のセンサー活性化**: 接地した瞬間に、足裏のどこに最も圧力がかかっているか、骨盤の角度がどれだけ傾いているかをミリ単位で感知します。
* **「感覚と物理」のすり合わせ**: 自分の「こう動いているつもり（感覚）」と、実際の「ビデオ映像に映る動き（物理）」のズレを埋め続けます。ズレに気づく感度こそが、パフォーマンスを爆発的に高める最大の武器です。`
      },
      {
        title: '2. 質の高い自己対話と動作の言語化ルール',
        readTime: '3 min',
        content: `### 「なんとなく」を排除し、身体ロジックを確立する
一流アスリートは自分の動きを精緻に言語化できます。

* **動作エラーの因果関係分析**: 「シュートが外れた」という結果に対し、「ボトムで膝がニーインし、モーメントが外側に逃げたため、体幹の回旋がブレた」という解剖力学の因果関係で捉えます。
* **自発的フィードバックループ**: 指導者に言われて直すのではなく、自分の身体から発せられるテンションと関節摩擦のシグナルを受け取り、自ら次のレップで修正します。この自立した探究プロセスが、世界レベルの身体操作を獲得する絶対条件です。`
      }
    ]
  }
}

// Hardcoded dynamic relation maps between pages (connected wiki network)
const relatedMap: Record<string, { label: string; href: string }[]> = {
  pitching150: [
    { label: '競技別解説: 野球 (Baseball)', href: '/athlete/sport/baseball' },
    { label: '目的別強化: 球速を上げたい', href: '/athlete/goal/ballspeed' }
  ],
  jumpstretch: [
    { label: '目的別強化: ジャンプ力を上げたい', href: '/athlete/goal/jumppower' },
    { label: '競技別解説: 陸上 (Track & Field)', href: '/athlete/sport/athletics' }
  ],
  prosenshu: [
    { label: '目的別強化: ケガを予防したい', href: '/athlete/goal/injuryfree' },
    { label: '目的別強化: 当たりを強くしたい', href: '/athlete/goal/contactpower' }
  ]
}

export default function PracticeArticlePage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const [activeSection, setActiveSection] = useState<ColumnSection | null>(null)

  // Resolve which data to render
  const data = useMemo(() => {
    if (fallbackPractice[slug]) return fallbackPractice[slug]
    return null
  }, [slug])

  // Guard routing error
  if (!data) {
    return notFound()
  }

  const relatedLinks = relatedMap[slug] || [
    { label: 'アスリートトップに戻る', href: '/athlete' }
  ]

  return (
    <main className="min-h-screen bg-black text-white selection:bg-purple-900 selection:text-white pb-24">
      
      {/* 1. Portal Branded Hero Banner */}
      <section className={`relative pt-20 pb-16 border-b border-zinc-900 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] ${data.glowColor} via-black to-black`}>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
        
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 mb-6">
            <Link href="/athlete" className="hover:text-purple-400 transition-colors">ATHLETE</Link>
            <span>/</span>
            <span className="text-purple-500 font-semibold">一流の自主練</span>
            <span>/</span>
            <span className="text-zinc-300 uppercase">{slug}</span>
          </div>

          <span className="inline-flex items-center gap-1.5 text-[9px] font-extrabold text-purple-400 bg-purple-950/40 border border-purple-900/40 px-2.5 py-0.5 rounded-full uppercase tracking-widest mb-4">
            <Award className="w-3.5 h-3.5 text-purple-500" /> {data.theme}
          </span>

          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mt-1">
            {data.title}
          </h1>

          <p className="mt-4 text-xs md:text-sm text-zinc-400 max-w-3xl leading-relaxed font-light">
            {data.desc}
          </p>

          {/* Keywords */}
          <div className="mt-6 flex flex-wrap gap-1.5">
            {data.keywords.map((kw, i) => (
              <span key={i} className="text-[10px] bg-zinc-950 border border-zinc-900 text-zinc-400 px-2.5 py-0.5 rounded">
                #{kw}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* 2. Scientific Overview Segment */}
      <section className="max-w-5xl mx-auto px-6 mt-12">
        <div className="p-6 md:p-8 rounded-2xl border border-zinc-900 bg-zinc-950/30 backdrop-blur-xl shadow-xl space-y-3">
          <h3 className="text-xs font-extrabold uppercase tracking-widest text-zinc-400 flex items-center gap-2">
            <Brain className="w-4 h-4 text-purple-500" /> 自主練マインドセット・感覚認知骨子
          </h3>
          <p className="text-xs md:text-sm leading-relaxed text-zinc-300 font-light whitespace-pre-line">
            {data.overview}
          </p>
        </div>
      </section>

      {/* 3. Columns / Lesson Cards Grid (Mini-Site Homepage Style) */}
      <section className="max-w-5xl mx-auto px-6 mt-12">
        <div className="space-y-6">
          <div className="border-b border-zinc-900 pb-3 flex items-center gap-2">
            <Layers className="w-4 h-4 text-purple-400" />
            <h2 className="text-lg md:text-xl font-bold tracking-tight text-white">講義コラム・感覚と動作の言語化一覧</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.columns.map((col, i) => (
              <div
                key={i}
                onClick={() => setActiveSection(col)}
                className="group cursor-pointer relative bg-zinc-900/15 hover:bg-zinc-900/40 border border-zinc-900 hover:border-purple-900/45 rounded-xl p-6 transition-all duration-300 shadow-md flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-zinc-500 font-mono">COLUMN 0{i + 1}</span>
                    <span className="inline-flex items-center gap-1 text-[10px] text-zinc-500 font-mono">
                      <Clock className="w-3 h-3" /> {col.readTime || '3 min'}
                    </span>
                  </div>

                  <h3 className="text-base md:text-lg font-bold text-white group-hover:text-purple-300 transition-colors duration-200">
                    {col.title.replace(/^\d+\.\s+/, '')}
                  </h3>

                  <p className="text-xs text-zinc-400 line-clamp-3 leading-relaxed font-light">
                    {col.content.replace(/[#\*`\[\]]/g, '').slice(0, 150)}...
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-900/60 flex items-center justify-between text-xs font-semibold text-zinc-550 group-hover:text-purple-400 transition-colors duration-200">
                  <span>このコラムを開く</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Connected Wiki / Cross-Routing Network */}
      <section className="max-w-5xl mx-auto px-6 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-10 gap-8">
          
          {/* Related Links */}
          <div className="md:col-span-6 p-6 rounded-xl border border-zinc-900 bg-zinc-950/40 shadow-lg space-y-4">
            <h4 className="text-xs font-extrabold tracking-widest text-purple-400 uppercase flex items-center gap-2">
              <Brain className="w-4 h-4" /> 関連する探究の連鎖（横断）
            </h4>
            <p className="text-[11px] text-zinc-500 leading-relaxed font-light">
              身体操作感覚の向上は、あらゆる競技力に直接転写されます。実践する競技のバイオメカニクスや、怪我を防ぐための運動機能改善目標へ進みましょう。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {relatedLinks.map((link, i) => (
                <Link 
                  key={i}
                  href={link.href}
                  className="group flex items-center justify-between p-3.5 rounded-lg bg-zinc-950 border border-zinc-900 hover:border-purple-900/40 hover:bg-zinc-900/20 transition-all duration-300"
                >
                  <span className="text-xs font-semibold text-zinc-350 group-hover:text-white transition-colors">
                    {link.label}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-zinc-650 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          </div>

          {/* Self-practice card */}
          <div className="md:col-span-4 p-6 rounded-xl border border-zinc-900 bg-zinc-950/20 shadow-md flex flex-col justify-between">
            <div className="space-y-2">
              <h4 className="text-xs font-extrabold tracking-widest text-zinc-400 uppercase flex items-center gap-2">
                <Award className="w-4 h-4" /> 現場の自主練ヒント
              </h4>
              <p className="text-[11px] text-zinc-450 leading-relaxed font-light">
                「正しい知識」が脳に入るだけで、身体の出力と怪我のなさは自動的にアップグレードされます。この自主練ハブで学んだ内容を、次回のフィールド練習で反芻してください。
              </p>
            </div>
            <div className="pt-4">
              <Link href="/athlete" className="text-xs font-bold text-zinc-500 hover:text-purple-400 transition-colors flex items-center gap-1">
                <ChevronLeft className="w-3.5 h-3.5" /> ライブラリトップに戻る
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* --- Overlay Textbook Reader Component --- */}
      {activeSection && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-end bg-black/80 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setActiveSection(null)}
        >
          <div 
            className="w-full max-w-2xl h-full bg-zinc-950 border-l border-zinc-900 flex flex-col shadow-2xl animate-slideOver"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Reader Header */}
            <div className="p-6 border-b border-zinc-900 bg-zinc-950 flex items-center justify-between">
              <div className="space-y-1">
                <span className="text-[9px] font-bold text-purple-400 tracking-widest uppercase bg-purple-950/40 border border-purple-900/40 px-2 py-0.5 rounded">
                  TEXTBOOK LECTURE
                </span>
                <h3 className="text-lg md:text-xl font-bold text-white tracking-tight mt-1">
                  {activeSection.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveSection(null)}
                className="p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Reader Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8 scrollbar-thin scrollbar-thumb-zinc-850">
              <div className="max-w-prose mx-auto">
                <ArticleRenderer content={activeSection.content} />
              </div>
            </div>

            {/* Reader Footer */}
            <div className="p-4 border-t border-zinc-900 bg-zinc-950 flex justify-between items-center text-xs text-zinc-550 px-6">
              <span>Strength Arts // Biomechanics Hub</span>
              <button
                onClick={() => setActiveSection(null)}
                className="px-5 py-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-bold rounded-lg transition-colors"
              >
                講読を終了する
              </button>
            </div>

          </div>
        </div>
      )}

    </main>
  )
}
