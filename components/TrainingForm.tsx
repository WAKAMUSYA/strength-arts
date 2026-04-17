'use client';

import { useState, useRef } from 'react';
import { addTrainingLog } from '@/app/actions/training';
import { Save, PlusCircle } from 'lucide-react';

export default function TrainingForm() {
  const [isSaving, setIsSaving] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  // 当日の日付をYYYY-MM-DD形式で取得
  const today = new Date().toISOString().split('T')[0];

  const handleSubmit = async (formData: FormData) => {
    try {
      setIsSaving(true);
      await addTrainingLog(formData);
      formRef.current?.reset();
      
      // 日付は当日のまま維持
      const dateInput = formRef.current?.querySelector('input[name="date"]') as HTMLInputElement;
      if (dateInput) dateInput.value = today;
      
      // 種目名は維持
      const exerciseInput = formRef.current?.querySelector('input[name="exercise_name"]') as HTMLInputElement;
      if (exerciseInput) exerciseInput.value = formData.get('exercise_name') as string;
      
    } catch (error) {
      console.error('Failed to add log:', error);
      alert('エラーが発生しました。入力内容を確認してください。');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm mb-8">
      <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
        <PlusCircle className="w-6 h-6 mr-2 text-blue-600" />
        セットを記録
      </h2>
      <form ref={formRef} action={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="col-span-2">
            <label className="block text-sm font-medium text-slate-700 mb-1">日付</label>
            <input 
              type="date" 
              name="date" 
              defaultValue={today}
              required
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-medium text-slate-700 mb-1">種目名</label>
            <input 
              type="text" 
              name="exercise_name" 
              placeholder="例: スクワット"
              required
              list="exercise-list"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50"
            />
            <datalist id="exercise-list">
              <option value="スクワット" />
              <option value="ベンチプレス" />
              <option value="デッドリフト" />
              <option value="オーバーヘッドプレス" />
              <option value="懸垂" />
            </datalist>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">重量 (kg)</label>
            <input 
              type="number" 
              name="weight" 
              placeholder="0"
              step="0.5"
              min="0"
              required
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50 text-center text-lg font-bold"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">回数</label>
            <input 
              type="number" 
              name="reps" 
              placeholder="0"
              min="1"
              required
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50 text-center text-lg font-bold"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">RPE (任意)</label>
            <input 
              type="number" 
              name="rpe" 
              placeholder="-"
              step="0.5"
              min="1"
              max="10"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50 text-center text-lg font-bold"
            />
          </div>
        </div>

        <button 
          type="submit" 
          disabled={isSaving}
          className="w-full mt-4 flex items-center justify-center py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors disabled:opacity-50"
        >
          {isSaving ? '保存中...' : (
            <>
              <Save className="w-5 h-5 mr-2" />
              保存する
            </>
          )}
        </button>
      </form>
    </div>
  );
}
