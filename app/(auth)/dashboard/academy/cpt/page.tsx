"use client";

import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import type { Question } from "@/data/questions";
import { cptQuestions } from "@/data/cptQuestions";
import QuizCard from "@/components/QuizCard";
import ResultView from "@/components/ResultView";
import { ChevronRight, Home, Trophy, RotateCcw, Save } from "lucide-react";
import { saveQuizResult } from "@/app/actions/academy";

type AnswerRecord = {
  questionId: string;
  isCorrect: boolean;
};

function QuizContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const category = searchParams.get("category");
  const mode = searchParams.get("mode");
  const blockParam = searchParams.get("block");

  const [filteredQuestions, setFilteredQuestions] = useState<Question[]>(cptQuestions);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isFinished, setIsFinished] = useState(false);

  const [answerHistory, setAnswerHistory] = useState<AnswerRecord[]>([]);
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    let qList = [...cptQuestions];

    if (blockParam) {
      qList = qList.filter((q) => q.blockId === parseInt(blockParam, 10));
    } else if (category) {
      qList = qList.filter((q) => q.category === category);
    }

    if (mode === "random") {
      qList = qList.sort(() => Math.random() - 0.5);
    }

    setFilteredQuestions(qList);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsFinished(false);
    setAnswerHistory([]);
    setIsSaving(false);
    setSaveSuccess(false);
  }, [category, mode, blockParam]);

  const currentQuestion = filteredQuestions[currentIndex];

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);

    const isCorrect = answer === currentQuestion.correct_answer;
    setAnswerHistory((prev) => [
      ...prev,
      { questionId: currentQuestion.id, isCorrect },
    ]);
  };

  const handleNext = async () => {
    if (currentIndex < filteredQuestions.length - 1) {
      setCurrentIndex((i) => i + 1);
      setSelectedAnswer(null);
      return;
    }

    // Finish + persist result (answerHistory may lag behind the last answer).
    const lastIsCorrect = selectedAnswer === currentQuestion.correct_answer;
    const hasLast = answerHistory.some((h) => h.questionId === currentQuestion.id);
    const finalAnswers = hasLast
      ? answerHistory
      : [...answerHistory, { questionId: currentQuestion.id, isCorrect: lastIsCorrect }];
    const finalScore = finalAnswers.filter((a) => a.isCorrect).length;

    setAnswerHistory(finalAnswers);
    setIsFinished(true);

    try {
      setIsSaving(true);
      await saveQuizResult("cpt", finalScore, filteredQuestions.length, finalAnswers);
      setSaveSuccess(true);
    } catch (e) {
      console.error("Failed to save progress", e);
    } finally {
      setIsSaving(false);
    }
  };

  if (filteredQuestions.length === 0) {
    return <div className="p-8 text-center">該当する問題がありません。</div>;
  }

  if (isFinished) {
    const finalScore = answerHistory.filter((a) => a.isCorrect).length;
    const percentage = Math.round((finalScore / filteredQuestions.length) * 100);

    return (
      <div className="max-w-md w-full mx-auto bg-white rounded-2xl shadow-xl overflow-hidden animate-in fade-in zoom-in duration-500">
        <div className="bg-blue-600 p-8 text-center text-white relative">
          <Trophy className="w-16 h-16 mx-auto mb-4 text-yellow-300" />
          <h2 className="text-2xl font-bold mb-2">結果</h2>
          <p className="text-blue-100">お疲れ様でした！</p>

          {isSaving && (
            <div className="absolute top-4 right-4 text-xs bg-white/20 px-2 py-1 rounded-full flex items-center">
              <RotateCcw className="w-3 h-3 mr-1 animate-spin" /> 保存中...
            </div>
          )}
          {!isSaving && saveSuccess && (
            <div className="absolute top-4 right-4 text-xs bg-green-500/80 px-2 py-1 rounded-full flex items-center">
              <Save className="w-3 h-3 mr-1" /> 保存しました
            </div>
          )}
        </div>
        <div className="p-8 text-center space-y-6">
          <div className="text-5xl font-extrabold text-gray-800">
            {finalScore} / {filteredQuestions.length}
            <span className="text-2xl text-gray-500 ml-2">問</span>
          </div>
          <div className="text-lg font-medium text-gray-600">正答率: {percentage}%</div>

          <div className="pt-6 border-t border-gray-100 space-y-3">
            <button
              onClick={() => {
                setCurrentIndex(0);
                setSelectedAnswer(null);
                setIsFinished(false);
                setAnswerHistory([]);
                setSaveSuccess(false);
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
              onClick={() => router.push("/dashboard/academy")}
              className="w-full flex items-center justify-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-700 p-4 rounded-xl font-medium transition-colors"
            >
              <Home className="w-5 h-5" />
              <span>ダッシュボードへ戻る</span>
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
          onClick={() => router.push("/dashboard/academy")}
          className="text-gray-500 hover:text-gray-800 flex items-center text-sm font-medium transition-colors"
        >
          <Home className="w-4 h-4 mr-1" />
          ダッシュボードへ
        </button>
        <div className="text-sm font-bold text-gray-400 bg-white px-4 py-1.5 rounded-full shadow-sm flex items-center">
          <span className="w-2 h-2 rounded-full bg-blue-500 mr-2 animate-pulse"></span>
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
            <span>{currentIndex < filteredQuestions.length - 1 ? "次へ" : "終了して保存"}</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
}

export default function DashboardCptQuizPage() {
  return (
    <main className="min-h-screen bg-slate-50 p-4 md:p-8 flex flex-col items-center">
      <Suspense fallback={<div className="p-8 text-center text-gray-500">読み込み中...</div>}>
        <QuizContent />
      </Suspense>
    </main>
  );
}
