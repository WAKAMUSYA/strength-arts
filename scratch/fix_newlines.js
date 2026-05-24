const fs = require('fs');
const path = require('path');

const labDir = 'c:\\\\Users\\\\PSPO-Office2\\\\nt\\\\strength-arts\\\\app\\\\(public)\\\\lab';
const subdirs = fs.readdirSync(labDir).filter(f => fs.statSync(path.join(labDir, f)).isDirectory());

subdirs.forEach(sport => {
  const articleFilePath = path.join(labDir, sport, '[slug]', 'page.tsx');
  if (fs.existsSync(articleFilePath)) {
    let content = fs.readFileSync(articleFilePath, 'utf8');
    
    // Fix literal \n
    content = content.replace(/\\\\n/g, '\\n');
    
    // Remove unused router
    content = content.replace(/\\s*const router = useRouter\\(\\)\\s*/, '\\n  ');
    
    fs.writeFileSync(articleFilePath, content);
  }

  const listFilePath = path.join(labDir, sport, 'articles', 'page.tsx');
  if (fs.existsSync(listFilePath)) {
    let content = fs.readFileSync(listFilePath, 'utf8');
    
    content = content.replace(/\\\\n/g, '\\n');
    
    fs.writeFileSync(listFilePath, content);
  }
});
console.log('Fixed literal newlines');
