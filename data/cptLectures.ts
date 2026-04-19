import type { Lecture } from "./lectures";

export const CPT_BASICS_CATEGORIES = [
  "基礎科学",
  "栄養学",
  "行動変容・心理学",
  "クライアント評価",
  "プログラムデザイン",
  "エクササイズテクニック",
  "安全管理",
  "ビジネス・コミュニケーション",
  "特殊集団対応",
] as const;

export type CptBasicsCategory = (typeof CPT_BASICS_CATEGORIES)[number];

// Maps CPT basics categories to the question-bank blockId used by `/dashboard/academy/cpt?block=...`.
export const CPT_MOCK_TEST_MAP: Record<CptBasicsCategory, number> = {
  "基礎科学": 1,
  "栄養学": 2,
  "行動変容・心理学": 3,
  "クライアント評価": 4,
  "プログラムデザイン": 5,
  "エクササイズテクニック": 6,
  "安全管理": 7,
  "ビジネス・コミュニケーション": 8,
  "特殊集団対応": 9,
};

const CPT_CATEGORY_SLUG: Record<CptBasicsCategory, string> = {
  "基礎科学": "basic-science",
  "栄養学": "nutrition",
  "行動変容・心理学": "behavior-psych",
  "クライアント評価": "assessment",
  "プログラムデザイン": "program-design",
  "エクササイズテクニック": "exercise-technique",
  "安全管理": "safety",
  "ビジネス・コミュニケーション": "business-communication",
  "特殊集団対応": "special-populations",
};

type CptLectureSeed = {
  title: string;
  excerpt?: string;
  readTime?: number;
  content?: string;
};

// "CSCSのブロック内セクション"と同じ粒度で、CPTも1カテゴリ=複数セクションにするための骨組み。
const CPT_LECTURE_SEEDS: Record<CptBasicsCategory, CptLectureSeed[]> = {
  "基礎科学": [
    {
      title: "基礎科学: 定義・解剖・生理・バイオメカニクス",
      excerpt:
        "NSCA-CPTで問われる基礎科学の要点を、解剖学・運動生理学・バイオメカニクスの順に整理します。",
      readTime: 12,
      content: `
        <h2>基礎科学</h2>

        <h3>1. 基礎科学の定義と役割</h3>
        <p>
          NSCA-CPTでいう基礎科学は、運動指導の安全性と有効性を支える基盤知識です。大きくは、解剖学（構造）、運動生理学（反応と適応）、
          バイオメカニクス（力学的な見方）に分けて整理します。基礎科学を理解すると、種目選択、負荷設定、フォーム修正、リスク管理の判断が
          体系化され、ケース問題でも選択肢の優先順位をつけやすくなります。
        </p>
        <p>
          学習のコツは、用語を暗記するだけで終えず、「現場で操作できる変数」を常にセットで考えることです。頻度・強度・量（ボリューム）・
          休息・可動域・動作速度は、いずれもプログラムの結果に直結します。試験では、これらをどう調整すべきかが問われます。
        </p>

        <h3>2. 解剖学の基礎（筋・骨格・関節）</h3>
        <h4>2-1. 骨格と関節</h4>
        <p>
          骨格は身体を支持し、内臓を保護し、運動の支点になります。関節は骨同士の連結部で、可動性と安定性のバランスを決めます。
          トレーナー実務では、関節の構造に合った運動方向を選び、痛みや代償が出やすい角度や姿勢を避けることが重要です。
        </p>
        <ul>
          <li><strong>関節運動</strong>: 屈曲・伸展、外転・内転、外旋・内旋、回内・回外などの用語を正確に使います。</li>
          <li><strong>安定性の要因</strong>: 骨形状、靱帯・関節包、筋活動（動的安定性）が関与します。</li>
          <li><strong>注意点</strong>: 可動域は大きいほど良いとは限りません。安定性が不足すると疼痛や傷害リスクが高まります。</li>
        </ul>

        <h4>2-2. 筋の役割（主働筋・拮抗筋など）</h4>
        <p>
          骨格筋は随意運動の主要な実行器官です。筋は関節をまたぎ、収縮によって関節運動を生じさせます。
          実務では筋名の暗記よりも、動作パターンの中で筋がどう働くかを説明できることが重要です。
          主働筋・拮抗筋・共同筋・固定筋の関係で整理すると、観察と介入が一貫します。
        </p>
        <ul>
          <li><strong>主働筋</strong>: 目的動作の主要なトルクを生みます。</li>
          <li><strong>拮抗筋</strong>: 反対方向のトルクを生み、制動や関節安定に関与します。</li>
          <li><strong>共同筋</strong>: 主働筋を補助し、同方向のトルクに寄与します。</li>
          <li><strong>固定筋</strong>: 近位部や体幹を安定させ、遠位の運動を成立させます。</li>
        </ul>
        <p>
          なお、動作中の「張り」や「つり感」を、主働筋の過活動と決めつけないことが重要です。可動域制限、姿勢制御、代償、
          呼吸と腹圧の破綻などが原因となる場合があります。
        </p>

        <h3>3. 運動生理学の基礎（エネルギー供給系・神経系・筋収縮）</h3>
        <h4>3-1. エネルギー供給系（ATP再合成）</h4>
        <p>
          筋収縮にはATPが必要です。ATPの貯蔵量は限られるため、運動中はATPを再合成し続けます。主要なATP再合成経路は、
          ATP-PCr系（ホスファゲン系）、解糖系、酸化系です。これらは排他的に切り替わるのではなく、同時に働き、寄与割合が変化します。
        </p>
        <ul>
          <li><strong>ATP-PCr系</strong>: 高強度・短時間で寄与が大きくなります。休息が短いと回復が不十分になりやすいです。</li>
          <li><strong>解糖系</strong>: 中高強度で寄与が増えやすく、運動が強く「きつい」と感じる局面と関連しやすいです。</li>
          <li><strong>酸化系</strong>: 低〜中強度・長時間で優位になりやすく、回復過程でも重要です。</li>
        </ul>
        <p>
          注意点として、「有酸素運動」と「酸化系の寄与が高い運動」は近い概念ですが同義ではありません。高強度運動でも酸化系は機能します。
          乳酸についても単純に「疲労物質」と決めつけず、運動強度の指標の一部として整理しておくと誤解が減ります。
        </p>

        <h4>3-2. 神経系（運動単位と筋出力）</h4>
        <p>
          筋出力は、運動単位の動員、発火頻度、運動単位間の協調、拮抗筋の過剰な緊張の抑制などで調整されます。
          初心者の筋力向上では神経適応の影響が大きい期間があるため、技術の反復とフォームの再現性を優先する設計が有効です。
        </p>

        <h4>3-3. 筋収縮（収縮様式）</h4>
        <p>
          収縮様式は、短縮性（コンセントリック）、伸張性（エキセントリック）、等尺性（アイソメトリック）に分類できます。
          実務では、どの局面で負荷が大きくなりやすいかを理解しておくと、疼痛予防と負荷調整が行いやすくなります。
        </p>
        <ul>
          <li><strong>エキセントリック</strong>: 張力が高まりやすく、遅発性筋痛（DOMS）も生じやすい傾向があります。</li>
          <li><strong>コンセントリック</strong>: 反復の品質を確保しやすく、動作学習の中心になります。</li>
          <li><strong>アイソメトリック</strong>: 角度特異性があり、疼痛がある場面で可動域を制限して用いることがあります。</li>
        </ul>

        <h3>4. バイオメカニクスの基礎（力学・レバー・運動分析）</h3>
        <h4>4-1. 力学の基本（トルク・重心・床反力）</h4>
        <p>
          バイオメカニクスは、生体運動を力学で説明する考え方です。フォーム修正で重要になるのは、重量の大小だけでなく、
          関節にかかるトルク（モーメント）がどう変わるかを捉えることです。
        </p>
        <ul>
          <li><strong>トルク</strong>: 力×モーメントアームです。身体の角度や外負荷の位置で関節負荷が変化します。</li>
          <li><strong>重心と支持基底面</strong>: 重心投影が支持基底面内にあるほど、安定性が高くなります。</li>
          <li><strong>床反力</strong>: 地面を押す力に対する反作用で、全身運動の出力と関係します。</li>
        </ul>

        <h4>4-2. てこ（レバー）</h4>
        <p>
          人体は関節を支点とするてこ系として機能します。抵抗点（外負荷）の位置や姿勢が変わると、同じ重量でも関節トルクが変わります。
          そのため、重量の増減だけでなく、姿勢や可動域の調整も重要な負荷調整手段になります。
        </p>

        <h4>4-3. 運動分析（代償の捉え方）</h4>
        <p>
          運動は矢状面・前額面・水平面で観察し、代償が出る局面（開始・切り返し・終末）を特定します。
          代償が見られた場合でも、直ちに禁忌と決めつけず、疼痛、可動域、疲労、負荷過多、技術不足などの原因を仮説化して介入します。
          介入は、負荷調整→可動域制限→テンポ調整→回帰種目→キューイングの順で整理すると進めやすいです。
        </p>

        <h3>5. パーソナルトレーナーとしての実務的意義</h3>
        <p>
          基礎科学は、メニューの妥当性を説明し、傷害リスクを下げ、成果を再現可能にするための道具です。
          ケース問題でも実務でも、まず安全性（禁忌回避）を確保し、次に技術（再現性）を整え、最後に負荷を漸進する、という順序で考えると
          判断が一貫しやすくなります。
        </p>

        <div class="mt-8 p-6 bg-slate-50 rounded-xl not-prose">
          <h4 class="text-lg font-bold text-slate-900 mb-4">例題</h4>
          <p class="font-medium text-slate-800 mb-4">
            Q. レッグプレスで膝関節に違和感が出ました。最初の対応として最も適切なのはどれか。
          </p>
          <details class="group">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">解答・解説</summary>
            <div class="mt-4 p-4 bg-white border border-slate-200 rounded-lg text-sm text-slate-700">
              <p class="font-bold text-slate-900 mb-2">A. 可動域と負荷（重量）を下げ、フォームを再評価します</p>
              <p>
                違和感がある場合は、まず負荷要因を減らして安全性を確保します。その上で、足幅、深さ、テンポ、回帰種目などを段階的に調整し、
                関節運動と動作パターンの整合性を確認します。
              </p>
            </div>
          </details>
        </div>

        <div class="mt-6 p-6 bg-white border border-slate-200 rounded-xl not-prose">
          <h4 class="text-lg font-bold text-slate-900 mb-4">確認テスト（3問）</h4>
          <details class="group">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q1: 基礎科学に含まれる主要領域は何か。</summary>
            <div class="mt-3 text-sm text-slate-700">A: 解剖学、運動生理学、バイオメカニクス。</div>
          </details>
          <details class="group mt-3">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q2: 関節負荷の評価で重要な量は何か。</summary>
            <div class="mt-3 text-sm text-slate-700">A: トルク（モーメント）。</div>
          </details>
          <details class="group mt-3">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q3: 実務の判断順序の基本はどれか。</summary>
            <div class="mt-3 text-sm text-slate-700">A: 安全性（禁忌回避）→技術（再現性）→負荷（漸進）。</div>
          </details>
        </div>

        <h3>要点まとめ（箇条書き5つ）</h3>
        <ul>
          <li>基礎科学: 解剖学・運動生理学・バイオメカニクスを土台とする判断基盤</li>
          <li>筋の整理: 主働筋・拮抗筋・共同筋・固定筋の役割で観察</li>
          <li>ATP再合成: 複数経路が同時に機能し、寄与割合が強度と時間で変化</li>
          <li>関節負荷: 重量ではなくトルク（力×モーメントアーム）で変化</li>
          <li>判断順序: 安全（禁忌回避）→技術（再現性）→負荷（漸進）</li>
        </ul>

      `,
    },
    {
      title: "筋肥大/筋力の原理: ボリュームと強度の基本",
      excerpt: "筋肥大と筋力向上の定義を整理し、強度・量・休息など主要変数の考え方を確認します。",
      readTime: 12,
      content: `
        <h2>基礎科学</h2>
        <h3>筋肥大/筋力の原理: ボリュームと強度の基本</h3>

        <h4>1. まず整理したい定義</h4>
        <p>
          筋肥大は骨格筋の断面積が増える適応で、筋力向上は特定動作で発揮できる最大随意筋力が増える適応です。
          両者は関連しますが同じものではありません。試験対策では、目的に合わせて「何を優先して操作するか」を判断できるようにしておきます。
        </p>
        <ul>
          <li><strong>強度</strong>: 相対負荷を指し、%1RM、RPE、RIRなどで表します。</li>
          <li><strong>量（ボリューム）</strong>: セット数・反復回数・負荷の組み合わせです。</li>
          <li><strong>休息</strong>: セット間休息や運動間休息で、品質（出力・フォーム）に直結します。</li>
          <li><strong>頻度</strong>: 週当たりの実施回数で、週単位の総量と回復の両方に影響します。</li>
        </ul>

        <h4>2. 生理学の要点（筋肥大と筋力の違い）</h4>
        <p>
          筋肥大では、機械的張力と反復刺激を、継続可能な範囲で積み上げることが重要です。筋損傷は適応に伴って起こり得ますが、
          強い筋損傷を毎回狙う必要はありません。強い遅発性筋痛（DOMS）が続くと、次回のトレーニング量やフォームの品質が落ちやすくなります。
        </p>
        <p>
          筋力向上では、筋量の増加だけでなく神経系の適応が大きく関与します。運動単位の動員や発火頻度、協調性の改善、拮抗筋の過剰な緊張の低減などです。
          特に初心者は神経適応の影響が大きい期間があるため、技術の反復とフォームの再現性を優先するほうが安全で成果も出やすいです。
        </p>

        <h4>3. 主要変数（強度・量・休息）の考え方</h4>
        <p>
          NSCA-CPTレベルでは、細かな処方よりも、変数をどう動かすと何が変わるかを理解しておくことが重要です。
          目安として、筋肥大では量の確保が重要になりやすく、筋力では高い強度と十分な休息が重要になりやすいです。
          ただし、どちらの場合もフォームの再現性と疼痛の有無が前提になります。
        </p>
        <ul>
          <li><strong>筋肥大</strong>: 反復を通して狙いの筋に張力をかけられる強度で、週単位の量を漸進的に増やします。</li>
          <li><strong>筋力</strong>: 高い相対強度を扱うために休息を確保し、反復回数は少なめでも動作の品質を優先します。</li>
          <li><strong>共通</strong>: 疼痛や代償が出る場合は、可動域・テンポ・種目難度・量を調整して安全性を確保します。</li>
        </ul>
        <p>
          変数を上げるときは、基本的に1つずつ段階的に操作します。強度と量を同時に大きく上げると疲労管理が難しくなり、フォームが崩れやすくなります。
        </p>

        <h4>4. 誤解されやすい点</h4>
        <ul>
          <li><strong>筋肉痛</strong>: 成果の必須条件ではありません。強い筋肉痛は回復と次回の品質を阻害し得ます。</li>
          <li><strong>限界反復</strong>: 常に必要ではありません。初心者はRIRを残し、技術と継続性を優先します。</li>
          <li><strong>重量至上主義</strong>: 重量が上がっても狙いの筋に張力がかからない場合は、目的から外れることがあります。</li>
        </ul>

        <h4>5. 実務への落とし込み（漸進の基本）</h4>
        <p>
          実務では、まず動作の再現性と可動域を確保し、次に量、最後に強度を操作する方針が安全です。
          「目標反復回数を達成できたら重量を増やす」という手順は再現性が高く、説明もしやすいです。
          疼痛や疲労が強い場合は、一時的に可動域・テンポ・総量を調整し、状態が安定してから再び漸進に戻します。
        </p>

        <div class="mt-8 p-6 bg-slate-50 rounded-xl not-prose">
          <h4 class="text-lg font-bold text-slate-900 mb-4">例題</h4>
          <p class="font-medium text-slate-800 mb-4">
            Q. 初心者の筋肥大プログラムで最も優先すべき要素として適切なのはどれか。
          </p>
          <details class="group">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">解答・解説</summary>
            <div class="mt-4 p-4 bg-white border border-slate-200 rounded-lg text-sm text-slate-700">
              <p class="font-bold text-slate-900 mb-2">A. フォームを維持しながら量を確保し、段階的に漸進します</p>
              <p>
                初心者は神経適応と技術習得の影響が大きいです。動作の再現性を確保した上で、継続可能な量を確保し、
                反復達成に応じて負荷を漸進させる設計が適切です。
              </p>
            </div>
          </details>
        </div>

        <div class="mt-6 p-6 bg-white border border-slate-200 rounded-xl not-prose">
          <h4 class="text-lg font-bold text-slate-900 mb-4">確認テスト（3問）</h4>
          <details class="group">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q1: 筋力向上で重要になりやすい要素を2つ挙げてください。</summary>
            <div class="mt-3 text-sm text-slate-700">A: 高い相対強度と十分な休息。</div>
          </details>
          <details class="group mt-3">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q2: 筋肉痛を成果指標として用いにくい理由は何か。</summary>
            <div class="mt-3 text-sm text-slate-700">A: 過度の筋損傷は回復を遅らせ、次回の量とフォームの品質を低下させ得るためである。</div>
          </details>
          <details class="group mt-3">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q3: 漸進の実務手順として再現性が高い方法は何か。</summary>
            <div class="mt-3 text-sm text-slate-700">A: 目標反復回数の達成を確認してから重量を増やす方法。</div>
          </details>
        </div>

        <h4>要点まとめ（箇条書き5つ）</h4>
        <ul>
          <li>筋肥大: 筋断面積の増加</li>
          <li>筋力向上: 最大随意筋力の増加（神経適応の寄与が大きい）</li>
          <li>筋肥大の要点: 機械的張力と反復刺激の積み上げ（強い筋損傷の反復は不要）</li>
          <li>変数操作: 強度・量・休息は基本的に1つずつ段階的に調整</li>
          <li>安全性: 疼痛や代償が出る場合は可動域・テンポ・種目難度・量を調整</li>
        </ul>

      `,
    },
    {
      title: "エネルギー供給機構: 有酸素・無酸素の整理",
      excerpt: "ATP再合成の主要経路と、RPE/会話テストによる強度管理を整理します。",
      readTime: 11,
      content: `
        <h2>基礎科学</h2>
        <h3>エネルギー供給機構: 有酸素・無酸素の整理</h3>

        <h4>1. 基本の考え方（ATP再合成）</h4>
        <p>
          運動中の筋収縮にはATPが必要です。ATPの貯蔵量は限られるため、運動中はATPを再合成し続けます。
          NSCA-CPTでは、主要なATP再合成経路（ATP-PCr系、解糖系、酸化系）と、それを踏まえた強度設定・休息設定がよく問われます。
          重要なのは、経路が切り替わるのではなく同時に働き、寄与割合が変化するという点です。
        </p>

        <h4>2. 主要3経路の特徴</h4>
        <ul>
          <li><strong>ATP-PCr系（ホスファゲン系）</strong>: 高強度・短時間で寄与が大きくなります。休息が短いと回復が不十分になりやすいです。</li>
          <li><strong>解糖系</strong>: 中高強度で寄与が増えやすいです。運動が強く「きつい」と感じる局面と関連しやすいです。</li>
          <li><strong>酸化系</strong>: 低〜中強度・長時間で優位になりやすく、回復過程でも重要です。</li>
        </ul>
        <p>
          乳酸は「疲労物質」と単純化されやすいですが、代謝過程の中間産物であり、他組織で利用されることもあります。
          疲労は酸素不足だけでなく、代謝産物、神経系、筋損傷、睡眠やストレスなど複数要因で生じます。
        </p>

        <h4>3. 強度管理（RPE・会話テスト・心拍）</h4>
        <p>
          実務では、強度を定量化してクライアントが再現できるようにする必要があります。心拍は有用な指標ですが、薬剤、睡眠、脱水、
          ストレス、環境温度の影響を受けます。そのため、RPE（自覚的運動強度）や会話テストを併用すると、日内変動に強くなります。
        </p>
        <ul>
          <li><strong>会話テスト</strong>: 会話が可能なら低〜中強度、断続的にしか話せない場合は高強度と考えます。</li>
          <li><strong>RPE</strong>: 「楽」〜「非常にきつい」などの主観評価ですが、説明と強度調整に有効です。</li>
          <li><strong>休息</strong>: 高強度ほど休息を確保し、出力とフォームの品質を維持します。</li>
        </ul>

        <h4>4. 誤解されやすい点</h4>
        <ul>
          <li><strong>「有酸素=酸化系だけ」</strong>: 誤りです。高強度でも酸化系は機能します。</li>
          <li><strong>「息が上がる=無酸素」</strong>: 誤りです。呼吸の増加は強度上昇の結果であり、経路は混在します。</li>
          <li><strong>「高強度が常に最適」</strong>: 誤りです。安全性と継続性が確保できない強度は実務的ではありません。</li>
        </ul>

        <h4>5. 実務への適用（有酸素とレジスタンスの組み立て）</h4>
        <p>
          健康増進や体重管理が目的の場合、まず中等度以下の強度で継続可能な頻度を確立します。その上で、必要に応じて短時間の高強度要素を追加します。
          レジスタンス運動では、目的（筋力・筋肥大・筋持久力）に応じて反復回数と休息を調整し、品質の維持を優先します。
        </p>

        <div class="mt-8 p-6 bg-slate-50 rounded-xl not-prose">
          <h4 class="text-lg font-bold text-slate-900 mb-4">例題</h4>
          <p class="font-medium text-slate-800 mb-4">
            Q. 長時間継続可能な中等度運動で、主要な寄与を示しやすいATP再合成経路はどれか。
          </p>
          <details class="group">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">解答・解説</summary>
            <div class="mt-4 p-4 bg-white border border-slate-200 rounded-lg text-sm text-slate-700">
              <p class="font-bold text-slate-900 mb-2">A. 酸化系です</p>
              <p>
                長時間の継続では酸化系の寄与が大きくなりやすいです。ただし他経路も同時に働き、寄与割合が変化します。
              </p>
            </div>
          </details>
        </div>

        <div class="mt-6 p-6 bg-white border border-slate-200 rounded-xl not-prose">
          <h4 class="text-lg font-bold text-slate-900 mb-4">確認テスト（3問）</h4>
          <details class="group">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q1: 高強度・短時間で寄与が大きい経路はどれか。</summary>
            <div class="mt-3 text-sm text-slate-700">A: ATP-PCr系。</div>
          </details>
          <details class="group mt-3">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q2: 経路が排他的ではないとは何を意味するか。</summary>
            <div class="mt-3 text-sm text-slate-700">A: いずれも同時に働き、寄与割合が変化するという意味。</div>
          </details>
          <details class="group mt-3">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q3: 心拍だけに依存しない強度管理の方法を1つ挙げてください。</summary>
            <div class="mt-3 text-sm text-slate-700">A: RPEまたは会話テスト。</div>
          </details>
        </div>

        <h4>要点まとめ（箇条書き5つ）</h4>
        <ul>
          <li>ATP再合成: 運動中はATPを再合成し続ける必要</li>
          <li>主要経路: ATP-PCr系・解糖系・酸化系（同時に働き、寄与割合が変化）</li>
          <li>乳酸: 単純な疲労物質ではなく、疲労は複合要因</li>
          <li>強度管理: 心拍に加え、RPE・会話テストを併用</li>
          <li>休息: 高強度ほど休息を確保し、出力とフォームの品質を維持</li>
        </ul>

      `,
    },
    {
      title: "疲労管理: オーバーワークを防ぐ指標",
      excerpt: "疲労の分類とモニタリング指標を整理し、負荷調整の実務手順に接続します。",
      readTime: 11,
      content: `
        <h2>基礎科学</h2>
        <h3>疲労管理: オーバーワークを防ぐ指標</h3>

        <h4>1. 疲労管理が重要な理由</h4>
        <p>
          トレーニングは適応を引き出す一方で、疲労も生じます。回復が不足した状態で負荷を継続すると、パフォーマンス低下、フォーム崩れ、疼痛リスクの増加、
          そして継続率の低下につながります。NSCA-CPTの実務では、短期的に追い込む設計よりも、疲労を管理しながら適応を積み上げる設計が重要です。
        </p>

        <h4>2. 疲労の見分け方（局所・全身・組織ストレス）</h4>
        <ul>
          <li><strong>局所疲労</strong>: 特定筋群の出力低下、局所の張り、遅発性筋痛（DOMS）などです。</li>
          <li><strong>全身疲労</strong>: 倦怠感、集中力低下、睡眠の質低下、意欲低下などです。</li>
          <li><strong>組織ストレス</strong>: 関節・腱・筋膜などに違和感や疼痛が出て、動作が変化する状態です。</li>
        </ul>
        <p>
          疲労は単一指標では評価できません。複数情報を短時間で統合し、傾向として把握します。
        </p>

        <h4>3. モニタリング指標（毎回できる簡便法）</h4>
        <p>
          実務では、測定精度よりも「継続できること」と「比較できること」を優先します。代表的には次の指標が有用です。
        </p>
        <ul>
          <li><strong>睡眠</strong>: 入眠、途中覚醒、起床時の回復感を確認します。</li>
          <li><strong>疼痛</strong>: 部位、動作、強度（0〜10）を記録します。</li>
          <li><strong>主観的疲労</strong>: 当日の運動実施可能度を数値化します。</li>
          <li><strong>パフォーマンス</strong>: 同一負荷での反復回数やRPEの変化を確認します。</li>
        </ul>

        <h4>4. 注意点（DOMS・意欲・医療連携）</h4>
        <ul>
          <li><strong>DOMS</strong>: 成果指標ではありません。強いDOMSは次回の量とフォームの品質を低下させ得ます。</li>
          <li><strong>意欲</strong>: やる気と回復状態は一致しません。客観指標を併用します。</li>
          <li><strong>医療連携</strong>: 疼痛の増悪、神経症状、安静時痛などがあれば、運動を継続せず医療連携を優先します。</li>
        </ul>

        <h4>5. 実務への適用（負荷調整レバー）</h4>
        <p>
          疲労が高い場合は、変数を段階的に操作して安全性と品質を確保します。代表的な調整レバーは次のとおりです。
        </p>
        <ul>
          <li><strong>強度</strong>: 重量を下げ、RIRを増やします。</li>
          <li><strong>量</strong>: セット数・種目数を減らします。</li>
          <li><strong>可動域/テンポ</strong>: 可動域を制限し、テンポを安定させます。</li>
          <li><strong>種目</strong>: 関節負荷が小さい回帰種目に置き換えます。</li>
          <li><strong>有酸素</strong>: 低〜中強度に調整し、追加疲労を抑えます。</li>
        </ul>
        <p>
          調整は一時的に行い、指標が改善した段階で再度漸進に戻します。
        </p>

        <div class="mt-8 p-6 bg-slate-50 rounded-xl not-prose">
          <h4 class="text-lg font-bold text-slate-900 mb-4">例題</h4>
          <p class="font-medium text-slate-800 mb-4">
            Q. 直近1週間で睡眠が不安定になり、同一重量の反復回数が低下しました。次回セッションで最も適切な対応はどれか。
          </p>
          <details class="group">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">解答・解説</summary>
            <div class="mt-4 p-4 bg-white border border-slate-200 rounded-lg text-sm text-slate-700">
              <p class="font-bold text-slate-900 mb-2">A. 強度または量を下げ、フォームの品質を維持しながら回復を優先します</p>
              <p>
                回復不足の兆候がある場合、同一処方の継続はフォーム崩れと疼痛リスクを増やします。変数を調整し、
                技術の再現性と継続性を確保することが適切です。
              </p>
            </div>
          </details>
        </div>

        <div class="mt-6 p-6 bg-white border border-slate-200 rounded-xl not-prose">
          <h4 class="text-lg font-bold text-slate-900 mb-4">確認テスト（3問）</h4>
          <details class="group">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q1: 疲労の評価で単一指標に依存しにくい理由は何か。</summary>
            <div class="mt-3 text-sm text-slate-700">A: 疲労は複数要因で生じ、表れ方が個人と状況で異なるため。</div>
          </details>
          <details class="group mt-3">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q2: 回復不足の簡便指標を2つ挙げてください。</summary>
            <div class="mt-3 text-sm text-slate-700">A: 睡眠の質低下、同一負荷での反復低下（またはRPE上昇）。</div>
          </details>
          <details class="group mt-3">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q3: 負荷調整レバーを1つ挙げてください。</summary>
            <div class="mt-3 text-sm text-slate-700">A: 強度、量、可動域/テンポ、種目、有酸素強度のいずれか。</div>
          </details>
        </div>

        <h4>要点まとめ（箇条書き5つ）</h4>
        <ul>
          <li>回復不足: フォーム崩れ・疼痛リスク増加・継続率低下につながる</li>
          <li>疲労の分類: 局所疲労・全身疲労・組織ストレス</li>
          <li>モニタリング: 睡眠・疼痛・主観的疲労・パフォーマンスを簡便に記録</li>
          <li>DOMS: 成果指標ではなく、強いDOMSは次回の量と品質を低下させ得る</li>
          <li>調整レバー: 強度→量→可動域/テンポ→種目→有酸素強度（改善後に漸進へ戻す）</li>
        </ul>

      `,
    },
    {
      title: "ウォームアップの科学: 目的と構成要素",
      excerpt: "ウォームアップの目的と構成要素を整理し、短時間で再現できる手順にまとめます。",
      readTime: 10,
      content: `
        <h2>基礎科学</h2>
        <h3>ウォームアップの科学: 目的と構成要素</h3>

        <h4>1. ウォームアップの目的</h4>
        <p>
          ウォームアップは、運動開始前に身体機能を段階的に高め、以降の運動の安全性と有効性を高める手順です。
          目的は、体温と循環の上昇、関節可動性の確保、神経筋活動の準備、疼痛や違和感の早期発見です。
          実務では「長さ」よりも「目的が満たせているか」を基準にします。
        </p>

        <h4>2. 構成要素（一般的→特異的）</h4>
        <p>
          ウォームアップは一般的（全身）要素と特異的（目的動作）要素から構成されます。短時間でも次の順序で組み立てると再現性が高いです。
        </p>
        <ol>
          <li><strong>全身活動（2〜4分）</strong>: 低〜中強度の歩行、バイク、ステップなどで体温を上げます。</li>
          <li><strong>動的モビリティ（2〜4分）</strong>: 股関節、足関節、胸椎など必要部位の可動性を動作で確保します。</li>
          <li><strong>特異的準備（2〜6分）</strong>: 目的動作を軽負荷で反復し、フォームとリズムを整えます。</li>
        </ol>

        <h4>3. 静的ストレッチの位置づけ</h4>
        <p>
          静的ストレッチは可動域改善に用いられますが、長時間の静的ストレッチは直後の筋力・パワー発揮を低下させ得ます。
          そのため、高強度レジスタンスやパワー発揮の直前は、長時間の静的ストレッチを主手段にしません。
          代わりに、動的モビリティと特異的準備を優先します。
        </p>

        <h4>4. 注意点（疼痛と疲労）</h4>
        <ul>
          <li><strong>疼痛</strong>: ウォームアップ中に疼痛が増える場合は、可動域と負荷を下げ、必要に応じて種目回帰を行います。</li>
          <li><strong>疲労</strong>: ウォームアップで疲労が出ると本運動の品質が下がるため、量と強度を抑えます。</li>
          <li><strong>目的不一致</strong>: 当日の運動内容に関連しない種目は最小限にします。</li>
        </ul>

        <h4>5. 実務への適用（テンプレート化）</h4>
        <p>
          実務では、基本テンプレートを持ち、評価（疼痛・可動性・疲労）に応じて追加と削除を行います。
          レジスタンス運動では、最初のメイン種目に向けて特異的準備を段階的に行い、セットごとに可動域とフォームを確認します。
        </p>

        <div class="mt-8 p-6 bg-slate-50 rounded-xl not-prose">
          <h4 class="text-lg font-bold text-slate-900 mb-4">例題</h4>
          <p class="font-medium text-slate-800 mb-4">
            Q. 高強度レジスタンス運動の直前における静的ストレッチの扱いとして適切なのはどれか。
          </p>
          <details class="group">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">解答・解説</summary>
            <div class="mt-4 p-4 bg-white border border-slate-200 rounded-lg text-sm text-slate-700">
              <p class="font-bold text-slate-900 mb-2">A. 長時間の静的ストレッチを主手段にせず、動的モビリティと特異的準備を優先します</p>
              <p>
                長時間の静的ストレッチは直後の筋力・パワー発揮を低下させ得ます。直前は動的準備と軽負荷の反復で、
                可動性と神経筋活動の準備を行うことが適切です。
              </p>
            </div>
          </details>
        </div>

        <div class="mt-6 p-6 bg-white border border-slate-200 rounded-xl not-prose">
          <h4 class="text-lg font-bold text-slate-900 mb-4">確認テスト（3問）</h4>
          <details class="group">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q1: ウォームアップの目的を1つ挙げてください。</summary>
            <div class="mt-3 text-sm text-slate-700">A: 体温と循環の上昇、可動性の確保、神経筋準備、疼痛の早期発見のいずれか。</div>
          </details>
          <details class="group mt-3">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q2: 短時間での基本順序はどれか。</summary>
            <div class="mt-3 text-sm text-slate-700">A: 全身活動→動的モビリティ→特異的準備。</div>
          </details>
          <details class="group mt-3">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q3: ウォームアップで疲労が出る場合の問題点は何か。</summary>
            <div class="mt-3 text-sm text-slate-700">A: 本運動の出力とフォームの品質が低下する点。</div>
          </details>
        </div>

        <h4>要点まとめ（箇条書き5つ）</h4>
        <ul>
          <li>目的: 体温と循環の上昇、可動性の確保、神経筋準備、疼痛・違和感の早期発見</li>
          <li>構成: 全身活動→動的モビリティ→特異的準備</li>
          <li>判断基準: 長さよりも「目的が満たせているか」</li>
          <li>静的ストレッチ: 高強度直前の長時間実施は避け、動的準備を優先</li>
          <li>調整: 疼痛や疲労がある場合は可動域と負荷を調整し、品質を維持</li>
        </ul>

      `,
    },
    {
      title: "可動域と柔軟性: ストレッチの使い分け",
      excerpt: "ROMの定義と制限要因を整理し、ストレッチ手法の選択と実務への適用を確認します。",
      readTime: 10,
      content: `
        <h2>基礎科学</h2>
        <h3>可動域と柔軟性: ストレッチの使い分け</h3>

        <h4>1. 用語の整理（ROM・柔軟性・モビリティ）</h4>
        <p>
          可動域（range of motion: ROM）は、関節が動き得る角度範囲です。柔軟性は、筋腱複合体など軟部組織の伸張性を指します。
          モビリティは、必要なROMを疼痛なく発揮し、運動制御を伴って「使える」状態を指します。
          そのため、ROMの問題は柔軟性だけでは説明できないことが多いです。
        </p>

        <h4>2. ROM制限の主要因（よくある誤解）</h4>
        <p>
          ROMは、組織の伸張性だけでなく、関節構造、疼痛、神経系の防御反応、運動制御によって制限されます。
          「硬い=伸ばすべき」と単純化すると、必要な安定性を損なう可能性があります。
        </p>
        <ul>
          <li><strong>組織要因</strong>: 筋腱複合体や筋膜の伸張性です。</li>
          <li><strong>関節要因</strong>: 骨形状、関節包、靱帯などによる制限です。</li>
          <li><strong>神経要因</strong>: 疼痛や不安定性に対する防御反応でROMが制限されることがあります。</li>
          <li><strong>運動制御要因</strong>: そのROMで力を発揮できず、代償が生じます。</li>
        </ul>

        <h4>3. ストレッチ手法の分類と目的</h4>
        <ul>
          <li><strong>静的ストレッチ</strong>: リラックスとROM改善に用います。直後に高強度出力が必要な場面では量を調整します。</li>
          <li><strong>動的ストレッチ</strong>: セッション前の準備に用います。目的動作に近い運動でROMを確保します。</li>
          <li><strong>PNF</strong>: 収縮-弛緩を利用してROMを高めます。強度設定と禁忌の確認が必要です。</li>
        </ul>
        <p>
          ストレッチでROMが改善しても、そのROMを「使える」ようになるには、運動制御と動作学習が必要です。
          したがって、ストレッチだけで終えず、目的動作に近い回帰種目で統合することが重要です。
        </p>

        <h4>4. 注意点（安全性と個別性）</h4>
        <ul>
          <li><strong>疼痛</strong>: 疼痛が増えるストレッチは実施しません。可動域と負荷を調整し、原因の評価を優先します。</li>
          <li><strong>過可動性</strong>: ROM拡大より、安定性と運動制御を優先します。</li>
          <li><strong>直前の長時間静的ストレッチ</strong>: 高強度発揮が必要な場合は量を抑え、動的準備を優先します。</li>
        </ul>

        <h4>5. 実務への適用（評価→介入→再評価）</h4>
        <p>
          介入は、対象動作（例: スクワット、ヒンジ、プッシュ）から逆算します。まず動作観察で代償と疼痛を確認し、
          どの関節のどの方向のROMが不足しているか、または制御が不足しているかを仮説化します。
          次に、動的モビリティ、必要に応じた静的ストレッチ、そして回帰種目で「使えるROM」を作ります。
          最後に同一条件で再評価し、変化が出た要因を特定します。
        </p>

        <div class="mt-8 p-6 bg-slate-50 rounded-xl not-prose">
          <h4 class="text-lg font-bold text-slate-900 mb-4">例題</h4>
          <p class="font-medium text-slate-800 mb-4">
            Q. セッション前の準備として最も適切な介入はどれか。
          </p>
          <details class="group">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">解答・解説</summary>
            <div class="mt-4 p-4 bg-white border border-slate-200 rounded-lg text-sm text-slate-700">
              <p class="font-bold text-slate-900 mb-2">A. 動的ストレッチと目的動作に近いモビリティエクササイズです</p>
              <p>
                セッション前は、直後に実施する動作へ接続できる準備が必要です。動的介入はROM確保と神経筋準備の両方に寄与します。
              </p>
            </div>
          </details>
        </div>

        <div class="mt-6 p-6 bg-white border border-slate-200 rounded-xl not-prose">
          <h4 class="text-lg font-bold text-slate-900 mb-4">確認テスト（3問）</h4>
          <details class="group">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q1: モビリティとは何か。</summary>
            <div class="mt-3 text-sm text-slate-700">A: 必要なROMを疼痛なく発揮し、運動制御を伴って使える状態。</div>
          </details>
          <details class="group mt-3">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q2: ROM制限の主要因を1つ挙げてください。</summary>
            <div class="mt-3 text-sm text-slate-700">A: 組織要因、関節要因、神経要因、運動制御要因のいずれか。</div>
          </details>
          <details class="group mt-3">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q3: ストレッチだけで不十分になり得る理由は何か。</summary>
            <div class="mt-3 text-sm text-slate-700">A: ROMが改善しても、そのROMでの運動制御が伴わないと動作に反映されないため。</div>
          </details>
        </div>

        <h4>要点まとめ（箇条書き5つ）</h4>
        <ul>
          <li>用語: ROM（関節角度範囲）・柔軟性（伸張性）・モビリティ（使えるROM）</li>
          <li>ROM制限: 組織・関節・神経・運動制御の要因で生じる</li>
          <li>セッション前: 動的介入と特異的準備を優先（長時間の静的ストレッチは量を調整）</li>
          <li>安全性: 疼痛が増える介入は避け、過可動性では安定性と制御を優先</li>
          <li>手順: 評価→介入→再評価で、獲得したROMを目的動作へ統合</li>
        </ul>

      `,
    },
  ],
  "栄養学": [
    {
      title: "CPTの守備範囲: 医療行為をしない栄養サポート",
      excerpt:
        "NSCA-CPTが扱える栄養サポートの範囲を整理し、リスク回避と医療連携の考え方を確認します。",
      readTime: 10,
      content: `
        <h2>栄養学</h2>
        <h3>CPTの守備範囲: 医療行為をしない栄養サポート</h3>

        <h4>1. まず押さえる前提（役割と責任）</h4>
        <p>
          パーソナルトレーナーの栄養サポートは、運動プログラムの成功を支えるための「健康的な食行動の支援」です。
          一方で、医療行為に該当する評価・診断・治療の提案は行いません。試験でも実務でも、この線引きが重要です。
        </p>

        <h4>2. CPTができること（実務での具体）</h4>
        <ul>
          <li><strong>一般的な教育</strong>: エネルギーバランス、たんぱく質・炭水化物・脂質の役割、水分の重要性など。</li>
          <li><strong>行動支援</strong>: 記録、買い物・外食の工夫、食事の準備、摂取タイミングの整理など。</li>
          <li><strong>目標の設定</strong>: 体重・体組成の目標を、行動目標（回数・頻度・環境）に分解します。</li>
          <li><strong>運動との整合</strong>: トレーニング日と休養日の食事の考え方を整理します。</li>
        </ul>

        <h4>3. CPTが行わないこと（避けるべき行為）</h4>
        <ul>
          <li><strong>疾病の診断・治療</strong>: 例）糖尿病、高血圧、腎疾患などの治療目的の食事処方。</li>
          <li><strong>医療的栄養療法</strong>: 検査値を根拠にした栄養介入、薬剤調整を前提とした提案。</li>
          <li><strong>過度な制限</strong>: 極端な低エネルギー摂取や、リスクが高い断食・排除食の推奨。</li>
        </ul>

        <h4>4. レッドフラッグ（医療連携・専門職紹介の目安）</h4>
        <p>
          次のような状況では、無理に指導を継続せず、医療機関や管理栄養士等の専門職への相談を促します。
        </p>
        <ul>
          <li>摂食障害が疑われる行動（極端な制限、嘔吐、強い罪悪感など）。</li>
          <li>原因不明の急激な体重変化、著しい倦怠感、めまい、失神など。</li>
          <li>慢性疾患があり、食事制限や薬剤の影響が大きい場合。</li>
        </ul>

        <h4>5. 実務への落とし込み（安全に進める手順）</h4>
        <p>
          実務では、まず生活状況（勤務・睡眠・外食頻度・調理環境）を把握し、次に最小の行動変更を設定します。
          体重管理の場面でも「何をやめるか」より「何を置き換えるか」を優先すると継続しやすくなります。
        </p>

        <div class="mt-8 p-6 bg-slate-50 rounded-xl not-prose">
          <h4 class="text-lg font-bold text-slate-900 mb-4">例題</h4>
          <p class="font-medium text-slate-800 mb-4">
            Q. クライアントが血糖値の改善を目的に、具体的な食事療法の提案を求めた。CPTの対応として適切なのはどれか。
          </p>
          <details class="group">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">解答・解説</summary>
            <div class="mt-4 p-4 bg-white border border-slate-200 rounded-lg text-sm text-slate-700">
              <p class="font-bold text-slate-900 mb-2">A. 一般的な栄養教育は行い、医療機関または管理栄養士への相談を勧める</p>
              <p>
                疾病の治療目的の食事処方は専門職の領域です。CPTは一般的な教育と行動支援に留め、適切に連携します。
              </p>
            </div>
          </details>
        </div>

        <div class="mt-6 p-6 bg-white border border-slate-200 rounded-xl not-prose">
          <h4 class="text-lg font-bold text-slate-900 mb-4">確認テスト（3問）</h4>
          <details class="group">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q1: CPTの栄養サポートの基本的な位置づけは何か。</summary>
            <div class="mt-3 text-sm text-slate-700">A: 健康的な食行動の支援（一般的な教育と行動支援）。</div>
          </details>
          <details class="group mt-3">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q2: CPTが避けるべき行為の代表例はどれか。</summary>
            <div class="mt-3 text-sm text-slate-700">A: 疾病の治療目的の食事処方。</div>
          </details>
          <details class="group mt-3">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q3: 専門職紹介を検討すべき状況の一例は何か。</summary>
            <div class="mt-3 text-sm text-slate-700">A: 摂食障害が疑われる行動、急激な体重変化、慢性疾患の影響など。</div>
          </details>
        </div>

        <h4>要点まとめ（箇条書き5つ）</h4>
        <ul>
          <li>役割: 運動を支える一般的な栄養教育と行動支援</li>
          <li>禁止領域: 診断・治療・医療的栄養療法の提案</li>
          <li>実務: 生活把握→最小の行動変更→継続可能な修正</li>
          <li>リスク: 極端な制限や危険な方法の推奨を避ける</li>
          <li>連携: レッドフラッグがあれば医療・専門職へ紹介</li>
        </ul>
      `,
    },
    {
      title: "タンパク質の基本: 摂取タイミングと実務の落とし込み",
      excerpt:
        "たんぱく質の役割、必要量の考え方、摂取タイミングを整理し、現場で実行できる形に落とし込みます。",
      readTime: 11,
      content: `
        <h2>栄養学</h2>
        <h3>タンパク質の基本: 摂取タイミングと実務の落とし込み</h3>

        <h4>1. たんぱく質の役割</h4>
        <p>
          たんぱく質は、筋タンパク質を含む身体組織の材料であり、酵素・ホルモン・免疫など多くの機能に関与します。
          トレーニング実務では、筋量の維持・増加、減量中の除脂肪量の維持に関係する点が重要です。
        </p>

        <h4>2. 必要量の考え方（試験でのポイント）</h4>
        <p>
          必要量は、体格、活動量、目標（増量・減量・維持）、摂取エネルギーの状況で変わります。
          試験対策としては、数値を丸暗記するより、「減量中は不足しやすい」「高齢者は同量でも筋量維持が難しくなり得る」
          「総摂取量が最優先で、タイミングは次の要素」という優先順位を理解しておくことが大切です。
        </p>

        <h4>3. タイミングと配分（実務での考え方）</h4>
        <p>
          たんぱく質は1日の総量に加え、複数回に分けて摂ると実行しやすく、欠食のリスクも下がります。
          トレーニング直後にこだわり過ぎるより、朝食・昼食・夕食などの「抜け」を減らすことが優先です。
        </p>
        <ul>
          <li><strong>配分</strong>: 1日の総量を、食事回数に合わせて均等に近い形で配分します。</li>
          <li><strong>トレーニング前後</strong>: 空腹が長い場合は、前後のいずれかで摂取機会を作ります。</li>
          <li><strong>間食</strong>: 食事で不足する場合、ヨーグルト・牛乳・豆製品などで補います。</li>
        </ul>

        <h4>4. 食品選択（現場で説明しやすい整理）</h4>
        <p>
          「何を食べるか」を具体化しないと行動は変わりにくいです。まずは主菜の量を増やす、たんぱく質源を毎食入れるなど、
          シンプルなルールから始めます。
        </p>
        <ul>
          <li><strong>動物性</strong>: 肉・魚・卵・乳製品。</li>
          <li><strong>植物性</strong>: 大豆製品・豆類・穀類。</li>
          <li><strong>補助</strong>: 食事が難しい場合のみ、プロテインパウダーを「食品の代替」として活用。</li>
        </ul>

        <h4>5. 注意点（誤解されやすい点）</h4>
        <ul>
          <li><strong>プロテイン=魔法</strong>: 食事の代替手段であり、優先順位は食事の整備が先。</li>
          <li><strong>極端な高たんぱく</strong>: 既往歴や腎機能の問題がある場合は医療連携を優先。</li>
          <li><strong>カロリー無視</strong>: たんぱく質だけで体重は変わりません。総エネルギーとの整合が必要。</li>
        </ul>

        <div class="mt-8 p-6 bg-slate-50 rounded-xl not-prose">
          <h4 class="text-lg font-bold text-slate-900 mb-4">例題</h4>
          <p class="font-medium text-slate-800 mb-4">
            Q. たんぱく質摂取の優先順位として最も適切なのはどれか。
          </p>
          <details class="group">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">解答・解説</summary>
            <div class="mt-4 p-4 bg-white border border-slate-200 rounded-lg text-sm text-slate-700">
              <p class="font-bold text-slate-900 mb-2">A. 1日の総量を確保し、その上で配分・タイミングを整える</p>
              <p>
                総量が不足している状態では、タイミングだけを整えても効果は限定的です。まず総量と欠食の是正を優先します。
              </p>
            </div>
          </details>
        </div>

        <div class="mt-6 p-6 bg-white border border-slate-200 rounded-xl not-prose">
          <h4 class="text-lg font-bold text-slate-900 mb-4">確認テスト（3問）</h4>
          <details class="group">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q1: たんぱく質がトレーニング実務で重要な理由は何か。</summary>
            <div class="mt-3 text-sm text-slate-700">A: 筋量の維持・増加、減量中の除脂肪量維持に関係するため。</div>
          </details>
          <details class="group mt-3">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q2: タイミングより先に整えるべき要素は何か。</summary>
            <div class="mt-3 text-sm text-slate-700">A: 1日の総摂取量（欠食の是正を含む）。</div>
          </details>
          <details class="group mt-3">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q3: 食事で不足する場合の実務的な補い方の一例は何か。</summary>
            <div class="mt-3 text-sm text-slate-700">A: 間食で乳製品・大豆製品などを追加する。</div>
          </details>
        </div>

        <h4>要点まとめ（箇条書き5つ）</h4>
        <ul>
          <li>役割: 組織材料、筋量の維持・増加に関与</li>
          <li>優先順位: 総量→欠食是正→配分→前後タイミング</li>
          <li>配分: 1日を複数回に分けて実行しやすくする</li>
          <li>食品: 毎食の主菜確保を基本、補助は必要時のみ</li>
          <li>注意: 既往歴がある場合は医療連携を優先</li>
        </ul>
      `,
    },
    {
      title: "体重管理: エネルギーバランスと習慣設計",
      excerpt:
        "エネルギーバランスの基本を整理し、減量・維持・増量を行動設計として実行する手順をまとめます。",
      readTime: 12,
      content: `
        <h2>栄養学</h2>
        <h3>体重管理: エネルギーバランスと習慣設計</h3>

        <h4>1. エネルギーバランスの基本</h4>
        <p>
          体重変化は、摂取エネルギーと消費エネルギーの差（エネルギーバランス）の結果として生じます。
          短期の体重変動には水分や消化管内容も影響しますが、長期の傾向はエネルギーバランスで説明できます。
        </p>

        <h4>2. 消費エネルギーの構成（試験での要点）</h4>
        <ul>
          <li><strong>基礎代謝</strong>: 生命維持に必要なエネルギー。</li>
          <li><strong>活動代謝</strong>: 運動と日常活動（NEATを含む）。</li>
          <li><strong>食事誘発性熱産生</strong>: 食事に伴う消費。</li>
        </ul>
        <p>
          実務では「運動だけで帳尻を合わせる」より、摂取と日常活動を含めた全体設計が現実的です。
        </p>

        <h4>3. 行動設計の基本（何を変えるか）</h4>
        <p>
          体重管理は「知識」より「実行の仕組み」が成否を分けます。次の順序で設計すると破綻しにくいです。
        </p>
        <ol>
          <li><strong>現状把握</strong>: 食事回数、間食、飲料、外食頻度、睡眠など。</li>
          <li><strong>最小変更</strong>: まず1〜2項目だけ変え、継続できるか確認します。</li>
          <li><strong>環境整備</strong>: 買い置き、調理、外食メニューのテンプレを用意します。</li>
          <li><strong>再評価</strong>: 週単位で傾向を見て修正します。</li>
        </ol>

        <h4>4. よくある落とし穴</h4>
        <ul>
          <li><strong>極端な制限</strong>: 継続不能になり、反動で摂取が増えやすい。</li>
          <li><strong>運動量の過大評価</strong>: 消費の見積もりが楽観的になりやすい。</li>
          <li><strong>体重だけを評価</strong>: 浮腫・便通・月経周期などで短期変動が大きい。</li>
        </ul>

        <h4>5. 実務の指標（進捗の取り方）</h4>
        <p>
          指標は「毎日完璧」より「比較可能」を優先します。体重は週平均、周径、写真、トレーニングパフォーマンスなどを組み合わせ、
          目的に合わせて評価します。
        </p>

        <div class="mt-8 p-6 bg-slate-50 rounded-xl not-prose">
          <h4 class="text-lg font-bold text-slate-900 mb-4">例題</h4>
          <p class="font-medium text-slate-800 mb-4">
            Q. 減量が停滞した。最初に見直す要素として適切なのはどれか。
          </p>
          <details class="group">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">解答・解説</summary>
            <div class="mt-4 p-4 bg-white border border-slate-200 rounded-lg text-sm text-slate-700">
              <p class="font-bold text-slate-900 mb-2">A. 摂取量の記録と、外食・飲料・間食の頻度</p>
              <p>
                停滞の多くは摂取量の増加や記録漏れに関連します。運動を追加する前に、摂取と日常行動の再評価が優先です。
              </p>
            </div>
          </details>
        </div>

        <div class="mt-6 p-6 bg-white border border-slate-200 rounded-xl not-prose">
          <h4 class="text-lg font-bold text-slate-900 mb-4">確認テスト（3問）</h4>
          <details class="group">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q1: 体重変化を長期的に説明する基本原理は何か。</summary>
            <div class="mt-3 text-sm text-slate-700">A: エネルギーバランス。</div>
          </details>
          <details class="group mt-3">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q2: 消費エネルギーの構成要素を1つ挙げよ。</summary>
            <div class="mt-3 text-sm text-slate-700">A: 基礎代謝、活動代謝、食事誘発性熱産生のいずれか。</div>
          </details>
          <details class="group mt-3">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q3: 実務で「最小変更」から始める理由は何か。</summary>
            <div class="mt-3 text-sm text-slate-700">A: 継続性を確保し、再評価して調整できるため。</div>
          </details>
        </div>

        <h4>要点まとめ（箇条書き5つ）</h4>
        <ul>
          <li>原理: 体重変化は長期的にエネルギーバランスで説明</li>
          <li>消費構成: 基礎代謝・活動代謝・食事誘発性熱産生</li>
          <li>実務手順: 現状把握→最小変更→環境整備→再評価</li>
          <li>落とし穴: 極端な制限、運動量の過大評価、短期変動の誤解</li>
          <li>評価: 週平均体重＋周径・写真・パフォーマンスの併用</li>
        </ul>
      `,
    },
    {
      title: "NEATと生活習慣: 変えやすい行動から積む",
      excerpt:
        "NEATの考え方を整理し、日常行動を小さく増やして体重管理と健康づくりに接続します。",
      readTime: 10,
      content: `
        <h2>栄養学</h2>
        <h3>NEATと生活習慣: 変えやすい行動から積む</h3>

        <h4>1. NEATとは何か</h4>
        <p>
          NEAT（non-exercise activity thermogenesis）は、運動以外の日常活動に伴う消費エネルギーです。
          立つ、歩く、階段、家事などが含まれます。体重管理では、週に数回の運動だけでなく、日常活動の総量が大きく影響します。
        </p>

        <h4>2. 実務でNEATが有効な理由</h4>
        <ul>
          <li><strong>実行しやすい</strong>: 高強度運動より心理的ハードルが低い。</li>
          <li><strong>回復を邪魔しにくい</strong>: レジスタンスの質を落としにくい。</li>
          <li><strong>習慣化しやすい</strong>: 環境とルールで自動化しやすい。</li>
        </ul>

        <h4>3. 具体的な介入（小さく積む）</h4>
        <p>
          NEATは「頑張る」より「仕組み化」が重要です。次のように、行動を具体化して実行できる形にします。
        </p>
        <ul>
          <li><strong>歩数</strong>: まず現状平均を把握し、少しだけ上乗せする。</li>
          <li><strong>座位中断</strong>: 1時間に1回立つ、短い歩行を入れる。</li>
          <li><strong>移動</strong>: 1駅歩く、階段を選ぶ、駐車位置を遠くする。</li>
          <li><strong>家事</strong>: ルーティン化し、週の固定枠として確保する。</li>
        </ul>

        <h4>4. 注意点（やり過ぎと継続性）</h4>
        <p>
          NEATを急に増やし過ぎると、疲労が増えてトレーニングの質が下がることがあります。
          実務では、睡眠・疲労・疼痛を確認しながら段階的に増やします。
        </p>

        <h4>5. 食事との接続（体重管理の全体設計）</h4>
        <p>
          NEATは摂取エネルギーの管理とセットで考えます。食事での最小変更と、NEATの小さな上乗せを組み合わせると、
          極端な制限に頼らずに継続しやすくなります。
        </p>

        <div class="mt-8 p-6 bg-slate-50 rounded-xl not-prose">
          <h4 class="text-lg font-bold text-slate-900 mb-4">例題</h4>
          <p class="font-medium text-slate-800 mb-4">
            Q. 減量中で疲労が強く、高強度の有酸素を増やしにくい。消費を増やす介入として適切なのはどれか。
          </p>
          <details class="group">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">解答・解説</summary>
            <div class="mt-4 p-4 bg-white border border-slate-200 rounded-lg text-sm text-slate-700">
              <p class="font-bold text-slate-900 mb-2">A. NEATを段階的に増やし、回復と継続性を優先する</p>
              <p>
                NEATは日常活動の上積みであり、回復を大きく阻害しにくいです。疲労状況では段階的に増やします。
              </p>
            </div>
          </details>
        </div>

        <div class="mt-6 p-6 bg-white border border-slate-200 rounded-xl not-prose">
          <h4 class="text-lg font-bold text-slate-900 mb-4">確認テスト（3問）</h4>
          <details class="group">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q1: NEATとは何か。</summary>
            <div class="mt-3 text-sm text-slate-700">A: 運動以外の日常活動に伴う消費エネルギー。</div>
          </details>
          <details class="group mt-3">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q2: NEATを「仕組み化」する介入の例はどれか。</summary>
            <div class="mt-3 text-sm text-slate-700">A: 歩数の上乗せ、座位中断、移動の工夫など。</div>
          </details>
          <details class="group mt-3">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q3: NEATを急増させるリスクの一例は何か。</summary>
            <div class="mt-3 text-sm text-slate-700">A: 疲労増加によるトレーニング品質低下。</div>
          </details>
        </div>

        <h4>要点まとめ（箇条書き5つ）</h4>
        <ul>
          <li>定義: NEAT=運動以外の日常活動による消費</li>
          <li>利点: 実行しやすい、回復を邪魔しにくい、習慣化しやすい</li>
          <li>介入: 歩数・座位中断・移動・家事を具体化して積む</li>
          <li>注意: 急増は疲労増加につながるため段階的に調整</li>
          <li>設計: 食事の最小変更＋NEAT上乗せで継続性を確保</li>
        </ul>
      `,
    },
    {
      title: "水分と電解質: パフォーマンスと安全管理",
      excerpt:
        "脱水と電解質の基本を整理し、運動中の安全管理とパフォーマンス維持に接続します。",
      readTime: 11,
      content: `
        <h2>栄養学</h2>
        <h3>水分と電解質: パフォーマンスと安全管理</h3>

        <h4>1. 水分が重要な理由</h4>
        <p>
          体水分は体温調節、循環、代謝、運動パフォーマンスに関与します。脱水が進むと、心拍数の上昇、体温上昇、主観的きつさの増加、
          パフォーマンス低下が起こりやすくなります。安全管理の観点でも重要なテーマです。
        </p>

        <h4>2. 電解質（特にナトリウム）の基本</h4>
        <p>
          電解質は体液の浸透圧や神経筋機能に関与します。発汗量が多い運動では、水分だけでなく電解質の補給も検討します。
          ただし、個人差が大きいため、症状と状況に応じて現実的な方針を立てます。
        </p>

        <h4>3. 実務で使うチェック指標</h4>
        <ul>
          <li><strong>尿の状態</strong>: 色・回数・量を日常指標として確認します。</li>
          <li><strong>体重変化</strong>: 長時間運動では前後の体重変化を目安にします。</li>
          <li><strong>環境</strong>: 気温・湿度・服装・換気でリスクが変わります。</li>
          <li><strong>症状</strong>: 立ちくらみ、頭痛、強い倦怠感など。</li>
        </ul>

        <h4>4. 補給の考え方（安全優先）</h4>
        <p>
          実務では「こまめに飲む」「運動前から不足しないようにする」を基本にし、長時間や高温環境では補給計画を立てます。
          過不足のどちらも問題になり得るため、無理な一気飲みや極端な制限は避けます。
        </p>

        <h4>5. 注意点（誤解されやすい点）</h4>
        <ul>
          <li><strong>喉の渇きだけ</strong>: 渇きは遅れて出る場合があり、環境条件では早めの補給が必要。</li>
          <li><strong>水だけ固定</strong>: 発汗が多い場面では電解質も検討。</li>
          <li><strong>既往歴</strong>: 心疾患・腎疾患などがある場合は医療連携を優先。</li>
        </ul>

        <div class="mt-8 p-6 bg-slate-50 rounded-xl not-prose">
          <h4 class="text-lg font-bold text-slate-900 mb-4">例題</h4>
          <p class="font-medium text-slate-800 mb-4">
            Q. 高温多湿環境での長時間運動中に補給方針として適切なのはどれか。
          </p>
          <details class="group">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">解答・解説</summary>
            <div class="mt-4 p-4 bg-white border border-slate-200 rounded-lg text-sm text-slate-700">
              <p class="font-bold text-slate-900 mb-2">A. こまめな水分補給を基本とし、必要に応じて電解質補給も検討する</p>
              <p>
                発汗量が増える環境では脱水リスクが上がります。状況に応じて電解質も含めて補給計画を立てます。
              </p>
            </div>
          </details>
        </div>

        <div class="mt-6 p-6 bg-white border border-slate-200 rounded-xl not-prose">
          <h4 class="text-lg font-bold text-slate-900 mb-4">確認テスト（3問）</h4>
          <details class="group">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q1: 脱水がパフォーマンスに与える影響の一例は何か。</summary>
            <div class="mt-3 text-sm text-slate-700">A: 体温上昇、主観的きつさ増加、パフォーマンス低下など。</div>
          </details>
          <details class="group mt-3">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q2: 実務で使う日常指標の一例は何か。</summary>
            <div class="mt-3 text-sm text-slate-700">A: 尿の色・回数、環境条件、症状など。</div>
          </details>
          <details class="group mt-3">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q3: 医療連携を優先しやすい既往歴の一例は何か。</summary>
            <div class="mt-3 text-sm text-slate-700">A: 心疾患、腎疾患など。</div>
          </details>
        </div>

        <h4>要点まとめ（箇条書き5つ）</h4>
        <ul>
          <li>重要性: 体温調節・循環・パフォーマンス・安全管理に直結</li>
          <li>電解質: 発汗が多い場面ではナトリウム等も検討</li>
          <li>指標: 尿・体重変化・環境・症状で状況判断</li>
          <li>方針: こまめな補給、長時間/高温では計画化</li>
          <li>注意: 既往歴がある場合は医療連携を優先</li>
        </ul>
      `,
    },
    {
      title: "サプリメントの考え方: 優先順位と注意点",
      excerpt:
        "サプリメントの位置づけを整理し、食品優先の原則、リスク管理、実務での説明手順をまとめます。",
      readTime: 11,
      content: `
        <h2>栄養学</h2>
        <h3>サプリメントの考え方: 優先順位と注意点</h3>

        <h4>1. サプリメントの位置づけ</h4>
        <p>
          サプリメントは、食品で満たしにくい要素を補う「補助」です。目的は、欠乏の是正、摂取の利便性の向上、
          パフォーマンスの小さな上積みなどに限られます。基本は、食事・睡眠・トレーニングの整備が先です。
        </p>

        <h4>2. 優先順位（実務での説明）</h4>
        <ol>
          <li><strong>食事</strong>: まず主食・主菜・副菜、間食、飲料を整えます。</li>
          <li><strong>睡眠</strong>: 睡眠不足は食欲や回復に影響します。</li>
          <li><strong>トレーニング</strong>: 漸進と継続を確保します。</li>
          <li><strong>サプリ</strong>: 不足や目的が明確な場合のみ検討します。</li>
        </ol>

        <h4>3. 実務で扱いやすいサプリの分類</h4>
        <ul>
          <li><strong>食品代替</strong>: プロテインパウダー、スポーツドリンクなど。</li>
          <li><strong>パフォーマンス補助</strong>: カフェインなど（体調と摂取量に注意）。</li>
          <li><strong>欠乏の補助</strong>: 必要性が疑われる場合は検査と専門職相談が前提。</li>
        </ul>

        <h4>4. 注意点（安全管理とリスク）</h4>
        <ul>
          <li><strong>過大な期待</strong>: サプリは土台を置き換えません。</li>
          <li><strong>品質</strong>: 表示どおりとは限らないため、信頼性の高い製品を選びます。</li>
          <li><strong>禁止物質</strong>: 競技者は特に注意し、第三者認証などを確認します。</li>
          <li><strong>薬剤・既往歴</strong>: 服薬状況や疾患がある場合は医療連携を優先します。</li>
        </ul>

        <h4>5. 実務への落とし込み（聞く→確認→提案）</h4>
        <p>
          実務では、いきなり製品を勧めず、目的・食事状況・睡眠・トレーニング・既往歴を確認します。
          その上で「食品での代替案」と「必要なら補助」を提示し、リスク説明を行います。
        </p>

        <div class="mt-8 p-6 bg-slate-50 rounded-xl not-prose">
          <h4 class="text-lg font-bold text-slate-900 mb-4">例題</h4>
          <p class="font-medium text-slate-800 mb-4">
            Q. サプリメント選択の基本原則として最も適切なのはどれか。
          </p>
          <details class="group">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">解答・解説</summary>
            <div class="mt-4 p-4 bg-white border border-slate-200 rounded-lg text-sm text-slate-700">
              <p class="font-bold text-slate-900 mb-2">A. 食事・睡眠・トレーニングを整え、不足や目的が明確な場合のみ補助として用いる</p>
              <p>
                サプリは土台の代替ではありません。優先順位と安全性を説明し、必要性がある場合に限定して活用します。
              </p>
            </div>
          </details>
        </div>

        <div class="mt-6 p-6 bg-white border border-slate-200 rounded-xl not-prose">
          <h4 class="text-lg font-bold text-slate-900 mb-4">確認テスト（3問）</h4>
          <details class="group">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q1: サプリメントの位置づけは何か。</summary>
            <div class="mt-3 text-sm text-slate-700">A: 食品で満たしにくい要素を補う補助。</div>
          </details>
          <details class="group mt-3">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q2: サプリより先に整えるべき要素は何か。</summary>
            <div class="mt-3 text-sm text-slate-700">A: 食事・睡眠・トレーニング。</div>
          </details>
          <details class="group mt-3">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q3: 競技者で特に注意すべきリスクは何か。</summary>
            <div class="mt-3 text-sm text-slate-700">A: 禁止物質混入のリスク。</div>
          </details>
        </div>

        <h4>要点まとめ（箇条書き5つ）</h4>
        <ul>
          <li>位置づけ: サプリ=補助（食品の代替ではない）</li>
          <li>優先順位: 食事→睡眠→トレーニング→必要ならサプリ</li>
          <li>分類: 食品代替・パフォーマンス補助・欠乏補助</li>
          <li>安全: 品質・禁止物質・薬剤/既往歴を確認</li>
          <li>手順: 目的確認→現状把握→食品提案→必要時のみ補助</li>
        </ul>
      `,
    },
  ],
  "行動変容・心理学": [
    {
      title: "行動目標の作り方: 成果より継続を先に作る",
      excerpt:
        "成果目標を行動目標に落とし込み、継続できる最小の設計として運用する手順を整理します。",
      readTime: 11,
      content: `
        <h2>行動変容・心理学</h2>
        <h3>行動目標の作り方: 成果より継続を先に作る</h3>

        <h4>1. 成果目標と行動目標の違い</h4>
        <p>
          成果目標（例: 体重-5kg、体脂肪率-3%）は方向性を示しますが、日々の行動を直接コントロールできません。
          一方、行動目標（例: 週2回ジムに行く、毎食たんぱく質源を入れる）は実行の可否を判断でき、継続の設計に直結します。
          NSCA-CPTの実務では、成果目標を行動目標に分解し、評価と修正ができる形にすることが重要です。
        </p>

        <h4>2. 行動目標の条件（実務で使える基準）</h4>
        <p>
          行動目標は「具体的で、測定できて、現実的で、期限がある」形にします。いわゆるSMARTの考え方です。
          ただし、完璧に当てはめることより、クライアントが迷わず実行できる粒度に落とすことを優先します。
        </p>
        <ul>
          <li><strong>具体</strong>: 何を、いつ、どこで、どれだけ行うか。</li>
          <li><strong>測定</strong>: 回数・頻度・時間などで確認できる形。</li>
          <li><strong>現実</strong>: 生活制約（勤務、育児、疲労、通勤）に合う。</li>
          <li><strong>期限</strong>: まず2〜4週で見直す。</li>
        </ul>

        <h4>3. 「最小で続く」を作る（最低ラインと上積み）</h4>
        <p>
          行動変容は、最初に負荷を上げ過ぎると失敗します。実務では、まず「最低ライン（Minimum）」を決めて成功体験を積み、
          余裕がある週に上積み（Bonus）を入れる形が安定します。
        </p>
        <ul>
          <li><strong>Minimum</strong>: 週2回の来館、1回20分の散歩など。</li>
          <li><strong>Bonus</strong>: 余裕がある週だけ追加の有酸素やセット数を足す。</li>
          <li><strong>ルール</strong>: Minimumを達成した週を「成功」と定義する。</li>
        </ul>

        <h4>4. 障害（バリア）を先に潰す</h4>
        <p>
          目標設定で重要なのは「やる気」ではなく、障害を事前に見つけて対策することです。典型的な障害は、
          時間不足、疲労、移動、家族イベント、外食、天候などです。障害が分かったら、実行意図（if-then）で対策を決めます。
        </p>
        <ul>
          <li><strong>if-then</strong>: 「残業で行けない場合は、翌朝に自宅で10分だけ行う」など。</li>
          <li><strong>代替案</strong>: 代替の場所・時間・短縮版メニューを用意する。</li>
          <li><strong>環境</strong>: 服・シューズ・食材など、準備の摩擦を下げる。</li>
        </ul>

        <h4>5. 評価とフィードバック（続けるための運用）</h4>
        <p>
          行動目標は「達成できたか」を短い周期で確認し、できなければ目標の難易度を下げます。
          ここで重要なのは、失敗を「意志の問題」と解釈しないことです。設計が現実に合っていない可能性が高いので、
          目標の粒度、タイミング、環境、代替案を見直します。
        </p>

        <div class="mt-8 p-6 bg-slate-50 rounded-xl not-prose">
          <h4 class="text-lg font-bold text-slate-900 mb-4">例題</h4>
          <p class="font-medium text-slate-800 mb-4">
            Q. 「体重を落としたい」という成果目標を、行動目標に落とし込む対応として適切なのはどれか。
          </p>
          <details class="group">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">解答・解説</summary>
            <div class="mt-4 p-4 bg-white border border-slate-200 rounded-lg text-sm text-slate-700">
              <p class="font-bold text-slate-900 mb-2">A. 週あたりの運動頻度と食行動を、測定可能な形で設定する</p>
              <p>
                成果目標は直接制御できません。頻度・時間・食事回数など、実行を確認できる行動に分解して運用します。
              </p>
            </div>
          </details>
        </div>

        <div class="mt-6 p-6 bg-white border border-slate-200 rounded-xl not-prose">
          <h4 class="text-lg font-bold text-slate-900 mb-4">確認テスト（3問）</h4>
          <details class="group">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q1: 成果目標と行動目標の違いは何か。</summary>
            <div class="mt-3 text-sm text-slate-700">A: 成果は直接制御できず、行動は実行の可否を確認できる。</div>
          </details>
          <details class="group mt-3">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q2: 行動目標を作る基準の一例は何か。</summary>
            <div class="mt-3 text-sm text-slate-700">A: 具体性・測定可能性・現実性・期限。</div>
          </details>
          <details class="group mt-3">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q3: if-then（実行意図）の目的は何か。</summary>
            <div class="mt-3 text-sm text-slate-700">A: 予測される障害への代替行動を事前に決める。</div>
          </details>
        </div>

        <h4>要点まとめ（箇条書き5つ）</h4>
        <ul>
          <li>目標の種類: 成果目標（方向性）と行動目標（実行の確認）</li>
          <li>行動目標: 具体・測定・現実・期限（SMARTの考え方）</li>
          <li>設計: Minimum（最低ライン）＋Bonus（上積み）</li>
          <li>障害対策: if-thenと代替案で摩擦を下げる</li>
          <li>運用: 短い周期で評価し、設計を現実に合わせて修正</li>
        </ul>
      `,
    },
    {
      title: "習慣化の設計: 環境・トリガー・報酬",
      excerpt:
        "習慣の作られ方（合図→行動→報酬）を整理し、環境設計で再現性を上げる方法をまとめます。",
      readTime: 11,
      content: `
        <h2>行動変容・心理学</h2>
        <h3>習慣化の設計: 環境・トリガー・報酬</h3>

        <h4>1. 習慣は「意志」ではなく「仕組み」</h4>
        <p>
          習慣化の狙いは、毎回の意思決定コストを下げて、行動を自動化することです。
          実務では、モチベーションが高い日だけ頑張る設計より、低い日でも実行できる仕組みのほうが成果につながります。
        </p>

        <h4>2. 基本モデル（合図→行動→報酬）</h4>
        <p>
          習慣は、合図（トリガー）により行動が起き、報酬で強化される流れで整理できます。
          トレーナーは、この3要素を操作して「やりやすく、続きやすい」形を作ります。
        </p>
        <ul>
          <li><strong>合図</strong>: 時間、場所、直前の行動、感情、他者など。</li>
          <li><strong>行動</strong>: 具体的で短い行動にする（最初の一歩を小さく）。</li>
          <li><strong>報酬</strong>: 達成感、記録、チェック、気分の改善など。</li>
        </ul>

        <h4>3. 環境設計（摩擦を下げる/上げる）</h4>
        <p>
          行動を増やしたい場合は摩擦を下げ、減らしたい場合は摩擦を上げます。環境は行動に強く影響します。
          実務では、本人の意志に頼るより、環境の操作を先に行います。
        </p>
        <ul>
          <li><strong>行動を増やす</strong>: シューズを玄関に置く、予約を先に入れる、帰宅動線にプロテインを置く。</li>
          <li><strong>行動を減らす</strong>: お菓子を見えない場所に置く、買い置きを減らす、スマホの通知を減らす。</li>
        </ul>

        <h4>4. トリガーを固定する（実行意図の応用）</h4>
        <p>
          「いつやるか」が曖昧だと行動は起きにくいです。実務では、時間と直前行動を固定します。
          例として「朝の歯磨きの後にストレッチを3分」など、既存習慣に紐づけると成功率が上がります。
        </p>

        <h4>5. 記録と可視化（報酬の設計）</h4>
        <p>
          継続には、短期でのフィードバックが必要です。体重や見た目の変化は遅れることがあるため、
          「行動の達成」を可視化して報酬として扱います。チェックリスト、カレンダー、アプリなどが有効です。
        </p>

        <div class="mt-8 p-6 bg-slate-50 rounded-xl not-prose">
          <h4 class="text-lg font-bold text-slate-900 mb-4">例題</h4>
          <p class="font-medium text-slate-800 mb-4">
            Q. 運動習慣を作るための環境設計として最も適切なのはどれか。
          </p>
          <details class="group">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">解答・解説</summary>
            <div class="mt-4 p-4 bg-white border border-slate-200 rounded-lg text-sm text-slate-700">
              <p class="font-bold text-slate-900 mb-2">A. 行動の摩擦を下げ、合図を固定し、達成を可視化する</p>
              <p>
                習慣は合図・行動・報酬で強化されます。環境操作で「やりやすさ」を作り、記録で報酬を用意します。
              </p>
            </div>
          </details>
        </div>

        <div class="mt-6 p-6 bg-white border border-slate-200 rounded-xl not-prose">
          <h4 class="text-lg font-bold text-slate-900 mb-4">確認テスト（3問）</h4>
          <details class="group">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q1: 習慣の基本モデルの3要素は何か。</summary>
            <div class="mt-3 text-sm text-slate-700">A: 合図（トリガー）→行動→報酬。</div>
          </details>
          <details class="group mt-3">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q2: 行動を増やしたい場合に優先すべき設計はどれか。</summary>
            <div class="mt-3 text-sm text-slate-700">A: 摩擦を下げ、実行タイミングを固定する。</div>
          </details>
          <details class="group mt-3">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q3: 報酬として実務で扱いやすい指標は何か。</summary>
            <div class="mt-3 text-sm text-slate-700">A: 行動達成の可視化（チェック、記録）。</div>
          </details>
        </div>

        <h4>要点まとめ（箇条書き5つ）</h4>
        <ul>
          <li>習慣化: 意志ではなく仕組みで自動化</li>
          <li>モデル: 合図→行動→報酬</li>
          <li>環境: 増やす行動は摩擦を下げ、減らす行動は摩擦を上げる</li>
          <li>トリガー: 時間と直前行動を固定（既存習慣に紐づけ）</li>
          <li>報酬: 行動達成の可視化で短期フィードバックを作る</li>
        </ul>
      `,
    },
    {
      title: "コミットメントを引き出す: 質問と共感",
      excerpt:
        "押しつけずに行動を促すコミュニケーションを整理し、質問・傾聴・要約で主体性を支えます。",
      readTime: 11,
      content: `
        <h2>行動変容・心理学</h2>
        <h3>コミットメントを引き出す: 質問と共感</h3>

        <h4>1. なぜコミュニケーションが重要か</h4>
        <p>
          行動変容では、正しい情報を伝えるだけでは不十分なことがあります。クライアントが「自分で決めた」と感じるほど、
          継続率は上がりやすくなります。したがって、トレーナーは説得よりも、理解と意思決定を支える関わり方を選びます。
        </p>

        <h4>2. 基本スキル（質問・傾聴・要約）</h4>
        <p>
          実務では、次の3つをセットで使うと会話が安定します。
        </p>
        <ul>
          <li><strong>開かれた質問</strong>: 「何が一番の障害ですか」など、理由や状況を引き出します。</li>
          <li><strong>反映（傾聴）</strong>: 相手の言葉を要点で返し、理解が合っているか確認します。</li>
          <li><strong>要約</strong>: 目的・障害・候補行動を短くまとめ、次の行動を選びやすくします。</li>
        </ul>

        <h4>3. スケーリング（0〜10）で意思を具体化</h4>
        <p>
          「できそうか」を0〜10で評価すると、曖昧な感覚を具体化できます。さらに「なぜその数字か」「1上げるには何が必要か」を聞くと、
          具体的な障害と対策が出やすくなります。
        </p>
        <ul>
          <li><strong>例</strong>: 「週2回の来館は何点か」→「6点」→「6点の理由」→「7点にする条件」。</li>
        </ul>

        <h4>4. 選択肢提示（オプション）で主体性を守る</h4>
        <p>
          提案は「1つに決め打ち」より、2〜3案の選択肢を出して本人に選んでもらうほうが継続につながりやすいです。
          ここでのポイントは、選択肢を現実的な難易度に揃えることです。
        </p>

        <h4>5. 境界線（CPTの守備範囲）</h4>
        <p>
          心理的な悩みが強い場合や、摂食障害が疑われる場合などは、無理に介入を続けません。
          トレーナーは安全な範囲で支援し、必要に応じて専門職への相談を促します。
        </p>

        <div class="mt-8 p-6 bg-slate-50 rounded-xl not-prose">
          <h4 class="text-lg font-bold text-slate-900 mb-4">例題</h4>
          <p class="font-medium text-slate-800 mb-4">
            Q. クライアントが運動継続に消極的である。コミットメントを引き出す対応として適切なのはどれか。
          </p>
          <details class="group">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">解答・解説</summary>
            <div class="mt-4 p-4 bg-white border border-slate-200 rounded-lg text-sm text-slate-700">
              <p class="font-bold text-slate-900 mb-2">A. 開かれた質問と要約で障害を明確化し、現実的な選択肢から本人に選ばせる</p>
              <p>
                説得よりも、本人の状況を整理し、実行可能な案を本人が選ぶことが継続につながりやすいです。
              </p>
            </div>
          </details>
        </div>

        <div class="mt-6 p-6 bg-white border border-slate-200 rounded-xl not-prose">
          <h4 class="text-lg font-bold text-slate-900 mb-4">確認テスト（3問）</h4>
          <details class="group">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q1: 主体性を支えるコミュニケーションの狙いは何か。</summary>
            <div class="mt-3 text-sm text-slate-700">A: 本人の意思決定を支え、継続率を上げる。</div>
          </details>
          <details class="group mt-3">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q2: 0〜10のスケーリングで確認する目的は何か。</summary>
            <div class="mt-3 text-sm text-slate-700">A: 実行可能性を具体化し、障害と対策を引き出す。</div>
          </details>
          <details class="group mt-3">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q3: 選択肢提示が有効になりやすい理由は何か。</summary>
            <div class="mt-3 text-sm text-slate-700">A: 本人が選んだ行動は継続されやすい。</div>
          </details>
        </div>

        <h4>要点まとめ（箇条書き5つ）</h4>
        <ul>
          <li>原則: 説得より理解と意思決定支援</li>
          <li>技能: 開かれた質問・反映（傾聴）・要約</li>
          <li>具体化: 0〜10のスケーリングで障害と対策を抽出</li>
          <li>提案: 2〜3案の現実的オプションから本人が選択</li>
          <li>境界線: リスクが高い場合は専門職連携を優先</li>
        </ul>
      `,
    },
    {
      title: "停滞期の対処: 期待値調整と再設計",
      excerpt:
        "停滞の原因をデータと行動から切り分け、期待値調整とプラン再設計で継続を守ります。",
      readTime: 11,
      content: `
        <h2>行動変容・心理学</h2>
        <h3>停滞期の対処: 期待値調整と再設計</h3>

        <h4>1. 停滞は「失敗」ではなく情報</h4>
        <p>
          体重、見た目、パフォーマンスは直線的に改善しません。停滞が起きたときは、設計と実行のどこにギャップがあるかを示す情報です。
          実務では、まず焦りを抑え、評価手順を固定して原因を切り分けます。
        </p>

        <h4>2. 停滞の切り分け（測定の問題か、実行の問題か）</h4>
        <ul>
          <li><strong>測定の揺れ</strong>: 水分、便通、月経周期、塩分、睡眠で短期変動が大きい。</li>
          <li><strong>実行の揺れ</strong>: 外食・飲酒・間食、活動量低下、睡眠不足で計画どおりになっていない。</li>
          <li><strong>設計の問題</strong>: 目標が現実より高い、負荷や制限が強すぎて継続できない。</li>
        </ul>

        <h4>3. 期待値調整（短期指標と長期指標）</h4>
        <p>
          停滞期に重要なのは、評価指標を複数にすることです。体重だけで判断すると誤解が増えます。
          週平均体重、周径、写真、トレーニングの重量や回数、睡眠、主観的疲労を組み合わせます。
        </p>

        <h4>4. 再設計の手順（まず小さく修正）</h4>
        <p>
          実務では、まず「最小の修正」で反応を見るほうが安全です。修正の候補は、摂取（飲料・間食・外食頻度）、
          活動（NEAT）、トレーニングの量や頻度、睡眠の整備です。
        </p>
        <ol>
          <li><strong>記録の再確認</strong>: 食事・飲料・外食・間食・歩数。</li>
          <li><strong>1つだけ変更</strong>: 例）飲料を無糖へ、間食を週2回に、歩数を+1000。</li>
          <li><strong>2週間評価</strong>: 同じ条件で傾向を見る。</li>
          <li><strong>必要なら追加修正</strong>: 量の再調整、代替案の追加。</li>
        </ol>

        <h4>5. 継続を守る（再発予防）</h4>
        <p>
          停滞期は離脱のリスクが高い時期です。Minimumを守る、短縮版メニューを用意する、達成を可視化するなど、
          行動をゼロにしない仕組みを優先します。
        </p>

        <div class="mt-8 p-6 bg-slate-50 rounded-xl not-prose">
          <h4 class="text-lg font-bold text-slate-900 mb-4">例題</h4>
          <p class="font-medium text-slate-800 mb-4">
            Q. 減量が停滞した。最初に行う対応として適切なのはどれか。
          </p>
          <details class="group">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">解答・解説</summary>
            <div class="mt-4 p-4 bg-white border border-slate-200 rounded-lg text-sm text-slate-700">
              <p class="font-bold text-slate-900 mb-2">A. 記録と評価指標を確認し、最小の修正を1つだけ入れて反応を見る</p>
              <p>
                停滞は原因が複数になりやすいです。まずは測定と実行を確認し、小さな修正で因果を見やすくします。
              </p>
            </div>
          </details>
        </div>

        <div class="mt-6 p-6 bg-white border border-slate-200 rounded-xl not-prose">
          <h4 class="text-lg font-bold text-slate-900 mb-4">確認テスト（3問）</h4>
          <details class="group">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q1: 停滞を「情報」として扱う理由は何か。</summary>
            <div class="mt-3 text-sm text-slate-700">A: 設計と実行のギャップを示し、修正点を特定できるため。</div>
          </details>
          <details class="group mt-3">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q2: 体重以外に併用しやすい評価指標の例は何か。</summary>
            <div class="mt-3 text-sm text-slate-700">A: 周径、写真、トレーニングパフォーマンス、睡眠など。</div>
          </details>
          <details class="group mt-3">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q3: 再設計で「1つだけ変更」する利点は何か。</summary>
            <div class="mt-3 text-sm text-slate-700">A: 何が効いたかを判断しやすくし、破綻を防ぐ。</div>
          </details>
        </div>

        <h4>要点まとめ（箇条書き5つ）</h4>
        <ul>
          <li>停滞の位置づけ: 失敗ではなく評価と再設計の材料</li>
          <li>切り分け: 測定の揺れ・実行の揺れ・設計の問題</li>
          <li>指標: 週平均体重＋周径・写真・パフォーマンス等を併用</li>
          <li>再設計: 記録確認→1つだけ修正→一定期間評価</li>
          <li>継続: Minimum維持と短縮版でゼロを避ける</li>
        </ul>
      `,
    },
  ],
  "クライアント評価": [
    {
      title: "評価の目的: 現状把握→優先課題→プログラムへ",
      excerpt:
        "評価を「測ること」で終わらせず、優先課題の特定とプログラム設計につなげる手順を整理します。",
      readTime: 12,
      content: `
        <h2>クライアント評価</h2>
        <h3>評価の目的: 現状把握→優先課題→プログラムへ</h3>

        <h4>1. 評価の目的（なぜ測るか）</h4>
        <p>
          クライアント評価の目的は、現状を把握し、優先課題を特定し、安全かつ効果的なプログラムに落とし込むことです。
          評価は「点数をつける」ためではなく、「何を優先して、どう進めるか」を決めるために行います。
          NSCA-CPTの実務では、評価項目を増やすより、目的に合う最小セットで一貫した意思決定ができることが重要です。
        </p>

        <h4>2. 評価の基本フロー</h4>
        <ol>
          <li><strong>情報収集</strong>: 目標、既往歴、生活、運動歴、疼痛、制約を把握します。</li>
          <li><strong>リスク評価</strong>: 運動可否と必要な医療連携を確認します。</li>
          <li><strong>身体評価</strong>: 体組成、姿勢、動作、体力要素の目安を取ります。</li>
          <li><strong>優先課題の決定</strong>: 最初に改善すべき要素を絞ります。</li>
          <li><strong>プログラム化</strong>: 種目・頻度・強度・量・休息を設計します。</li>
          <li><strong>再評価</strong>: 一定期間ごとに同条件で比較します。</li>
        </ol>

        <h4>3. 優先課題の決め方（安全→技術→負荷）</h4>
        <p>
          優先順位は、まず安全性（禁忌回避）、次に技術（再現性）、最後に負荷（漸進）です。例えば同じ「筋力向上」目的でも、
          疼痛や著しい代償がある場合は、重量を上げる前に可動域・フォーム・回帰種目を優先します。
        </p>
        <ul>
          <li><strong>安全</strong>: レッドフラッグ、疼痛増悪、めまい、胸痛、息切れなど。</li>
          <li><strong>技術</strong>: 可動域、姿勢制御、基本動作（スクワット/ヒンジ等）の再現性。</li>
          <li><strong>負荷</strong>: 強度・量・頻度を段階的に操作します。</li>
        </ul>

        <h4>4. 評価で起こりやすいミス</h4>
        <ul>
          <li><strong>目的不一致</strong>: 目的と関係の薄い測定に時間を使い、プログラム設計が曖昧になる。</li>
          <li><strong>測定過多</strong>: 実行できないほど項目が多く、継続比較ができない。</li>
          <li><strong>解釈の飛躍</strong>: 1回の結果だけで原因を断定し、介入が過剰になる。</li>
        </ul>

        <h4>5. 実務への落とし込み（最小セットの考え方）</h4>
        <p>
          実務では、リスク評価、疼痛の確認、基本動作の観察、体組成/周径の最小測定があれば、十分に設計できます。
          まずは「同じ条件で繰り返せる」評価を固定し、必要に応じて項目を追加します。
        </p>

        <div class="mt-8 p-6 bg-slate-50 rounded-xl not-prose">
          <h4 class="text-lg font-bold text-slate-900 mb-4">例題</h4>
          <p class="font-medium text-slate-800 mb-4">
            Q. クライアント評価の目的として最も適切なのはどれか。
          </p>
          <details class="group">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">解答・解説</summary>
            <div class="mt-4 p-4 bg-white border border-slate-200 rounded-lg text-sm text-slate-700">
              <p class="font-bold text-slate-900 mb-2">A. 現状把握と優先課題の特定を行い、プログラム設計に結びつける</p>
              <p>
                評価は測定で終わりません。安全性と課題を整理し、実行可能なプログラムに落とし込むために行います。
              </p>
            </div>
          </details>
        </div>

        <div class="mt-6 p-6 bg-white border border-slate-200 rounded-xl not-prose">
          <h4 class="text-lg font-bold text-slate-900 mb-4">確認テスト（3問）</h4>
          <details class="group">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q1: 評価の目的は何か。</summary>
            <div class="mt-3 text-sm text-slate-700">A: 現状把握→優先課題→プログラム化→再評価の意思決定を支える。</div>
          </details>
          <details class="group mt-3">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q2: 優先順位の基本はどれか。</summary>
            <div class="mt-3 text-sm text-slate-700">A: 安全→技術→負荷。</div>
          </details>
          <details class="group mt-3">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q3: 測定過多の問題点は何か。</summary>
            <div class="mt-3 text-sm text-slate-700">A: 継続比較ができず、設計が曖昧になりやすい。</div>
          </details>
        </div>

        <h4>要点まとめ（箇条書き5つ）</h4>
        <ul>
          <li>目的: 現状把握→優先課題→プログラム化→再評価</li>
          <li>フロー: 情報収集→リスク評価→身体評価→課題決定</li>
          <li>優先順位: 安全→技術→負荷</li>
          <li>落とし穴: 目的不一致・測定過多・解釈の飛躍</li>
          <li>実務: 同条件で繰り返せる最小セットを固定</li>
        </ul>
      `,
    },
    {
      title: "リスク評価の流れ: 問診から運動可否判断まで",
      excerpt:
        "問診での確認事項と、運動可否判断・医療連携の考え方を安全優先で整理します。",
      readTime: 12,
      content: `
        <h2>クライアント評価</h2>
        <h3>リスク評価の流れ: 問診から運動可否判断まで</h3>

        <h4>1. リスク評価の位置づけ</h4>
        <p>
          リスク評価は、評価の中でも最優先です。プログラムの有効性より前に、安全性を確保します。
          実務では、問診で「運動を行ってよいか」「医療連携が必要か」「強度をどう設定するか」を判断します。
        </p>

        <h4>2. 問診で確認する主要項目</h4>
        <ul>
          <li><strong>既往歴・現病歴</strong>: 心血管・代謝・腎疾患、整形外科的疾患、手術歴など。</li>
          <li><strong>症状</strong>: 胸痛、息切れ、めまい、失神、動悸、浮腫など。</li>
          <li><strong>服薬</strong>: 血圧、心拍、血糖に影響する薬剤を含む。</li>
          <li><strong>生活</strong>: 睡眠、ストレス、仕事、活動量。</li>
          <li><strong>疼痛</strong>: 部位、動作、増悪要因、発症時期。</li>
        </ul>

        <h4>3. レッドフラッグ（運動中止・専門職紹介の目安）</h4>
        <p>
          レッドフラッグが疑われる場合は、運動を継続しません。医療機関への相談を促し、必要に応じて救急対応を優先します。
        </p>
        <ul>
          <li>胸痛、安静時の息切れ、失神、強いめまいなど。</li>
          <li>神経症状（しびれの増悪、筋力低下）、原因不明の強い疼痛。</li>
          <li>急激な体重変化、発熱、強い倦怠感などの全身症状。</li>
        </ul>

        <h4>4. 「運動可否」判断の実務</h4>
        <p>
          実務では、まず低リスクで開始できる条件を作り、状況に応じて医療連携を行います。
          強度は、会話テストやRPEなどの主観指標を併用し、日内変動を反映します。
        </p>
        <ul>
          <li><strong>開始</strong>: 低〜中強度、短時間、少ない種目で開始。</li>
          <li><strong>監視</strong>: 症状、血圧・心拍の反応（可能な範囲）、主観的きつさ。</li>
          <li><strong>進行</strong>: 症状がない範囲で段階的に。</li>
        </ul>

        <h4>5. 注意点（よくある誤解）</h4>
        <ul>
          <li><strong>自己申告の過信</strong>: 「大丈夫」は根拠になりません。具体の症状確認が必要です。</li>
          <li><strong>評価の先延ばし</strong>: 初回の問診で把握し、危険を後回しにしません。</li>
          <li><strong>強度の急上げ</strong>: リスクが不明な状態で高強度へ移行しない。</li>
        </ul>

        <div class="mt-8 p-6 bg-slate-50 rounded-xl not-prose">
          <h4 class="text-lg font-bold text-slate-900 mb-4">例題</h4>
          <p class="font-medium text-slate-800 mb-4">
            Q. 初回問診で胸痛を訴えた。CPTの対応として最も適切なのはどれか。
          </p>
          <details class="group">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">解答・解説</summary>
            <div class="mt-4 p-4 bg-white border border-slate-200 rounded-lg text-sm text-slate-700">
              <p class="font-bold text-slate-900 mb-2">A. 運動を実施せず、医療機関への相談を促す</p>
              <p>
                胸痛はレッドフラッグになり得ます。安全性を最優先し、運動で様子を見る対応は避けます。
              </p>
            </div>
          </details>
        </div>

        <div class="mt-6 p-6 bg-white border border-slate-200 rounded-xl not-prose">
          <h4 class="text-lg font-bold text-slate-900 mb-4">確認テスト（3問）</h4>
          <details class="group">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q1: リスク評価の最優先目的は何か。</summary>
            <div class="mt-3 text-sm text-slate-700">A: 運動可否判断と医療連携の要否判断。</div>
          </details>
          <details class="group mt-3">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q2: レッドフラッグの例を1つ挙げよ。</summary>
            <div class="mt-3 text-sm text-slate-700">A: 胸痛、失神、安静時の息切れなど。</div>
          </details>
          <details class="group mt-3">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q3: 強度設定で実務的に併用しやすい指標は何か。</summary>
            <div class="mt-3 text-sm text-slate-700">A: RPEと会話テスト。</div>
          </details>
        </div>

        <h4>要点まとめ（箇条書き5つ）</h4>
        <ul>
          <li>優先: 有効性より安全性（運動可否と連携判断）</li>
          <li>問診: 既往歴・症状・服薬・生活・疼痛を確認</li>
          <li>レッドフラッグ: 胸痛・失神・安静時息切れ等は運動中止</li>
          <li>開始: 低〜中強度から段階的に進行</li>
          <li>指標: 会話テスト/RPEで日内変動を反映</li>
        </ul>
      `,
    },
    {
      title: "強度管理: RPEと会話テストの使い分け",
      excerpt:
        "強度を安全に調整するために、RPE・RIR・会話テストを使い分ける実務手順を整理します。",
      readTime: 11,
      content: `
        <h2>クライアント評価</h2>
        <h3>強度管理: RPEと会話テストの使い分け</h3>

        <h4>1. 強度管理が必要な理由</h4>
        <p>
          強度は、成果と安全性を同時に左右する変数です。体調、睡眠、ストレス、痛み、環境（暑さ）により強度の感じ方は変化します。
          そのため、固定重量だけで管理せず、主観指標を用いて日内変動を吸収します。
        </p>

        <h4>2. 指標の整理（RPE・RIR・会話テスト）</h4>
        <ul>
          <li><strong>RPE</strong>: 主観的きつさ。セット全体の負担感を表しやすい。</li>
          <li><strong>RIR</strong>: 残り反復回数。レジスタンスで安全に余力を残す判断に使いやすい。</li>
          <li><strong>会話テスト</strong>: 有酸素強度の目安。会話可能性で強度帯を概ね判断する。</li>
        </ul>

        <h4>3. 実務での使い分け</h4>
        <p>
          レジスタンスではRIR/RPE、有酸素では会話テスト/RPEの併用が実務的です。
          心拍は有用ですが、薬剤や環境の影響を受けるため、補助指標として扱います。
        </p>
        <ul>
          <li><strong>初心者</strong>: まず余力を残し、フォームの再現性を優先します（RIRを残す）。</li>
          <li><strong>減量中</strong>: 疲労が増えやすいため、RPE/RIRで調整しやすい設計にします。</li>
          <li><strong>高温環境</strong>: 同じ仕事量でもRPEが上がりやすい。強度を下げる判断が必要です。</li>
        </ul>

        <h4>4. 具体的な運用（質問のテンプレ）</h4>
        <p>
          指標は使い方が曖昧だと機能しません。実務では、毎回同じ聞き方で確認します。
        </p>
        <ul>
          <li><strong>RPE</strong>: 「10段階でどれくらいきついか」</li>
          <li><strong>RIR</strong>: 「あと何回できそうか」</li>
          <li><strong>会話</strong>: 「会話は続けられるか」</li>
        </ul>

        <h4>5. 注意点</h4>
        <ul>
          <li><strong>過小申告/過大申告</strong>: 初期はズレやすい。フォームと呼吸、速度低下を合わせて判断します。</li>
          <li><strong>疼痛</strong>: きつさと疼痛は別です。疼痛があれば強度を下げ、種目回帰を優先します。</li>
          <li><strong>疲労</strong>: 週単位での傾向を見て、量や頻度も調整します。</li>
        </ul>

        <div class="mt-8 p-6 bg-slate-50 rounded-xl not-prose">
          <h4 class="text-lg font-bold text-slate-900 mb-4">例題</h4>
          <p class="font-medium text-slate-800 mb-4">
            Q. 有酸素運動の強度設定で、心拍計がない状況で有用な指標として適切なのはどれか。
          </p>
          <details class="group">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">解答・解説</summary>
            <div class="mt-4 p-4 bg-white border border-slate-200 rounded-lg text-sm text-slate-700">
              <p class="font-bold text-slate-900 mb-2">A. 会話テストとRPE</p>
              <p>
                会話可能性と主観的きつさは、環境や体調変動を反映しやすく、現場で再現しやすい指標です。
              </p>
            </div>
          </details>
        </div>

        <div class="mt-6 p-6 bg-white border border-slate-200 rounded-xl not-prose">
          <h4 class="text-lg font-bold text-slate-900 mb-4">確認テスト（3問）</h4>
          <details class="group">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q1: RIRとは何か。</summary>
            <div class="mt-3 text-sm text-slate-700">A: 残り反復回数（あと何回できそうか）。</div>
          </details>
          <details class="group mt-3">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q2: 会話テストが適する場面はどれか。</summary>
            <div class="mt-3 text-sm text-slate-700">A: 有酸素運動の強度設定。</div>
          </details>
          <details class="group mt-3">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q3: 疼痛がある場合の強度管理で優先すべき対応はどれか。</summary>
            <div class="mt-3 text-sm text-slate-700">A: 強度を下げ、種目回帰とフォーム再評価を優先。</div>
          </details>
        </div>

        <h4>要点まとめ（箇条書き5つ）</h4>
        <ul>
          <li>強度: 成果と安全性を同時に左右する主要変数</li>
          <li>指標: レジスタンスはRIR/RPE、有酸素は会話テスト/RPE</li>
          <li>運用: 毎回同じ質問で主観指標の精度を上げる</li>
          <li>注意: 初期はズレやすく、フォーム・速度も併用</li>
          <li>疼痛: きつさと区別し、疼痛があれば負荷調整を優先</li>
        </ul>
      `,
    },
    {
      title: "動作観察: 最小セットで見るポイント",
      excerpt:
        "動作観察で代償とリスクを短時間で見抜くために、観察ポイントと介入の順序を整理します。",
      readTime: 12,
      content: `
        <h2>クライアント評価</h2>
        <h3>動作観察: 最小セットで見るポイント</h3>

        <h4>1. 動作観察の目的</h4>
        <p>
          動作観察は、解剖や力学の知識を「プログラム設計とフォーム修正」に結びつけるために行います。
          目的は、疼痛やリスクの兆候を見つけ、代償の原因を仮説化し、回帰・進行を判断することです。
        </p>

        <h4>2. 最小セット（まず見る動作）</h4>
        <p>
          実務では、すべてのテストを行う必要はありません。まずは主要パターンを少数選び、共通の観察軸で見ます。
        </p>
        <ul>
          <li><strong>スクワット系</strong>: 下半身と体幹の協調、足部〜股関節の制御。</li>
          <li><strong>ヒンジ系</strong>: 股関節主導、脊柱の安定、ハム/殿筋の使い方。</li>
          <li><strong>プッシュ/プル</strong>: 肩甲帯、胸郭、頸部の代償。</li>
          <li><strong>歩行/片脚</strong>: 左右差とバランス、骨盤の制御。</li>
        </ul>

        <h4>3. 観察のフレーム（平面・関節・呼吸）</h4>
        <ul>
          <li><strong>平面</strong>: 矢状面（前後）・前額面（左右）・水平面（回旋）。</li>
          <li><strong>関節</strong>: どの関節が動き、どこで止まり、どこが代償するか。</li>
          <li><strong>呼吸/腹圧</strong>: 息止め、過度の反り、肋骨の開きなど。</li>
        </ul>

        <h4>4. 代償があったときの介入順序</h4>
        <p>
          代償を見つけたら、すぐに「柔軟性不足」と決めつけません。負荷要因と制御要因を切り分けます。
          介入は次の順で整理すると、実務で迷いにくいです。
        </p>
        <ol>
          <li><strong>負荷を下げる</strong>: 重量・可動域・速度を調整。</li>
          <li><strong>回帰</strong>: 難度の低いバリエーションに変更。</li>
          <li><strong>キュー</strong>: 1回に1つ、短く具体的に。</li>
          <li><strong>補助</strong>: 弱点部位の補助種目を追加。</li>
        </ol>

        <h4>5. 注意点</h4>
        <ul>
          <li><strong>一回で断定しない</strong>: 疲労や緊張で一時的に崩れることがあります。</li>
          <li><strong>疼痛優先</strong>: 疼痛が増える場合は中止し、評価と連携を優先。</li>
          <li><strong>改善の再現</strong>: 一時改善ではなく、同じ準備で再現できるか確認します。</li>
        </ul>

        <div class="mt-8 p-6 bg-slate-50 rounded-xl not-prose">
          <h4 class="text-lg font-bold text-slate-900 mb-4">例題</h4>
          <p class="font-medium text-slate-800 mb-4">
            Q. 動作観察で代償が見られた。最初の介入として最も適切なのはどれか。
          </p>
          <details class="group">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">解答・解説</summary>
            <div class="mt-4 p-4 bg-white border border-slate-200 rounded-lg text-sm text-slate-700">
              <p class="font-bold text-slate-900 mb-2">A. 負荷（重量・可動域・速度）を下げて安全性と再現性を確保する</p>
              <p>
                代償の多くは負荷に対して制御が追いついていない状態です。まず負荷要因を減らし、フォーム修正を成立させます。
              </p>
            </div>
          </details>
        </div>

        <div class="mt-6 p-6 bg-white border border-slate-200 rounded-xl not-prose">
          <h4 class="text-lg font-bold text-slate-900 mb-4">確認テスト（3問）</h4>
          <details class="group">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q1: 動作観察の目的は何か。</summary>
            <div class="mt-3 text-sm text-slate-700">A: リスク兆候の把握と、回帰/進行の判断。</div>
          </details>
          <details class="group mt-3">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q2: 観察のフレームの要素を1つ挙げよ。</summary>
            <div class="mt-3 text-sm text-slate-700">A: 平面、関節の代償、呼吸/腹圧のいずれか。</div>
          </details>
          <details class="group mt-3">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q3: 代償への介入順序の最初はどれか。</summary>
            <div class="mt-3 text-sm text-slate-700">A: 負荷を下げる。</div>
          </details>
        </div>

        <h4>要点まとめ（箇条書き5つ）</h4>
        <ul>
          <li>目的: 観察→仮説→介入→再観察で設計に反映</li>
          <li>最小セット: 主要パターン（スクワット/ヒンジ/プッシュ/プル/片脚）</li>
          <li>フレーム: 平面・関節・呼吸/腹圧で整理</li>
          <li>介入順序: 負荷調整→回帰→キュー→補助</li>
          <li>注意: 一回で断定せず、疼痛優先で安全管理</li>
        </ul>
      `,
    },
    {
      title: "体組成/周径/写真: 進捗の取り方と注意点",
      excerpt:
        "体組成・周径・写真を進捗指標として扱うときの、測定条件の統一と誤解を避けるポイントを整理します。",
      readTime: 11,
      content: `
        <h2>クライアント評価</h2>
        <h3>体組成/周径/写真: 進捗の取り方と注意点</h3>

        <h4>1. なぜ複数指標が必要か</h4>
        <p>
          体重だけでは、筋量変化や水分変動を区別できません。進捗を正しく捉えるには、体重に加えて周径・写真・パフォーマンスなどを併用します。
          実務では、指標を増やすより「同じ条件で比較できること」が重要です。
        </p>

        <h4>2. 体組成の位置づけ（実務での扱い）</h4>
        <p>
          体組成は推定値であり、測定方法により誤差が生じます。トレーナーは、数値を絶対視せず、傾向と行動の関係を説明します。
        </p>
        <ul>
          <li><strong>利点</strong>: 変化の方向性を示しやすい。</li>
          <li><strong>注意</strong>: 水分、食事、運動直後、月経周期などで変動します。</li>
        </ul>

        <h4>3. 周径のメリットと測り方</h4>
        <p>
          周径は、測定条件を揃えると比較しやすい指標です。ウエスト、ヒップ、上腕、大腿など、目的に合う部位を選びます。
        </p>
        <ul>
          <li><strong>条件</strong>: 同じ時間帯、同じ姿勢、同じメジャー位置。</li>
          <li><strong>頻度</strong>: 週1〜隔週など、傾向が見える頻度。</li>
        </ul>

        <h4>4. 写真の取り方（誤差を減らす）</h4>
        <ul>
          <li><strong>同条件</strong>: 光、距離、角度、ポーズ、服装を揃えます。</li>
          <li><strong>頻度</strong>: 2〜4週ごとなど、変化が出やすい間隔。</li>
          <li><strong>説明</strong>: 短期変動より長期傾向を重視します。</li>
        </ul>

        <h4>5. 注意点（誤解とメンタル面）</h4>
        <p>
          数値に強い不安が出るクライアントでは、測定頻度を下げたり、体重以外の行動指標を中心にします。
          進捗は「できた行動」を可視化して強化すると、継続につながりやすいです。
        </p>

        <div class="mt-8 p-6 bg-slate-50 rounded-xl not-prose">
          <h4 class="text-lg font-bold text-slate-900 mb-4">例題</h4>
          <p class="font-medium text-slate-800 mb-4">
            Q. 進捗指標の扱いとして最も適切なのはどれか。
          </p>
          <details class="group">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">解答・解説</summary>
            <div class="mt-4 p-4 bg-white border border-slate-200 rounded-lg text-sm text-slate-700">
              <p class="font-bold text-slate-900 mb-2">A. 指標を固定し、同条件で測定して傾向で判断する</p>
              <p>
                体組成や体重は短期変動があります。同じ条件での比較を前提に、傾向と行動を結びつけて評価します。
              </p>
            </div>
          </details>
        </div>

        <div class="mt-6 p-6 bg-white border border-slate-200 rounded-xl not-prose">
          <h4 class="text-lg font-bold text-slate-900 mb-4">確認テスト（3問）</h4>
          <details class="group">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q1: 体重だけで進捗判断しにくい理由は何か。</summary>
            <div class="mt-3 text-sm text-slate-700">A: 筋量変化と水分変動を区別できないため。</div>
          </details>
          <details class="group mt-3">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q2: 周径測定で条件統一が重要な理由は何か。</summary>
            <div class="mt-3 text-sm text-slate-700">A: 測定誤差を減らし、比較可能性を高めるため。</div>
          </details>
          <details class="group mt-3">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q3: 写真で誤差を減らすために揃える要素の例は何か。</summary>
            <div class="mt-3 text-sm text-slate-700">A: 光・距離・角度・服装・ポーズ。</div>
          </details>
        </div>

        <h4>要点まとめ（箇条書き5つ）</h4>
        <ul>
          <li>複数指標: 体重＋周径＋写真＋パフォーマンスの併用</li>
          <li>体組成: 推定値として扱い、傾向を重視</li>
          <li>周径: 条件統一で比較しやすい指標</li>
          <li>写真: 光・距離・角度・服装を統一</li>
          <li>運用: 数値不安が強い場合は頻度と指標を調整</li>
        </ul>
      `,
    },
    {
      title: "再評価の設計: いつ・何を・どう比べるか",
      excerpt:
        "再評価をプログラム改善の仕組みにするために、頻度・項目・比較条件の設計を整理します。",
      readTime: 11,
      content: `
        <h2>クライアント評価</h2>
        <h3>再評価の設計: いつ・何を・どう比べるか</h3>

        <h4>1. 再評価の目的</h4>
        <p>
          再評価は、成果の確認とプログラム修正のために行います。初回評価が「出発点」なら、再評価は「軌道修正」です。
          実務では、完璧な測定より、同じ条件で比較できる仕組みが重要です。
        </p>

        <h4>2. いつ再評価するか（頻度の目安）</h4>
        <ul>
          <li><strong>体重/歩数/行動</strong>: 週単位で傾向を確認。</li>
          <li><strong>周径/写真</strong>: 2〜4週ごと。</li>
          <li><strong>体力要素</strong>: 4〜8週など、変化が出やすい周期。</li>
        </ul>
        <p>
          重要なのは、頻度を決めて「見直しの習慣」を作ることです。停滞が出てから慌てると、修正が過剰になりやすいです。
        </p>

        <h4>3. 何を再評価するか（最小セット）</h4>
        <p>
          目的に直結する項目を最小限に固定します。体重管理なら体重（週平均）と周径、筋力なら主要種目の反復や重量、
          姿勢や疼痛が課題なら動作観察を固定します。
        </p>

        <h4>4. どう比べるか（条件の統一）</h4>
        <ul>
          <li><strong>時間帯</strong>: できるだけ同じ時間。</li>
          <li><strong>直前条件</strong>: 食事、運動、睡眠などを揃える。</li>
          <li><strong>測定方法</strong>: 同じ機器、同じ手順。</li>
        </ul>

        <h4>5. 結果の解釈とプログラム修正</h4>
        <p>
          結果を見たら、次に「どの変数を動かすか」を決めます。修正は基本的に1つずつ行い、因果を見やすくします。
          体重なら摂取・外食・NEAT、筋力なら強度・量・休息・技術、疼痛なら可動域・回帰種目・テンポなどが候補です。
        </p>

        <div class="mt-8 p-6 bg-slate-50 rounded-xl not-prose">
          <h4 class="text-lg font-bold text-slate-900 mb-4">例題</h4>
          <p class="font-medium text-slate-800 mb-4">
            Q. 再評価を行う目的として最も適切なのはどれか。
          </p>
          <details class="group">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">解答・解説</summary>
            <div class="mt-4 p-4 bg-white border border-slate-200 rounded-lg text-sm text-slate-700">
              <p class="font-bold text-slate-900 mb-2">A. 成果確認と、プログラム修正の意思決定に用いる</p>
              <p>
                再評価は「測ること」ではなく、「改善すること」が目的です。同条件比較を前提に、変数を調整します。
              </p>
            </div>
          </details>
        </div>

        <div class="mt-6 p-6 bg-white border border-slate-200 rounded-xl not-prose">
          <h4 class="text-lg font-bold text-slate-900 mb-4">確認テスト（3問）</h4>
          <details class="group">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q1: 再評価の基本目的は何か。</summary>
            <div class="mt-3 text-sm text-slate-700">A: 成果確認とプログラム修正の意思決定。</div>
          </details>
          <details class="group mt-3">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q2: 再評価で最も重要な前提は何か。</summary>
            <div class="mt-3 text-sm text-slate-700">A: 同条件で比較できること。</div>
          </details>
          <details class="group mt-3">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q3: 修正を1つずつ行う利点は何か。</summary>
            <div class="mt-3 text-sm text-slate-700">A: 何が効いたかを判断しやすくする。</div>
          </details>
        </div>

        <h4>要点まとめ（箇条書き5つ）</h4>
        <ul>
          <li>目的: 成果確認とプログラム修正</li>
          <li>頻度: 行動/体重は週、周径/写真は2〜4週、体力は4〜8週</li>
          <li>項目: 目的に直結する最小セットを固定</li>
          <li>条件: 時間帯・直前条件・測定方法を統一</li>
          <li>修正: 変数を1つずつ調整して因果を見やすくする</li>
        </ul>
      `,
    },
  ],
  "プログラムデザイン": [
    {
      title: "初心者設計: フォーム→継続→漸進",
      excerpt:
        "初心者に必要な優先順位（安全・技術・継続）を整理し、漸進を長期で積み上げる設計をまとめます。",
      readTime: 12,
      content: `
        <h2>プログラムデザイン</h2>
        <h3>初心者設計: フォーム→継続→漸進</h3>

        <h4>1. 初心者設計で最も重要な考え方</h4>
        <p>
          初心者のプログラムは、短期で追い込む設計よりも、痛みなく続けられる設計が優先です。
          初期は神経適応と技術習得の影響が大きく、フォームの再現性が上がるだけでも成果が出やすい時期です。
          したがって、優先順位は「フォーム（再現性）→継続（頻度の確立）→漸進（負荷の上積み）」になります。
        </p>

        <h4>2. 目的設定（成果→行動へ分解）</h4>
        <p>
          目的は成果目標（体重、体脂肪、筋力など）だけでなく、行動目標（週2回来館、毎食たんぱく質など）に分けます。
          初心者では、行動目標が安定しないと漸進も成立しません。
        </p>

        <h4>3. 種目選択（パターンで組む）</h4>
        <p>
          初心者の段階では、筋名で細かく分けるより、基本動作パターンで組み立てると設計が安定します。
          代表例は、スクワット系、ヒンジ系、プッシュ、プル、体幹、片脚/キャリーです。
          まずは少ない種目数で反復し、フォームの再現性を上げます。
        </p>
        <ul>
          <li><strong>回帰（Regression）</strong>: フォームが崩れる場合は難度を下げ、可動域や負荷を調整します。</li>
          <li><strong>進行（Progression）</strong>: 再現性が安定したら、回数→セット→重量の順で漸進します。</li>
        </ul>

        <h4>4. ボリュームと強度（やり過ぎを避ける）</h4>
        <p>
          初心者で多い失敗は、初週から量や強度を上げ過ぎて、筋肉痛・痛み・疲労で離脱することです。
          実務では、最初は余力を残し（RIRを残す）、次回も来られるボリュームにします。
          「最初は少なく、段階的に増やす」が基本です。
        </p>
        <ul>
          <li><strong>開始</strong>: 余力を残し、フォームが崩れない範囲。</li>
          <li><strong>漸進</strong>: 反復達成→重量増、またはセット追加（ただし増やし過ぎない）。</li>
          <li><strong>中断</strong>: 疼痛や強い代償が出た場合は回帰を優先。</li>
        </ul>

        <h4>5. 継続を守る設計（MinimumとBonus）</h4>
        <p>
          初心者は生活変化が多く、計画が崩れやすいです。週の最低ライン（Minimum）を決め、余裕のある週に上積み（Bonus）を入れます。
          Minimumを達成した週を成功と定義すると、離脱が減りやすくなります。
        </p>

        <div class="mt-8 p-6 bg-slate-50 rounded-xl not-prose">
          <h4 class="text-lg font-bold text-slate-900 mb-4">例題</h4>
          <p class="font-medium text-slate-800 mb-4">
            Q. 初心者のプログラム設計で、最も優先すべき考え方として適切なのはどれか。
          </p>
          <details class="group">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">解答・解説</summary>
            <div class="mt-4 p-4 bg-white border border-slate-200 rounded-lg text-sm text-slate-700">
              <p class="font-bold text-slate-900 mb-2">A. フォームの再現性と継続を確保し、段階的に漸進する</p>
              <p>
                初期は技術習得の影響が大きく、やり過ぎは離脱要因になります。継続可能な負荷から漸進を積み上げます。
              </p>
            </div>
          </details>
        </div>

        <div class="mt-6 p-6 bg-white border border-slate-200 rounded-xl not-prose">
          <h4 class="text-lg font-bold text-slate-900 mb-4">確認テスト（3問）</h4>
          <details class="group">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q1: 初心者設計の優先順位の基本はどれか。</summary>
            <div class="mt-3 text-sm text-slate-700">A: フォーム→継続→漸進。</div>
          </details>
          <details class="group mt-3">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q2: 種目選択を安定させる整理の仕方はどれか。</summary>
            <div class="mt-3 text-sm text-slate-700">A: 動作パターン（スクワット/ヒンジ/プッシュ/プル等）で組む。</div>
          </details>
          <details class="group mt-3">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q3: 最初から量を上げ過ぎるリスクの一例は何か。</summary>
            <div class="mt-3 text-sm text-slate-700">A: 筋肉痛・痛み・疲労による離脱。</div>
          </details>
        </div>

        <h4>要点まとめ（箇条書き5つ）</h4>
        <ul>
          <li>優先順位: フォーム（再現性）→継続→漸進</li>
          <li>目的: 成果目標を行動目標に分解して運用</li>
          <li>種目: 動作パターンで少数種目を反復</li>
          <li>負荷: 余力を残して開始し、段階的に上積み</li>
          <li>継続: Minimum＋Bonusで離脱を防ぐ</li>
        </ul>
      `,
    },
    {
      title: "セット/回数/休憩: 目的別の基本テンプレ",
      excerpt:
        "目的（筋力・筋肥大・筋持久力）に応じた、セット数・回数・休息の考え方をテンプレとして整理します。",
      readTime: 12,
      content: `
        <h2>プログラムデザイン</h2>
        <h3>セット/回数/休憩: 目的別の基本テンプレ</h3>

        <h4>1. 変数の関係（何を操作しているか）</h4>
        <p>
          レジスタンスの結果は、強度（相対負荷）、量（セット×回数×負荷）、休息、頻度、可動域、動作速度の組み合わせで決まります。
          NSCA-CPTレベルでは、厳密な数値処方よりも、目的に応じて変数の方向性を選べることが重要です。
        </p>

        <h4>2. 目的別の基本テンプレ（考え方）</h4>
        <p>
          一般的に、筋力は高い相対強度と十分な休息、筋肥大は継続可能な量の確保、筋持久力は反復と休息の管理が重要になりやすいです。
          ただし、フォームの再現性と疼痛の有無が前提になります。
        </p>
        <ul>
          <li><strong>筋力</strong>: 反復は少なめ、休息は長め、品質（速度・フォーム）を優先。</li>
          <li><strong>筋肥大</strong>: 反復は中等度、量を段階的に確保し、回復と継続を両立。</li>
          <li><strong>筋持久力</strong>: 反復は多め、休息は短め、フォーム維持が前提。</li>
        </ul>

        <h4>3. 休息の役割（見落としやすいポイント）</h4>
        <p>
          休息は、次セットの出力とフォームを左右します。休息が短過ぎると、筋力目的でも品質が落ち、代償が増えます。
          一方で、目的によっては短めの休息が有効な場面もあります。実務では、休息を「結果のための変数」として扱います。
        </p>

        <h4>4. 初心者への落とし込み</h4>
        <p>
          初心者は技術習得が優先なので、反復や休息を「フォームを守れる条件」に合わせます。
          休息を十分に取り、良い反復を積むほうが、結果として漸進が早く安定します。
        </p>

        <h4>5. 進め方（1変数ずつ動かす）</h4>
        <p>
          変数は基本的に1つずつ動かします。例えば「回数が目標レンジで達成できたら重量を少し増やす」などです。
          複数変数を同時に増やすと、疲労管理が難しくなり、フォームが崩れやすくなります。
        </p>

        <div class="mt-8 p-6 bg-slate-50 rounded-xl not-prose">
          <h4 class="text-lg font-bold text-slate-900 mb-4">例題</h4>
          <p class="font-medium text-slate-800 mb-4">
            Q. 筋力向上を狙うセット/回数/休息の考え方として適切なのはどれか。
          </p>
          <details class="group">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">解答・解説</summary>
            <div class="mt-4 p-4 bg-white border border-slate-200 rounded-lg text-sm text-slate-700">
              <p class="font-bold text-slate-900 mb-2">A. 高い相対強度を扱い、休息を確保して品質を維持する</p>
              <p>
                休息が不足すると出力とフォームが低下しやすいです。筋力では品質を守る設計が基本になります。
              </p>
            </div>
          </details>
        </div>

        <div class="mt-6 p-6 bg-white border border-slate-200 rounded-xl not-prose">
          <h4 class="text-lg font-bold text-slate-900 mb-4">確認テスト（3問）</h4>
          <details class="group">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q1: 量（ボリューム）を表す要素の組み合わせはどれか。</summary>
            <div class="mt-3 text-sm text-slate-700">A: セット数×回数×負荷。</div>
          </details>
          <details class="group mt-3">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q2: 休息が短過ぎると起こりやすい問題は何か。</summary>
            <div class="mt-3 text-sm text-slate-700">A: 出力低下とフォーム崩れ（代償増加）。</div>
          </details>
          <details class="group mt-3">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q3: 変数操作を1つずつ行う利点は何か。</summary>
            <div class="mt-3 text-sm text-slate-700">A: 疲労管理がしやすく、因果を判断しやすい。</div>
          </details>
        </div>

        <h4>要点まとめ（箇条書き5つ）</h4>
        <ul>
          <li>変数: 強度・量・休息・頻度・可動域・速度</li>
          <li>筋力: 高相対強度＋十分な休息で品質を維持</li>
          <li>筋肥大: 量の確保と回復の両立</li>
          <li>筋持久力: 反復と休息の管理（フォーム維持が前提）</li>
          <li>運用: 変数は基本的に1つずつ段階的に操作</li>
        </ul>
      `,
    },
    {
      title: "負荷設定: RIR/RPEで安全に伸ばす",
      excerpt:
        "RIRとRPEで余力を数値化し、日内変動を吸収しながら漸進する負荷設定手順を整理します。",
      readTime: 11,
      content: `
        <h2>プログラムデザイン</h2>
        <h3>負荷設定: RIR/RPEで安全に伸ばす</h3>

        <h4>1. なぜ主観指標が必要か</h4>
        <p>
          体調は日によって変わります。同じ重量でも、睡眠不足やストレス、暑さ、痛みの有無で難易度は変化します。
          そのため、固定重量だけでなくRIR（残り反復回数）やRPE（自覚的きつさ）を併用して、日内変動を吸収します。
        </p>

        <h4>2. RIRとRPEの使い分け</h4>
        <ul>
          <li><strong>RIR</strong>: 「あと何回できるか」。初心者に説明しやすく、余力を残す判断に向きます。</li>
          <li><strong>RPE</strong>: 「どれくらいきついか」。セット全体の負担感を表しやすいです。</li>
        </ul>

        <h4>3. 初心者の基本（余力を残す）</h4>
        <p>
          初心者は限界まで行う必要はありません。まずはフォームを守り、継続できる負荷で反復を積みます。
          余力を残した状態での反復でも、漸進を続ければ十分に成果が出ます。
        </p>

        <h4>4. 漸進の手順（回数→重量、必要ならセット）</h4>
        <p>
          実務で再現性が高いのは「回数先行」の漸進です。目標レンジ内で回数が達成できたら重量を少し増やします。
          追加の刺激が必要な場合のみ、セット数の上積みを検討します。
        </p>
        <ul>
          <li><strong>回数先行</strong>: 目標回数を達成→重量を増やす。</li>
          <li><strong>セット追加</strong>: 回復が確保できる場合のみ段階的に。</li>
          <li><strong>デロード</strong>: 疲労や疼痛が増える場合は一時的に量/強度を下げる。</li>
        </ul>

        <h4>5. 注意点</h4>
        <ul>
          <li><strong>ズレ</strong>: 初期は自己評価がズレやすい。フォーム・速度低下も併用して判断します。</li>
          <li><strong>疼痛</strong>: きつさと疼痛は別です。疼痛があれば回帰と負荷調整を優先します。</li>
          <li><strong>記録</strong>: 重量だけでなくRIR/RPEも記録すると、調整がしやすくなります。</li>
        </ul>

        <div class="mt-8 p-6 bg-slate-50 rounded-xl not-prose">
          <h4 class="text-lg font-bold text-slate-900 mb-4">例題</h4>
          <p class="font-medium text-slate-800 mb-4">
            Q. 日内変動を考慮した負荷設定として適切なのはどれか。
          </p>
          <details class="group">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">解答・解説</summary>
            <div class="mt-4 p-4 bg-white border border-slate-200 rounded-lg text-sm text-slate-700">
              <p class="font-bold text-slate-900 mb-2">A. RIR/RPEを併用し、同じきつさ・余力になるよう負荷を調整する</p>
              <p>
                固定重量では体調差を反映できません。主観指標で余力を揃えると、安全性と漸進が両立しやすいです。
              </p>
            </div>
          </details>
        </div>

        <div class="mt-6 p-6 bg-white border border-slate-200 rounded-xl not-prose">
          <h4 class="text-lg font-bold text-slate-900 mb-4">確認テスト（3問）</h4>
          <details class="group">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q1: RIRは何を表すか。</summary>
            <div class="mt-3 text-sm text-slate-700">A: 残り反復回数（あと何回できるか）。</div>
          </details>
          <details class="group mt-3">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q2: 実務で再現性が高い漸進手順はどれか。</summary>
            <div class="mt-3 text-sm text-slate-700">A: 回数達成→重量増（回数先行）。</div>
          </details>
          <details class="group mt-3">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q3: 疼痛が出た場合に優先すべき対応はどれか。</summary>
            <div class="mt-3 text-sm text-slate-700">A: 回帰と負荷調整（安全性の確保）。</div>
          </details>
        </div>

        <h4>要点まとめ（箇条書き5つ）</h4>
        <ul>
          <li>目的: 日内変動を吸収し、安全に漸進する</li>
          <li>指標: RIR（余力）とRPE（負担感）を併用</li>
          <li>初心者: 限界反復よりフォーム再現性と継続を優先</li>
          <li>漸進: 回数先行→重量増、必要時のみセット追加</li>
          <li>注意: ズレ・疼痛・記録の3点を管理</li>
        </ul>
      `,
    },
    {
      title: "痛みが出た時: ROM/テンポ/種目の調整",
      excerpt:
        "疼痛や違和感が出たときの対応を、負荷調整レバー（ROM・テンポ・種目）として整理します。",
      readTime: 12,
      content: `
        <h2>プログラムデザイン</h2>
        <h3>痛みが出た時: ROM/テンポ/種目の調整</h3>

        <h4>1. まず優先する考え方</h4>
        <p>
          痛みや違和感が出た場合、最優先は安全性です。痛みを我慢して続ける設計は、長期の継続を壊します。
          実務では「中止か継続か」ではなく、「どの変数を下げれば安全に続けられるか」を考えます。
        </p>

        <h4>2. 痛みの確認（最低限の聞き取り）</h4>
        <ul>
          <li><strong>部位</strong>: どこが痛むか。</li>
          <li><strong>動作</strong>: どの局面で痛むか（開始/切り返し/終末）。</li>
          <li><strong>強度</strong>: 0〜10などで目安を取る。</li>
          <li><strong>増悪</strong>: 続けると増えるか、軽くなるか。</li>
        </ul>

        <h4>3. 調整レバー（ROM→テンポ→種目→量/強度）</h4>
        <p>
          痛みがある場合は、関節負荷を下げ、動作制御を高める方向で調整します。順序を決めておくと迷いにくいです。
        </p>
        <ol>
          <li><strong>ROM</strong>: 痛みが出ない範囲に可動域を制限する。</li>
          <li><strong>テンポ</strong>: 反動を減らし、コントロールできる速度にする。</li>
          <li><strong>種目</strong>: 関節に優しいバリエーションへ回帰する。</li>
          <li><strong>量/強度</strong>: セット数や重量を下げ、余力を残す。</li>
        </ol>

        <h4>4. 代替の考え方（パターンは維持）</h4>
        <p>
          痛みが出たからといって、運動パターンをゼロにすると継続が崩れやすいです。可能な範囲で同じパターンを維持し、
          刺激を「別の安全な形」に置き換えます（例: バーベルスクワット→ゴブレットスクワット）。
        </p>

        <h4>5. 医療連携の目安</h4>
        <p>
          痛みが増悪する、神経症状がある、安静時痛があるなどの場合は、運動で様子を見ません。医療連携を優先します。
        </p>

        <div class="mt-8 p-6 bg-slate-50 rounded-xl not-prose">
          <h4 class="text-lg font-bold text-slate-900 mb-4">例題</h4>
          <p class="font-medium text-slate-800 mb-4">
            Q. スクワットで膝に違和感が出た。最初の調整として適切なのはどれか。
          </p>
          <details class="group">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">解答・解説</summary>
            <div class="mt-4 p-4 bg-white border border-slate-200 rounded-lg text-sm text-slate-700">
              <p class="font-bold text-slate-900 mb-2">A. 可動域を制限し、痛みが出ない範囲でフォームを再評価する</p>
              <p>
                まずROMで負荷要因を下げます。次にテンポや種目回帰を検討し、安全性と継続性を確保します。
              </p>
            </div>
          </details>
        </div>

        <div class="mt-6 p-6 bg-white border border-slate-200 rounded-xl not-prose">
          <h4 class="text-lg font-bold text-slate-900 mb-4">確認テスト（3問）</h4>
          <details class="group">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q1: 痛みが出たときに最優先するのは何か。</summary>
            <div class="mt-3 text-sm text-slate-700">A: 安全性（禁忌回避）。</div>
          </details>
          <details class="group mt-3">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q2: 調整レバーの順序の最初はどれか。</summary>
            <div class="mt-3 text-sm text-slate-700">A: ROM（可動域の制限）。</div>
          </details>
          <details class="group mt-3">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q3: 医療連携を優先しやすい状況の一例は何か。</summary>
            <div class="mt-3 text-sm text-slate-700">A: 痛みの増悪、神経症状、安静時痛。</div>
          </details>
        </div>

        <h4>要点まとめ（箇条書き5つ）</h4>
        <ul>
          <li>優先: 痛みが出たら安全性を最優先</li>
          <li>確認: 部位・局面・強度・増悪の最低限を把握</li>
          <li>調整: ROM→テンポ→種目→量/強度の順で操作</li>
          <li>代替: パターンは可能な範囲で維持し、形を置換</li>
          <li>連携: 増悪・神経症状・安静時痛は医療優先</li>
        </ul>
      `,
    },
    {
      title: "週の組み方: 全身/分割と頻度の考え方",
      excerpt:
        "全身法と分割法の特徴を整理し、週頻度と回復に合わせて現実的なスケジュールに落とし込みます。",
      readTime: 12,
      content: `
        <h2>プログラムデザイン</h2>
        <h3>週の組み方: 全身/分割と頻度の考え方</h3>

        <h4>1. 週設計で考える軸</h4>
        <p>
          週の組み方は、理論より生活制約で決まる部分が大きいです。実務では、週に何回できるか、回復は確保できるか、
          1回の時間はどれくらいかを先に決めます。その上で、全身法か分割法かを選びます。
        </p>

        <h4>2. 全身法と分割法の特徴</h4>
        <ul>
          <li><strong>全身法</strong>: 週2〜3回で組みやすく、欠席に強い。1回あたりの種目数は増えやすい。</li>
          <li><strong>分割法</strong>: 1回あたりの集中がしやすい。頻度が確保できないと部位刺激が少なくなりやすい。</li>
        </ul>
        <p>
          初心者や忙しいクライアントでは、週2回の全身法が現実的で成功しやすいです。
        </p>

        <h4>3. 頻度と量の関係（週で見る）</h4>
        <p>
          重要なのは、1回の完璧さより週単位の総量です。頻度が少ない場合は、1回あたりの重要種目を絞り、
          メインの動作パターンを優先して入れます。
        </p>

        <h4>4. 回復を見ながら調整する</h4>
        <p>
          回復不足があると、フォーム崩れと疼痛リスクが増えます。睡眠、主観疲労、同一負荷の重さ（RPE）などから傾向を見て、
          週内の強度と量を調整します。必要なら軽めの日（テクニック/回復日）を作ります。
        </p>

        <h4>5. 実務テンプレ（例）</h4>
        <ul>
          <li><strong>週2回</strong>: 全身（A/B）</li>
          <li><strong>週3回</strong>: 全身（軽重の波を作る）</li>
          <li><strong>週4回以上</strong>: 分割も選択肢（回復と生活が前提）</li>
        </ul>

        <div class="mt-8 p-6 bg-slate-50 rounded-xl not-prose">
          <h4 class="text-lg font-bold text-slate-900 mb-4">例題</h4>
          <p class="font-medium text-slate-800 mb-4">
            Q. 週2回しかトレーニングできないクライアントに適した週設計として適切なのはどれか。
          </p>
          <details class="group">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">解答・解説</summary>
            <div class="mt-4 p-4 bg-white border border-slate-200 rounded-lg text-sm text-slate-700">
              <p class="font-bold text-slate-900 mb-2">A. 全身法で主要パターンを優先し、欠席に強い設計にする</p>
              <p>
                週2回では分割にすると刺激頻度が落ちやすいです。全身法で重要種目を確実に入れます。
              </p>
            </div>
          </details>
        </div>

        <div class="mt-6 p-6 bg-white border border-slate-200 rounded-xl not-prose">
          <h4 class="text-lg font-bold text-slate-900 mb-4">確認テスト（3問）</h4>
          <details class="group">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q1: 週設計で先に決めるべき条件の例は何か。</summary>
            <div class="mt-3 text-sm text-slate-700">A: 週頻度、1回の時間、回復（睡眠/疲労）。</div>
          </details>
          <details class="group mt-3">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q2: 全身法の利点の一例は何か。</summary>
            <div class="mt-3 text-sm text-slate-700">A: 欠席に強く、週2〜3回でも主要刺激を入れやすい。</div>
          </details>
          <details class="group mt-3">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q3: 回復不足が続く場合に起こりやすい問題は何か。</summary>
            <div class="mt-3 text-sm text-slate-700">A: フォーム崩れと疼痛リスク増加。</div>
          </details>
        </div>

        <h4>要点まとめ（箇条書き5つ）</h4>
        <ul>
          <li>前提: 週頻度・時間・回復を先に確定</li>
          <li>全身法: 週2〜3回で組みやすく欠席に強い</li>
          <li>分割法: 頻度が確保できる場合に有効</li>
          <li>週単位: 1回より週の総量と継続を重視</li>
          <li>調整: 回復指標から強度・量の波を作る</li>
        </ul>
      `,
    },
    {
      title: "有酸素の組み込み: 目的別の最小設計",
      excerpt:
        "健康増進・体重管理・心肺向上など目的別に、有酸素をレジスタンスと両立させる最小設計をまとめます。",
      readTime: 11,
      content: `
        <h2>プログラムデザイン</h2>
        <h3>有酸素の組み込み: 目的別の最小設計</h3>

        <h4>1. 有酸素を入れる目的を明確にする</h4>
        <p>
          有酸素運動は、健康増進、心肺機能の向上、体重管理、回復促進など複数の目的で用いられます。
          目的が曖昧だと強度と量が決まらず、レジスタンスの質も落ちやすくなります。
        </p>

        <h4>2. 最小設計（まず続く形）</h4>
        <p>
          実務では、まず中等度以下の強度で頻度を確立し、必要に応じて上積みします。
          強度は会話テストとRPEで管理すると再現しやすいです。
        </p>
        <ul>
          <li><strong>健康増進</strong>: 会話可能な強度を中心に、継続できる頻度を作る。</li>
          <li><strong>体重管理</strong>: 食事の最小変更＋NEAT＋中等度有酸素の組み合わせを基本にする。</li>
          <li><strong>心肺向上</strong>: 継続が確立したら、短時間の高強度要素を必要時のみ追加。</li>
        </ul>

        <h4>3. レジスタンスとの両立（干渉を避ける）</h4>
        <p>
          有酸素を増やし過ぎると、疲労が増えてレジスタンスの漸進が進みにくくなることがあります。
          実務では、疲労指標（睡眠、主観疲労、RPE上昇）を見ながら、量と頻度を調整します。
        </p>
        <ul>
          <li><strong>同日実施</strong>: 目的に応じて順序を考え、品質が必要な種目を優先。</li>
          <li><strong>別日実施</strong>: 回復が厳しい場合は別日に分ける。</li>
          <li><strong>低強度</strong>: 疲労が強い週は低強度で継続を守る。</li>
        </ul>

        <h4>4. 強度設定（会話テストとRPE）</h4>
        <p>
          「会話が可能」なら低〜中強度、「断続的にしか話せない」なら高強度の目安になります。
          RPEも併用し、体調変動に合わせて調整します。
        </p>

        <h4>5. 注意点</h4>
        <ul>
          <li><strong>やり過ぎ</strong>: 有酸素の追加で回復が崩れると本末転倒になります。</li>
          <li><strong>疼痛</strong>: 関節痛が出る場合は種目（バイク等）を変更します。</li>
          <li><strong>安全</strong>: 高リスクが疑われる場合は医療連携を優先します。</li>
        </ul>

        <div class="mt-8 p-6 bg-slate-50 rounded-xl not-prose">
          <h4 class="text-lg font-bold text-slate-900 mb-4">例題</h4>
          <p class="font-medium text-slate-800 mb-4">
            Q. 体重管理が目的で、有酸素を追加したい。最初の設計として適切なのはどれか。
          </p>
          <details class="group">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">解答・解説</summary>
            <div class="mt-4 p-4 bg-white border border-slate-200 rounded-lg text-sm text-slate-700">
              <p class="font-bold text-slate-900 mb-2">A. 会話可能な強度を中心に頻度を確立し、必要に応じて上積みする</p>
              <p>
                最初から高強度に寄せると継続が崩れやすいです。まず続く強度と頻度を作り、段階的に調整します。
              </p>
            </div>
          </details>
        </div>

        <div class="mt-6 p-6 bg-white border border-slate-200 rounded-xl not-prose">
          <h4 class="text-lg font-bold text-slate-900 mb-4">確認テスト（3問）</h4>
          <details class="group">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q1: 有酸素を入れる目的の例を1つ挙げよ。</summary>
            <div class="mt-3 text-sm text-slate-700">A: 健康増進、心肺向上、体重管理、回復促進のいずれか。</div>
          </details>
          <details class="group mt-3">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q2: 強度設定で実務的に使いやすい指標はどれか。</summary>
            <div class="mt-3 text-sm text-slate-700">A: 会話テストとRPE。</div>
          </details>
          <details class="group mt-3">
            <summary class="text-sm font-bold text-blue-600 cursor-pointer list-none">Q3: レジスタンスとの両立で見直すべき兆候の一例は何か。</summary>
            <div class="mt-3 text-sm text-slate-700">A: 睡眠悪化、主観疲労増加、同一負荷のRPE上昇。</div>
          </details>
        </div>

        <h4>要点まとめ（箇条書き5つ）</h4>
        <ul>
          <li>目的: 健康・体重・心肺・回復などを明確化</li>
          <li>最小設計: 中等度以下で頻度確立→必要なら上積み</li>
          <li>両立: 疲労指標を見て量と頻度を調整</li>
          <li>指標: 会話テスト/RPEで強度管理</li>
          <li>注意: やり過ぎ・疼痛・安全性を優先</li>
        </ul>
      `,
    },
  ],
  "エクササイズテクニック": [
    { title: "主要パターン: スクワット/ヒンジ/プッシュ/プル" },
    { title: "よくある崩れ: ニーイン/腰の反り/肩のすくみ" },
    { title: "介入の順番: キュー→回帰→段階的進行" },
    { title: "補助種目の選び方: 弱点に合わせて組む" },
    { title: "呼吸と腹圧: 体幹安定の作り方" },
    { title: "安全な負荷の上げ方: フォームを守って進める" },
  ],
  "安全管理": [
    { title: "最優先は安全: スクリーニングと運動可否判断" },
    { title: "レッドフラッグ: 紹介（医療連携）の目安" },
    { title: "緊急時対応: 現場での初動と連絡手順" },
    { title: "事故予防: セッション前チェックリスト" },
  ],
  "ビジネス・コミュニケーション": [
    { title: "信頼を作る: 説明力・提案力・ヒアリング" },
    { title: "キューイングの原則: 1回に1つ、短く具体的に" },
    { title: "継続支援: 期待値調整と振り返り" },
    { title: "記録と報告: “できた”を可視化して伸ばす" },
  ],
  "特殊集団対応": [
    { title: "状況別の配慮: 高齢者・妊娠・慢性疾患の基本" },
    { title: "禁忌/注意事項: まず確認する3点" },
    { title: "強度の目安: 会話できる強度から始める" },
    { title: "迷った時: 無理に進めず医療連携する" },
  ],
};

function makeCptLectureId(category: CptBasicsCategory, index: number) {
  const slug = CPT_CATEGORY_SLUG[category];
  const n = String(index + 1).padStart(2, "0");
  return `cpt-${slug}-${n}`;
}

function stubContent(category: string, title: string) {
  return `
    <h2>${category}</h2>
    <h3>${title}</h3>
    <p>準備中</p>
  `;
}

// CPT basics curriculum (skeleton).
// Keep IDs unique across the whole app because read-status is stored by lecture_id.
export const cptLectures: Lecture[] = CPT_BASICS_CATEGORIES.flatMap((category) =>
  CPT_LECTURE_SEEDS[category].map((seed, index) => ({
    id: makeCptLectureId(category, index),
    category,
    title: seed.title,
    excerpt: seed.excerpt ?? "準備中",
    readTime: seed.readTime ?? 3,
    content: seed.content ?? stubContent(category, seed.title),
  }))
);
