const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'app', '(public)', 'lab', 'benchpress', 'page.tsx');
let content = fs.readFileSync(file, 'utf8');

const target1 = `  const roadmapSteps = useMemo(() => {`;
const replacement1 = `  const programArticles = useMemo(() => {
    return BENCHPRESS_ARTICLES.filter(art => art.type === 'program')
  }, [])

  const roadmapSteps = useMemo(() => {`;

const target2 = `{/* ----------------- SECTION ③: 基本から順番に読む「ロードマップ」 ----------------- */}`;
const replacement2 = `{/* ----------------- SECTION PROGRAM: 実践プログラム ----------------- */}
      <section className="py-20 bg-zinc-950/10 border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center space-y-3 mb-12">
            <span className="text-[10px] font-extrabold text-blue-400 tracking-wider uppercase block">
              TRAINING PROGRAMS
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
              実践プログラム
            </h2>
            <p className="text-xs text-zinc-450 max-w-xl mx-auto leading-relaxed font-light">
              目的に合わせて設計された、すぐにジムで使える具体的なトレーニングプログラム。
            </p>
          </div>

          <div className="overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-zinc-950 flex gap-6 -mx-6 px-6">
            {programArticles.map((art, idx) => (
              <Link
                key={art.id}
                href={\`/lab/benchpress/\${art.slug}\`}
                className="w-[280px] md:w-[350px] shrink-0 bg-zinc-950 border border-zinc-900 hover:border-blue-900/50 rounded-xl p-4 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-blue-900/10 cursor-pointer relative"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl pointer-events-none" />

                <div className="space-y-4 relative z-10">
                  <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden bg-zinc-900 border border-zinc-800">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
                    <img
                      src={art.image}
                      alt={art.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                    <span className="absolute top-2 left-2 z-20 text-[8px] font-extrabold text-blue-400 bg-zinc-950/90 border border-blue-900/50 px-2 py-0.5 rounded tracking-widest uppercase">
                      PROGRAM 0{idx + 1}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[9px] font-mono text-zinc-500">
                      <span className="uppercase tracking-widest text-blue-450 font-semibold">{art.category}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {art.readTime}</span>
                    </div>

                    <h3 className="text-sm md:text-base font-bold text-white group-hover:text-blue-400 transition-colors leading-snug">
                      {art.title}
                    </h3>

                    <p className="text-xs text-zinc-400 leading-relaxed font-light line-clamp-3">
                      {art.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-zinc-900 flex items-center justify-between text-[10px] font-mono text-zinc-500 relative z-10">
                  <span className="bg-zinc-900 text-zinc-400 border border-zinc-850 px-2.5 py-0.5 rounded text-[8px] uppercase tracking-wider font-semibold">LEVEL: {art.level}</span>
                  <span className="text-zinc-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all flex items-center gap-1 font-bold">
                    実践する <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link
              href="/lab/benchpress/articles?tab=program"
              className="relative inline-flex items-center gap-2 bg-gradient-to-r from-zinc-900/70 to-zinc-850/50 hover:from-blue-950/50 hover:to-blue-900/30 border border-zinc-800 hover:border-blue-700 text-white font-bold text-xs md:text-sm px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 tracking-wider group cursor-pointer"
            >
              <Activity className="w-4 h-4 text-blue-400 group-hover:text-blue-300 group-hover:scale-110 transition-all shrink-0" />
              <span>すべての実践プログラムを見る</span>
              <ChevronRight className="w-4 h-4 text-blue-500 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

        </div>
      </section>

{/* ----------------- SECTION ③: 基本から順番に読む「ロードマップ」 ----------------- */}`;

content = content.replace(target1, replacement1);
content = content.replace(target2, replacement2);

fs.writeFileSync(file, content);
console.log('Successfully updated benchpress/page.tsx');
