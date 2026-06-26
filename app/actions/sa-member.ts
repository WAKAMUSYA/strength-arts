'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'

/**
 * ユーザーがSAメンバーかどうかを判定し、セッション情報を返す
 */
export async function getSAMemberStatus() {
  const supabase = createClient()
  const { data: { session } } = await supabase.auth.getSession()

  if (!session) {
    return { isMember: false, user: null }
  }

  // すでに存在している profiles テーブルをチェック
  const { data: profile } = await supabase
    .from('profiles')
    .select('is_sa_member')
    .eq('id', session.user.id)
    .single()

  // プロフィールが存在しない場合、あるいは is_sa_member が false の場合は非メンバー扱い
  // (自動で true にする場合はトリガーなどで設定済みと想定)
  return {
    isMember: profile?.is_sa_member ?? false,
    user: session.user
  }
}

/**
 * 特定のコラムのお気に入り状態と既読状態を取得する
 */
export async function getArticleStatus(articleId: string) {
  const supabase = createClient()
  const { data: { session } } = await supabase.auth.getSession()

  if (!session) {
    return { isFavorite: false, isRead: false }
  }

  // お気に入り状態を取得
  const { data: favorite } = await supabase
    .from('sa_favorite_articles')
    .select('id')
    .eq('user_id', session.user.id)
    .eq('article_id', articleId)
    .single()

  // 既読状態を取得
  const { data: history } = await supabase
    .from('sa_read_history')
    .select('id')
    .eq('user_id', session.user.id)
    .eq('article_id', articleId)
    .single()

  return {
    isFavorite: !!favorite,
    isRead: !!history
  }
}

/**
 * お気に入りをトグル（追加・削除）する
 */
export async function toggleFavoriteArticle(articleId: string) {
  const supabase = createClient()
  const { data: { session } } = await supabase.auth.getSession()

  if (!session) {
    throw new Error('Unauthorized')
  }

  // 現在の状態を確認
  const { data: favorite } = await supabase
    .from('sa_favorite_articles')
    .select('id')
    .eq('user_id', session.user.id)
    .eq('article_id', articleId)
    .single()

  if (favorite) {
    // 削除
    await supabase
      .from('sa_favorite_articles')
      .delete()
      .eq('id', favorite.id)
  } else {
    // 追加
    await supabase
      .from('sa_favorite_articles')
      .insert({
        user_id: session.user.id,
        article_id: articleId
      })
  }

  // 現在のページのキャッシュを再検証して最新の状態を反映
  revalidatePath(`/lab/[...slug]`, 'layout')
}

/**
 * 記事を既読にする
 */
export async function markArticleAsRead(articleId: string) {
  const supabase = createClient()
  const { data: { session } } = await supabase.auth.getSession()

  if (!session) {
    throw new Error('Unauthorized')
  }

  // 既に既読かチェック
  const { data: history } = await supabase
    .from('sa_read_history')
    .select('id')
    .eq('user_id', session.user.id)
    .eq('article_id', articleId)
    .single()

  if (!history) {
    await supabase
      .from('sa_read_history')
      .insert({
        user_id: session.user.id,
        article_id: articleId
      })
      
    revalidatePath(`/lab/[...slug]`, 'layout')
  }
}

/**
 * 複数の記事のステータスを一括取得する
 */
export async function getBulkArticleStatus(articleIds: string[]) {
  const supabase = createClient()
  const { data: { session } } = await supabase.auth.getSession()

  const result = articleIds.reduce((acc, id) => {
    acc[id] = { isFavorite: false, isRead: false }
    return acc
  }, {} as Record<string, { isFavorite: boolean; isRead: boolean }>)

  if (!session || articleIds.length === 0) {
    return result
  }

  const { data: favorites } = await supabase
    .from('sa_favorite_articles')
    .select('article_id')
    .eq('user_id', session.user.id)
    .in('article_id', articleIds)

  const { data: histories } = await supabase
    .from('sa_read_history')
    .select('article_id')
    .eq('user_id', session.user.id)
    .in('article_id', articleIds)

  favorites?.forEach(fav => {
    if (result[fav.article_id]) result[fav.article_id].isFavorite = true
  })

  histories?.forEach(hist => {
    if (result[hist.article_id]) result[hist.article_id].isRead = true
  })

  return result
}
