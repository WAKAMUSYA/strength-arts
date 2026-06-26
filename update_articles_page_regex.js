const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'app', '(public)', 'lab', 'benchpress', 'articles', 'page.tsx');
let content = fs.readFileSync(file, 'utf8');

const regex = /<span>応用・探究コラム<\/span>\s*<\/button>\s*<\/div>/g;
const replacement = `<span>応用・探究コラム</span>
          </button>
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
          </button>
        </div>`;

if (regex.test(content)) {
    content = content.replace(regex, replacement);
    fs.writeFileSync(file, content);
    console.log('Successfully updated benchpress/articles/page.tsx with regex');
} else {
    console.log('Target not found with regex either.');
}
