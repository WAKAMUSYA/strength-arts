const fs = require('fs');
let data = fs.readFileSync('data/hypertrophyArticles.ts', 'utf8');
data = data.replace(/level:\s*'初級〜中級'/g, "level: '中級'");
data = data.replace(/level:\s*'中級〜上級'/g, "level: '上級'");
fs.writeFileSync('data/hypertrophyArticles.ts', data);
console.log("Fixed levels");
