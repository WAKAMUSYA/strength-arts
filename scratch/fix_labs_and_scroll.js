const fs = require('fs');
const path = require('path');

const labDir = 'c:\\\\Users\\\\PSPO-Office2\\\\nt\\\\strength-arts\\\\app\\\\(public)\\\\lab';
const subdirs = fs.readdirSync(labDir).filter(f => fs.statSync(path.join(labDir, f)).isDirectory());

subdirs.forEach(sport => {
  const articleFilePath = path.join(labDir, sport, '[slug]', 'page.tsx');
  if (fs.existsSync(articleFilePath)) {
    let content = fs.readFileSync(articleFilePath, 'utf8');
    let modified = false;

    if (content.includes('const router = useRouter()') && content.includes('router.back()')) {
      const btnStart = content.indexOf('<button');
      const btnEnd = content.indexOf('</button>', btnStart) + 9;
      if (btnStart !== -1 && btnEnd !== -1) {
        const btnStr = content.substring(btnStart, btnEnd);
        
        if (btnStr.includes('BACK TO LAB')) {
          const colorMatch = btnStr.match(/text-([a-z]+)-500/);
          const color = colorMatch ? colorMatch[1] : 'zinc';
          
          const replacement = '<Link\\n' +
              '            href="/lab/' + sport + '"\\n' +
              '            className="text-xs font-mono font-bold text-zinc-400 hover:text-' + color + '-500 transition-colors inline-flex items-center gap-1.5 cursor-pointer"\\n' +
              '          >\\n' +
              '            <ArrowLeft className="w-4 h-4" /> BACK TO LAB\\n' +
              '          </Link>';
            
          content = content.replace(btnStr, replacement);
          
          content = content.replace("\\n  const router = useRouter()\\n", "\\n");
          content = content.replace(", useRouter } from 'next/navigation'", " } from 'next/navigation'");
          modified = true;
        }
      }
    }

    if (!content.includes('コラム一覧へ戻る') && content.includes('<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">')) {
      const colorMatch = content.match(/text-([a-z]+)-500/);
      const color = colorMatch ? colorMatch[1] : 'zinc';
      
      const bottomNavStr = '      {/* 🚀 BOTTOM NAVIGATION */}\\n' +
      '      <div className="max-w-4xl mx-auto px-6 mt-16">\\n' +
      '        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">';
      
      const replacementStr = '      {/* 🚀 BOTTOM NAVIGATION */}\\n' +
      '      <div className="max-w-4xl mx-auto px-6 mt-16">\\n' +
      '        \\n' +
      '        <div className="flex justify-center mb-12">\\n' +
      '          <Link \\n' +
      '            href="/lab/' + sport + '/articles" \\n' +
      '            className="px-8 py-4 rounded-full bg-zinc-900 hover:bg-' + color + '-950/50 border border-zinc-800 hover:border-' + color + '-900 text-sm font-bold text-zinc-300 hover:text-' + color + '-400 transition-all flex items-center gap-2"\\n' +
      '          >\\n' +
      '            <ArrowLeft className="w-4 h-4" /> コラム一覧へ戻る\\n' +
      '          </Link>\\n' +
      '        </div>\\n' +
      '\\n' +
      '        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">';
        
      if (content.includes(bottomNavStr)) {
        content = content.replace(bottomNavStr, replacementStr);
        modified = true;
      }
    }

    if (!content.includes('window.scrollTo(0, 0)')) {
      if (!content.includes('useEffect')) {
        content = content.replace(/import React/, "import React, { useEffect }");
      }
      const componentStart = content.indexOf('export default function');
      if (componentStart !== -1) {
        const bodyStart = content.indexOf('{', componentStart) + 1;
        content = content.slice(0, bodyStart) + '\\n  useEffect(() => {\\n    window.scrollTo(0, 0);\\n  }, []);\\n' + content.slice(bodyStart);
        modified = true;
      }
    }

    if (modified) {
      fs.writeFileSync(articleFilePath, content);
      console.log('Updated ' + sport + ' article details.');
    }
  }

  const listFilePath = path.join(labDir, sport, 'articles', 'page.tsx');
  if (fs.existsSync(listFilePath)) {
    let content = fs.readFileSync(listFilePath, 'utf8');
    let modified = false;

    if (!content.includes('window.scrollTo(0, 0)')) {
      if (!content.includes('useEffect')) {
        content = content.replace(/import React/, "import React, { useEffect }");
      }
      
      const componentStart = content.indexOf('export default function');
      if (componentStart !== -1) {
        const bodyStart = content.indexOf('{', componentStart) + 1;
        content = content.slice(0, bodyStart) + '\\n  useEffect(() => {\\n    window.scrollTo(0, 0);\\n  }, []);\\n' + content.slice(bodyStart);
        modified = true;
      }
    }

    if (modified) {
      fs.writeFileSync(listFilePath, content);
      console.log('Updated ' + sport + ' articles list page.');
    }
  }
});
