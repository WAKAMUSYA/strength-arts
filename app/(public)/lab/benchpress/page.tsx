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
  Info
} from 'lucide-react'

// --- DATA TYPES ---
interface Article {
  id: string
  title: string
  category: 'basic' | 'form' | 'pain' | 'program' | 'anatomy' | 'science'
  readTime: string
  desc: string
  image: string
  tags: string[]
  level: '初級' | '中級' | '上級'
  slug: string
  obstacleTag?: string
}

interface Step {
  num: number
  title: string
  subtitle: string
  desc: string
  slug: string
}

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

// --- DYNAMIC DATA ---
const MUST_READ_ARTICLES: Article[] = [
  {
    id: 'mr-1',
    title: 'ベンチプレスの基本と最適アライメント',
    category: 'basic',
    readTime: '5 min',
    desc: '重量を競う前に知るべき、骨格アライメントと力学的支点の最適解。',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=600&auto=format&fit=crop',
    tags: ['基本アライメント', '胸椎伸展', '肩甲骨の真実'],
    level: '初級',
    slug: 'alignment',
    obstacleTag: '胸に入らない'
  },
  {
    id: 'mr-2',
    title: '肩が痛い理由：インピンジメントの力学',
    category: 'pain',
    readTime: '6 min',
    desc: 'なぜ挙上時に肩関節前面が痛むのか？その答えは脇の角度と肩甲骨の後傾制限にある。',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=600&auto=format&fit=crop',
    tags: ['肩関節痛', '怪我予防', 'インピンジメント'],
    level: '中級',
    slug: 'shoulder-pain',
    obstacleTag: '肩が痛い'
  },
  {
    id: 'mr-3',
    title: '胸に効かない人へ：上腕骨の水平内転と意識の分離',
    category: 'form',
    readTime: '4 min',
    desc: '三頭筋や肩ばかりに疲労が溜まるエラーを解決する「バーを押さない」胸の収縮技術。',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop',
    tags: ['大胸筋狙い', 'マインドマッスルコネクション', 'モーメントアーム'],
    level: '初級',
    slug: 'chest-activation',
    obstacleTag: '胸に入らない'
  },
  {
    id: 'mr-4',
    title: '脚の使い方（レッグドライブ）：床反力を挙上に伝えるバネの創出',
    category: 'form',
    readTime: '5 min',
    desc: '下半身のエネルギーを胸に連動させる、正しい足圧の位置と臀部スライドの防止策。',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop',
    tags: ['レッグドライブ', '運動連鎖', 'アーチ構築'],
    level: '上級',
    slug: 'leg-drive',
    obstacleTag: '腰が反る'
  },
  {
    id: 'mr-5',
    title: '重量が伸びない理由：神経系の動員と漸進的過負荷の壁',
    category: 'program',
    readTime: '7 min',
    desc: '同じトレーニングボリュームを繰り返す停滞期を打破するための、ピリオダイゼーション。',
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=600&auto=format&fit=crop',
    tags: ['停滞打破', '神経系発達', 'プログラム設計'],
    level: '上級',
    slug: 'plateau',
    obstacleTag: '停滞した'
  }
]

// Roadmap steps linked directly to specialized textbooks
const STEPS: Step[] = [
  { num: 1, title: 'アライメントの基本', subtitle: 'Biomechanics Base', desc: '物理と解剖学の基礎骨格スタック', slug: 'alignment' },
  { num: 2, title: '肩インピンジメント予防', subtitle: 'Shoulder Protection', desc: '怪我を防ぐラックアップと脇の角度', slug: 'shoulder-pain' },
  { num: 3, title: '肩甲骨コントロールの真実', subtitle: 'Scapula Mechanics', desc: '「寄せて下げる」固定と動的調和', slug: 'scapula-lock' },
  { num: 4, title: '脚（レッグドライブ）', subtitle: 'Kinetic Chain', desc: '床からの運動連鎖の獲得', slug: 'leg-drive' },
  { num: 5, title: '筋肥大の最適可動域', subtitle: 'Hypertrophy Range', desc: 'ストレッチ張力とハーフの有効性', slug: 'hypertrophy-range' },
  { num: 6, title: '重量停滞打破', subtitle: 'Progressive Overload', desc: '限界を超える計画的負荷設計', slug: 'plateau' }
]

const OBSTACLES = [
  { label: '胸に入らない', desc: '大胸筋に刺激を集中させたい' },
  { label: '肩が痛い', desc: '挙上時に肩前面に違和感がある' },
  { label: '停滞した', desc: 'MAX重量が数ヶ月更新されていない' },
  { label: '腰が反る', desc: 'アーチ形成で腰が痛む・浮いてしまう' }
]

const COLUMN_ARTICLES: Article[] = [
  {
    id: 'col-1',
    title: '筋肥大と可動域のトレードオフ：ハーフ vs フルレンジ',
    category: 'science',
    readTime: '4 min',
    desc: 'ボトムでの大胸筋ストレッチがもたらす機械的張力と、パーシャル可動域の有効性を検証する。',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop',
    tags: ['筋肥大', '可動域', 'ストレッチ張力'],
    level: '中級',
    slug: 'hypertrophy-range'
  },
  {
    id: 'col-2',
    title: '肩甲骨は本当に「限界まで寄せて下げる」べきなのか？',
    category: 'anatomy',
    readTime: '5 min',
    desc: 'インピンジメントを防ぎつつ、肩甲上腕リズムを損なわないための動的な肩甲骨アライメント。',
    image: 'https://images.unsplash.com/photo-1544033527-b192daee1f5b?q=80&w=600&auto=format&fit=crop',
    tags: ['肩甲骨コントロール', '解剖学の真実', '肩甲上腕リズム'],
    level: '上級',
    slug: 'scapula-lock'
  },
  {
    id: 'col-3',
    title: 'パワーリフティング仕様アーチの功罪：安全性と挙上距離の力学',
    category: 'form',
    readTime: '6 min',
    desc: 'ブリッジによる挙上距離短縮の効果と、腰椎へのせん断力リスク、胸骨アングルの変化。',
    image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=600&auto=format&fit=crop',
    tags: ['ブリッジ形成', '力学分析', '安全性評価'],
    level: '中級',
    slug: 'arch-mechanics'
  },
  {
    id: 'col-4',
    title: 'なぜ胸トレが肩（三角筋前部）に入るのか？骨盤と上腕の角度測定',
    category: 'pain',
    readTime: '4 min',
    desc: 'プレス時の肘のアウトアングルが三角筋に逃げる要因。理想のプレスプレーンを視覚化する。',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=600&auto=format&fit=crop',
    tags: ['三角筋前部', '肘の角度', 'フォーム改善'],
    level: '初級',
    slug: 'shoulder-drift'
  }
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
  const [selectedObstacle, setSelectedObstacle] = useState<string | null>(null)
  const [activePortal, setActivePortal] = useState<string | null>(null)
  
  // Highlight articles dynamically based on selected obstacle
  const filteredArticles = useMemo(() => {
    if (!selectedObstacle) return MUST_READ_ARTICLES
    return MUST_READ_ARTICLES.filter(art => art.obstacleTag === selectedObstacle)
  }, [selectedObstacle])

  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-900 selection:text-white pb-32">
      
      {/* ----------------- SECTION ①: HERO ----------------- */}
      <section className="relative overflow-hidden border-b border-zinc-900 pt-28 pb-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-950/20 via-black to-black">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 text-[9px] font-extrabold text-blue-400 bg-blue-950/40 border border-blue-900/40 px-3 py-1 rounded-full uppercase tracking-widest">
                  <Activity className="w-3.5 h-3.5 text-blue-500" /> Bench Press Research Facility
                </span>
                <span className="text-[10px] text-zinc-550 font-mono">CODE: BP-LAB-01</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-tight">
                ベンチプレス<br className="hidden md:inline" />
                <span className="text-blue-500 font-extrabold relative inline-block">
                  研究所
                  <span className="absolute bottom-1.5 left-0 w-full h-1 bg-blue-950/30 -z-10 rounded" />
                </span>
              </h1>

              <div className="space-y-4">
                <p className="text-lg font-bold text-zinc-300">
                  ベンチプレスを深く学ぶ
                </p>
                <p className="text-xs md:text-sm text-zinc-450 leading-relaxed font-light max-w-xl">
                  挙上重量を競うだけではなく、関節の機能解剖学、バイオメカニクスの力学支点、そして運動単位の動員方程式からプレス動作を再設計する。科学の力で停滞を打破し、安全かつ最大効率で筋出力を極限まで高める特化探索ポータル。
                </p>
              </div>

              {/* Quick stats / widgets */}
              <div className="flex flex-wrap gap-3 pt-4">
                <div className="flex items-center gap-2 bg-zinc-950 border border-zinc-900 rounded-lg px-4 py-2.5 text-xs font-mono text-zinc-400">
                  <Dumbbell className="w-4 h-4 text-blue-500" />
                  <span>6 Step Roadmap</span>
                </div>
                <div className="flex items-center gap-2 bg-zinc-950 border border-zinc-900 rounded-lg px-4 py-2.5 text-xs font-mono text-zinc-400">
                  <Layers className="w-4 h-4 text-blue-500" />
                  <span>9 Core Textbooks</span>
                </div>
                <div className="flex items-center gap-2 bg-zinc-950 border border-zinc-900 rounded-lg px-4 py-2.5 text-xs font-mono text-zinc-400">
                  <TrendingUp className="w-4 h-4 text-blue-500" />
                  <span>4 Literature Reviews</span>
                </div>
              </div>
            </div>

            {/* Hero Right Visual: Generated Blueprint & Biomechanical Blueprint Art */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-sm aspect-square rounded-2xl border border-zinc-900 bg-zinc-950/20 backdrop-blur-xl shadow-2xl p-6 flex flex-col justify-between overflow-hidden group">
                
                {/* Scientific Blueprint Art Decoration Overlay */}
                <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]" />
                
                {/* Decorative border tags */}
                <div className="absolute top-0 left-0 border-t-2 border-l-2 border-blue-500/50 w-4 h-4 m-3" />
                <div className="absolute top-0 right-0 border-t-2 border-r-2 border-blue-500/50 w-4 h-4 m-3" />
                <div className="absolute bottom-0 left-0 border-b-2 border-l-2 border-blue-500/50 w-4 h-4 m-3" />
                <div className="absolute bottom-0 right-0 border-b-2 border-r-2 border-blue-500/50 w-4 h-4 m-3" />

                {/* Graphic Visual Panel */}
                <div className="flex-1 flex items-center justify-center relative">
                  <div className="w-64 h-64 rounded-full border border-dashed border-zinc-800 flex items-center justify-center animate-spin-slow absolute">
                    <div className="w-40 h-40 rounded-full border border-dashed border-blue-950 flex items-center justify-center" />
                  </div>
                  
                  {/* Blueprint dummy layout line-art visual */}
                  <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-6 text-center select-none space-y-4">
                    <div className="relative p-5 rounded-2xl bg-zinc-950 border border-zinc-900 shadow-xl max-w-[280px]">
                      <span className="absolute -top-2.5 left-4 text-[8px] font-extrabold font-mono bg-blue-600 text-white px-2 py-0.5 rounded uppercase tracking-wider">
                        BIOMECHANICS
                      </span>
                      <p className="text-[10px] font-mono text-zinc-550 mb-1.5 uppercase tracking-widest">
                        Vector Dynamic Angle
                      </p>
                      <h4 className="text-xs md:text-sm font-black text-white leading-snug">
                        肘関節モーメントアーム<br />と重力ベクトルの整合性
                      </h4>
                      <div className="mt-3 flex items-center justify-between text-[9px] font-mono text-blue-400 border-t border-zinc-900 pt-2.5">
                        <span>θ = 75° (OPTIMAL)</span>
                        <span>FORCE: Fg(↓)</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Panel Footer */}
                <div className="relative z-10 border-t border-zinc-900 pt-4 flex items-center justify-between text-[10px] text-zinc-500 font-mono">
                  <span>RESEARCH HUBS // SA</span>
                  <Link href="/bodymake" className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors font-bold cursor-pointer">
                    LAB INDEX <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>
            </div>

          </div>
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
                まず読んでほしい基礎講義
              </h2>
            </div>
            <p className="text-xs text-zinc-550 max-w-sm font-light mt-2 md:mt-0 leading-relaxed">
              何よりも先に見直すべき、力学的エラーのない軌道設計と、肩関節を保護しながら大胸筋の緊張をフル維持する必須教科書。
            </p>
          </div>

          {/* Horizontal Swipe Card Container */}
          <div className="overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-zinc-950 flex gap-6 -mx-6 px-6">
            {filteredArticles.map((art, idx) => (
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
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {art.readTime}</span>
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

          {selectedObstacle && (
            <div className="mt-6 text-center animate-fadeIn">
              <button 
                onClick={() => setSelectedObstacle(null)}
                className="text-xs text-zinc-500 hover:text-blue-450 font-semibold underline underline-offset-4"
              >
                フィルターを解除してすべての基礎講義を表示
              </button>
            </div>
          )}

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
              順番に学ぶ「アカデミック・ロードマップ」
            </h2>
            <p className="text-xs text-zinc-400 max-w-xl mx-auto leading-relaxed font-light">
              バイオメカニクスの段階的習得システム。STEP 1から順に専門書を読み進めることで、怪我のない物理的アライメントと、筋出力を高める神経系プログラム設計が完成します。
            </p>
          </div>

          {/* Steps Horizontal/Vertical Responsive Scroll */}
          <div className="overflow-x-auto pb-4 -mx-6 px-6 scrollbar-thin scrollbar-thumb-zinc-800">
            <div className="flex lg:grid lg:grid-cols-6 gap-5 min-w-[1050px] lg:min-w-0">
              {STEPS.map((st) => (
                <Link 
                  key={st.num}
                  href={`/lab/benchpress/${st.slug}`}
                  className="relative flex-1 bg-zinc-950 border border-zinc-900 rounded-xl p-5 hover:border-blue-900 hover:bg-zinc-900/10 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                >
                  {st.num < 6 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 bg-zinc-950 rounded-full p-1 border border-zinc-900 text-zinc-650 group-hover:text-blue-400 group-hover:bg-blue-950/30 transition-colors">
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  )}

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-black text-blue-950 group-hover:text-blue-900 transition-colors font-mono">
                        0{st.num}
                      </span>
                      <span className="text-[8px] font-mono text-zinc-550 uppercase tracking-widest">
                        STEP {st.num}
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <p className="text-[9px] font-mono text-blue-400/80 uppercase tracking-wide">
                        {st.subtitle}
                      </p>
                      <h3 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors leading-tight">
                        {st.title}
                      </h3>
                      <p className="text-[11px] text-zinc-500 leading-relaxed font-light">
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
              障害・壁から探す（問題別インデックス）
            </h2>
            <p className="text-xs text-zinc-450 max-w-md mx-auto leading-relaxed font-light">
              あなたの挙上を阻んでいる「壁」を選択してください。研究所のアーカイブからダイレクトに関連論文・講義を抽出します。
            </p>
          </div>

          {/* Obstacle Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {OBSTACLES.map((obs) => {
              const isActive = selectedObstacle === obs.label
              return (
                <button
                  key={obs.label}
                  onClick={() => setSelectedObstacle(isActive ? null : obs.label)}
                  className={`p-4 rounded-xl border text-left flex flex-col justify-between transition-all duration-300 group ${
                    isActive 
                      ? 'bg-blue-950/40 border-blue-500 text-white shadow-xl shadow-blue-500/10' 
                      : 'bg-zinc-950 border-zinc-900 hover:border-zinc-800 hover:bg-zinc-900/10 text-zinc-300'
                  }`}
                >
                  <div className="space-y-2">
                    <span className={`text-[8px] font-extrabold font-mono tracking-widest uppercase block ${
                      isActive ? 'text-blue-400' : 'text-zinc-500 group-hover:text-blue-400'
                    }`}>
                      OBSTACLE
                    </span>
                    <h3 className="text-xs md:text-sm font-bold leading-tight">
                      {obs.label}
                    </h3>
                  </div>

                  <p className={`text-[10px] leading-relaxed font-light mt-4 block ${
                    isActive ? 'text-zinc-300' : 'text-zinc-550'
                  }`}>
                    {obs.desc}
                  </p>
                </button>
              )
            })}
          </div>

          {selectedObstacle && (
            <div className="mt-8 p-4 rounded-xl bg-blue-950/30 border border-blue-900/40 flex items-center justify-between text-xs text-blue-300 animate-fadeIn">
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-500 shrink-0 animate-pulse" />
                <span>現在、<strong>「{selectedObstacle}」</strong>に関連する基礎講義を上記の一覧に抽出しています。</span>
              </span>
              <button 
                onClick={() => setSelectedObstacle(null)}
                className="underline font-bold hover:text-blue-400 transition-colors"
              >
                すべて見る
              </button>
            </div>
          )}

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
                専門探究コラム (Deep Dive Lectures)
              </h2>
            </div>
            <p className="text-xs text-zinc-500 max-w-sm font-light leading-relaxed">
              一般の指導書には載らないバイオメカニクスの最深部。物理工学と力学を用いてプレスアングルをハックします。
            </p>
          </div>

          {/* Columns Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {COLUMN_ARTICLES.map((col) => (
              <Link 
                key={col.id} 
                href={`/lab/benchpress/${col.slug}`}
                className="group cursor-pointer bg-zinc-950 border border-zinc-900 hover:border-zinc-800 rounded-xl p-6 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:bg-zinc-900/10"
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
              学術研究レビュー (Literature Reviews)
            </h2>
            <p className="text-xs text-zinc-450 max-w-xl mx-auto leading-relaxed font-light">
              エビデンスに基づくデータ科学。世界中のスポーツ生理学、生体力学（バイオメカニクス）論文からベンチプレスに関する重要知見を抽出して要約。
            </p>
          </div>

          {/* Academic Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {RESEARCH_PAPERS.map((paper) => (
              <div 
                key={paper.id}
                className="bg-zinc-950 border border-zinc-900 rounded-xl p-6 hover:shadow-xl hover:bg-zinc-900/10 hover:border-zinc-800 transition-all duration-300 flex flex-col justify-between group"
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
              他の関連する「研究所」を探索
            </h2>
            <p className="text-xs text-zinc-500 leading-relaxed font-light">
              身体運動と物理はすべて繋がっています。他の部位に特化した専門アライメントハブへ進みましょう。
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
              <p className="text-xs text-zinc-400 leading-relaxed font-light">
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
