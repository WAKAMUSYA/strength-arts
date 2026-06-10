const fs = require('fs');
const path = require('path');

const zijuDir = path.join(__dirname, 'app', '(public)', 'lab', 'ziju');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace data imports
  content = content.replace(/benchpressArticles/g, 'zijuArticles');
  content = content.replace(/BENCHPRESS_ARTICLES/g, 'ZIJU_ARTICLES');
  
  // Replace text
  content = content.replace(/ベンチプレス研究所/g, '自重トレーニング研究所');
  content = content.replace(/ベンチプレス/g, '自重トレーニング');
  
  // Replace paths and slugs
  content = content.replace(/\/lab\/benchpress/g, '/lab/ziju');
  
  // Replace hero image
  content = content.replace(/\/benchpress\.jpg/g, '/ziju.jpg');
  content = content.replace(/benchpress1\.jpg/g, 'ziju1.jpg');
  content = content.replace(/bg-\[url\('\/benchpress\.jpg'\)\]/g, "bg-[url('/ziju.jpg')]");

  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Processed:', filePath);
}

function processDir(dirPath) {
  const files = fs.readdirSync(dirPath);
  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      replaceInFile(fullPath);
    }
  }
}

processDir(zijuDir);
console.log('All ziju files processed.');
