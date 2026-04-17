import Link from 'next/link';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import { getLearningProgress } from '@/app/actions/academy';

export default async function DashboardPage() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  const progress = await getLearningProgress();

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Dashboard</h1>
        <p className="text-slate-600 mt-2">
          ようこそ、Strength Arts へ。学習と記録を始めましょう。
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Academy Dashboard Card */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 z-10">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
            </div>
            <h2 className="text-xl font-semibold text-slate-900 z-10">Academy</h2>
          </div>
          
          <p className="text-sm text-slate-600 mb-6 flex-grow z-10">
            CSCSなどの資格対策や基礎知識の学習。
          </p>
          
          <div className="bg-slate-50 rounded-xl p-4 mb-6 z-10">
            <div className="flex justify-between text-sm mb-2">
              <span className="font-medium text-slate-700">CSCS 累計学習回数: {progress?.totalAttempts || 0}回</span>
              <span className="text-slate-500 font-bold">{progress?.averageScore || 0}%</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2 mb-2">
              <div className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out" style={{ width: `${progress?.averageScore || 0}%` }}></div>
            </div>
            <p className="text-xs text-slate-400 text-right">※累計平均正答率</p>
          </div>
          
          <Link href="/dashboard/academy" className="w-full py-3 bg-slate-900 text-white rounded-xl text-center font-medium hover:bg-slate-800 transition-colors z-10">
            学習を続ける
          </Link>
        </div>

        {/* Training Dashboard Card */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow relative">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6.5 6.5 11 11"/><path d="m21 21-1-1"/><path d="m3 3 1 1"/><path d="m18 22 4-4"/><path d="m2 6 4-4"/><path d="m3 10 7-7"/><path d="m14 21 7-7"/></svg>
            </div>
            <h2 className="text-xl font-semibold text-slate-900">Training</h2>
          </div>
          <p className="text-sm text-slate-600 mb-6 flex-grow">
            日々のトレーニング記録やボリュームの推移を確認します。
          </p>
          <div className="bg-slate-50 rounded-xl p-4 mb-6 flex flex-col items-center justify-center text-slate-500 text-sm py-8">
            <p>開発中 (Phase 3)</p>
          </div>
          <Link href="/dashboard/training" className="w-full py-3 bg-slate-900 text-white rounded-xl text-center font-medium hover:bg-slate-800 transition-colors">
            記録アプリを開く
          </Link>
        </div>

        {/* LAB Dashboard Card */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow relative">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 2v7.31"/><path d="M14 9.3V1.99"/><path d="M8.5 2h7"/><path d="M14 9.3a6.5 6.5 0 1 1-4 0"/><path d="M5.52 16h12.96"/></svg>
            </div>
            <h2 className="text-xl font-semibold text-slate-900">LAB</h2>
          </div>
          <p className="text-sm text-slate-600 mb-6 flex-grow">
            保存した記事や、あなた自身の思考ログを管理します。
          </p>
          <div className="bg-slate-50 rounded-xl p-4 mb-6 flex flex-col gap-3">
            <div className="text-sm text-slate-600 truncate border-l-2 border-purple-300 pl-2">
              思考ログ機能は準備中です
            </div>
          </div>
          <Link href="/dashboard/lab" className="w-full py-3 bg-slate-900 text-white rounded-xl text-center font-medium hover:bg-slate-800 transition-colors">
            LABへ向かう
          </Link>
        </div>

      </div>
    </div>
  );
}
