import { Dumbbell } from "lucide-react";

export default function TrainingPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 md:py-12">
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-12 h-12 bg-red-100 text-red-900 rounded-xl flex items-center justify-center">
          <Dumbbell className="w-6 h-6" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">TRAINING</h1>
          <p className="text-gray-500 text-sm">身体を操作し、力を通す</p>
        </div>
      </div>

      <div className="bg-white border border-gray-100 p-12 rounded-2xl text-center shadow-sm">
        <h2 className="text-xl font-bold text-gray-800 mb-2">Coming Soon</h2>
        <p className="text-gray-500">トレーニング、パフォーマンス向上、身体操作に関する実践的なコンテンツを準備中です。</p>
      </div>
    </div>
  );
}
