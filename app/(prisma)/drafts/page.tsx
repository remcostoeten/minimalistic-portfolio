import Post from '@/components/Post'
import prisma from '@/lib/prisma'
import React from 'react'

export default async function page() {
  const drafts = await prisma.post.findMany({
    where: { published: false },
    include: { author: true },
  })
  return (
    <>
      <div>
        <h1>Drafts</h1>
        <main>
          {drafts.map((post) => (
            <div key={post.id} >
              <Post post={post} />
            </div>
          ))}
        </main>
      </div>
    </>
  )
}
