import Link from 'next/link';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import { BookOpen, Bookmark, CheckCircle2, FlaskConical, LayoutDashboard } from 'lucide-react';

export default async function DashboardPage() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }
  
  // Get counts for favorites and read history
  const { count: favoriteCount } = await supabase
    .from('sa_favorite_articles')
    .select('*', { count: 'exact', head: true })
    .eq('user_id', user.id);
    
  const { count: readCount } = await supabase
    .from('sa_read_history')
    .select('*', { count: 'exact', head: true })
    .eq('user_id', user.id);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="mb-10 flex items-center justify-between border-b border-slate-200 pb-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
            <LayoutDashboard className="w-8 h-8 text-blue-600" /> Dashboard
          </h1>
          <p className="text-slate-600 mt-2">
            ようこそ、STRENGTH ARTS へ。あなたの学習・実践ステータスです。
          </p>
        </div>
        <div className="hidden md:flex items-center gap-4 bg-slate-50 px-5 py-3 rounded-2xl border border-slate-200">
          <div className="text-center">
            <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Saved</p>
            <p className="text-xl font-black text-blue-600">{favoriteCount || 0}</p>
          </div>
          <div className="w-px h-8 bg-slate-200"></div>
          <div className="text-center">
            <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Read</p>
            <p className="text-xl font-black text-emerald-600">{readCount || 0}</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* LAB / 実践プログラム Dashboard Card */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
              <FlaskConical className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-slate-900">LAB (研究所)</h2>
              <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-500">Premium Content</span>
            </div>
          </div>
          <p className="text-sm text-slate-600 mb-6 flex-grow">
            各研究所の「実践プログラム」の閲覧や、保存済みコラムの確認はこちらから。
          </p>
          <div className="bg-slate-50 rounded-xl p-4 mb-6 space-y-3">
             <div className="flex items-center justify-between text-sm">
               <span className="flex items-center gap-2 text-slate-600"><Bookmark className="w-4 h-4 text-blue-500" /> 保存したコラム</span>
               <span className="font-bold text-slate-900">{favoriteCount || 0} 件</span>
             </div>
             <div className="flex items-center justify-between text-sm">
               <span className="flex items-center gap-2 text-slate-600"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> 既読のプログラム</span>
               <span className="font-bold text-slate-900">{readCount || 0} 件</span>
             </div>
          </div>
          <div className="space-y-3">
            <Link href="/dashboard/favorites" className="w-full py-3 bg-white border-2 border-indigo-100 text-indigo-600 rounded-xl text-center font-bold hover:bg-indigo-50 transition-colors flex items-center justify-center gap-2">
              <Bookmark className="w-4 h-4" /> 保存したコラムを見る
            </Link>
            <Link href="/lab" className="w-full py-3 bg-indigo-600 text-white rounded-xl text-center font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-600/20 flex items-center justify-center gap-2">
              <FlaskConical className="w-4 h-4" /> 研究所一覧へ向かう
            </Link>
          </div>
        </div>

        {/* Academy Dashboard Card */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-slate-900">Academy</h2>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">NSCA Certification</span>
            </div>
          </div>
          
          <p className="text-sm text-slate-600 mb-6 flex-grow">
            NSCA基礎学習・模擬テスト
          </p>
          
          <Link href="/dashboard/academy" className="w-full py-3.5 bg-slate-900 text-white rounded-xl text-center font-bold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
            学習を続ける
          </Link>
        </div>

      </div>
    </div>
  );
}
