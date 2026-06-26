const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'app', '(public)', 'lab', 'benchpress', 'articles', 'page.tsx');
let content = fs.readFileSync(file, 'utf8');

// 4. Inject Overlay (robust regex)
// We look for:
// <Link ... className="... group ...">
//   {/* Soft decorative accent glow */}
//   <div className="absolute top-0 right-0 ...
const regex = /(<Link[\s\S]*?className="[^"]*group[^"]*"[\s\S]*?>\s*)({\/\* Soft decorative accent glow \*\/})/g;

if (content.match(regex) && !content.includes('Hover overlay for non-members')) {
    content = content.replace(regex, `$1{/* Hover overlay for non-members */}
            {isAuthenticated === false && (
              <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 flex items-center justify-center rounded-2xl pointer-events-none">
                <div className="bg-zinc-900 border border-zinc-800 text-white text-xs font-bold px-5 py-3 rounded-full flex items-center gap-2 shadow-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <Lock className="w-4 h-4 text-blue-400" />
                  会員限定コンテンツ（一部無料公開）
                </div>
              </div>
            )}

            $2`);
    fs.writeFileSync(file, content);
    console.log('Successfully injected overlay via regex');
} else {
    console.log('Could not find match or already injected');
}
