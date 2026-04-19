import { notFound } from 'next/navigation';
import { cptLectures } from '@/data/cptLectures';
import LectureContent from '@/components/LectureContent';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export default function PublicCptLecturePage({ params }: { params: { id: string } }) {
  const lecture = cptLectures.find((l) => l.id === params.id);

  if (!lecture) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
      <Link
        href="/academy"
        className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 mb-8 transition-colors"
      >
        <ChevronLeft className="w-4 h-4 mr-1" />
        Academyに戻る
      </Link>

      <LectureContent lecture={lecture} isMember={false} />
    </div>
  );
}

export async function generateStaticParams() {
  return cptLectures.map((lecture) => ({
    id: lecture.id,
  }));
}

