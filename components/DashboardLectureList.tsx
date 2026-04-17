import { lectures } from '@/data/lectures';
import LectureAccordion from '@/components/LectureAccordion';
import { getReadLectures } from '@/app/actions/academy';

export default async function DashboardLectureList() {
  const readLectures = await getReadLectures();

  return (
    <>
      {Array.from(new Set(lectures.map(l => l.category))).map((category) => {
        const categoryLectures = lectures.filter((l) => l.category === category);
        return (
          <LectureAccordion 
            key={category}
            category={category}
            lectures={categoryLectures}
            baseHref="/dashboard/academy/basics"
            readLectures={readLectures}
          />
        );
      })}
    </>
  );
}
