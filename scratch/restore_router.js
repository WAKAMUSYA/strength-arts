const fs = require('fs');
const path = require('path');

const labDir = 'c:\\\\Users\\\\PSPO-Office2\\\\nt\\\\strength-arts\\\\app\\\\(public)\\\\lab';
const subdirs = fs.readdirSync(labDir).filter(f => fs.statSync(path.join(labDir, f)).isDirectory());

subdirs.forEach(sport => {
  const listFilePath = path.join(labDir, sport, 'articles', 'page.tsx');
  if (fs.existsSync(listFilePath)) {
    let content = fs.readFileSync(listFilePath, 'utf8');
    
    // Add useRouter back to imports
    if (!content.includes('useRouter')) {
      content = content.replace(/import \{ useSearchParams \} from 'next\/navigation'/, "import { useSearchParams, useRouter } from 'next/navigation'");
    }
    
    // Add const router = useRouter() inside the component, before const searchParams
    if (!content.includes('const router = useRouter()')) {
      content = content.replace(/const searchParams = useSearchParams\(\)/, 'const router = useRouter()\\n  const searchParams = useSearchParams()');
    }
    
    fs.writeFileSync(listFilePath, content);
  }
});
console.log('Restored useRouter for articles pages');
