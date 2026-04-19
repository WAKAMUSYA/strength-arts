"use client";

import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import type { Question } from "@/data/questions";
import { cptQuestions } from "@/data/cptQuestions";
import QuizCard from "@/components/QuizCard";
import ResultView from "@/components/ResultView";
import { ChevronRight, Home, Trophy, RotateCcw } from "lucide-react";

function QuizContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const category = searchParams.get("category");
  const mode = searchParams.get("mode");

  const [filteredQuestions, setFilteredQuestions] = useState<Question[]>(cptQuestions);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    let qList = [...cptQuestions];
    if (category) {
      qList = qList.filter((q) => q.category === category);
    }
    if (mode === "random") {
      qList = qList.sort(() => Math.random() - 0.5);
    }
    setFilteredQuestions(qList);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setIsFinished(false);
  }, [category, mode]);

  const currentQuestion = filteredQuestions[currentIndex];

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    if (answer === currentQuestion.correct_answer) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < filteredQuestions.length - 1) {
      setCurrentIndex((i) => i + 1);
      setSelectedAnswer(null);
    } else {
      setIsFinished(true);
    }
  };

  if (filteredQuestions.length === 0) {
    return <div className="p-8 text-center">該当する問題がありません。</div>;
  }

  if (isFinished) {
    const percentage = Math.round((score / filteredQuestions.length) * 100);
    return (
      <div className="max-w-md w-full mx-auto bg-white rounded-2xl shadow-xl overflow-hidden animate-in fade-in zoom-in duration-500">
        <div className="bg-blue-600 p-8 text-center text-white">
          <Trophy className="w-16 h-16 mx-auto mb-4 text-yellow-300" />
          <h2 className="text-2xl font-bold mb-2">結果</h2>
          <p className="text-blue-100">お疲れ様でした！</p>
        </div>
        <div className="p-8 text-center space-y-6">
          <div className="text-5xl font-extrabold text-gray-800">
            {score} / {filteredQuestions.length}
            <span className="text-2xl text-gray-500 ml-2">問</span>
          </div>
          <div className="text-lg font-medium text-gray-600">正答率: {percentage}%</div>

          <div className="pt-6 border-t border-gray-100 space-y-3">
            <button
              onClick={() => {
                setCurrentIndex(0);
                setScore(0);
                setSelectedAnswer(null);
                setIsFinished(false);
                if (mode === "random") {
                  setFilteredQuestions([...filteredQuestions].sort(() => Math.random() - 0.5));
                }
              }}
              className="w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-xl font-medium transition-colors"
            >
              <RotateCcw className="w-5 h-5" />
              <span>もう一度解く</span>
            </button>
            <button
              onClick={() => router.push("/academy")}
              className="w-full flex items-center justify-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-700 p-4 rounded-xl font-medium transition-colors"
            >
              <Home className="w-5 h-5" />
              <span>Academyへ戻る</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-xl w-full mx-auto">
      <div className="flex justify-between items-center mb-6 px-2">
        <button
          onClick={() => router.push("/academy")}
          className="text-gray-500 hover:text-gray-800 flex items-center text-sm font-medium transition-colors"
        >
          <Home className="w-4 h-4 mr-1" />
          Academy
        </button>
        <div className="text-sm font-bold text-gray-400 bg-white px-4 py-1.5 rounded-full shadow-sm">
          {currentIndex + 1} / {filteredQuestions.length}
        </div>
      </div>

      <QuizCard question={currentQuestion} selectedAnswer={selectedAnswer} onAnswer={handleAnswer} />

      {selectedAnswer && (
        <div className="space-y-6">
          <ResultView question={currentQuestion} selectedAnswer={selectedAnswer} />
          <button
            onClick={handleNext}
            className="w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-xl font-bold shadow-lg shadow-blue-200 transition-all active:scale-[0.98]"
          >
            <span>{currentIndex < filteredQuestions.length - 1 ? "次へ" : "終了"}</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
}

export default function CptQuizPage() {
  return (
    <main className="min-h-screen bg-slate-50 p-4 md:p-8 flex flex-col items-center">
      <Suspense fallback={<div className="p-8 text-center text-gray-500">読み込み中...</div>}>
        <QuizContent />
      </Suspense>
    </main>
  );
}

