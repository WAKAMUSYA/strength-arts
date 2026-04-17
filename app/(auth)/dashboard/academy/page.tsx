import Link from 'next/link';
import { Suspense } from 'react';
import DashboardLectureList from '@/components/DashboardLectureList';

export default function DashboardAcademyPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="flex items-center gap-4 mb-10">
        <Link href="/dashboard" className="p-2 text-slate-500 hover:text-slate-900 transition-colors bg-slate-100 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Academy</h1>
          <p className="text-slate-600 mt-2">
            会員専用の学習ページ。進捗が自動的に保存されます。
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {/* CSCS Course Blocks */}
        {[1, 2, 3, 4, 5].map((blockNum) => (
          <Link key={`block-${blockNum}`} href={`/dashboard/academy/cscs?block=${blockNum}`} className="group block bg-white rounded-2xl border border-slate-200 p-6 md:p-8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 md:p-8">
               <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
               </div>
            </div>
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                CSCS 模擬テスト
              </span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">第{blockNum}回 ブロックテスト</h2>
            <p className="text-slate-500 mb-6 text-sm md:text-base max-w-[85%]">
              {blockNum === 1 
                ? "全30問。解剖生理学からプログラムデザインまでバランスよく出題されます。" 
                : "【準備中】今後のアップデートで問題が追加されます。"}
            </p>
            <div className="inline-flex items-center space-x-2 text-sm font-medium text-slate-700 bg-slate-50 border border-slate-200 px-4 py-2 rounded-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors">
              <span>{blockNum === 1 ? "テストを開始" : "準備中"}</span>
            </div>
          </Link>
        ))}
      </div>

      {/* 基礎理論セクション */}
      <div className="mt-16">
        <div className="flex items-center space-x-3 mb-8">
          <h2 className="text-2xl font-bold text-slate-900">基礎理論・解剖学</h2>
          <span className="text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">CSCS科目別</span>
        </div>

        <Suspense fallback={
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-16 bg-slate-100 rounded-2xl animate-pulse"></div>
            ))}
          </div>
        }>
          <DashboardLectureList />
        </Suspense>
      </div>
    </div>
  );
}
