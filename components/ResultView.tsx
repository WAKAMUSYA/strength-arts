import { Question } from "@/data/questions";
import { BookOpen, AlertCircle, Lightbulb, Hash } from "lucide-react";

type ResultViewProps = {
  question: Question;
  selectedAnswer: string;
};

export default function ResultView({ question, selectedAnswer }: ResultViewProps) {
  const isCorrect = selectedAnswer === question.correct_answer;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className={`p-4 border-b ${isCorrect ? "bg-green-50 border-green-100" : "bg-red-50 border-red-100"}`}>
        <h3 className={`text-lg font-bold flex items-center ${isCorrect ? "text-green-700" : "text-red-700"}`}>
          {isCorrect ? "正解！" : "不正解..."}
        </h3>
        {!isCorrect && (
          <p className="mt-1 text-sm text-red-600">
            正解は <span className="font-bold">「{question.correct_answer}」</span> です。
          </p>
        )}
      </div>

      <div className="p-6 space-y-6">
        <div className="space-y-2">
          <h4 className="text-sm font-bold text-gray-700 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-blue-500" />
            解説
          </h4>
          <p className="text-gray-600 text-sm leading-relaxed bg-gray-50 p-4 rounded-lg">
            {question.explanation}
          </p>
        </div>

        <div className="space-y-2">
          <h4 className="text-sm font-bold text-gray-700 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-orange-500" />
            なぜ他の選択肢は間違っているか？
          </h4>
          <p className="text-gray-600 text-sm leading-relaxed bg-orange-50 p-4 rounded-lg border border-orange-100">
            {question.why_wrong}
          </p>
        </div>

        <div className="space-y-2">
          <h4 className="text-sm font-bold text-gray-700 flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-yellow-500" />
            現場での活用（実践への応用）
          </h4>
          <p className="text-gray-600 text-sm leading-relaxed bg-yellow-50 p-4 rounded-lg border border-yellow-100">
            {question.field_application}
          </p>
        </div>

        <div className="pt-4 border-t border-gray-100">
          <h4 className="text-xs font-bold text-gray-500 flex items-center gap-2 mb-3">
            <Hash className="w-3 h-3" />
            関連キーワード
          </h4>
          <div className="flex flex-wrap gap-2">
            {question.keywords.map((kw) => (
              <span key={kw} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                {kw}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
