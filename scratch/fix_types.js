const fs = require('fs');
const path = require('path');

const baseDir = 'c:\\Users\\PSPO-Office2\\nt\\strength-arts\\app\\(public)\\lab';
const labs = ['benchpress', 'deadlift', 'squat', 'power', 'chest', 'shoulder', 'back', 'abs', 'arms', 'legs'];

labs.forEach(lab => {
  const filePath = path.join(baseDir, lab, 'articles', 'page.tsx');
  if (!fs.existsSync(filePath)) return;

  let content = fs.readFileSync(filePath, 'utf-8');

  // Change useState<'basic' | 'applied'> to useState<'basic' | 'applied' | 'program'>
  if (content.includes("useState<'basic' | 'applied'>")) {
    content = content.replace(
      /useState\<'basic' \| 'applied'\>/g,
      "useState<'basic' | 'applied' | 'program'>"
    );
    fs.writeFileSync(filePath, content);
    console.log(`Updated useState type in ${lab}`);
  }
});
