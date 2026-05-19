'use client'

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { 
  ChevronLeft, 
  Brain, 
  ArrowRight, 
  Activity, 
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

// Fallback dynamic database of pre-built mini-sites for sports
const fallbackSports: Record<string, {
  title: string
  desc: string
  keywords: string[]
  theme: string
  glowColor: string
  overview: string
  columns: ColumnSection[]
}> = {
  baseball: {
    title: '野球 (Baseball) の動作運動学',
    desc: '下半身からの地面反力を体幹の回旋を通じて指先・バットへ伝えるキネティックチェーンの最大化。',
    keywords: ['投球', 'スイング', '時間差回旋', 'ブロッキング'],
    theme: 'BLUE ATHLETE HUB',
    glowColor: 'from-blue-950/20',
    overview: '野球のパフォーマンス（球速向上・打撃力）は、筋肉の単純な大きさではなく、地面から得た力を全身の関節を通じてボールやバットに伝達する「運動連鎖（キネティックチェーン）」の速度と正確性によって決まります。本ハブでは、投球とスイングにおける回転モーメントの極限設計を分析します。',
    columns: [
      {
        title: '1. 投球：プレート蹴りから指先へのエネルギー転送（しなり）',
        readTime: '4 min',
        content: `### 150km超を生み出す運動連鎖の物理
投球動作は、全身の筋肉をパチンコや鞭のようにしならせるプロセスです。

1. **軸足のプレートプッシュ**: 軸足のプレート蹴りによって、強烈な水平推進力（並進運動）が生み出されます。
2. **ステップ足の強力なブロッキング**: ステップ足が接地した瞬間に膝を強固にロック（前脚ブロッキング）し、水平速度を一気にゼロにします。この急制動がカタパルトの支点となり、骨盤が急激に前方回旋を始めます。
3. **ヒップ・ショルダー・セパレーション（ねじれアーチ）**: 骨盤が先行して回り始める一方で、上半身（肩）はまだ後ろに残ります。この骨盤と肩甲骨のねじれ差が、体幹の腹斜筋群を限界まで引き伸ばし、ねじりバネのエネルギーを蓄積します。
4. **指先への爆発的放出**: 最後に引き伸ばされた胸椎がしなり戻り、肩関節の内旋（毎秒7000度を超える人間の関節動作で最も速い回転速度）を経て、蓄積されたすべてのエネルギーが指先に凝縮されてボールへ放出されます。`
      },
      {
        title: '2. スイング：並進運動から回旋力への瞬間エネルギー変換',
        readTime: '3 min',
        content: `### パワーとミート率を両立させる回旋方程式
バッティングにおいて、重いバットを高速で振り抜くための力学的変換アプローチです。

* **並進から回転へ**: テイクバックからステップ足を踏み出す「並進運動」を、接地と同時に急激な「骨盤の回転運動」へとシフトさせます。このブレーキ動作が遅れると、バットが体から離れ、ドアスイング（遠回り）になってしまいます。
* **軸の固定（頭部のブレ排除）**: 回転は、仙骨から頸椎までの一本のスピン軸（ニュートラル背骨）を中心に行われます。軸が左右に傾くと、スイングプレーンが乱れポップフライや空振りの原因になります。
* **ボトムハンドの引きとトップハンドの押し**: インパクトに向けて肘を内側に入れ、グリップを体に近い最短ルートで通します。慣性モーメントを一時的に小さくすることで、回転速度（角速度）が劇的に跳ね上がります。`
      },
      {
        title: '3. 競技特異的ウェイト：出力を動作スピードへ転移する技術',
        readTime: '3 min',
        content: `### 「動けない重い身体」にならないために
ジムで挙げるスクワットやデッドリフトの筋力（絶対筋力）を、マウンドや打席でのスピード（動的パワー）に変換するためのトレーニング設計です。

* **RFD（力発達速度）の最大化**: 野球の投球やスイングの動作時間はわずか0.15〜0.2秒です。ゆっくり重いものを挙げる神経系から、**極限の一瞬で最大パワーを発生する神経経路**へシフトする必要があります。
* **回旋系のプライオメトリクス**: メディシンボールのスラミングやローテーショナルスローを行い、体幹の「しなり」と「切り返し速度」を徹底的に叩き込みます。これにより、鍛えた筋力がそのまま投球スピード・スイングスピードへ100%転移します。`
      }
    ]
  },
  handball: {
    title: 'ハンドボール (Handball) の動作運動学',
    desc: '空中での出力コントロール、コンタクト耐性、急激なストップと加速を高次元で融合する。',
    keywords: ['ジャンプシュート', '当たり負け予防', '多方向アジリティ', 'アンクルStiffness'],
    theme: 'RED ATHLETE HUB',
    glowColor: 'from-red-950/20',
    overview: 'ハンドボールは、最高速度のスプリント、空中での強いフィジカルコンタクト、そして繊細なシュートコントロールをすべて同時にこなさなければならない、極めて負荷の高いマルチアジリティ競技です。力学的に強い空中フレームと接地反力を設計します。',
    columns: [
      {
        title: '1. ジャンプシュート：空中での制動と体幹のしなり',
        readTime: '3 min',
        content: `### ディフェンスを凌駕する空中動作力学
ジャンプシュートは、助走の水平速度を垂直ベクトルの高さへ変え、さらに空中でバランスを保ちながらシュートを放つ技術です。

* **アンクルStiffness（足首の剛性）**: 接地の瞬間に関節が潰れてしまうと、跳躍エネルギーが吸収されます。足首を強固にロックし、床をバネのように踏み切ります。
* **空中でのインナーユニット固定**: ジャンプ中、相手ディフェンダーからの激しい接触に耐え、空中姿勢を維持するためには、骨盤底筋・腹横筋などのインナーユニットが腹圧を完全にロックしていなければなりません。
* **胸椎のしなり戻り**: 空中で上体を引きしならせる胸椎の伸展可動域を活かし、腕だけではなく、上半身全体の「引き畳みモーメント」でボールを放ちます。これにより、肩関節の怪我を防ぎながら100km/hを超える豪速球が生まれます。`
      },
      {
        title: '2. 当たり負けをゼロにする「仙骨一軸」の衝突フレーム',
        readTime: '3 min',
        content: `### 接触局面で力学的な優位に立つ姿勢設計
当たり負けして腰が引けてしまう選手のためのアプローチです。

* **チェストコンタクトの排除**: 頭を下げて胸や肩だけでぶつかりにいくと、衝突時のせん断力で腰椎が丸まり、バランスを崩して押し倒されます。また、頸椎への重大な怪我のリスクが高まります。
* **仙骨（骨盤）での衝突**: 股関節を深く曲げたパワーポジションを保ち、相手の重心（骨盤の高さ）の下へ潜り込むようにして、仙骨から脊柱を一直線に腹圧ロックして当たります。
* **反力のクッショニングと反射**: 相手からの衝撃力（作用反作用）を足裏を通して一度地面へ逃がし、その跳ね返る地面反力を利用して相手を押し返します。アウターマッスルは脱力し、インナーマッスルで軸を維持するのが極意です。`
      }
    ]
  },
  soccer: {
    title: 'サッカー (Soccer) の動作運動学',
    desc: '90分間走り続ける持久力と、激しいカッティング（方向転換）、正確なキックを支える土台。',
    keywords: ['1歩目の加速', 'インステップキック', 'ACL怪我予防', '肉離れ防止'],
    theme: 'EMERALD ATHLETE HUB',
    glowColor: 'from-emerald-950/20',
    overview: 'サッカーは、連続する長距離持久力に加え、相手を置き去りにする爆発的ダッシュ、急激な減速カッティング、そして強烈かつ正確なキックが求められます。これらを支えるのは、膝に負担をかけない股関節のモビリティと大臀筋・ハムストリングスの強力なブレーキ能力です。',
    columns: [
      {
        title: '1. ダッシュ＆アジリティ：1歩目の前傾加速とカッティング減速',
        readTime: '4 min',
        content: `### 相手を出し抜く爆発的なステップの力学
急停止から一瞬でトップスピードに達するためのバイオメカニクスです。

* **前傾45度のスプリント角**: 1歩目で頭だけを前に倒すのではなく、足裏・骨盤・頭部を一直線（ニュートラルアライメント）に保ったまま、斜め45度に全身を傾けます。これにより、地面を後ろに鋭く押す推進ベクトルを最大化します。
* **カッティング（方向転換）の制動**: 相手を交わす急なカッティングでは、大腿四頭筋（前もも）だけで止まろうとすると膝に多大な負担がかかります。股関節を後ろに引くヒップヒンジを用いて、お尻（大臀筋）ともも裏（ハムストリングス）のエキセントリック収縮（引き伸ばされながらブレーキをかける力）で全衝撃を吸収し、即座に次の前進ベクトルへ体重移動します。`
      },
      {
        title: '2. インステップキック：軸足の制動とキック脚の鞭運動',
        readTime: '3 min',
        content: `### 強烈なシュートを生む運動エネルギー転送
正確で速いキックを放つための足元アライメントです。

* **軸足の踏み込み剛性**: キックの破壊力を生み出すのは、蹴る脚の振りだけでなく、軸足を「地面へどれだけ強く踏み込み固定できるか」です。軸足のピタッとした急停止制動が、骨盤の回転カタパルトを作ります。
* **キック脚の鞭動作（マルチリンク）**: 股関節を大きく伸展させたテイクバックから、大腿部が先行して前に動き、最後に膝から下がしなり戻るようにしてインステップ（甲）でボールを捉えます。この関節が順番に加速していく連動性がキック速度を高めます。`
      },
      {
        title: '3. ACL（膝前十字靭帯）断裂と肉離れを徹底排除するアプローチ',
        readTime: '3 min',
        content: `### アスリートの選手生命を守るために
サッカーで最も発生しやすい深刻な怪我を防ぐための科学的予防方程式です。

* **ニーイン（Knee-in）の絶対防止**: ジャンプの着地やカッティングで、つま先に対して膝が内側に入ってしまうと、前十字靭帯（ACL）に回旋せん断力がかかり一瞬で断裂します。**「常につま先と膝の向きを一致させる」**神経アライメントを徹底します。
* **ハムストリングスの偏心性収縮（エキセントリック）の強化**: ダッシュの急減速やシュートのフォロースルーで、もも裏の肉離れが頻発します。ノルディックハムストリング等の種目を用いて、引き伸ばされながらも耐えうるエキセントリック筋力を極限までビルドします。`
      }
    ]
  },
  basketball: {
    title: 'バスケット (Basketball) の動作運動学',
    desc: '爆発的な跳躍力、低重心でのクイックドライブ、急激なデシレーション（減速）の獲得。',
    keywords: ['クイックドライブ', '垂直跳び', '急減速ストップ', '空中ボディコントロール'],
    theme: 'AMBER ATHLETE HUB',
    glowColor: 'from-amber-950/20',
    overview: 'バスケットボールは、激しいステップワーク、高速ドライブでの切り込み、シュートやリバウンドにおける爆発的跳躍、そして空中での精緻なコントロールが求められるハイインテンシティ競技です。床を切り裂く足裏の力学とバネを設計します。',
    columns: [
      {
        title: '1. ドライブ：インサイドエッジでの床反力ハック',
        readTime: '3 min',
        content: `### 相手の逆をつく超高速切り込みの物理
ディフェンスを一瞬で置き去りにするドライブのメカニクスです。

* **インサイドエッジ（足の内側）でのキック**: 足の外側ではなく、シューズの内側のエッジ（第1中足骨頭付近）で床を斜め横に引き裂くように押し込みます。
* **上半身の脱力と下半身の爆発的同調**: 上半身を完全にリラックスさせておくことで、ステップを踏んだ瞬間に全質量がドライブ方向へ一瞬で移動します。この「緊張と脱力のコントラスト」が、ディフェンスの反応速度を無効化します。`
      },
      {
        title: '2. 跳躍＆ストップ：アモルティゼーション相の極小化と股関節ヒンジ',
        readTime: '4 min',
        content: `### 高く跳び、ピタッと止まる力学
リバウンドで勝ち、ドライブから即座にストッププルアップシュートを打つためのアプローチです。

* **アモルティゼーション相（踏み込み切り返し時間）の極小化**: 接地からジャンプするまでの沈み込み時間をミリ秒単位で短縮します。足底腱膜の張力とアキレス腱のバネ（SSC）を高剛性で機能させることで、地面から反発力を最大限に得て跳び上がります。
* **急ストップ（デシレーション）の衝撃吸収**: 高速で突っ込んだ状態から一瞬で止まる際、上体が流れて腰椎が丸まるとトラベリングや怪我になります。股関節を深く折りたたんで重心を落とし、大臀筋と大腿四頭筋で全エネルギーを受け止め、骨盤を強固にロックします。`
      }
    ]
  },
  athletics: {
    title: '陸上 (Track & Field) の動作運動学',
    desc: '地面反力を推進力へ100%変換する、無駄のないバイオメカニクスと剛性の追求。',
    keywords: ['フォアフット接地', 'シザース動作', 'ピッチ＆ストライド', 'リラクゼーション'],
    theme: 'PURPLE ATHLETE HUB',
    glowColor: 'from-purple-950/20',
    overview: '陸上競技、特にスプリント（短距離）は、自らの身体から生み出したすべての力を1mmの無駄もなく前進するエネルギーへと変換する「バイオメカニクスの極致」です。スーパーボールのように弾む足元と、シザース動作の最適解を追求します。',
    columns: [
      {
        title: '1. 接地：アキレス腱のSSCとフォアフットのバネアプローチ',
        readTime: '3 min',
        content: `### 地面を「押す」のではなく「弾く」力学
トップスピードにおいて、地面と接触している時間は約0.08〜0.09秒しかありません。

* **硬いスーパーボールとしての脚**: 筋肉を収縮させて地面を押す時間はありません。アキレス腱をはじめとする強靭な腱のネットワーク（Tendon Stiffness）をカチッと硬く保ちます。
* **フォアフット〜ミッドフット接地の真実**: かかとから接地すると大きなブレーキがかかります。足裏の中央よりやや前（母趾球付近）で、上から地面を鋭くスナップするように捉え、アキレス腱の伸張反射（SSC）により、一切のエネルギーをロスせずに弾んで前方に跳び出します。`
      },
      {
        title: '2. スプリント：遊脚のシザース動作と大腰筋による脚スイング',
        readTime: '3 min',
        content: `### 後ろに流さない、高速回転の骨盤スイング
脚が後ろに流れ、腰が落ちてしまうスプリントエラーの解決策です。

* **高速シザース（挟み込み）動作**: 地面を蹴り終えた脚（遊脚）が後ろに残っている間に、もう片方の脚が接地するとブレーキになります。脚が地面から離れた瞬間に、膝を一気に前に引き出す「シザース（ハサミ）」運動を行います。
* **大腰筋（深層インナー）主導のスイング**: 太ももの前の筋肉（大腿四頭筋）で脚を引き上げるのではなく、骨盤と脊椎を繋ぐ深層のインナーマッスル**「大腰筋（Psoas Major）」**を主役にして、腰・骨盤から脚全体を前に放り出します。これにより、腰の位置が高くキープされ、無駄のない推進力が持続します。`
      }
    ]
  }
}

// Hardcoded dynamic relation maps between pages (connected wiki network)
const relatedMap: Record<string, { label: string; href: string }[]> = {
  baseball: [
    { label: '目的別強化: 球速を上げたい', href: '/athlete/goal/ballspeed' },
    { label: '目的別強化: 回旋を強くしたい', href: '/athlete/goal/rotation' }
  ],
  handball: [
    { label: '目的別強化: 当たりを強くしたい', href: '/athlete/goal/contactpower' },
    { label: '目的別強化: ジャンプ力を上げたい', href: '/athlete/goal/jumppower' }
  ],
  soccer: [
    { label: '目的別強化: 足を速くしたい', href: '/athlete/goal/speedup' },
    { label: '目的別強化: ケガを予防したい', href: '/athlete/goal/injuryfree' }
  ],
  basketball: [
    { label: '目的別強化: ジャンプ力を上げたい', href: '/athlete/goal/jumppower' },
    { label: '目的別強化: 足を速くしたい', href: '/athlete/goal/speedup' }
  ],
  athletics: [
    { label: '目的別強化: 足を速くしたい', href: '/athlete/goal/speedup' },
    { label: '自主練技術: ジャンプ力が高い選手の特徴', href: '/athlete/practice/jumpstretch' }
  ]
}

export default function SportArticlePage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const [activeSection, setActiveSection] = useState<ColumnSection | null>(null)

  // Resolve which data to render
  const data = useMemo(() => {
    if (fallbackSports[slug]) return fallbackSports[slug]
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
            <span className="text-purple-500 font-semibold">競技別解説</span>
            <span>/</span>
            <span className="text-zinc-300 uppercase">{slug}</span>
          </div>

          <span className="inline-flex items-center gap-1.5 text-[9px] font-extrabold text-purple-400 bg-purple-950/40 border border-purple-900/40 px-2.5 py-0.5 rounded-full uppercase tracking-widest mb-4">
            <Activity className="w-3.5 h-3.5 text-purple-500" /> {data.theme}
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
            <Brain className="w-4 h-4 text-purple-500" /> 競技バイオメカニクス・骨格アライメント骨子
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
            <h2 className="text-lg md:text-xl font-bold tracking-tight text-white">探究コラム・専門指導アプローチ</h2>
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
              競技動作のスピードとパワーはすべて繋がっています。パフォーマンスを向上させる目的別の力学アプローチや、一流の自主練マインドへ進みましょう。
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
                「がむしゃらな努力」は怪我と停滞を生みます。**「感覚と物理が一致しているか」**を毎レップごとに分析し、自己修正する「超高解像度フィードバック」が、一流への最短ルートです。
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
