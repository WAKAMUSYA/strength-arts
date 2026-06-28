const fs = require('fs');
const path = require('path');

const labDir = path.join(__dirname, 'app', '(public)', 'lab');
const dirs = ['chest', 'golf', 'hypertrophy', 'power', 'ziju'];

for (const cat of dirs) {
  const slugPagePath = path.join(labDir, cat, '[slug]', 'page.tsx');
  const articlesPagePath = path.join(labDir, cat, 'articles', 'page.tsx');

  // --- 1. Modify [slug]/page.tsx ---
  if (fs.existsSync(slugPagePath)) {
    let slugCode = fs.readFileSync(slugPagePath, 'utf8');
    
    if (!slugCode.includes('getSAMemberStatus')) {
      // Remove 'use client'
      slugCode = slugCode.replace(/['"]use client['"];?\r?\n/g, '');

      // Add imports
      slugCode = slugCode.replace(/(import \{ .*?_ARTICLES \} from '.*?')/, `$1\nimport { getSAMemberStatus, getArticleStatus } from '@/app/actions/sa-member'\nimport { ArticleInteractions } from '@/app/components/sa/ArticleInteractions'`);
      slugCode = slugCode.replace(/import \{(.*?)\} from 'lucide-react'/s, (match, p1) => {
        if (!p1.includes('Lock')) {
          return `import {${p1}, Lock} from 'lucide-react'`;
        }
        return match;
      });
      slugCode = slugCode.replace(/import \{ ArticleInteractionsClient \} from '.*?';?\r?\n/g, '');
      
      // Fix next/navigation imports
      slugCode = slugCode.replace(/import \{ useParams\,? ?|useParams\,? ?\} from 'next\/navigation'\r?\n/g, '');
      slugCode = slugCode.replace(/useParams\s*,\s*/g, '');
      slugCode = slugCode.replace(/,\s*useParams/g, '');
      slugCode = slugCode.replace(/import\s*\{\s*useParams\s*\}\s*from\s*['"]next\/navigation['"];?\r?\n/g, '');
      // Ensure notFound is preserved if it was stripped
      slugCode = slugCode.replace(/^\} from 'next\/navigation'/m, "import { notFound } from 'next/navigation'");
      slugCode = slugCode.replace(/^notFound \} from 'next\/navigation'/m, "import { notFound } from 'next/navigation'");

      // Change to Server Component
      slugCode = slugCode.replace(/export default function (\w+)\(\) \{/, 'export default async function $1({ params }: { params: { slug: string } }) {');
      
      // Remove hooks
      slugCode = slugCode.replace(/\s*useEffect\(\(\) => \{\r?\n\s*window\.scrollTo\(0, 0\);\r?\n\s*\}, \[\]\);\r?\n/g, '');
      slugCode = slugCode.replace(/\s*const params = useParams\(\)\r?\n/g, '');
      slugCode = slugCode.replace(/\s*const slug = params\?\.slug as string/g, '\n  const { slug } = params');
      slugCode = slugCode.replace(/\s*const slug = params\.slug as string/g, '\n  const { slug } = params');

      // Add Auth Logic and Lock Block
      const lockLogic = `
  const { isMember, user } = await getSAMemberStatus()
  const articleId = \`${cat}/\${slug}\`
  const { isFavorite, isRead } = await getArticleStatus(articleId)

  // 閲覧制限のロジック
  // 非会員(A)および無料会員(B)はprogram記事のみブロック（基本理論・応用コラムは閲覧可能）
  // 有料会員(C)はすべて閲覧可能
  const isLocked = (!isMember && article.type === 'program');
`;

      slugCode = slugCode.replace(/\s*\/\/\s*ノートのタイプごとに適切なアイコンを返すヘルパー/, match => `\n${lockLogic}\n${match}`);

      const lockUI = `
        {isLocked ? (
          <div className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-900 shadow-sm text-center space-y-6 mb-20 mt-12">
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

      const overviewBoxRegex = /\{\/\*\s*Overview Box(?: \/ 要約)?\s*\*\/\}/;
      if (overviewBoxRegex.test(slugCode)) {
        slugCode = slugCode.replace(overviewBoxRegex, match => `${lockUI}\n        ${match}`);
      } else {
        slugCode = slugCode.replace(/(<article className="[^"]+">)/, `$1\n${lockUI}`);
      }
      
      slugCode = slugCode.replace(/<ArticleInteractionsClient .*?\/>/, `<ArticleInteractions \n          articleId={articleId} \n          initialIsFavorite={isFavorite} \n          initialIsRead={isRead} \n        />\n        </>\n        )}`);
      
      fs.writeFileSync(slugPagePath, slugCode);
      console.log(`Updated ${cat}/[slug]/page.tsx`);
    }
  }

  // --- 2. Modify articles/page.tsx ---
  if (fs.existsSync(articlesPagePath)) {
    let articlesCode = fs.readFileSync(articlesPagePath, 'utf8');

    if (!articlesCode.includes('getSAMemberStatus')) {
      articlesCode = articlesCode.replace(/(import \{ .*?_ARTICLES \} from '.*?')/, `$1\nimport { getBulkArticleStatus, getSAMemberStatus } from '@/app/actions/sa-member'\nimport { CheckCircle2, Lock } from 'lucide-react'`);
      
      const stateToAdd = `
  const [statuses, setStatuses] = useState<Record<string, { isFavorite: boolean; isRead: boolean }>>({})
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null)
  const [isMember, setIsMember] = useState<boolean | null>(null)

  useEffect(() => {
    const fetchStatuses = async () => {
      const ids = ${cat.toUpperCase()}_ARTICLES.map(art => \`${cat}/\${art.slug}\`)
      try {
        const res = await getBulkArticleStatus(ids)
        setStatuses(res)
      } catch (e) {
        console.error(e)
      }
    }
    
    const checkAuth = async () => {
      try {
        const status = await getSAMemberStatus()
        setIsLoggedIn(!!status.user)
        setIsMember(status.isMember)
      } catch (e) {
        console.error(e)
      }
    }

    checkAuth()
    fetchStatuses()
  }, [])
`;
      articlesCode = articlesCode.replace(/const \[selectedObstacle, setSelectedObstacle\] = useState<string \| null>\(initialObstacle\)/, match => `${match}\n${stateToAdd}`);

      const replaceRender = `
        {filteredArticles.map((art) => {
          const articleId = \`${cat}/\${art.slug}\`;
          const isRead = statuses[articleId]?.isRead;
          const isFavorite = statuses[articleId]?.isFavorite;
          
          return (
          <Link`;
      articlesCode = articlesCode.replace(/\{filteredArticles\.map\(\(art\) => \(\s*<Link/g, replaceRender);
      articlesCode = articlesCode.replace(/<\/Link>\s*\)\)}/g, "</Link>\n          )\n        })}");

      const lockOverlay = `
            {/* Hover overlay for program content (Non-PRO members) */}
            {isMember === false && art.type === 'program' && (
              <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 flex items-center justify-center rounded-2xl pointer-events-none">
                <div className="bg-zinc-900 border border-blue-900/50 text-white text-xs font-bold px-5 py-3 rounded-full flex items-center gap-2 shadow-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <Lock className="w-4 h-4 text-blue-400" />
                  PROプラン限定
                </div>
              </div>
            )}
            
            {/* Soft decorative accent glow */}`;
      articlesCode = articlesCode.replace(/\{\/\* Soft decorative accent glow \*\/\}/, lockOverlay);

      const newMetaTags = `
              <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 border-b border-zinc-900/60 pb-3">
                <div className="flex items-center gap-3">
                  <span className="uppercase tracking-widest font-extrabold flex items-center gap-1">
                    <Bookmark className="w-3.5 h-3.5" /> {art.category}
                  </span>
                  {isRead && (
                    <span className="flex items-center gap-1 text-emerald-500 font-bold bg-emerald-950/30 px-1.5 py-0.5 rounded border border-emerald-900/50">
                      <CheckCircle2 className="w-3 h-3" /> 既読
                    </span>
                  )}
                  {isFavorite && (
                    <span className="flex items-center gap-1 text-blue-400 font-bold bg-blue-950/30 px-1.5 py-0.5 rounded border border-blue-900/50">
                      <Bookmark className="w-3 h-3 fill-current" /> 保存済
                    </span>
                  )}
                </div>
`;
      articlesCode = articlesCode.replace(/<div className="flex items-center justify-between text-\[10px\] font-mono text-zinc-500 border-b border-zinc-900\/60 pb-3">\s*<span className="uppercase tracking-widest .*? font-extrabold flex items-center gap-1">\s*<Bookmark className="w-3\.5 h-3\.5.*?" \/> \{art\.category\}\s*<\/span>/, newMetaTags);

      fs.writeFileSync(articlesPagePath, articlesCode);
      console.log(`Updated ${cat}/articles/page.tsx`);
    }
  }
}
