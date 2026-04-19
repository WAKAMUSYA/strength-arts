import { ChevronDown, Trophy } from 'lucide-react';
import Link from 'next/link';
import type { Lecture } from '@/data/lectures';
import LectureCard from './LectureCard';

type Props = {
  category: string;
  lectures: Lecture[];
  baseHref: string;
  readLectures?: string[];
  // Optional: if provided, enables a "mock test" link at the end of the block.
  // If `mockTestMap[category]` exists we link by `block=...`, otherwise we fall back to `category=...`.
  mockTestMap?: Record<string, number>;
  // e.g. "/dashboard/academy/cscs" or "/dashboard/academy/cpt"
  mockTestBaseHref?: string;
};

export default function LectureAccordion({
  category,
  lectures,
  baseHref,
  readLectures,
  mockTestMap: mockTestMapOverride,
  mockTestBaseHref,
}: Props) {
  const completedCount = readLectures ? lectures.filter(l => readLectures.includes(l.id)).length : 0;
  const totalCount = lectures.length;
  const isAllCompleted = readLectures ? completedCount === totalCount : false;

  const mockTestMap: Record<string, number> = {
    "隗｣蜑門ｭｦ": 101,
    "驕句虚逕溽炊蟄ｦ": 102,
    "繝舌う繧ｪ繝｡繧ｫ繝九け繧ｹ": 103,
    "譬・､雁ｭｦ": 104,
    "繧ｹ繝昴・繝・ｿ・炊蟄ｦ": 105,
    "繝・せ繝医→隧穂ｾ｡": 106,
    "繧ｨ繧ｯ繧ｵ繧ｵ繧､繧ｺ繝・け繝九ャ繧ｯ": 107,
    "繝励Ο繧ｰ繝ｩ繝繝・じ繧､繝ｳ": 108,
    "譁ｽ險ｭ縺ｨ邂｡逅・": 109,
  };
  const effectiveMockTestMap = mockTestMapOverride ?? mockTestMap;
  const effectiveMockTestBaseHref = mockTestBaseHref ?? "/dashboard/academy/cscs";
  const mockTestBlockId = effectiveMockTestMap?.[category];
  const mockTestHref = mockTestBlockId
    ? `${effectiveMockTestBaseHref}?block=${mockTestBlockId}&mode=random`
    : `${effectiveMockTestBaseHref}?category=${encodeURIComponent(category)}&mode=random`;

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
                  読了
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
        {lectures.length > 0 && (
          <div className="mt-8 p-6 bg-white border border-blue-200 rounded-2xl shadow-sm text-center">
            <h4 className="text-xl font-bold text-slate-900 mb-2">{category} 模擬テスト（30問）</h4>
            <p className="text-slate-600 mb-6 text-sm">このブロックの要点を、ランダム30問で確認します。</p>
            <Link 
              href={mockTestHref}
              className="inline-flex items-center justify-center space-x-2 bg-blue-600 text-white font-bold py-3 px-8 rounded-xl hover:bg-blue-700 transition-colors shadow-sm"
            >
              <Trophy className="w-5 h-5 text-yellow-300" />
              <span>模擬テストを解く</span>
            </Link>
          </div>
        )}
      </div>
    </details>
  );
}

