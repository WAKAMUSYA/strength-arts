const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data', 'zijuArticles.ts');
let content = fs.readFileSync(filePath, 'utf8');

const fixes = {
  "どのように回転させるかという。": "どのように回転させるかというメカニズムを解説します。",
  "伸ばしていくプログレッションについて。": "伸ばしていくプログレッションについて詳細に解説します。",
  "プロトラクション（外転）。": "プロトラクション（外転）について徹底解説します。"
};

for (const [bad, good] of Object.entries(fixes)) {
  content = content.replace(bad, good);
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Fixed 8, 9, 10');
