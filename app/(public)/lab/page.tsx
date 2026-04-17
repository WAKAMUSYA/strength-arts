import { FlaskConical } from "lucide-react";

export default function LabPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 md:py-12">
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-12 h-12 bg-purple-100 text-purple-900 rounded-xl flex items-center justify-center">
          <FlaskConical className="w-6 h-6" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">LAB / OSA</h1>
          <p className="text-gray-500 text-sm">枠組みを超え、真理に触れる</p>
        </div>
      </div>

      <div className="bg-white border border-gray-100 p-12 rounded-2xl text-center shadow-sm">
        <h2 className="text-xl font-bold text-gray-800 mb-2">Coming Soon</h2>
        <p className="text-gray-500">身体哲学、関係性、力の真理を探究する記事コンテンツを準備中です。</p>
      </div>
    </div>
  );
}
