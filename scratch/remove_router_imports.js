const fs = require('fs');
const path = require('path');

const labDir = 'c:\\\\Users\\\\PSPO-Office2\\\\nt\\\\strength-arts\\\\app\\\\(public)\\\\lab';
const subdirs = fs.readdirSync(labDir).filter(f => fs.statSync(path.join(labDir, f)).isDirectory());

subdirs.forEach(sport => {
  const articleFilePath = path.join(labDir, sport, '[slug]', 'page.tsx');
  if (fs.existsSync(articleFilePath)) {
    let content = fs.readFileSync(articleFilePath, 'utf8');
    
    // Remove `, useRouter` from imports
    content = content.replace(", useRouter } from 'next/navigation'", " } from 'next/navigation'");
    
    fs.writeFileSync(articleFilePath, content);
  }
});
console.log('Removed useRouter from imports');
