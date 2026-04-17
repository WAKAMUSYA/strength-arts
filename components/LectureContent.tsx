import Link from 'next/link';
import { Lecture } from '@/data/lectures';
import { Lock, ChevronRight } from 'lucide-react';
import LectureReadButton from './LectureReadButton';

type Props = {
  lecture: Lecture;
  isMember: boolean;
  isRead?: boolean;
  nextLectureId?: string;
};

export default function LectureContent({ lecture, isMember, isRead = false, nextLectureId }: Props) {
  return (
    <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
      <div className="p-6 md:p-10 border-b border-slate-100">
        <span className="text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4 inline-block">
          {lecture.category}
        </span>
        <h1 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mt-2 mb-6">
          {lecture.title}
        </h1>
        <p className="text-slate-500 text-lg leading-relaxed">
          {lecture.excerpt}
        </p>
      </div>

      <div className="p-6 md:p-10 relative">
        {/* コンテンツ本文（HTML） */}
        <div 
          className={`prose prose-slate prose-lg max-w-none ${!isMember ? 'pb-32' : ''}`}
          dangerouslySetInnerHTML={{ __html: lecture.content }}
        />

        {/* 非会員向けのグラデーションとCTA */}
        {!isMember && (
          <div className="absolute bottom-0 left-0 w-full h-80 bg-gradient-to-t from-white via-white/90 to-transparent flex flex-col items-center justify-end pb-10 px-6 text-center">
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-md w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">ここから先は会員限定です</h3>
              <p className="text-sm text-slate-500 mb-6">
                Strength Artsの全講義コンテンツやトレーニング記録アプリを利用するには、無料の会員登録が必要です。
              </p>
              <div className="space-y-3">
                <Link href="/signup" className="block w-full bg-black text-white py-3 rounded-xl font-bold hover:bg-slate-800 transition-colors">
                  無料で会員登録する
                </Link>
                <Link href="/login" className="block w-full text-slate-600 font-medium hover:text-slate-900 transition-colors">
                  ログインはこちら
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* 読了ボタン（会員のみ） */}
        {/* 読了ボタン・次へ進むボタン（会員のみ） */}
        {isMember && (
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-12 pt-8 border-t border-slate-100">
            <div className="flex-1 w-full">
              <LectureReadButton lectureId={lecture.id} isInitiallyRead={isRead} />
            </div>
            {nextLectureId && (
              <div className="flex-1 w-full">
                <Link 
                  href={`/dashboard/academy/basics/${nextLectureId}`} 
                  className="w-full flex items-center justify-center space-x-2 px-8 py-4 rounded-xl font-bold bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                >
                  <span>次を読む</span>
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
