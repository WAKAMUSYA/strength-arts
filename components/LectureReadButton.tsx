'use client';

import { useState, useTransition } from 'react';
import { toggleLectureRead } from '@/app/actions/academy';
import { CheckCircle2, Circle } from 'lucide-react';

type Props = {
  lectureId: string;
  isInitiallyRead: boolean;
};

export default function LectureReadButton({ lectureId, isInitiallyRead }: Props) {
  const [isRead, setIsRead] = useState(isInitiallyRead);
  const [isPending, startTransition] = useTransition();

  const handleToggle = () => {
    // Optimistic UI update
    const newValue = !isRead;
    setIsRead(newValue);

    startTransition(async () => {
      const result = await toggleLectureRead(lectureId, !newValue);
      if (!result.success) {
        // Revert on failure
        setIsRead(!newValue);
        console.error(result.error);
      }
    });
  };

  return (
    <button
      onClick={handleToggle}
      disabled={isPending}
      className={`mt-12 w-full md:w-auto flex items-center justify-center space-x-2 px-8 py-4 rounded-xl font-bold transition-all duration-300 ${
        isRead
          ? 'bg-green-50 text-green-700 border-2 border-green-200 hover:bg-green-100'
          : 'bg-white text-slate-700 border-2 border-slate-200 hover:bg-slate-50 hover:border-slate-300'
      }`}
    >
      {isRead ? (
        <>
          <CheckCircle2 className="w-6 h-6" />
          <span>読了済み（クリックで解除）</span>
        </>
      ) : (
        <>
          <Circle className="w-6 h-6 text-slate-400" />
          <span>この記事を「読了」にする</span>
        </>
      )}
    </button>
  );
}
