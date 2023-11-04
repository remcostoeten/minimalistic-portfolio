'use client'

import { siteConfig } from '@/config/data'
import { Comments as CommentsComponent } from 'pliny/comments'
import { useState } from 'react'

export default function Comments({ slug }: { slug: string }) {
  const [loadComments, setLoadComments] = useState(false)
  return (
    <>
      {!loadComments && <button onClick={() => setLoadComments(true)}>Load Comments</button>}
      {siteConfig.comments && loadComments && (
        <CommentsComponent commentsConfig={siteConfig.comments} slug={slug} />
      )}
    </>
  )
}
