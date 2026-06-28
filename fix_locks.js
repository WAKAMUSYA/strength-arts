const fs = require('fs');
const path = require('path');

const labDir = path.join(__dirname, 'app', '(public)', 'lab');
const dirs = fs.readdirSync(labDir).filter(f => fs.statSync(path.join(labDir, f)).isDirectory());

const lockUI = `        {isLocked ? (
          <div className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-900 shadow-sm text-center space-y-6 mb-20">
            <div className="w-16 h-16 bg-blue-950/30 border border-blue-900/50 text-blue-400 rounded-full flex items-center justify-center mx-auto">
              <Lock className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-bold text-white">
                PROプラン限定コンテンツ
              </h2>
              <p className="text-sm text-zinc-400 max-w-md mx-auto leading-relaxed">
                {!user 
                  ? 'この実践プログラムを読むには、PROプランへのアップグレードが必要です。まずはログインまたは無料メンバー登録を行ってください。'
                  : 'この実践プログラムを読むには、月額500円のPROプランへのアップグレードが必要です。'}
              </p>
            </div>
            <div className="pt-4 flex items-center justify-center gap-4">
              {!user ? (
                <Link 
                  href="/login" 
                  className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                >
                  ログイン / 登録する
                </Link>
              ) : (
                <Link 
                  href="/dashboard" 
                  className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                >
                  ダッシュボードからアップグレード
                </Link>
              )}
            </div>
          </div>
        ) : (
          <>`;

for (const cat of dirs) {
  if (cat === 'benchpress') continue;

  const slugPagePath = path.join(labDir, cat, '[slug]', 'page.tsx');

  if (fs.existsSync(slugPagePath)) {
    let slugCode = fs.readFileSync(slugPagePath, 'utf8');
    
    if (!slugCode.includes('isLocked ? (')) {
      slugCode = slugCode.replace(/\{\/\*\s*Overview Box\s*(?:\/\s*要約)?\s*\*\/\}/, match => `${lockUI}\n        ${match}`);
      
      fs.writeFileSync(slugPagePath, slugCode);
      console.log(`Fixed ${cat}/[slug]/page.tsx`);
    }
  }
}
