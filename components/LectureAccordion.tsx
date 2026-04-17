'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Lecture } from '@/data/lectures';
import LectureCard from './LectureCard';

type Props = {
  category: string;
  lectures: Lecture[];
  baseHref: string;
  readLectures?: string[];
};

export default function LectureAccordion({ category, lectures, baseHref, readLectures }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const completedCount = readLectures ? lectures.filter(l => readLectures.includes(l.id)).length : 0;
  const totalCount = lectures.length;
  const isAllCompleted = readLectures ? completedCount === totalCount : false;

  return (
    <div className="mb-6 bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-all">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 md:p-6 bg-white hover:bg-slate-50 active:bg-slate-100 transition-colors focus:outline-none"
      >
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
        <div className="text-slate-400">
          {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </div>
      </button>

      {isOpen && (
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
        </div>
      )}
    </div>
  );
}
