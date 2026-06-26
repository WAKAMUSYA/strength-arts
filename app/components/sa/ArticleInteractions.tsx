'use client'

import React, { useTransition } from 'react'
import { Bookmark, CheckCircle2 } from 'lucide-react'
import { toggleFavoriteArticle, markArticleAsRead } from '@/app/actions/sa-member'

type Props = {
  articleId: string
  initialIsFavorite: boolean
  initialIsRead: boolean
}

export function ArticleInteractions({ articleId, initialIsFavorite, initialIsRead }: Props) {
  const [isPendingFav, startTransitionFav] = useTransition()
  const [isPendingRead, startTransitionRead] = useTransition()

  const handleToggleFavorite = () => {
    startTransitionFav(async () => {
      try {
        await toggleFavoriteArticle(articleId)
      } catch (e) {
        console.error(e)
        alert('エラーが発生しました。ログインしているか確認してください。')
      }
    })
  }

  const handleMarkAsRead = () => {
    if (initialIsRead) return // すでに既読なら何もしない
    startTransitionRead(async () => {
      try {
        await markArticleAsRead(articleId)
      } catch (e) {
        console.error(e)
        alert('エラーが発生しました。ログインしているか確認してください。')
      }
    })
  }

  return (
    <div className="flex flex-wrap items-center gap-4 mt-8 pt-6 border-t border-zinc-900">
      <button
        onClick={handleToggleFavorite}
        disabled={isPendingFav}
        className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
          initialIsFavorite
            ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]'
            : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-400 border border-zinc-800'
        }`}
      >
        <Bookmark className={`w-4 h-4 ${initialIsFavorite ? 'fill-current' : ''}`} />
        {isPendingFav ? '処理中...' : initialIsFavorite ? 'お気に入りから外す' : 'お気に入りに保存'}
      </button>

      <button
        onClick={handleMarkAsRead}
        disabled={initialIsRead || isPendingRead}
        className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
          initialIsRead
            ? 'bg-emerald-950/30 text-emerald-500 border border-emerald-900/50 cursor-default'
            : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-400 border border-zinc-800'
        }`}
      >
        <CheckCircle2 className="w-4 h-4" />
        {isPendingRead ? '処理中...' : initialIsRead ? '既読済み' : '既読にする'}
      </button>
    </div>
  )
}
