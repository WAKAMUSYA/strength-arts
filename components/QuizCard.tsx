import { Question } from "@/data/questions";
import { CheckCircle2, XCircle } from "lucide-react";

type QuizCardProps = {
  question: Question;
  selectedAnswer: string | null;
  onAnswer: (answer: string) => void;
};

export default function QuizCard({ question, selectedAnswer, onAnswer }: QuizCardProps) {
  const isAnswered = selectedAnswer !== null;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-6">
      <div className="p-4 bg-gray-50 border-b border-gray-100 flex justify-between items-center">
        <span className="text-xs font-semibold px-2.5 py-1 bg-blue-100 text-blue-700 rounded-full">
          {question.category}
        </span>
      </div>
      <div className="p-6">
        <h2 className="text-lg font-medium text-gray-800 leading-relaxed mb-6">
          {question.question}
        </h2>

        <div className="space-y-3">
          {question.choices.map((choice) => {
            const isSelected = selectedAnswer === choice;
            const isCorrect = choice === question.correct_answer;
            
            let btnClass = "bg-white border-gray-200 text-gray-700 hover:border-blue-300 hover:bg-blue-50";
            let Icon = null;

            if (isAnswered) {
              if (isCorrect) {
                btnClass = "bg-green-50 border-green-500 text-green-800 font-medium";
                Icon = <CheckCircle2 className="w-5 h-5 text-green-600" />;
              } else if (isSelected) {
                btnClass = "bg-red-50 border-red-500 text-red-800";
                Icon = <XCircle className="w-5 h-5 text-red-600" />;
              } else {
                btnClass = "bg-gray-50 border-gray-200 text-gray-400 opacity-60";
              }
            }

            return (
              <button
                key={choice}
                onClick={() => !isAnswered && onAnswer(choice)}
                disabled={isAnswered}
                className={`w-full p-4 rounded-xl border flex items-center justify-between text-left transition-all ${btnClass} ${
                  !isAnswered ? "active:scale-[0.98]" : "cursor-default"
                }`}
              >
                <span className="flex-1">{choice}</span>
                {Icon && <span className="ml-3 shrink-0">{Icon}</span>}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
