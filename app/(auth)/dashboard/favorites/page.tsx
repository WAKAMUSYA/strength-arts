import Link from 'next/link'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { Bookmark, ArrowLeft, ChevronRight, Clock } from 'lucide-react'
import metaData from '@/data/articleMeta.json'

// Type cast the imported JSON
const articleMeta = metaData as Record<string, { title: string, category: string, level: string, labName: string }>

export default async function FavoritesPage() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  // Fetch user's saved articles
  const { data: favorites } = await supabase
    .from('sa_favorite_articles')
    .select('article_id, created_at')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      
      {/* Header */}
      <div className="mb-10">
        <Link 
          href="/dashboard" 
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" /> ダッシュボードへ戻る
        </Link>
        <div className="flex items-center gap-3 border-b border-slate-200 pb-6">
          <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
            <Bookmark className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">保存したコラム</h1>
            <p className="text-slate-500 mt-1">後で読むために保存した、実践プログラムや理論コラムの一覧です。</p>
          </div>
        </div>
      </div>

      {/* List */}
      <div className="space-y-4">
        {(!favorites || favorites.length === 0) ? (
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-12 text-center">
            <Bookmark className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-slate-700 mb-2">まだ保存されたコラムがありません</h3>
            <p className="text-slate-500 mb-6">各研究所のコラムページで「お気に入りに保存」ボタンを押すと、ここに追加されます。</p>
            <Link 
              href="/lab" 
              className="inline-flex items-center gap-2 bg-slate-900 text-white font-bold py-3 px-6 rounded-xl hover:bg-slate-800 transition-colors"
            >
              研究所一覧を見に行く
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {favorites.map((fav) => {
              // Extract slug from labName/slug
              const parts = fav.article_id.split('/')
              const slug = parts[parts.length - 1]
              // Note: the labName in the database might be 'benchpress' etc, which maps perfectly to the URL
              const dbLabName = parts[0]
              
              const meta = articleMeta[slug]
              const title = meta ? meta.title : '不明なコラム'
              const category = meta ? meta.category : 'N/A'
              const level = meta ? meta.level : '-'
              const dateObj = new Date(fav.created_at)
              const dateStr = `${dateObj.getFullYear()}/${(dateObj.getMonth()+1).toString().padStart(2, '0')}/${dateObj.getDate().toString().padStart(2, '0')}`

              return (
                <Link 
                  key={fav.article_id}
                  href={`/lab/${dbLabName}/${slug}`}
                  className="group block bg-white border border-slate-200 p-6 rounded-2xl hover:shadow-lg hover:border-blue-300 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold uppercase tracking-wider">
                      {category}
                    </span>
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {dateStr}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-snug">
                    {title}
                  </h3>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                    <span className="text-xs font-bold text-slate-400">LAB: {dbLabName.toUpperCase()} / {level}</span>
                    <span className="flex items-center text-xs font-bold text-blue-500 group-hover:translate-x-1 transition-transform">
                      読む <ChevronRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        )}
      </div>

    </div>
  )
}
