const fs = require('fs');
const path = require('path');

const labDir = 'c:\\\\Users\\\\PSPO-Office2\\\\nt\\\\strength-arts\\\\app\\\\(public)\\\\lab';
const subdirs = ['abs', 'arms', 'back', 'legs', 'shoulder', 'squat'];

subdirs.forEach(sport => {
  const articleFilePath = path.join(labDir, sport, '[slug]', 'page.tsx');
  if (fs.existsSync(articleFilePath)) {
    let content = fs.readFileSync(articleFilePath, 'utf8');
    
    // Replace literal '\n' string in the file with an actual newline character
    content = content.replace(/\\n/g, '\\n');
    
    fs.writeFileSync(articleFilePath, content);
  }
});
console.log('Fixed literal newlines in bottom nav');
