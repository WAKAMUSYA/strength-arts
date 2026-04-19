import { cptLectures, CPT_BASICS_CATEGORIES, CPT_MOCK_TEST_MAP } from "@/data/cptLectures";
import LectureAccordion from "@/components/LectureAccordion";
import { getReadLectures } from "@/app/actions/academy";

export default async function DashboardCptLectureList() {
  const readLectures = await getReadLectures();

  const categories = CPT_BASICS_CATEGORIES.filter((c) => cptLectures.some((l) => l.category === c));

  return (
    <>
      {categories.map((category) => {
        const categoryLectures = cptLectures.filter((l) => l.category === category);
        return (
          <LectureAccordion
            key={category}
            category={category}
            lectures={categoryLectures}
            baseHref="/dashboard/academy/cpt/basics"
            readLectures={readLectures}
            mockTestMap={CPT_MOCK_TEST_MAP}
            mockTestBaseHref="/dashboard/academy/cpt"
          />
        );
      })}
    </>
  );
}

