import fs from 'fs';

const text = fs.readFileSync('data/benchpressArticles.ts', 'utf8');

// Use a regex that grabs the full object from { id: ... to conclusion: ... }
const regex = /\{\s*id:\s*'col-(6|9|10|11|13)'[\s\S]*?conclusion:.*?'\s*\}/g;
const matches = [];
let match;
while ((match = regex.exec(text)) !== null) {
  matches.push(match[0]);
}

if (matches.length === 0) {
  console.log("No matches found");
  process.exit(1);
}

let specialText = fs.readFileSync('data/specialArticles.ts', 'utf8');
// Remove trailing closing bracket
specialText = specialText.replace(/]\s*$/, '');

specialText += ',\n\n  /* =========================================================================\n     3. CROSSOVER (ベンチプレス研究所からの再掲集：武道・身体操作関連)\n     ========================================================================= */\n';

const appendedItems = matches.map(m => m.replace(/id:\s*'col-(\d+)'/, "id: 'bp-c$1'"));
specialText += appendedItems.map(item => '  ' + item).join(',\n');
specialText += '\n]\n';

fs.writeFileSync('data/specialArticles.ts', specialText);
console.log("Successfully appended articles to specialArticles.ts");
