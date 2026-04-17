import Link from "next/link";
import { BookOpen, ChevronRight, FileQuestion } from "lucide-react";

export default function AcademyPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 md:py-12">
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-12 h-12 bg-blue-100 text-blue-900 rounded-xl flex items-center justify-center">
          <BookOpen className="w-6 h-6" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">SA ACADEMY</h1>
          <p className="text-gray-500 text-sm">知識を構造化し、専門性を高める</p>
        </div>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-lg font-bold border-b pb-2 mb-4">試験対策</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/academy/cscs" className="block bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow group">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <FileQuestion className="w-5 h-5 text-blue-600" />
                    <h3 className="font-bold text-gray-900">CSCS 対策問題集</h3>
                  </div>
                  <p className="text-sm text-gray-600">全100問。ランダム出題、詳細な解説付きのドリル形式で試験を攻略します。</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </div>
            </Link>
            
            <div className="block bg-gray-50 border border-gray-100 p-6 rounded-2xl">
              <div className="flex justify-between items-start opacity-60">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <FileQuestion className="w-5 h-5 text-gray-600" />
                    <h3 className="font-bold text-gray-900">CPT 対策問題集</h3>
                  </div>
                  <p className="text-sm text-gray-600">Coming Soon... 現在準備中です。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-bold border-b pb-2 mb-4">基礎理論・解剖学</h2>
          <div className="bg-white border border-gray-100 p-8 rounded-2xl text-center">
            <p className="text-gray-500 text-sm">現在、講義コンテンツを準備中です。</p>
          </div>
        </section>
      </div>
    </div>
  );
}
