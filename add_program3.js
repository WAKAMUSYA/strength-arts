const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data', 'benchpressArticles.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newProgram = `
  ,
  {
    id: 'bp-p3',
    slug: 'every-bench-program',
    title: '停滞を打破する特化型「エブリベンチ」プログラム',
    subtitle: '週5回以上の高頻度で神経の回路を限界まで太くする荒療治',
    category: 'STRENGTH PROGRAM',
    type: 'program',
    readTime: '15 min',
    desc: '何をやっても記録が伸びない上級者へ。筋疲労を管理しながら毎日ベンチプレスを行い、中枢神経系を強制的に適応させる超高頻度プログラム。',
    image: '/benchpress/bench6.jpg',
    tags: ['エブリベンチ', '高頻度', '停滞打破', '上級者向け'],
    level: '上級',
    obstacleTag: '停滞した',
    overview: '筋肥大の原理（超回復）を根底から覆す「エブリベンチ」。毎日ベンチプレスを行うことで、筋肉を休ませるのではなく「ベンチプレスの動作そのものに対する神経の効率化」を極限まで高める方法です。ブルガリアン・ウェイトリフティング・チームが用いた手法論をベンチプレスに応用し、1ヶ月で無理やりプラトーをぶち破ります。ただし、関節や腱への負担が大きいため、徹底した疲労管理（RPEのコントロール）が必須となります。',
    sections: [
      {
        title: 'STEP 1: エブリベンチの基本ルール',
        paragraphs: [
          'エブリベンチの目的は「筋肥大」ではなく「神経系の適応」です。毎日行うため、絶対に筋肉痛になるほど追い込んではいけません。「今日も余力がある」「明日も同じ重さが挙がる」という感覚（RPE 7〜8）で終えることが絶対条件です。'
        ],
        bullets: [
          '頻度: 週5〜6日（連続で行う）',
          '強度: 1RMの75%〜85%を行ったり来たりする（波を作る）',
          'ボリューム: 1日あたり合計15〜20レップに抑える'
        ]
      },
      {
        title: 'STEP 2: 1週間の波の作り方（マイクロサイクル）',
        paragraphs: [
          '毎日同じ重量・回数を行うと関節がすり減るため、日ごとに「強度（重さ）」と「ボリューム（回数）」に変化を持たせます。'
        ],
        bullets: [
          'DAY 1 (Heavy): 85% 1RM × 3回 × 5セット',
          'DAY 2 (Light): 70% 1RM × 5回 × 3セット（スピード重視）',
          'DAY 3 (Medium): 80% 1RM × 4回 × 4セット',
          'DAY 4 (Light): 70% 1RM × 3回 × 4セット（回復日）',
          'DAY 5 (Heavy): 85% 1RM × 2回 × 6セット',
          'DAY 6 & 7: 完全休養'
        ]
      },
      {
        title: 'STEP 3: 限界の兆候（オーバートレーニング）の見極め',
        paragraphs: [
          'このプログラムでは、疲労が蓄積していくのが正常です。しかし、「関節の痛み（肩、手首、肘）」や「ウォームアップの重量が異様に重く感じる」といった神経疲労の末期症状が出た場合は、すぐに重量を落とすか、2日間の完全休養を入れてください。'
        ]
      }
    ],
    conclusion: 'エブリベンチは「劇薬」です。常にこれを行う必要はありません。数年間まったく重量が伸びていない、そんな絶望的なプラトーに陥った時のみ、このプログラムの封印を解いてください。'
  }
];`;

const lastBracketIndex = content.lastIndexOf('];');
if (lastBracketIndex !== -1) {
    const updatedContent = content.substring(0, lastBracketIndex) + newProgram + content.substring(lastBracketIndex + 2);
    fs.writeFileSync(filePath, updatedContent);
    console.log("Successfully added program 3.");
} else {
    console.log("Could not find the closing bracket of the array.");
}
