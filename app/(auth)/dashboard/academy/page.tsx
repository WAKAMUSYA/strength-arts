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
        {/* CSCS Course Card */}
        <Link href="/dashboard/academy/cscs?mode=random" className="group block bg-white rounded-3xl border border-slate-200 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8">
             <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center transform group-hover:scale-110 transition-transform">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
             </div>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">CSCS 資格対策</h2>
          <p className="text-slate-500 mb-8 max-w-sm">NSCA-CSCSの過去問・模擬問題を通じて、解剖生理学やバイオメカニクスの基礎から実践までを学びます。</p>
          <div className="inline-flex items-center space-x-2 text-sm font-medium text-blue-600 bg-blue-50 px-4 py-2 rounded-full">
            <span>学習を開始する</span>
          </div>
        </Link>
        
        {/* Coming Soon Course */}
        <div className="bg-slate-50 rounded-3xl border border-slate-200 border-dashed p-8 flex flex-col items-center justify-center text-center opacity-70">
          <div className="w-12 h-12 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          </div>
          <h2 className="text-xl font-bold text-slate-700 mb-2">CPT 資格対策</h2>
          <p className="text-slate-500">準備中</p>
        </div>
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
