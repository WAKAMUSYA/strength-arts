import Link from 'next/link';

export default function DashboardLabPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="flex items-center gap-4 mb-10">
        <Link href="/dashboard" className="p-2 text-slate-500 hover:text-slate-900 transition-colors bg-slate-100 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">LAB (Member)</h1>
          <p className="text-slate-600 mt-2">
            すべての探究記事へのアクセスと、あなたの思考ログ
          </p>
        </div>
      </div>
      
      <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm text-center py-20">
        <p className="text-slate-500">
          コンテンツ準備中...
        </p>
      </div>
    </div>
  );
}
