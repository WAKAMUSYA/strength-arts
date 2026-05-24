const fs = require('fs');
const path = require('path');

const labDir = 'c:\\\\Users\\\\PSPO-Office2\\\\nt\\\\strength-arts\\\\app\\\\(public)\\\\lab';
const subdirs = ['abs', 'arms', 'back', 'legs', 'shoulder', 'squat'];

subdirs.forEach(sport => {
  const articleFilePath = path.join(labDir, sport, '[slug]', 'page.tsx');
  if (fs.existsSync(articleFilePath)) {
    let content = fs.readFileSync(articleFilePath, 'utf8');
    
    if (!content.includes('コラム一覧へ戻る') && content.includes('<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">')) {
      const colorMatch = content.match(/text-([a-z]+)-500/);
      const color = colorMatch ? colorMatch[1] : 'zinc';
      
      const gridTarget = '<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">';
      
      const replacement = '<div className="flex justify-center mb-12">\\n' +
        '          <Link \\n' +
        '            href="/lab/' + sport + '/articles" \\n' +
        '            className="px-8 py-4 rounded-full bg-zinc-900 hover:bg-' + color + '-950/50 border border-zinc-800 hover:border-' + color + '-900 text-sm font-bold text-zinc-300 hover:text-' + color + '-400 transition-all flex items-center gap-2"\\n' +
        '          >\\n' +
        '            <ArrowLeft className="w-4 h-4" /> コラム一覧へ戻る\\n' +
        '          </Link>\\n' +
        '        </div>\\n\\n        ' + gridTarget;
        
      content = content.replace(gridTarget, replacement);
      fs.writeFileSync(articleFilePath, content);
      console.log('Added bottom nav to ' + sport);
    }
  }
});
