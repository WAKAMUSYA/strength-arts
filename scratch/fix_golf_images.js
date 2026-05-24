const fs = require('fs');

const dataPath = 'c:\\Users\\PSPO-Office2\\nt\\strength-arts\\data\\golfArticles.ts';
let content = fs.readFileSync(dataPath, 'utf8');

let counter = 1;
content = content.replace(/image:\s*['"][^'"]*['"]/g, () => {
  const img = `/golf/golf${counter}.jpg`;
  counter = counter >= 10 ? 1 : counter + 1;
  return `image: '${img}'`;
});

fs.writeFileSync(dataPath, content);
console.log('Fixed image paths in golfArticles.ts');
