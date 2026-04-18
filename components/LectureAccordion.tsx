import { ChevronDown, Trophy } from 'lucide-react';
import Link from 'next/link';
import { Lecture } from '@/data/lectures';
import LectureCard from './LectureCard';

type Props = {
  category: string;
  lectures: Lecture[];
  baseHref: string;
  readLectures?: string[];
};

export default function LectureAccordion({ category, lectures, baseHref, readLectures }: Props) {
  const completedCount = readLectures ? lectures.filter(l => readLectures.includes(l.id)).length : 0;
  const totalCount = lectures.length;
  const isAllCompleted = readLectures ? completedCount === totalCount : false;

  const mockTestMap: Record<string, number> = {
    "解剖学": 101,
    "運動生理学": 102,
    "バイオメカニクス": 103,
    "栄養学": 104,
    "スポーツ心理学": 105,
    "テストと評価": 106,
    "エクササイズテクニック": 107,
    "プログラムデザイン": 108,
    "施設と管理": 109,
  };
  const mockTestBlockId = mockTestMap[category];

  return (
    <details className="mb-6 bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm group">
      <summary className="w-full flex items-center justify-between p-5 md:p-6 bg-white hover:bg-slate-50 active:bg-slate-100 transition-colors cursor-pointer list-none [&::-webkit-details-marker]:hidden focus:outline-none">
        <div className="flex items-center space-x-4">
          <h3 className="text-lg md:text-xl font-bold text-slate-800 text-left">
            {category}
          </h3>
          {readLectures && (
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                {completedCount} / {totalCount}
              </span>
              {isAllCompleted && (
                <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full border border-green-200">
                  コンプリート
                </span>
              )}
            </div>
          )}
        </div>
        <div className="text-slate-400 group-open:rotate-180 transition-transform duration-200">
          <ChevronDown className="w-5 h-5" />
        </div>
      </summary>

      <div className="p-5 md:p-6 border-t border-slate-100 bg-slate-50">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {lectures.map((lecture) => (
            <LectureCard 
              key={lecture.id} 
              lecture={lecture} 
              baseHref={baseHref} 
              isRead={readLectures ? readLectures.includes(lecture.id) : false}
            />
          ))}
        </div>
        {mockTestBlockId && (
          <div className="mt-8 p-6 bg-white border border-blue-200 rounded-2xl shadow-sm text-center">
            <h4 className="text-xl font-bold text-slate-900 mb-2">{category} 模擬テスト (全30問)</h4>
            <p className="text-slate-600 mb-6 text-sm">{category}のセクションで学んだ知識を定着させるための専用テストです。</p>
            <Link 
              href={`/dashboard/academy/cscs?block=${mockTestBlockId}&mode=random`}
              className="inline-flex items-center justify-center space-x-2 bg-blue-600 text-white font-bold py-3 px-8 rounded-xl hover:bg-blue-700 transition-colors shadow-sm"
            >
              <Trophy className="w-5 h-5 text-yellow-300" />
              <span>テストに挑戦する</span>
            </Link>
          </div>
        )}
      </div>
    </details>
  );
}
