const fs = require('fs');
let data = fs.readFileSync('app/(public)/lab/benchpress/[slug]/page.tsx', 'utf8');

// 1. Remove use client and useEffect
data = data.replace(/'use client'\s*import React, \{ useEffect \} from 'react'/, "import React from 'react'");

// 2. Add notFound and update lucide-react imports
data = data.replace("import { useParams } from 'next/navigation'", "import { notFound } from 'next/navigation'");
data = data.replace("AlertTriangle\r\n} from 'lucide-react'", "AlertTriangle,\r\n  Lock\r\n} from 'lucide-react'");
data = data.replace("AlertTriangle\n} from 'lucide-react'", "AlertTriangle,\n  Lock\n} from 'lucide-react'");

// 3. Add SA components
data = data.replace("import { BENCHPRESS_ARTICLES } from '@/data/benchpressArticles'", "import { BENCHPRESS_ARTICLES } from '@/data/benchpressArticles'\nimport { getSAMemberStatus, getArticleStatus } from '@/app/actions/sa-member'\nimport { ArticleInteractions } from '@/app/components/sa/ArticleInteractions'");

// 4. Update function signature
data = data.replace(/export default function ArticleDetailPage\(\) \{\s*useEffect\(\(\) => \{\s*window\.scrollTo\(0, 0\);\s*\}, \[\]\);\s*const params = useParams\(\)\s*const slug = params\?\.slug as string/m, "export default async function ArticleDetailPage({ params }: { params: { slug: string } }) {\n  const { slug } = params");

// 5. Replace 404 block with notFound()
data = data.replace(/if \(!article\) \{\s*return \([\s\S]*?<\ArrowLeft className="w-3\.5 h-3\.5" \/> コラム一覧へ戻る\s*<\/Link>\s*<\/div>\s*\)\s*\}/m, "if (!article) {\n    return notFound()\n  }\n\n  const { isMember } = await getSAMemberStatus()\n  const articleId = `benchpress/${slug}`\n  const { isFavorite, isRead } = await getArticleStatus(articleId)");

// 6. Wrap content based on membership
const overviewHeader = "{/* Overview Box / 要約 */}";
const lockedContent = `
        {!isMember ? (
          <div className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-900 shadow-sm text-center space-y-6 mb-20">
            <div className="w-16 h-16 bg-blue-950/30 border border-blue-900/50 text-blue-400 rounded-full flex items-center justify-center mx-auto">
              <Lock className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-bold text-white">SAメンバー限定コラム</h2>
              <p className="text-sm text-zinc-400 max-w-md mx-auto leading-relaxed">
                ここから先の実践プログラムや詳細な解説は、SAメンバーのみ閲覧可能です。ログインまたはメンバー登録を行ってください。
              </p>
            </div>
            <div className="pt-4 flex items-center justify-center gap-4">
              <Link 
                href="/login" 
                className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)]"
              >
                ログイン / 登録する
              </Link>
            </div>
          </div>
        ) : (
          <>
        {/* Overview Box / 要約 */}`;

data = data.replace(overviewHeader, lockedContent);

const bottomNav = "{/* Bottom Navigation */}";
const interactionContent = `
        <ArticleInteractions 
          articleId={articleId} 
          initialIsFavorite={isFavorite} 
          initialIsRead={isRead} 
        />
        </>
        )}
        
        {/* Bottom Navigation */}`;

data = data.replace(bottomNav, interactionContent);

fs.writeFileSync('app/(public)/lab/benchpress/[slug]/page.tsx', data);
console.log('Refactoring complete');
