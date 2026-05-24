const fs = require('fs');
const path = require('path');

const labDir = 'c:\\\\Users\\\\PSPO-Office2\\\\nt\\\\strength-arts\\\\app\\\\(public)\\\\lab';
const subdirs = fs.readdirSync(labDir).filter(f => fs.statSync(path.join(labDir, f)).isDirectory());

subdirs.forEach(sport => {
  const listFilePath = path.join(labDir, sport, 'articles', 'page.tsx');
  if (fs.existsSync(listFilePath)) {
    let content = fs.readFileSync(listFilePath, 'utf8');
    
    // Add useRouter back to imports if missing
    if (!content.includes('useRouter')) {
      content = content.replace("import { useSearchParams } from 'next/navigation'", "import { useSearchParams, useRouter } from 'next/navigation'");
      content = content.replace("import { useSearchParams, notFound } from 'next/navigation'", "import { useSearchParams, notFound, useRouter } from 'next/navigation'");
      content = content.replace("import { notFound, useSearchParams } from 'next/navigation'", "import { notFound, useSearchParams, useRouter } from 'next/navigation'");
    }
    
    fs.writeFileSync(listFilePath, content);
  }
});
console.log('Restored useRouter for articles pages using string replacement');
