const fs = require('fs');

// 1. Fix benchpress articles tab
let articlesData = fs.readFileSync('app/(public)/lab/benchpress/articles/page.tsx', 'utf8');

const targetTabs = `<div className="flex bg-zinc-950 p-1.5 rounded-2xl border border-zinc-900 shadow-inner w-full max-w-md">`;
const replaceTabs = `<div className="grid grid-cols-3 gap-1 bg-zinc-950 p-1.5 rounded-2xl border border-zinc-900 shadow-inner w-full max-w-2xl">`;

articlesData = articlesData.replace(targetTabs, replaceTabs);

// Add the 3rd button
const appliedButtonEnd = `<span>応用・探究コラム</span>
          </button>`;
          
const programButton = `<span>応用・探究</span>
          </button>
          <button
            onClick={() => handleTabChange('program')}
            className={\`flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-1.5 py-2 sm:py-3.5 px-1 sm:px-3 rounded-xl font-bold text-[10px] sm:text-xs transition-all duration-300 cursor-pointer \${
              activeTab === 'program'
                ? 'bg-gradient-to-r from-blue-950/60 to-blue-900/40 border border-blue-800/40 text-white shadow-md'
                : 'text-zinc-550 hover:text-zinc-300'
            }\`}
          >
            <BookOpen className={\`w-3.5 h-3.5 sm:w-4 sm:h-4 \${activeTab === 'program' ? 'text-blue-400' : 'text-zinc-600'}\`} />
            <span>実践プログラム</span>
          </button>`;

articlesData = articlesData.replace(appliedButtonEnd, programButton);
articlesData = articlesData.replace(/<span>基本理論コラム<\/span>/g, "<span>基本理論</span>");
articlesData = articlesData.replace(/<button\s+onClick=\{\(\) => handleTabChange\('basic'\)\}\s+className=\{`flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-xs md:text-sm/g, `<button\n            onClick={() => handleTabChange('basic')}\n            className={\`flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-1.5 py-2 sm:py-3.5 px-1 sm:px-3 rounded-xl font-bold text-[10px] sm:text-xs`);
articlesData = articlesData.replace(/<button\s+onClick=\{\(\) => handleTabChange\('applied'\)\}\s+className=\{`flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-xs md:text-sm/g, `<button\n            onClick={() => handleTabChange('applied')}\n            className={\`flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-1.5 py-2 sm:py-3.5 px-1 sm:px-3 rounded-xl font-bold text-[10px] sm:text-xs`);


fs.writeFileSync('app/(public)/lab/benchpress/articles/page.tsx', articlesData);

// 2. Overwrite dashboard
const dashboardCode = `import Link from 'next/link';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import { getLearningProgress } from '@/app/actions/academy';
import { BookOpen, Bookmark, CheckCircle2, FlaskConical, LayoutDashboard } from 'lucide-react';

export default async function DashboardPage() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  const progress = await getLearningProgress();
  
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
          <Link href="/lab" className="w-full py-3.5 bg-indigo-600 text-white rounded-xl text-center font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-600/20 flex items-center justify-center gap-2">
            <BookOpen className="w-4 h-4" /> 研究所へ向かう
          </Link>
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
            CSCSなどの資格対策や基礎知識の学習モジュール。
          </p>
          
          <div className="bg-slate-50 rounded-xl p-4 mb-6">
            <div className="flex justify-between text-sm mb-2">
              <span className="font-medium text-slate-700">累計学習回数: {progress?.totalAttempts || 0}回</span>
              <span className="text-slate-500 font-bold">{progress?.averageScore || 0}%</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2 mb-2 overflow-hidden">
              <div className="bg-slate-600 h-2 rounded-full transition-all duration-1000 ease-out" style={{ width: \`\${progress?.averageScore || 0}%\` }}></div>
            </div>
            <p className="text-xs text-slate-400 text-right">※累計平均正答率</p>
          </div>
          
          <Link href="/dashboard/academy" className="w-full py-3.5 bg-slate-900 text-white rounded-xl text-center font-bold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
            学習を続ける
          </Link>
        </div>

      </div>
    </div>
  );
}
`;

fs.writeFileSync('app/(auth)/dashboard/page.tsx', dashboardCode);
console.log("Done");
