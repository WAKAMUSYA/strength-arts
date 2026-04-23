import Link from 'next/link';
import { Lecture } from '@/data/lectures';
import { Clock, BookOpen, Lock } from 'lucide-react';

type Props = {
  lecture: Lecture;
  baseHref: string; // "/academy/basics" or "/dashboard/academy/basics"
  isRead?: boolean;
  isLocked?: boolean;
};

export default function LectureCard({ lecture, baseHref, isRead = false, isLocked = false }: Props) {
  return (
    <Link
      href={`${baseHref}/${lecture.id}`}
      className={`group block border rounded-2xl p-6 hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98] active:bg-slate-100 transition-all duration-200 relative overflow-hidden ${
        isRead ? 'bg-slate-50 border-slate-200 opacity-90' : 'bg-white border-slate-200'
      }`}
    >
      {isLocked && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-white/55" />
          <div className="absolute top-4 right-4 inline-flex items-center gap-2 rounded-full bg-black/90 text-white text-xs font-bold px-3 py-1 shadow-sm">
            <Lock className="w-3.5 h-3.5" />
            会員コンテンツ
          </div>
        </div>
      )}
      <div className="flex items-center space-x-3 mb-4">
        <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
          {lecture.category}
        </span>
        <div className="flex items-center text-xs font-medium text-slate-400">
          <Clock className="w-3.5 h-3.5 mr-1" />
          {lecture.readTime} min read
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
        {lecture.title}
      </h3>
      
      <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">
        {lecture.excerpt}
      </p>
      
      
      <div className="flex items-center justify-between">
        <div className="flex items-center text-sm font-bold text-blue-600">
          <BookOpen className="w-4 h-4 mr-2" />
          {isLocked ? 'プレビューを見る' : '講義を読む'}
        </div>
        
        {isRead && (
          <div className="flex items-center text-sm font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full border border-green-100">
            ✓ 読了
          </div>
        )}
      </div>
    </Link>
  );
}
