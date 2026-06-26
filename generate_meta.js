const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data');
const files = fs.readdirSync(dataDir).filter(f => f.endsWith('Articles.ts') || f.endsWith('Mock.ts'));

const metaMap = {};

files.forEach(file => {
  const content = fs.readFileSync(path.join(dataDir, file), 'utf8');
  
  // A naive regex to extract slug, title, category, level
  // Since the files are TS, evaluating them directly might be tricky due to exports, 
  // but regex on the object literals works well enough.
  const articleRegex = /slug:\s*'([^']+)',\s*title:\s*'([^']+)',.*?category:\s*'([^']+)',.*?level:\s*'([^']+)'/gs;
  
  let match;
  while ((match = articleRegex.exec(content)) !== null) {
    const slug = match[1];
    const title = match[2];
    const category = match[3];
    const level = match[4];
    
    // We can infer the labName from the file name, e.g. squatArticles.ts -> squat
    // Or from the prefix if we have it, but for simplicity we'll just store by slug
    // Wait, the articleId in DB is `labName/slug`. 
    // We don't strictly know the labName just from the slug unless we map filename to labName.
    let labName = file.replace('Articles.ts', '').replace('Mock.ts', '');
    if (labName === 'ziju') labName = 'bodyweight'; // just in case
    if (labName === 'leg') labName = 'legs';
    if (labName === 'arm') labName = 'arms';
    
    // Just store by slug to be safe, or slug as key
    metaMap[slug] = {
      title,
      category,
      level,
      labName
    };
  }
});

fs.writeFileSync(path.join(dataDir, 'articleMeta.json'), JSON.stringify(metaMap, null, 2));
console.log('Generated articleMeta.json');
