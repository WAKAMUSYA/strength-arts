const fs = require('fs');
let data = fs.readFileSync('app/(public)/lab/benchpress/articles/page.tsx', 'utf8');

// Add imports
data = data.replace(
  "import { BENCHPRESS_ARTICLES } from '@/data/benchpressArticles'",
  "import { BENCHPRESS_ARTICLES } from '@/data/benchpressArticles'\nimport { getBulkArticleStatus } from '@/app/actions/sa-member'\nimport { CheckCircle2 } from 'lucide-react'"
);

// Add state and effect
const stateToAdd = `
  const [statuses, setStatuses] = useState<Record<string, { isFavorite: boolean; isRead: boolean }>>({})

  useEffect(() => {
    const fetchStatuses = async () => {
      const ids = BENCHPRESS_ARTICLES.map(art => \`benchpress/\${art.slug}\`)
      try {
        const res = await getBulkArticleStatus(ids)
        setStatuses(res)
      } catch (e) {
        console.error(e)
      }
    }
    fetchStatuses()
  }, [])
`;

data = data.replace(
  "const [selectedObstacle, setSelectedObstacle] = useState<string | null>(initialObstacle)",
  "const [selectedObstacle, setSelectedObstacle] = useState<string | null>(initialObstacle)\n" + stateToAdd
);

// Modify the rendering inside map
const targetRender = `          <Link`;
const replaceRender = `
        {filteredArticles.map((art) => {
          const articleId = \`benchpress/\${art.slug}\`;
          const isRead = statuses[articleId]?.isRead;
          const isFavorite = statuses[articleId]?.isFavorite;
          
          return (
          <Link`;

data = data.replace(/\{filteredArticles\.map\(\(art\) => \(\s*<Link/g, replaceRender);

// End of map: from "          </Link>\n        ))}" to "          </Link>\n        )})}"
data = data.replace(/<\/Link>\s*\)\)}/g, "</Link>\n          )\n        })}");

// Add read indicator to the card UI (top meta tags area)
const metaTags = `<div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 border-b border-zinc-900/60 pb-3">`;
const newMetaTags = `
              <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 border-b border-zinc-900/60 pb-3">
                <div className="flex items-center gap-3">
                  <span className="uppercase tracking-widest text-blue-450 font-extrabold flex items-center gap-1">
                    <Bookmark className="w-3.5 h-3.5 text-blue-500" /> {art.category}
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

data = data.replace(/<div className="flex items-center justify-between text-\[10px\] font-mono text-zinc-500 border-b border-zinc-900\/60 pb-3">\s*<span className="uppercase tracking-widest text-blue-450 font-extrabold flex items-center gap-1">\s*<Bookmark className="w-3\.5 h-3\.5 text-blue-500" \/> \{art\.category\}\s*<\/span>/, newMetaTags);

fs.writeFileSync('app/(public)/lab/benchpress/articles/page.tsx', data);
console.log('List Refactoring complete');
