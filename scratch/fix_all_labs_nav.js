const fs = require('fs');
const path = require('path');

const labDir = 'c:\\Users\\PSPO-Office2\\nt\\strength-arts\\app\\(public)\\lab';
const subdirs = fs.readdirSync(labDir).filter(f => fs.statSync(path.join(labDir, f)).isDirectory());

subdirs.forEach(sport => {
  const filePath = path.join(labDir, sport, '[slug]', 'page.tsx');
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // 1. Replace useRouter import
    if (content.includes('const router = useRouter()') && content.includes('router.back()')) {
      // It's using router.back(), so let's replace the top navigation
      content = content.replace(
        /<button\s+onClick=\{\(\) => router\.back\(\)\}\s+className="text-xs font-mono font-bold text-zinc-400 hover:text-([a-z]+)-500 transition-colors inline-flex items-center gap-1\.5 cursor-pointer"\s*>\s*<ArrowLeft className="w-4 h-4" \/> BACK TO LAB\s*<\/button>/g,
        (match, color) => `<Link
            href="/lab/${sport}"
            className="text-xs font-mono font-bold text-zinc-400 hover:text-${color}-500 transition-colors inline-flex items-center gap-1.5 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> BACK TO LAB
          </Link>`
      );
      
      // Remove const router = useRouter()
      content = content.replace(/\s*const router = useRouter\(\)\n/, '\n');
      
      // We can also clean up the import if it's there
      content = content.replace(/, useRouter } from 'next\/navigation'/, " } from 'next/navigation'");
      
      modified = true;
    }

    // 2. Add the "コラム一覧へ戻る" button at the bottom if not present
    if (!content.includes('コラム一覧へ戻る') && content.includes('<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">')) {
      // Extract the color theme used in that file (e.g., text-blue-500)
      const colorMatch = content.match(/text-([a-z]+)-500/);
      const color = colorMatch ? colorMatch[1] : 'zinc';
      
      const bottomNavStr = `      {/* 🚀 BOTTOM NAVIGATION */}
      <div className="max-w-4xl mx-auto px-6 mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">`;
      
      const replacementStr = `      {/* 🚀 BOTTOM NAVIGATION */}
      <div className="max-w-4xl mx-auto px-6 mt-16">
        
        <div className="flex justify-center mb-12">
          <Link 
            href="/lab/${sport}/articles" 
            className="px-8 py-4 rounded-full bg-zinc-900 hover:bg-${color}-950/50 border border-zinc-800 hover:border-${color}-900 text-sm font-bold text-zinc-300 hover:text-${color}-400 transition-all flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" /> コラム一覧へ戻る
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">`;
        
      content = content.replace(bottomNavStr, replacementStr);
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(\`Updated \${sport} lab article page.\`);
    }
  }
});
