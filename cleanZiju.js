const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data', 'zijuArticles.ts');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Remove meta phrases
content = content.replace(/、[^、。]*2000文字[^。]*。/g, '。');
content = content.replace(/2000文字[^。]*。/g, '');
content = content.replace(/。。/g, '。');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Removed meta phrases.');
