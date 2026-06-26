const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'app', '(public)', 'lab', 'benchpress', 'articles', 'page.tsx');
let content = fs.readFileSync(file, 'utf8');

const target = `          <button
            onClick={() => handleTabChange('applied')}
            className={\`flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-1.5 py-2 sm:py-3.5 px-1 sm:px-3 rounded-xl font-bold text-[10px] sm:text-xs transition-all duration-300 cursor-pointer \${
              activeTab === 'applied'
                ? 'bg-gradient-to-r from-zinc-900 to-zinc-850 border border-zinc-800 text-white shadow-md'
                : 'text-zinc-550 hover:text-zinc-300'
            }\`}
          >
            <Layers className={\`w-4 h-4 \${activeTab === 'applied' ? 'text-blue-400' : 'text-zinc-600'}\`} />
            <span>応用・探究コラム</span>
          </button>`;

const replacement = target + `
          <button
            onClick={() => handleTabChange('program')}
            className={\`flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-1.5 py-2 sm:py-3.5 px-1 sm:px-3 rounded-xl font-bold text-[10px] sm:text-xs transition-all duration-300 cursor-pointer \${
              activeTab === 'program'
                ? 'bg-gradient-to-r from-emerald-950/60 to-emerald-900/40 border border-emerald-800/40 text-white shadow-md'
                : 'text-zinc-550 hover:text-zinc-300'
            }\`}
          >
            <Activity className={\`w-4 h-4 \${activeTab === 'program' ? 'text-emerald-400' : 'text-zinc-600'}\`} />
            <span>実践プログラム</span>
          </button>`;

if (content.includes(target)) {
    content = content.replace(target, replacement);
    fs.writeFileSync(file, content);
    console.log('Successfully updated benchpress/articles/page.tsx');
} else {
    // If exact match fails, let's just do a simpler search for the exact "応用・探究コラム</span>" and replace around it.
    const fallbackTarget = `            <span>応用・探究コラム</span>\n          </button>`;
    if (content.includes(fallbackTarget)) {
        content = content.replace(fallbackTarget, fallbackTarget + `\n          <button\n            onClick={() => handleTabChange('program')}\n            className={\`flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-1.5 py-2 sm:py-3.5 px-1 sm:px-3 rounded-xl font-bold text-[10px] sm:text-xs transition-all duration-300 cursor-pointer \${\n              activeTab === 'program'\n                ? 'bg-gradient-to-r from-emerald-950/60 to-emerald-900/40 border border-emerald-800/40 text-white shadow-md'\n                : 'text-zinc-550 hover:text-zinc-300'\n            }\`}\n          >\n            <Activity className={\`w-4 h-4 \${activeTab === 'program' ? 'text-emerald-400' : 'text-zinc-600'}\`} />\n            <span>実践プログラム</span>\n          </button>`);
        fs.writeFileSync(file, content);
        console.log('Successfully updated benchpress/articles/page.tsx (fallback)');
    } else {
        console.log('Target not found.');
    }
}
