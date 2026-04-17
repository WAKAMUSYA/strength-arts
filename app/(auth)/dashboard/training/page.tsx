import Link from 'next/link';
import TrainingForm from '@/components/TrainingForm';
import TrainingLogActions from '@/components/TrainingLogActions';
import { getTrainingLogs } from '@/app/actions/training';
import { Dumbbell } from 'lucide-react';

export default async function DashboardTrainingPage() {
  const logs = await getTrainingLogs();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/dashboard" className="p-2 text-slate-500 hover:text-slate-900 transition-colors bg-slate-100 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight flex items-center">
            <Dumbbell className="w-8 h-8 mr-3 text-red-600" />
            Training Log
          </h1>
          <p className="text-slate-600 mt-1 text-sm">
            日々のトレーニングのセットを記録し、ボリュームを可視化します。
          </p>
        </div>
      </div>
      
      <TrainingForm />

      <div className="mt-12">
        <h3 className="text-lg font-bold text-slate-800 mb-6">最近の記録</h3>
        
        {logs.length === 0 ? (
          <div className="bg-slate-50 rounded-2xl border border-slate-200 border-dashed p-8 text-center text-slate-500">
            まだ記録がありません。上のフォームから最初のセットを記録しましょう！
          </div>
        ) : (
          <div className="space-y-4">
            {logs.map((log) => (
              <div key={log.id} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-medium px-2 py-1 bg-slate-100 text-slate-600 rounded-md">
                      {log.date}
                    </span>
                    <span className="font-bold text-slate-800 text-lg">
                      {log.exercise_name}
                    </span>
                  </div>
                  <div className="flex items-end gap-4 text-slate-700">
                    <div>
                      <span className="text-2xl font-black">{log.weight}</span>
                      <span className="text-sm ml-1 text-slate-500">kg</span>
                    </div>
                    <div className="text-slate-400 mb-1">×</div>
                    <div>
                      <span className="text-xl font-bold">{log.reps}</span>
                      <span className="text-sm ml-1 text-slate-500">reps</span>
                    </div>
                    {log.rpe && (
                      <div className="ml-4 pl-4 border-l border-slate-200">
                        <span className="text-sm text-slate-500">RPE:</span>
                        <span className="ml-1 font-semibold">{log.rpe}</span>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="ml-4 w-24 border-l border-slate-100 pl-4 h-full">
                  <TrainingLogActions id={log.id} weight={log.weight} reps={log.reps} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
