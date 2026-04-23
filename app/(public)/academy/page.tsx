import Link from "next/link";
import { BookOpen, ChevronRight, FileQuestion } from "lucide-react";
import { lectures } from "@/data/lectures";
import { cptLectures, CPT_BASICS_CATEGORIES, CPT_MOCK_TEST_MAP } from "@/data/cptLectures";
import LectureAccordion from "@/components/LectureAccordion";

export default function AcademyPage() {
  const cptCategories = CPT_BASICS_CATEGORIES.filter((c) => cptLectures.some((l) => l.category === c));
  const cptMockTestMap: Record<string, number> = CPT_MOCK_TEST_MAP;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 md:py-12">
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-12 h-12 bg-blue-100 text-blue-900 rounded-xl flex items-center justify-center">
          <BookOpen className="w-6 h-6" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">ACADEMY</h1>
          <p className="text-gray-500 text-sm">資格対策と基礎理論を体系的に学べます。</p>
        </div>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-lg font-bold border-b pb-2 mb-4">資格対策問題集</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/academy/cscs" className="block bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow group">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <FileQuestion className="w-5 h-5 text-blue-600" />
                    <h3 className="font-bold text-gray-900">CSCS 資格対策問題集</h3>
                  </div>
                  <p className="text-sm text-gray-600">CSCS向けの問題演習（カテゴリ別/ランダム）です。</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </div>
            </Link>

            <Link
              href="/academy/cpt"
              className="block bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <FileQuestion className="w-5 h-5 text-blue-600" />
                    <h3 className="font-bold text-gray-900">CPT 資格対策問題集</h3>
                  </div>
                  <p className="text-sm text-gray-600">CPT向けの問題演習（ブロック別/ランダム）です。</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </div>
            </Link>
          </div>
        </section>

        <section>
          <div className="flex items-center space-x-2 mb-6 border-b pb-2">
            <h2 className="text-xl font-bold">CPT基礎理論</h2>
            <span className="text-sm text-gray-500 font-medium">CPT対策</span>
          </div>

          {cptCategories.map((category) => {
            const categoryLectures = cptLectures.filter((l) => l.category === category);
            return (
              <LectureAccordion
                key={category}
                category={category}
                lectures={categoryLectures}
                baseHref="/academy/cpt/basics"
                publicFullyOpenCount={2}
                mockTestMap={cptMockTestMap}
                mockTestBaseHref="/dashboard/academy/cpt"
              />
            );
          })}
        </section>

        <section>
          <div className="flex items-center space-x-2 mb-6 border-b pb-2">
            <h2 className="text-xl font-bold">CSCS基礎理論</h2>
            <span className="text-sm text-gray-500 font-medium">CSCS対策</span>
          </div>

          {Array.from(new Set(lectures.map(l => l.category))).map((category) => {
            const categoryLectures = lectures.filter((l) => l.category === category);
            return (
              <LectureAccordion
                key={category}
                category={category}
                lectures={categoryLectures}
                baseHref="/academy/basics"
                publicFullyOpenCount={2}
              />
            );
          })}
        </section>
      </div>
    </div>
  );
}
