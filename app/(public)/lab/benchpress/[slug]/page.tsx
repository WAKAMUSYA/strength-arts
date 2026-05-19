'use client'

import React from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { 
  ArrowLeft, 
  Clock, 
  Activity, 
  ShieldAlert, 
  BookOpen, 
  CornerDownRight, 
  Bookmark, 
  Compass, 
  ChevronRight
} from 'lucide-react'

// --- ARTICLE TYPE DEFINITIONS ---
interface Section {
  title: string
  paragraphs: string[]
  note?: {
    type: 'warning' | 'info' | 'success'
    title: string
    content: string
  }
  bullets?: string[]
}

interface ArticleData {
  title: string
  subtitle: string
  category: string
  readTime: string
  level: '初級' | '中級' | '上級'
  overview: string
  sections: Section[]
  conclusion: string
  nextArticle?: {
    title: string
    slug: string
  }
}

// --- ELITE ANATOMICAL & BIOMECHANICAL ARTICLE DATABASE ---
const ARTICLES_DB: Record<string, ArticleData> = {
  'alignment': {
    title: 'ベンチプレスの基本と最適骨格アライメント',
    subtitle: '力学的エネルギーロスを防ぐ骨格支持の法則',
    category: 'BIOMECHANICS',
    readTime: '6 min',
    level: '初級',
    overview: 'ベンチプレスは「大胸筋を動員する」種目であると同時に、足底から体幹、上腕へと連なる運動連鎖（キネティックチェーン）を統合する高度なマルチジョイント種目です。挙上重量の頭打ちや関節の怪我を防ぐためには、筋力に依存する前に、骨格の整合性（アライメント）によって重量を支持する感覚を掴む必要があります。',
    sections: [
      {
        title: '1. ラックアップ時のアームアライメント（骨の柱を立てる）',
        paragraphs: [
          'バーベルをラックから外し、スタートポジションに構えた瞬間、腕は地面に対して完全に垂直（90度）でなければなりません。この状態を「スタック（Stacking）」と呼び、関節への剪断ストレスをゼロにし、骨だけで重量を支えることができます。',
          '手首が後ろに過度に折れていたり、肘が外や内にわずかに傾いていると、その関節を支えるために前腕筋群や上腕三頭筋がスタート前から疲労してしまいます。'
        ],
        note: {
          type: 'info',
          title: 'アライメントの自己診断',
          content: 'スタートポジションでバーベルの真下に肘があり、その直下に橈骨（とうこつ）と尺骨（しゃっこつ）が地面に対して垂直に突き刺さっている感覚を意識してください。これが手首痛や肘痛を根本防ぐ最大の鍵です。'
        }
      },
      {
        title: '2. バー挙上軌道の力学（Jカーブ vs 直線軌道）',
        paragraphs: [
          '多くの初心者はバーを真っ直ぐ（地面に対して垂直に）上下させようとします。しかし、肩関節の安全性とモーメントアームの最適化を両立するためには、バーベルは「Jカーブ（緩やかな曲線）」を描いて上下するのが自然です。',
          'ラックアウトしたスタート位置（肩関節の真上）から、大胸筋下部（みぞおちの上あたり）に向かって斜め下方に下ろし、そこから顔の方向（ラック方向）に向けて押し上げる軌道が、人間の肩の解剖学的構造に最も適合しています。'
        ],
        bullets: [
          'ボトムポジション：脇の角度を約60〜75度に維持し、大胸筋を最大ストレッチする。',
          'ミドルポジション：前腕の垂直を維持したまま、バーベルを押し上げる。',
          'ロックアウト：肩関節の真上でバーが静止し、骨格で支えるポジションへ戻る。'
        ]
      },
      {
        title: '3. 胸椎伸展とプラットフォームの安定化',
        paragraphs: [
          '大胸筋の収縮効率を最大化するには、土台となる「胸椎（きょうつい）」の伸展（軽いアーチ形成）が不可欠です。背中をベンチ台にベタ付けにすると、肩甲骨の動きが制限され、肩関節だけでバーベルの負荷を受け止めてしまいます。',
          '肩甲骨を軽く引き寄せ（内転）、ベンチ台に押し下げる（下制）ことで、強固なプラットフォームが形成され、大胸筋の線維の走る方向とバーの負荷の方向が完全に一致します。'
        ]
      }
    ],
    conclusion: 'ベンチプレスの基本アライメントとは、単なる「形」の模倣ではありません。骨で重量を支持し、胸椎のアーチによって大胸筋に機械的張力を集中させ、関節への剪断力を最小化する「物理の数式」そのものなのです。',
    nextArticle: {
      title: '肩が痛い理由：インピンジメントの力学',
      slug: 'shoulder-pain'
    }
  },

  'shoulder-pain': {
    title: '肩が痛い理由：インピンジメントの力学と怪我予防',
    subtitle: '肩甲上腕リズムの機能解剖学から紐解く肩前面痛の原因',
    category: 'ANATOMY & PAIN',
    readTime: '7 min',
    level: '中級',
    overview: 'ベンチプレスにおいて、最も多くのトレーニーが経験する怪我が「肩前面の痛み」です。この痛みの正体の多くは、上腕骨の頭が肩甲骨の「肩峰（けんぽう）」と呼ばれる突き出た骨の下に潜り込み、その間にある腱板（ローテーターカフ）や滑液包を挟み込んでしまう「肩関節インピンジメント症候群」です。なぜこの現象が起きるのか、その力学的メカニズムを解説します。',
    sections: [
      {
        title: '1. 脇の角度（フレアアウト）とインピンジメントの発生確率',
        paragraphs: [
          '最も危険なエラーフォームは、バーベルを下ろす際に「脇が90度開いてしまう（フレアアウト）」状態です。腕を肩の真横に大きく開いたまま重量をかけると、上腕骨が内旋（内側にねじれる）し、肩峰下腔（肩の隙間）が最も狭くなります。',
          'この状態で強烈なボトム負荷がかかると、棘上筋腱（きょくじょうきんけん）が直接骨と骨の間に挟まれ、微小な断裂や炎症を引き起こします。これが、下ろした時に「肩の前がチクチク痛む」原因です。'
        ],
        note: {
          type: 'warning',
          title: 'インピンジメント警告アングル',
          content: '脇の開き角度が80度を超えると、肩峰下腔の圧力は急激に上昇します。安全な脇の角度は「約60度〜70度」です。バーは鎖骨ではなく、乳頭のやや下方（みぞおちの上）に下ろすのが解剖学的に安全です。'
        }
      },
      {
        title: '2. 肩甲骨の「内転・下制」の崩れと肩の逃げ',
        paragraphs: [
          'バーを押し上げる（挙上する）際、きつくなってくると肩がベンチ台から浮いて前に出てしまうエラーが多発します。これは手だけで押そうとするため、前鋸筋や小胸筋が過剰に働き、肩甲骨が「外転（外に開く）」してしまう現象です。',
          '肩甲骨が前に出ると、肩関節全体が前方へシフトし、大胸筋から負荷が抜けて三角筋前部と関節包に全重量が集中します。これを防ぐためには、挙上中も「常に背中のシートに肩甲骨を押し付け続ける」必要があります。'
        ]
      },
      {
        title: '3. ローテーターカフ（腱板）の等尺性補強',
        paragraphs: [
          'インピンジメントを防ぐ主役は、アウターマッスル（大胸筋）ではなく、インナーマッスル（棘上筋、棘下筋、小円筋、肩甲下筋）です。これらの筋肉が動的アライメントを維持し、上腕骨頭が関節窩（かんせつか）から外に飛び出さないよう引き留めています。',
          'ベンチプレスの前に、ゴムチューブ等で肩の外旋動作（L-Flyなど）を行い、ローテーターカフに軽い刺激を入れて活性化させておくことが、物理的な怪我予防に極めて有効です。'
        ]
      }
    ],
    conclusion: '肩の痛みは、筋力不足ではなく「力学的な配置エラー（アライメント不全）」が引き起こす必然的な結果です。脇の角度を適切に狭め、肩甲骨をロックし続けることで、肩へのダメージはゼロにしながら大胸筋への刺激を倍増させることができます。',
    nextArticle: {
      title: '胸に効かない人へ：上腕骨の水平内転と意識の分離',
      slug: 'chest-activation'
    }
  },

  'chest-activation': {
    title: '胸に効かない人へ：上腕骨の水平内転と意識の分離',
    subtitle: '三頭筋や肩に逃げず、大胸筋を最大標的にする力学的アプローチ',
    category: 'MUSCLE ENGAGEMENT',
    readTime: '5 min',
    level: '初級',
    overview: '「ベンチプレスをしても腕（三頭筋）や肩の前（三角筋）ばかりが疲れて、胸に全く筋肉痛がこない」というのは、非常に一般的な悩みです。大胸筋は解剖学的に「腕を外側から胸の前に引き寄せる動作（水平内転）」を司っています。単に「重いものを上に押す」という意識だけでは、大胸筋ではなくプレス動作が得意な腕の筋肉が主役になってしまいます。',
    sections: [
      {
        title: '1. 「バーを押す」から「肘同士を引き寄せる」への意識変革',
        paragraphs: [
          '脳から大胸筋へのニューロマスキュラー接続（神経連鎖）を確立するための最大のコツは、「手でバーを押す」という主観的感覚を捨てることです。',
          '大胸筋の作用線は上腕骨（二の腕の骨）に付着しています。したがって、大胸筋を収縮させるには「二の腕を胸の真ん中に向かって絞り込む」必要があります。バーを握る両手の幅を「内側に絞り込むように力を入れながら挙上する（等尺性絞り込み）」ことで、大胸筋の収縮は劇的に高まります。'
        ],
        note: {
          type: 'success',
          title: '収縮を高めるキューイング',
          content: '「バーを左右に引きちぎるように握り、上げる時は逆に肘と肘を近づけるように意識する」。このマインドマッスルコネクションにより、三頭筋への依存を約30%削減できます。'
        }
      },
      {
        title: '2. グリップ幅とモーメントアームの設計',
        paragraphs: [
          '手の幅（グリップ幅）が狭すぎると、ナローベンチプレスの状態になり、肘関節の可動域が大きくなって上腕三頭筋が動員されます。逆に広すぎると、肩関節の負担が増大し可動域が著しく狭くなります。',
          '大胸筋に刺激を集中させる最適なグリップ幅は、バーを胸に下ろしたボトムポジションにおいて「前腕（ひじから手首まで）が地面に対して完全に垂直」になる幅です。このとき、大胸筋に対して最大のモーメントアーム（力学的なテコ）が働きます。'
        ]
      }
    ],
    conclusion: '胸に効かせるために重量を下げる必要はありません。必要なのは「手」ではなく「肘（上腕）」をコントロールすること、そして適切なグリップ幅によって大胸筋に物理的レバーをかける解剖学的知性なのです。',
    nextArticle: {
      title: '脚の使い方：床反力を拳上に伝えるバネの創出',
      slug: 'leg-drive'
    }
  },

  'leg-drive': {
    title: '脚の使い方（レッグドライブ）：床反力を拳上に伝えるバネの創出',
    subtitle: '下半身のエネルギーを上半身にバイパスする連動キネティクス',
    category: 'ADVANCED KINETICS',
    readTime: '6 min',
    level: '上級',
    overview: 'ベンチプレスを「上半身だけのトレーニング」と考えているうちは、真のポテンシャルを発揮することはできません。トップリフターは例外なく、下半身の強大なパワー（床反力）を体幹を通じてバーベルに伝える「レッグドライブ（Leg Drive）」を駆使しています。物理的な力を下から上に伝達する運動方程式を解説します。',
    sections: [
      {
        title: '1. 床反力の発生とベクトルの方向（上ではなく「奥」へ押す）',
        paragraphs: [
          'レッグドライブにおける最大の誤解は、「足を真下に踏ん張って腰を持ち上げる」ことです。これをやるとお尻がベンチシートから浮いてしまい、パワーリフティングの競技ルールで失格になるだけでなく、腰椎に異常な圧縮ストレスがかかります。',
          '正しいレッグドライブのベクトルの方向は、「真下」ではなく「頭の方向（斜め後ろ）」です。足の裏で地面を「前方に蹴り出す」ように力を入れます。これにより、身体全体がベンチシートの上すべり方向に押され、背中のアーチがさらに強固に押し縮められて安定します。'
        ],
        note: {
          type: 'info',
          title: '足底のポジショニング',
          content: '足の裏全体をしっかりと床に密着させます。踵（かかと）が浮いてしまうと、床反力を伝えるバネが逃げてしまいます。膝の角度は90度よりやや鋭角にし、力を伝達しやすい位置をキープしてください。'
        }
      },
      {
        title: '2. 床反力を上半身に繋ぐ「腹圧」と大臀筋のブリッジ',
        paragraphs: [
          '足で蹴り出したエネルギーは、骨盤を通り、体幹（コア）を通過して肩甲骨プラットフォームへ伝わります。このときに体幹がグニャグニャと柔らかいと、伝達の途中でエネルギーが全て吸収されて消滅してしまいます。',
          '蹴り出す瞬間は、お腹を大きく膨らませて「腹圧（IAP）」を最大に高め、大臀筋（お尻）を硬く緊張させて体幹を一本の硬い「鉄の棒」のようにロックします。これにより、足の力が一切ロスすることなくバーベルを上に押し上げるブースターとして機能します。'
        ]
      }
    ],
    conclusion: 'レッグドライブとは、下半身でバーベルを上げる技術です。地面を力強く蹴り、強固な体幹を介してその床反力をバーに伝えることで、ベンチプレス全体の挙上軌道に爆発的な推進力を加えることができます。',
    nextArticle: {
      title: '重量が伸びない理由：神経系の動員と漸進的過負荷の壁',
      slug: 'plateau'
    }
  },

  'plateau': {
    title: '重量が伸びない理由：神経系の動員と漸進的過負荷の壁',
    subtitle: '筋肥大の限界を超え、神経系の限界挙上率を解放するアプローチ',
    category: 'STRENGTH PROGRAM',
    readTime: '7 min',
    level: '上級',
    overview: '「ベンチプレス80kgまでは順調に伸びたが、そこから何ヶ月も1kgも重量が変わらない」という停滞期（プラトー）は、ほぼすべてのトレーニーに訪れます。この壁にぶつかったとき、多くの人は「もっと大胸筋を大きくしなければ」と考えがちですが、実は限界重量を決定しているのは筋肉の体積そのものよりも、「運動単位の動員頻度」や「同調性」といった神経系の伝達制限なのです。',
    sections: [
      {
        title: '1. 神経系発達の鍵：高強度低回数（1〜5RM）の動的刺激',
        paragraphs: [
          '一般的な10回×3セット（筋肥大ターゲット）ばかりを繰り返していると、筋肉のサイズは大きくなりますが、持っている筋力を「同時に100%発揮する」という神経回路が休眠状態になります。',
          '脳から筋肉へ送られる電気信号の頻度を高め、不活性な筋肉の「運動単位（モーターユニット）」を一度に全て呼び起こすには、最大筋力の85%〜90%以上の超高強度（1〜5回しか上がらない重量）でトレーニングを行う期間を設ける必要があります。'
        ]
      },
      {
        title: '2. 漸進的過負荷の壁を破る「マイクロローディング」と「ピリオダイゼーション」',
        paragraphs: [
          '毎回限界まで追い込むだけの行き当たりばったりのトレーニングは、中枢神経系を慢性疲労に陥らせ、重量低下を招きます。',
          '停滞期を脱するには、週ごとに強度（％1RM）とボリューム（レップス×セット）を計画的にコントロールする「ピリオダイゼーション」の導入が必須です。また、一気に2.5kg重量を増やすのではなく、0.5kgや1.0kgの極小プレートを用いて「脳に重量の変化を気づかせないように少しずつ過負荷をかけていく（マイクロローディング）」手法が極めて有効です。'
        ],
        note: {
          type: 'success',
          title: '3週ローテーションのプログラム設計',
          content: '・第1週（ボリューム週）：70% 1RM × 8レップス 4セット\n・第2週（強度移行週）：80% 1RM × 5レップス 3セット\n・第3週（ピーク神経活性）：90% 1RM × 2レップス 3セット\nこの波状の負荷変動により、中枢神経を過度に疲労させることなく、限界値を突破させることができます。'
        }
      }
    ],
    conclusion: '重量が伸び悩んだとき、それは大胸筋の限界ではなく、脳と筋肉を繋ぐ「電気信号の制限」です。高強度アプローチと緻密な負荷周期管理により、神経系のリミッターを解除し、停滞期の壁を軽々と突破することができます。'
  },

  'hypertrophy-range': {
    title: '筋肥大と可動域のトレードオフ：ハーフ vs フルレンジ',
    subtitle: '筋腱移行部の力学的ひずみと肥大効果の科学的検証',
    category: 'HYPERTROPHY SCIENCE',
    readTime: '4 min',
    level: '中級',
    overview: '近年のバイオメカニクス研究は、筋肉が引き伸ばされた状態（ストレッチポジション）での機械的張力が、筋肥大（筋肥大シグナル）を誘発する強力なトリガーであることを示しています。ベンチプレスにおけるフルレンジ可動域とハーフレンジの真の肥大効果の違いを解説します。',
    sections: [
      {
        title: '1. ストレッチ誘導性筋肥大（Stretch-Induced Hypertrophy）の力学',
        paragraphs: [
          '筋肉の肥大を促す最大の刺激は「機械的張力（Mechanical Tension）」です。特に大胸筋が最大に伸展されるボトムポジションにおいて最も強烈な力学的負荷がかかると、筋原線維内のタイチンと呼ばれるタンパク質バネが引き伸ばされ、筋肥大のシグナル経路が活性化します。',
          'ハーフレンジで高重量を扱う場合、挙上距離の短縮によりこの最も重要な「ストレッチゾーン」がスキップされてしまい、筋組織レベルでの微小損傷と筋肥大応答が著しく低下することが分かっています。'
        ]
      },
      {
        title: '2. フルレンジ可動域（ROM）による張力の連続性',
        paragraphs: [
          'フルレンジ（ROM）ベンチプレスでは、大胸筋全体、特に付着部（上腕骨の結節間溝）付近の筋線維に対して切れ目のない張力を加えることができます。可動域を広く取ることで、動員されるモーターユニットの総数も増大します。'
        ],
        note: {
          type: 'info',
          title: '科学的研究データ',
          content: '2023年のバイオメカニクス調査によると、フルレンジで行ったグループはハーフレンジ（高強度）で行ったグループと比較して、大胸筋の横断面積（CSA）の増加率が約1.8倍高かったことが報告されています。'
        }
      }
    ],
    conclusion: '筋肥大を最大化する絶対条件は「ボトムでのストレッチ」です。フルレンジを基本とし、ハーフレンジは神経系のピーク刺激を得るための部分プログラムとして限定的に組み合わせるのが合理的です。'
  },

  'scapula-lock': {
    title: '肩甲骨は本当に「限界まで寄せて下げる」べきなのか？',
    subtitle: '動的肩甲上腕リズムとインピンジメント回避の真実',
    category: 'ANATOMY & KINETICS',
    readTime: '5 min',
    level: '上級',
    overview: '一般的な指導書にある「肩甲骨を寄せて下げる（内転・下制）」というキューイング。しかし、これを「限界まで力任せにガチガチに固める」と認識していると、かえって肩関節の自然な動き（肩甲上腕リズム）を阻害し、炎症や怪我の原因になります。',
    sections: [
      {
        title: '1. 肩甲上腕リズム（Scapulohumeral Rhythm）の機能的役割',
        paragraphs: [
          '本来、人間の腕が動くとき、上腕骨の動きに合わせて肩甲骨も一定の比率（約2:1）で動的に連動します。これを肩甲上腕リズムと呼びます。',
          'ベンチプレスのラックアウトからボトムまで下ろす際、肩甲骨を完全に固定しすぎて一切動かさないようにすると、上腕骨頭が関節窩のクッションから外れて前方へ逃げようとし、肩関節前方組織に異常なストレスが集中します。'
        ]
      },
      {
        title: '2. 静的ロック vs 動的スタビライズの力学',
        paragraphs: [
          '理想的なアプローチは、無理な力で「固める」ことではなく、ベンチシートの摩擦を利用して肩甲骨を「自然に下制・安定させる（スタビライズ）」ことです。',
          '前鋸筋（ぜんきょきん）と僧帽筋下部を動的に働かせ、バーを下ろす動きに合わせて肩甲骨が優しく内転し、上げる動きに合わせて安定したプラットフォームを維持しつつ、腕の動作を支えるサポート役に徹します。'
        ]
      }
    ],
    conclusion: '肩甲骨は「ガチガチの静止物」ではなく、大胸筋の動きを土台から支える「動的スタビライザー」です。無理のない範囲での引き寄せ（内転・下制）を意識し、関節の自然な滑りを尊重してください。'
  },

  'arch-mechanics': {
    title: 'パワーリフティング仕様アーチの功罪：安全性と挙上距離の力学',
    subtitle: 'ブリッジ角度がもたらす挙上距離と剪断応力変化のバイオメカニクス',
    category: 'BIOMECHANICAL BRIDGE',
    readTime: '6 min',
    level: '中級',
    overview: '背中を大きく反らせるアーチ（ブリッジ）。これは挙上距離を短くして重量を伸ばすための有効な技術ですが、安全性と脊椎・腰椎への力学的な負荷分散についての深い理解が必要です。',
    sections: [
      {
        title: '1. アーチによる大胸筋下部線維の動員と挙上距離の縮小',
        paragraphs: [
          'アーチを高く作ることで、バーの下ろす位置が大胸筋の最も力が強い「下部線維（肋骨部）」と同じアングルになります。また、胸のトップが高くなるため、バーベルが胸に触れるまでの物理的な挙上距離が数センチ短縮され、仕事量（力×距離）が減るため、高重量が挙がります。'
        ]
      },
      {
        title: '2. 腰椎・胸椎の圧縮応力と剪断力の比較',
        paragraphs: [
          'アーチの形成で腰が痛くなる場合、それは「腰の骨（腰椎）」だけで無理に反ろうとしている証拠です。腰椎は構造的に回旋や過伸展に弱く、過度な反りは椎間関節症を招きます。',
          '正しいアーチは、柔軟性の高い「胸の骨（胸椎）」を主役にして作ります。肩甲骨を下制し、足からの力を体幹で受け止めることで、腰椎への剪断応力をシャットアウトし、強固で安全なアーチが完成します。'
        ],
        note: {
          type: 'warning',
          title: 'アーチの安全警告',
          content: 'お尻がベンチから完全に浮いてしまうほど高く反るのは厳禁です。足の踏ん張りはお尻を浮かせるためではなく、背中の胸椎のブリッジをロックするために斜め後ろに蹴り出すベクトルに使ってください。'
        }
      }
    ],
    conclusion: 'アーチは挙上距離を短縮するチート技術ではなく、胸椎の伸展によって大胸筋下部のパワーを引き出しつつ、肩を保護するための「安全防御システム」なのです。'
  },

  'shoulder-drift': {
    title: 'なぜ胸トレが肩（三角筋前部）に入るのか？骨盤と上腕の角度測定',
    subtitle: 'プレス動作における上腕骨内転面と三角筋前部へのモーメントアーム',
    category: 'PAIN & DRIFT',
    readTime: '4 min',
    level: '初級',
    overview: 'ベンチプレスをした翌日、胸ではなく肩の前面（三角筋前部）ばかりが激しい筋肉痛になる、あるいは違和感が出る場合、バーの下ろし位置や肘の張り方に構造的な原因があります。肩への代償を防ぐためのプレスプレーン（挙上平面）の設計を解説します。',
    sections: [
      {
        title: '1. プレスプレーン（挙上平面）の狂いと三角筋前部の代償',
        paragraphs: [
          'バーを鎖骨付近に高く下ろしすぎてしまうと、脇の開きが大きく（80度以上）なり、負荷の作用線が肩関節の中心から遠ざかります。結果として、三角筋前部への「テコの長さ（モーメントアーム）」が最大化し、大胸筋ではなく肩が全ての重量を受け持つことになります。',
          '肩関節は球関節で自由度が高い分、アライメントが狂うと最も近くのアウターマッスルである三角筋前部へ負荷がすべて逃げてしまう性質があります。'
        ]
      },
      {
        title: '2. 理想的なプレス軌道（バー経路）の構築',
        paragraphs: [
          '下ろす位置は「乳頭ライン」またはそれより1〜2cm下（みぞおちの上）にし、脇を約60度〜70度に締めることで、負荷の作用線が大胸筋の繊維の向きと完璧にアラインします。これにより、肩への負担は物理的に消失します。'
        ]
      }
    ],
    conclusion: '肩に刺激が逃げるのは、解剖学的に不自然な位置（鎖骨方向）に下ろしているからです。下ろす位置をみぞおち方向に低く保ち、脇の開き角度を適切にコントロールするだけで、負荷は大胸筋へと直ちに戻ります。'
  }
}

export default function ArticleDetailPage() {
  const params = useParams()
  const slug = params?.slug as string
  
  const article = ARTICLES_DB[slug]

  if (!article) {
    return (
      <div className="min-h-screen bg-slate-50/40 flex flex-col items-center justify-center p-6 text-center">
        <div className="w-16 h-16 bg-red-50 border border-red-100 text-red-500 rounded-2xl flex items-center justify-center mb-4">
          <ShieldAlert className="w-8 h-8" />
        </div>
        <h1 className="text-xl font-bold text-zinc-900 mb-2">コラムが見つかりませんでした</h1>
        <p className="text-sm text-zinc-500 mb-6">
          指定されたコラム（ID: {slug}）は現在執筆中、または存在しないURLです。
        </p>
        <Link 
          href="/lab/benchpress" 
          className="text-xs font-mono font-bold text-blue-600 hover:underline inline-flex items-center gap-1"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> ベンチプレス研究所へ戻る
        </Link>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-slate-50/40 text-neutral-800 font-sans antialiased selection:bg-blue-100 selection:text-blue-900 pb-32">
      
      {/* 🚀 STICKY READING PROGRESS SHEET HEADER */}
      <div className="sticky top-16 z-30 bg-white/80 backdrop-blur-md border-b border-zinc-150/70 px-6 py-3.5 flex items-center justify-between text-xs text-zinc-400 font-mono">
        <div className="flex items-center gap-2 max-w-lg truncate">
          <Link 
            href="/lab/benchpress" 
            className="hover:text-blue-600 transition-colors flex items-center gap-1 shrink-0 font-bold"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> LAB HUB
          </Link>
          <span className="text-zinc-300">/</span>
          <span className="truncate text-zinc-650 font-bold">{article.title}</span>
        </div>
        <div className="hidden sm:flex items-center gap-4 shrink-0">
          <span className="flex items-center gap-1 uppercase text-blue-500 font-bold"><Activity className="w-3.5 h-3.5" /> {article.category}</span>
          <span className="bg-zinc-100 text-zinc-600 px-2 py-0.5 rounded text-[10px]">LEVEL: {article.level}</span>
        </div>
      </div>

      {/* ARTICLE CONTAINER */}
      <div className="max-w-4xl mx-auto px-6 mt-12">
        
        {/* Article Title Meta Header */}
        <div className="space-y-4 mb-10 pb-8 border-b border-zinc-150/80">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 text-[9px] font-extrabold text-blue-600 bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              <BookOpen className="w-3 h-3" /> SA SPECIAL LECTURE
            </span>
            <span className="text-[10px] text-zinc-400 font-mono">CODE: BP-ART-{slug.toUpperCase()}</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black text-zinc-900 tracking-tight leading-tight">
            {article.title}
          </h1>

          <p className="text-base md:text-lg text-zinc-550 font-medium leading-relaxed italic">
            ー {article.subtitle}
          </p>

          <div className="flex items-center gap-4 text-xs text-zinc-450 font-mono pt-2">
            <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 読了時間: {article.readTime}</span>
            <span>レベル: {article.level}</span>
          </div>
        </div>

        {/* Overview Box */}
        <div className="p-6 rounded-2xl bg-white border border-zinc-150/80 shadow-sm mb-12 space-y-3">
          <h3 className="text-xs font-mono font-extrabold text-blue-600 flex items-center gap-1.5 uppercase tracking-widest">
            <Compass className="w-4 h-4 text-blue-500" /> Executive Overview / コア・サマリー
          </h3>
          <p className="text-sm md:text-base text-zinc-600 leading-relaxed font-light whitespace-pre-line">
            {article.overview}
          </p>
        </div>

        {/* Dynamic Section Contents */}
        <div className="space-y-16">
          {article.sections.map((sect, i) => (
            <div key={i} className="space-y-6">
              
              {/* Section Title */}
              <h2 className="text-xl md:text-2xl font-black text-zinc-900 tracking-tight border-b border-zinc-150 pb-3 flex items-center gap-2">
                <CornerDownRight className="w-5 h-5 text-blue-500 shrink-0" />
                {sect.title}
              </h2>

              {/* Section Paragraphs */}
              <div className="space-y-4">
                {sect.paragraphs.map((p, idx) => (
                  <p key={idx} className="text-sm md:text-base text-zinc-655 leading-relaxed font-light whitespace-pre-line">
                    {p}
                  </p>
                ))}
              </div>

              {/* Section Note Block */}
              {sect.note && (
                <div className={`p-5 rounded-xl border flex gap-3.5 ${
                  sect.note.type === 'warning' 
                    ? 'bg-amber-50/30 border-amber-100 text-amber-900' 
                    : sect.note.type === 'success'
                    ? 'bg-emerald-50/20 border-emerald-100 text-emerald-900'
                    : 'bg-blue-50/20 border-blue-100 text-blue-900'
                }`}>
                  <ShieldAlert className={`w-5 h-5 shrink-0 mt-0.5 ${
                    sect.note.type === 'warning' ? 'text-amber-500' : sect.note.type === 'success' ? 'text-emerald-500' : 'text-blue-500'
                  }`} />
                  <div className="space-y-1.5">
                    <span className="font-bold text-xs md:text-sm block">【{sect.note.title}】</span>
                    <p className="text-xs md:text-sm leading-relaxed font-light whitespace-pre-line">
                      {sect.note.content}
                    </p>
                  </div>
                </div>
              )}

              {/* Section Bullets */}
              {sect.bullets && (
                <ul className="space-y-3.5 pl-1.5 my-6">
                  {sect.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-blue-50 border border-blue-100 text-blue-500 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span className="text-zinc-650 text-sm md:text-[15px] leading-relaxed font-light">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              )}

            </div>
          ))}
        </div>

        {/* Conclusion Summary Sheet */}
        <div className="mt-20 p-6 md:p-8 rounded-2xl bg-zinc-950 border border-zinc-900 text-white shadow-xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold text-blue-400 font-mono">
            <Bookmark className="w-4 h-4 text-blue-500" />
            <span>KINETIC CONCLUSION // 総括</span>
          </div>
          <p className="text-xs md:text-sm text-zinc-300 leading-relaxed font-light whitespace-pre-line">
            {article.conclusion}
          </p>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-20 pt-8 border-t border-zinc-150 flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link 
            href="/lab/benchpress" 
            className="text-xs font-mono font-bold text-zinc-500 hover:text-blue-600 transition-colors inline-flex items-center gap-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> BACK TO BENCHPRESS LAB
          </Link>

          {article.nextArticle && (
            <Link 
              href={`/lab/benchpress/${article.nextArticle.slug}`}
              className="group p-4 rounded-xl border border-zinc-100 bg-white shadow-sm hover:border-blue-300 hover:shadow-md transition-all duration-300 text-right flex flex-col items-end gap-1"
            >
              <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-widest flex items-center gap-1">
                NEXT LECTURE <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </span>
              <span className="text-xs font-bold text-zinc-800 group-hover:text-blue-600 transition-colors">
                {article.nextArticle.title}
              </span>
            </Link>
          )}
        </div>

      </div>

    </main>
  )
}
