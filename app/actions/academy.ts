'use server';

import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';

type AnswerRecord = {
  questionId: string;
  isCorrect: boolean;
};

/**
 * クイズ結果を保存するアクション
 */
export async function saveQuizResult(
  quizType: string,
  score: number,
  totalQuestions: number,
  answers: AnswerRecord[]
) {
  const supabase = createClient();
  
  // ログインユーザーの取得
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    throw new Error('User not authenticated');
  }

  // 1. quiz_attempts への保存
  const { data: attemptData, error: attemptError } = await supabase
    .from('quiz_attempts')
    .insert([
      {
        user_id: user.id,
        quiz_type: quizType,
        score,
        total_questions: totalQuestions,
      }
    ])
    .select('id')
    .single();

  if (attemptError || !attemptData) {
    console.error('Failed to save attempt:', attemptError);
    throw new Error('Failed to save quiz attempt');
  }

  const attemptId = attemptData.id;

  // 2. quiz_answers への一括保存
  const answersToInsert = answers.map((ans) => ({
    user_id: user.id,
    attempt_id: attemptId,
    question_id: ans.questionId,
    is_correct: ans.isCorrect,
  }));

  const { error: answersError } = await supabase
    .from('quiz_answers')
    .insert(answersToInsert);

  if (answersError) {
    console.error('Failed to save answers:', answersError);
    throw new Error('Failed to save quiz answers');
  }

  // ダッシュボードのキャッシュをクリアして最新の進捗を反映
  revalidatePath('/dashboard');
  revalidatePath('/dashboard/academy');

  return { success: true };
}

/**
 * ダッシュボード用の学習進捗を取得するアクション
 */
export async function getLearningProgress() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    return null;
  }

  // CSCSの挑戦履歴を取得
  const { data: attempts } = await supabase
    .from('quiz_attempts')
    .select('score, total_questions, created_at')
    .eq('user_id', user.id)
    .eq('quiz_type', 'cscs')
    .order('created_at', { ascending: false });

  if (!attempts || attempts.length === 0) {
    return {
      totalAttempts: 0,
      averageScore: 0,
      recentAttempts: []
    };
  }

  // 平均点などの算出
  const totalScore = attempts.reduce((acc, curr) => acc + curr.score, 0);
  const totalMaxScore = attempts.reduce((acc, curr) => acc + curr.total_questions, 0);
  const averageScorePercentage = totalMaxScore > 0 ? Math.round((totalScore / totalMaxScore) * 100) : 0;

  return {
    totalAttempts: attempts.length,
    averageScore: averageScorePercentage,
    recentAttempts: attempts.slice(0, 5) // 直近5回分
  };
}

/**
 * 読了済み講義IDのリストを取得するアクション
 */
export async function getReadLectures() {
  try {
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return [];
    }

    const { data, error } = await supabase
      .from('lecture_reads')
      .select('lecture_id')
      .eq('user_id', user.id);

    if (error) {
      console.error('Error fetching read lectures:', error);
      return [];
    }

    return data.map(item => item.lecture_id);
  } catch (error) {
    console.error('Error in getReadLectures:', error);
    return [];
  }
}

/**
 * 講義の読了状態を切り替えるアクション
 */
export async function toggleLectureRead(lectureId: string, isCurrentlyRead: boolean) {
  try {
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return { success: false, error: 'User not authenticated' };
    }

    if (isCurrentlyRead) {
      // Remove read status
      const { error } = await supabase
        .from('lecture_reads')
        .delete()
        .eq('user_id', user.id)
        .eq('lecture_id', lectureId);

      if (error) throw error;
    } else {
      // Add read status
      const { error } = await supabase
        .from('lecture_reads')
        .insert({
          user_id: user.id,
          lecture_id: lectureId
        });

      if (error) throw error;
    }

    // Update UI paths
    revalidatePath('/dashboard/academy');
    revalidatePath(`/dashboard/academy/basics/${lectureId}`);
    
    return { success: true };
  } catch (error) {
    console.error('Error in toggleLectureRead:', error);
    return { success: false, error: 'Failed to toggle read status' };
  }
}
