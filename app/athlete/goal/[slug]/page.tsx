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

// Fallback dynamic database of pre-built mini-sites for goals
const fallbackGoals: Record<string, {
  title: string
  desc: string
  keywords: string[]
  theme: string
  glowColor: string
  overview: string
  columns: ColumnSection[]
}> = {
  speedup: {
    title: '足を速くしたい（スプリント強化）',
    desc: '単に足を前に出すのではなく、重心移動と地面反力の方向を最適化して爆発的なスプリント力を手に入れる。',
    keywords: ['スタートダッシュ', 'ピッチ向上', 'ストライド拡大', '支持期短縮'],
    theme: 'AMBER ATHLETE GOAL',
    glowColor: 'from-amber-950/20',
    overview: 'スピードは「ピッチ（回転数）× ストライド（一歩の長さ）」の掛け算で決まりますが、これらを無理に広げようとするとブレーキ作用が発生します。物理的に正しい重心移動とアキレス腱のSSC（弾性）反射を極限まで高めるアプローチです。',
    columns: [
      {
        title: '1. スタートダッシュ：全身ニュートラルでの45度前傾プッシュ',
        readTime: '3 min',
        content: `### 最初の3歩で圧倒的な差をつける加速の力学
スタートダッシュ局面において、最も多いエラーは「腰が曲がった状態で頭だけが突っ込む」ことです。これでは地面反力が分散してしまいます。

* **トリプルエクステンションの直線化**: 股関節、膝関節、足首（足関節）の3点が一つの直線上を突き抜けるように同時伸展します。
* **全身45度のライフルアライメント**: 足裏から骨盤、頭頂部までを一直線に保ったまま、進行方向に45度傾きます。これにより地面を押す反力が、真上ではなく「斜め後ろ（前方へのベクトル）」へダイレクトに作用します。`
      },
      {
        title: '2. 支持期短縮：アキレス腱の弾性エネルギーSSC活用',
        readTime: '3 min',
        content: `### 地面に接地している「無駄な時間」を極限まで削る
スプリンターの接地時間は10分の1秒未満です。筋肉をギュッと縮めて地面を押している時間はありません。

* **アンクル・スティフネス（足首の硬さ）**: 接地の瞬間に足首が「グニャッ」と潰れると、すべての力が吸収されます。足首を鉄板のように硬くロックしておく必要があります。
* **腱のバネ（SSC）反射**: 接地の瞬間にアキレス腱が急激に引き伸ばされ、それがゴムのようにしなり戻る「伸張反射」を利用します。これにより、筋力の何倍もの弾性反発力で、地面からスーパーボールのように跳ね返ることができます。`
      }
    ]
  },
  jumppower: {
    title: 'ジャンプ力を上げたい（跳躍力特化）',
    desc: '下半身の筋力と足首の剛性、体幹の連動を完璧に同調させ、高次元の跳躍力を手に入れる。',
    keywords: ['絶対筋力', 'アモルティゼーション相', '股関節ヒンジ', '腕振り慣性'],
    theme: 'FUCHSIA ATHLETE GOAL',
    glowColor: 'from-fuchsia-950/20',
    overview: 'ジャンプ力を高めるためには、単にスクワットの挙上重量（絶対筋力）を伸ばすだけでは不十分です。「一瞬の切り返し時間」の中で、その出力をいかに瞬時に放出するか（RFD：力発達速度）と、全身の質量慣性を同調させる技術が鍵となります。',
    columns: [
      {
        title: '1. 股関節主導（ディープヒンジ）の沈み込み力学',
        readTime: '3 min',
        content: `### 膝だけで跳ばず、お尻の大パワーをバネにする
高く跳ぼうとする際、膝を前に出して屈む（膝関節主導）と、前ももの筋肉だけに負担がかかり、跳躍高はすぐに限界を迎えます。

* **ヒップヒンジの活用**: 股関節を深く後ろに引き込み、お尻（大臀筋）ともも裏（ハムストリングス）を強烈に引き伸ばします。これにより、人体で最も強大なパワーを持つ股関節伸展筋群のバネをチャージします。
* **アモルティゼーション相の極小化**: 沈み込みから切り返すまでの時間を極限まで短縮します。沈み込みが深すぎると、せっかく溜めた弾性エネルギーが熱となって逃げてしまいます。`
      },
      {
        title: '2. 上半身の腕振りと全身の運動量移行（モーメント）',
        readTime: '3 min',
        content: `### あと10cmを稼ぎ出す全身シンクロニシティ
ジャンプは下半身だけで行うものではありません。上半身のスイング慣性を利用します。

* **腕振りのタイミング**: 踏み込む直前に両腕を後方に大きく引き、地面を蹴り出す瞬間に両手を頭上へ激しく振り上げます。
* **上方への質量トラクション**: 振り上げた腕が頂点で急停止する際、その「上向きの慣性モーメント」が骨盤を引き上げる力へと変換されます。この腕振り下半身のミリ秒単位の同調が、空中でのハングタイムを劇的に伸ばします。`
      }
    ]
  },
  contactpower: {
    title: '当たりを強くしたい（コンタクト耐性）',
    desc: 'コンタクト局面において、ブレない体幹の安定性と相手の衝撃をいなす力学フレームの構築。',
    keywords: ['コアスタビリティ', 'インナーユニット', 'パワーポジション', '地面反力流し'],
    theme: 'RED ATHLETE GOAL',
    glowColor: 'from-red-950/20',
    overview: 'ラグビー、ハンドボール、バスケット等の接触で「当たり負けする」最大の原因は、アウターマッスルだけで踏ん張ることです。体幹深層のインナーユニットで骨格フレームを剛体化し、相手の衝撃力を地面へと逃がす力学ルートを設計します。',
    columns: [
      {
        title: '1. インナーユニットによる体幹の剛体化ロック',
        readTime: '3 min',
        content: `### 衝突の瞬間にブレない鉄骨のコア
どれだけ大胸筋や太ももを鍛えても、それを繋ぐ体幹がフニャフニャでは衝突エネルギーがすべて逃げてしまいます。

* **インナーユニットの動員**: 腹横筋、多裂筋、横隔膜、骨盤底筋群を同時に収縮させ、腹圧（IAP）を極限まで高めます。
* **脊柱の一軸シールド**: 仙骨から背骨を一軸の強固な「鉄の柱」としてロックします。これにより衝突時に背骨がグニャリと折れ曲がるのを完全に防ぎ、相手の力を正面から跳ね返します。`
      },
      {
        title: '2. パワーポジションと地面反力の力学的リダイレクト',
        readTime: '3 min',
        content: `### 相手の力を足裏から地球へ流すいなしの技術
当たりを強くする極意は、力で押し返すのではなく「床と繋がる」ことです。

* **低重心のヒップヒンジ**: 相手よりわずかでも低い位置に骨盤（重心）を入れることで、力学的なてこ（モーメントアーム）で圧倒的な優位に立ちます。
* **衝撃の力学ルート**: 相手から受けた衝突力を、自らの骨盤・太ももを通じて「足裏から床」へと流します。床から跳ね返ってくる巨大な地面反力を利用して、相手を押し戻すため、自身の疲労は最小限に抑えられます。`
      }
    ]
  },
  ballspeed: {
    title: '球速を上げたい（リリース速度向上）',
    desc: '投球動作におけるキネティックチェーン（運動連鎖）を最適化し、指先へ最大スピードを凝縮させる。',
    keywords: ['セパレーション', 'ステップ足ブロッキング', 'ローテークターカフ', 'リリース加速度'],
    theme: 'BLUE ATHLETE GOAL',
    glowColor: 'from-blue-950/20',
    overview: '球速を高めるのは腕の力ではなく、下半身で作った巨大な運動エネルギーを肩・肘を経由して指先へと「ロスなく転送する」運動連鎖の完成度です。関節に過剰な負担をかけずに球速を最大化するアプローチを解説します。',
    columns: [
      {
        title: '1. ヒップ・ショルダー・セパレーションのねじりエネルギー',
        readTime: '3 min',
        content: `### 骨盤と肩の解離が創り出す巨大なねじりバネ
ボールを投げる際、全身を同時に回してしまう（同体投げ）と、スピードは絶対に出ません。

* **時間差回旋の物理**: 軸足の並進推進からステップ足が着地した瞬間、骨盤が急激に前方回旋を始めます。しかし、このとき肩（胸郭）はまだ後ろを向いたままキープします。
* **体幹の引き伸ばしと縮み**: この「骨盤が先、肩が後」という時間差（セパレーション）によって、体幹の筋肉が強烈に引き伸ばされ（エキセントリック）、ゴムが戻るような超高速の回旋スピードが生まれ、上半身へ伝達されます。`
      },
      {
        title: '2. ステップ足の制動ブロッキングと肩のブレーキ機能',
        readTime: '3 min',
        content: `### 150kmを放つための強固なカタパルトと安全ブレーキ
球速が出ないピッチャーは、ステップ足が接地した後に膝が前方や外側に流れるエラーを起こしています。

* **前脚ブロッキングの力学**: 着地したステップ足の膝を強固につっぱり、前方への並進速度を一気にシャットダウンします。この急ブレーキの慣性力により、後方の体幹と右肩が一気に前方に弾き出されます（カタパルト効果）。
* **ローテークターカフの減速ブレーキ**: 腕が加速したリリース後、肩が前にすっぽ抜けるのを防ぐために、肩甲棘下筋群などのインナーマッスル（ローテークターカフ）が強烈な減速ブレーキをかけます。このブレーキ能力が高い投手ほど、脳が安心してアクセル（加速器）を限界まで踏み込めます。`
      }
    ]
  },
  rotation: {
    title: '回旋を強くしたい（スイング・トルク最大化）',
    desc: 'ゴルフ、野球、テニス、格闘技など、すべてのひねり動作における回旋速度とトルクの最大化。',
    keywords: ['胸椎の回旋', 'セパレーション', '斜角筋群', '角運動量保存'],
    theme: 'ORANGE ATHLETE GOAL',
    glowColor: 'from-orange-950/20',
    overview: '強力な「ひねり（回旋）」を生み出す際、腰を回そうと意識すると高い確率で腰痛を発症します。解剖学的に腰椎はほとんど回らない構造だからです。回旋動作の主役である胸椎のモビリティと、骨盤の分離コントロールを解き明かします。',
    columns: [
      {
        title: '1. 胸椎の可動域と腰椎の保護アプローチ',
        readTime: '3 min',
        content: `### 腰を回さず、胸を回す回旋の解剖学
回旋のパワーを高めようとして腰を無理にねじると、腰椎の椎間板を破壊します。腰椎の回旋可動域はわずか**5度**程度です。

* **胸椎（胸の背骨）が回旋の主役**: 胸椎は関節の向きから**約35〜40度**の広い回旋可動域を持っています。回旋力高めるためには、硬くなりがちな胸椎と胸郭のモビリティ（柔軟性）を徹底的に拡大する必要があります。
* **腰椎のスタビリティ固定**: 腰椎は腹圧によってニュートラル（真っ直ぐ）に完全ロックし、安定した土台として機能させます。`
      },
      {
        title: '2. 斜腹筋群のクロス収縮と回転半径のコントロール',
        readTime: '3 min',
        content: `### スイングの角速度を引き上げる回転モーメント
ひねり動作の出力を最大化する筋肉の協調性と物理アプローチです。

* **斜角筋群（外腹斜筋・内腹斜筋）のクロスリンク**: 体幹の斜め方向に走る腹筋群が連動して収縮し、骨盤と肋骨を引き寄せ合う強烈な回転トルクを生み出します。
* **角運動量保存の法則**: フィギュアスケーターが腕を縮めると回転が速くなるように、スイングの初動では腕やバット・クラブを体に近い位置にキープし（慣性モーメントを小さくして回転を高速化）、インパクトに向けて一気に引き伸ばすことで、先端のヘッドスピードが物理限界を超えて跳ね上がります。`
      }
    ]
  },
  injuryfree: {
    title: 'ケガを予防したい（関節設計と非対称性改善）',
    desc: '代償動作による局所的過負荷を完全に防ぎ、長く高いパフォーマンスを発揮し続ける関節設計。',
    keywords: ['非対称性改善', '代償動作防止', 'ジョイント・バイ・ジョイント', 'ACWR負荷管理'],
    theme: 'EMERALD ATHLETE GOAL',
    glowColor: 'from-emerald-950/20',
    overview: 'アスリートが直面するケガのほとんどは、アクシデントではなく、身体の「動きのエラー（代償動作）」と「不適切なトレーニング負荷の積み重ね」によって発生します。解剖学理論に基づき、関節を保護し寿命を伸ばす設計図を提示します。',
    columns: [
      {
        title: '1. ジョイント・バイ・ジョイント理論と代償動作の排除',
        readTime: '3 min',
        content: `### 各関節の役割（モビリティ・スタビリティ）の完全アプローチ
人体は「動くべき関節」と「固定すべき関節」が交互に積み重なる構造（Joint-by-Joint）になっています。

* **モビリティ関節（動くべき）**: 足首、股関節、胸椎、肩関節
* **スタビリティ関節（固定すべき）**: 膝関節、腰椎、肩甲骨
* **代償動作の怪我メカニクス**: 例えば、**「股関節」や「胸椎」が硬く動かない**と、隣り合う**「膝」や「腰椎（腰）」が代わりに過剰に動いて（代償動作）**しまいます。これが膝の靭帯断裂や腰椎ヘルニアの真の原因です。各関節本来の機能を完全に取り戻すアプローチが必要です。`
      },
      {
        title: '2. 左右の非対称性改善と科学的負荷管理（ACWR）',
        readTime: '3 min',
        content: `### 左右差の解消とオーバーワークの完全予防
関節にかかるストレスの偏りをなくし、科学的にトレーニング量をコントロールします。

* **シングルレッグドリルによる非対称性改善**: 片脚でのスクワットやシングルレッグデッドリフトを行い、左右の筋力・可動域のアンバランスを徹底的に排除します。左右差が15%以上あると、怪我のリスクが4倍以上に跳ね上がることが実証されています。
* **ACWR（Acute:Chronic Workload Ratio）**: 週ごとの急激なトレーニング負荷の増大を防ぎます。「今週のトレーニング総負荷量（直近の疲労）」を「過去4週間の平均トレーニング総負荷量（適応した体力）」で割り、この比率を**0.8〜1.3の安全ゾーン**に維持することで、筋肉や腱の慢性疲労によるケガの9割を未然に防ぐことができます。`
      }
    ]
  }
}

// Hardcoded dynamic relation maps between pages (connected wiki network)
const relatedMap: Record<string, { label: string; href: string }[]> = {
  speedup: [
    { label: '競技別解説: 陸上 (Track & Field)', href: '/athlete/sport/athletics' },
    { label: '競技別解説: サッカー (Soccer)', href: '/athlete/sport/soccer' }
  ],
  jumppower: [
    { label: '競技別解説: バスケット (Basketball)', href: '/athlete/sport/basketball' },
    { label: '競技別解説: ハンドボール (Handball)', href: '/athlete/sport/handball' }
  ],
  contactpower: [
    { label: '競技別解説: ハンドボール (Handball)', href: '/athlete/sport/handball' },
    { label: '自主練技術: プロ選手の自主練マインド', href: '/athlete/practice/prosenshu' }
  ],
  ballspeed: [
    { label: '競技別解説: 野球 (Baseball)', href: '/athlete/sport/baseball' },
    { label: '自主練技術: 150km投げるための考え方', href: '/athlete/practice/pitching150' }
  ],
  rotation: [
    { label: '競技別解説: 野球 (Baseball)', href: '/athlete/sport/baseball' },
    { label: '目的別強化: ケガを予防したい', href: '/athlete/goal/injuryfree' }
  ],
  injuryfree: [
    { label: '目的別強化: 当たりを強くしたい', href: '/athlete/goal/contactpower' },
    { label: '目的別強化: 回旋を強くしたい', href: '/athlete/goal/rotation' }
  ]
}

export default function GoalArticlePage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const [activeSection, setActiveSection] = useState<ColumnSection | null>(null)

  // Resolve which data to render
  const data = useMemo(() => {
    if (fallbackGoals[slug]) return fallbackGoals[slug]
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
            <span className="text-purple-500 font-semibold">目的別強化</span>
            <span>/</span>
            <span className="text-zinc-300 uppercase">{slug}</span>
          </div>

          <span className="inline-flex items-center gap-1.5 text-[9px] font-extrabold text-purple-400 bg-purple-950/40 border border-purple-900/40 px-2.5 py-0.5 rounded-full uppercase tracking-widest mb-4">
            <Brain className="w-3.5 h-3.5 text-purple-500" /> {data.theme}
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
            <Brain className="w-4 h-4 text-purple-500" /> 目的別パフォーマンス分析・運動力学骨子
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
            <h2 className="text-lg md:text-xl font-bold tracking-tight text-white">強化コラム・物理的アプローチ一覧</h2>
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
              身体能力の向上と競技特性は表裏一体です。自らの強化目標に直結する具体的な競技動作解説や、一流選手の実践する自主練プロセスへ進みましょう。
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
                「足を速くしたい」「当たりを強くしたい」という目標は、解剖学的な意識（インナーロック、重心の最適軌道）を脳にインストールすることで、何倍も早い出力向上を連れてきます。
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
