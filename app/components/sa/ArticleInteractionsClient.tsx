'use client'

import React, { useEffect, useState } from 'react'
import { getArticleStatus } from '@/app/actions/sa-member'
import { ArticleInteractions } from './ArticleInteractions'

export function ArticleInteractionsClient({ articleId }: { articleId: string }) {
  const [status, setStatus] = useState({ isFavorite: false, isRead: false, loading: true })

  useEffect(() => {
    let isMounted = true
    getArticleStatus(articleId).then(res => {
      if (isMounted) {
        setStatus({ isFavorite: res.isFavorite, isRead: res.isRead, loading: false })
      }
    })
    return () => {
      isMounted = false
    }
  }, [articleId])

  if (status.loading) {
    return <div className="mt-8 pt-6 border-t border-zinc-900 animate-pulse flex gap-4"><div className="h-10 w-40 bg-zinc-900 rounded-full"></div><div className="h-10 w-32 bg-zinc-900 rounded-full"></div></div>
  }

  return (
    <ArticleInteractions 
      articleId={articleId} 
      initialIsFavorite={status.isFavorite} 
      initialIsRead={status.isRead} 
    />
  )
}
