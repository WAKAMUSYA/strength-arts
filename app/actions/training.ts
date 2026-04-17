'use server';

import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';

export type TrainingLog = {
  id: string;
  date: string;
  exercise_name: string;
  weight: number;
  reps: number;
  rpe: number | null;
  created_at: string;
};

/**
 * トレーニング記録を保存するアクション
 */
export async function addTrainingLog(formData: FormData) {
  const supabase = createClient();
  
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    throw new Error('User not authenticated');
  }

  const date = formData.get('date') as string;
  const exercise_name = formData.get('exercise_name') as string;
  const weight = parseFloat(formData.get('weight') as string);
  const reps = parseInt(formData.get('reps') as string, 10);
  const rpeStr = formData.get('rpe') as string;
  const rpe = rpeStr ? parseFloat(rpeStr) : null;

  if (!date || !exercise_name || isNaN(weight) || isNaN(reps)) {
    throw new Error('Invalid input data');
  }

  const { error } = await supabase
    .from('training_logs')
    .insert([
      {
        user_id: user.id,
        date,
        exercise_name,
        weight,
        reps,
        rpe,
      }
    ]);

  if (error) {
    console.error('Failed to save training log:', error);
    throw new Error('Failed to save training log');
  }

  revalidatePath('/dashboard/training');
  return { success: true };
}

/**
 * 過去のトレーニング記録を取得するアクション
 */
export async function getTrainingLogs(limit = 50): Promise<TrainingLog[]> {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    return [];
  }

  const { data, error } = await supabase
    .from('training_logs')
    .select('*')
    .eq('user_id', user.id)
    .order('date', { ascending: false })
    .order('created_at', { ascending: false })
    .limit(limit);

  if (error) {
    console.error('Failed to fetch training logs:', error);
    return [];
  }

  return data as TrainingLog[];
}

/**
 * トレーニング記録を削除するアクション
 */
export async function deleteTrainingLog(id: string) {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    throw new Error('User not authenticated');
  }

  const { error } = await supabase
    .from('training_logs')
    .delete()
    .eq('id', id)
    .eq('user_id', user.id);

  if (error) {
    console.error('Failed to delete training log:', error);
    throw new Error('Failed to delete training log');
  }

  revalidatePath('/dashboard/training');
  return { success: true };
}
