import { notFound } from 'next/navigation';
import { cptLectures } from '@/data/cptLectures';
import LectureContent from '@/components/LectureContent';
import { getReadLectures } from '@/app/actions/academy';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export default async function DashboardCptLecturePage({ params }: { params: { id: string } }) {
  const currentIndex = cptLectures.findIndex((l) => l.id === params.id);
  const lecture = cptLectures[currentIndex];

  if (!lecture) {
    notFound();
  }

  const nextLecture =
    currentIndex >= 0 && currentIndex < cptLectures.length - 1 ? cptLectures[currentIndex + 1] : null;

  const readLectures = await getReadLectures();
  const isRead = readLectures.includes(lecture.id);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
      <Link
        href="/dashboard/academy"
        className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 mb-8 transition-colors"
      >
        <ChevronLeft className="w-4 h-4 mr-1" />
        Academyに戻る
      </Link>

      <LectureContent lecture={lecture} isMember={true} isRead={isRead} nextLectureId={nextLecture?.id} />
    </div>
  );
}

export async function generateStaticParams() {
  return cptLectures.map((lecture) => ({
    id: lecture.id,
  }));
}

