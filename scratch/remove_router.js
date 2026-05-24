const fs = require('fs');
const path = require('path');

const labDir = 'c:\\\\Users\\\\PSPO-Office2\\\\nt\\\\strength-arts\\\\app\\\\(public)\\\\lab';
const subdirs = fs.readdirSync(labDir).filter(f => fs.statSync(path.join(labDir, f)).isDirectory());

subdirs.forEach(sport => {
  const articleFilePath = path.join(labDir, sport, '[slug]', 'page.tsx');
  if (fs.existsSync(articleFilePath)) {
    let content = fs.readFileSync(articleFilePath, 'utf8');
    
    // Remove `const router = useRouter()`
    content = content.replace(/\\s*const router = useRouter\\(\\)/g, '');
    
    // Remove `, useRouter` from imports
    content = content.replace(/, useRouter }/g, ' }');
    
    fs.writeFileSync(articleFilePath, content);
  }
  
  const listFilePath = path.join(labDir, sport, 'articles', 'page.tsx');
  if (fs.existsSync(listFilePath)) {
    let content = fs.readFileSync(listFilePath, 'utf8');
    
    content = content.replace(/\\s*const router = useRouter\\(\\)/g, '');
    content = content.replace(/, useRouter }/g, ' }');
    
    fs.writeFileSync(listFilePath, content);
  }
});
console.log('Removed all useRouter calls');
