import { notFound } from 'next/navigation';
import { lectures } from '@/data/lectures';
import LectureContent from '@/components/LectureContent';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export default function PublicLecturePage({ params }: { params: { id: string } }) {
  const FULLY_PUBLIC_PER_BLOCK = 2;
  const lecture = lectures.find((l) => l.id === params.id);

  if (!lecture) {
    notFound();
  }

  const blockLectures = lectures.filter((l) => l.category === lecture.category);
  const indexInBlock = blockLectures.findIndex((l) => l.id === lecture.id);
  const isFullyPublic = indexInBlock >= 0 && indexInBlock < FULLY_PUBLIC_PER_BLOCK;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
      <Link href="/academy" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 mb-8 transition-colors">
        <ChevronLeft className="w-4 h-4 mr-1" />
        Academyトップに戻る
      </Link>
      
      <LectureContent
        lecture={lecture}
        isMember={false}
        gateContent={!isFullyPublic}
        showMemberActions={false}
        publicPreviewMaxHeightPx={900}
        publicOverlayHeightPx={380}
      />
    </div>
  );
}

// 静的生成（SSG）のためのパス生成
export async function generateStaticParams() {
  return lectures.map((lecture) => ({
    id: lecture.id,
  }));
}
