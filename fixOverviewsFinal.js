const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data', 'zijuArticles.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Replacements for broken overviews
const fixes = {
  "高度なフォーム調整について。": "高度なフォーム調整について解説します。",
  "下方回旋のメカニズム。": "下方回旋のメカニズムと、腕引きの罠から脱却するアプローチを解説します。",
  "股関節の屈曲力学に至るまで。": "股関節の屈曲力学に至るまでを徹底解剖します。",
  "安全な可動域の設定について。": "安全な可動域の設定について深掘りします。",
  "圧縮（コンプレッション）の概念について。": "圧縮（コンプレッション）の概念について徹底解説します。",
  "アイソメトリクスを構築するかについて。": "アイソメトリクスを構築するかについて力学的に解剖します。",
  "アンテリア・チェーン（前面連鎖）の強力な緊張。": "アンテリア・チェーン（前面連鎖）の強力な緊張と、二頭筋腱への負荷管理について解き明かします。",
  "精密な科学として。": "精密な科学として徹底解剖します。",
  "腸腰筋の神経発火について。": "腸腰筋の神経発火について徹底解説します。",
  "「ストレッチ・ショートニング・サイクル（SSC）」のメカニズムと。": "「ストレッチ・ショートニング・サイクル（SSC）」のメカニズムと、着地の衝撃をエネルギーに変換するバイオメカニクスについて深掘りします。",
  "骨盤コントロールについて。": "骨盤コントロールについて徹底解析します。",
  "リング特有のバイオメカニクスと。": "リング特有のバイオメカニクスと、固有受容覚のパニックを乗り越える力学を解明します。",
  "段階的アプローチで解体し。": "段階的アプローチで解体し、爆発的な伸展力を空中で解放するメカニズムを解き明かします。"
};

for (const [bad, good] of Object.entries(fixes)) {
  // Use regex to replace to avoid string matching issues with newlines
  // Wait, these strings don't contain newlines. They are at the end of the overview paragraph.
  content = content.replace(bad, good);
}

// I should also check 8, 9, 10
content = content.replace("マッスルアップを徹底的に解剖します。\"", "マッスルアップのメカニズムを徹底的に解剖します。\"");
content = content.replace("物理学の観点からマッスルアップを\"", "物理学の観点からマッスルアップのメカニズムを徹底的に解剖します。\"");
content = content.replace("プログレッションについて\"", "プログレッションについて詳細に解説します。\"");
content = content.replace("プログレッションについて詳細に解説します。\"", "プログレッションについて詳細に解説します。\"");

fs.writeFileSync(filePath, content, 'utf8');
console.log('Fixed overviews accurately.');
