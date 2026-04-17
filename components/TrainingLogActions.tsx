'use client';

import { deleteTrainingLog } from "@/app/actions/training";
import { Trash2 } from "lucide-react";
import { useState } from "react";

// 推定1RMを計算する関数 (Epley式)
const calculate1RM = (weight: number, reps: number) => {
  if (reps === 1) return weight;
  return Math.round(weight * (1 + reps / 30) * 10) / 10;
};

export default function DeleteLogButton({ id, weight, reps }: { id: string, weight: number, reps: number }) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (!confirm('この記録を削除しますか？')) return;
    try {
      setIsDeleting(true);
      await deleteTrainingLog(id);
    } catch (e) {
      console.error(e);
      setIsDeleting(false);
    }
  };

  return (
    <div className="flex flex-col items-end justify-between h-full">
      <div className="text-right">
        <p className="text-xs text-slate-400 mb-1">推定1RM</p>
        <p className="font-bold text-slate-700">{calculate1RM(weight, reps)} kg</p>
      </div>
      <button 
        onClick={handleDelete}
        disabled={isDeleting}
        className="p-2 text-slate-400 hover:text-red-500 transition-colors disabled:opacity-50"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  );
}
