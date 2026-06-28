const fs = require('fs');
const path = require('path');
const p = path.join(__dirname, 'data', 'hypertrophyArticles.ts');
let code = fs.readFileSync(p, 'utf8');
code = code.replace(/type: 'practical'/g, "type: 'program'");
fs.writeFileSync(p, code);
