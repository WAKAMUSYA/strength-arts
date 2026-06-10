const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data', 'zijuArticles.ts');
let content = fs.readFileSync(filePath, 'utf8');

// The issue was sentences ending with:
// について。 -> について解説します。
// アプローチを。 -> アプローチを徹底解剖します。
// 至るまで。 -> 至るまで解剖します。
// 設定について。 -> 設定について深掘りします。
// マッスルアップを -> マッスルアップを徹底的に解剖します。
// プログレッションについて -> プログレッションについて詳細に解説します。

content = content.replace(/フォーム調整について。/g, 'フォーム調整について解説します。');
content = content.replace(/アプローチを。/g, 'アプローチを徹底解剖します。');
content = content.replace(/至るまで。/g, '至るまで解剖します。');
content = content.replace(/設定について。/g, '設定について深掘りします。');
content = content.replace(/メカニズム。/g, 'メカニズムを解説します。');
content = content.replace(/メカニズムについて。/g, 'メカニズムについて解説します。');

// Some of them didn't even have a period because my regex stripped the end.
content = content.replace(/マッスルアップを"/g, 'マッスルアップを徹底的に解剖します。"');
content = content.replace(/プログレッションについて"/g, 'プログレッションについて詳細に解説します。"');
content = content.replace(/から"/g, 'から解き明かします。"');
content = content.replace(/で"/g, 'で深掘りします。"');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Fixed broken overview endings.');
