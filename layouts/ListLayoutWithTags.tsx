/* eslint-disable jsx-a11y/anchor-is-valid */
'use client'

import { usePathname } from 'next/navigation'
import { slug } from 'github-slugger'
import { formatDate } from 'pliny/utils/formatDate'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import tagData from '@/app/(seo-blog)/tag-data.json'
import Link from '@/components/(blog)/Link'
import { siteConfig } from '@/config/data'
import Tag from '@/components/(blog)/Tag'

interface PaginationProps {
  totalPages: number
  currentPage: number
}
interface ListLayoutProps {
  posts: CoreContent<Blog>[]
  title: string
  initialDisplayPosts?: CoreContent<Blog>[]
  pagination?: PaginationProps
}

function Pagination({ totalPages, currentPage }: PaginationProps) {
  const pathname = usePathname()
  const basePath = pathname.split('/')[1]
  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages

  return (
    <div className="space-y-2 pb-8 pt-6 md:space-y-5">
      <nav className="flex justify-between">
        {!prevPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!prevPage}>
            Previous
          </button>
        )}
        {prevPage && (
          <Link
            href={currentPage - 1 === 1 ? `/${basePath}/` : `/${basePath}/page/${currentPage - 1}`}
            rel="prev"
          >
            Previous
          </Link>
        )}
        <span>
          {currentPage} of {totalPages}
        </span>
        {!nextPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!nextPage}>
            Next
          </button>
        )}
        {nextPage && (
          <Link href={`/${basePath}/page/${currentPage + 1}`} rel="next">
            Next
          </Link>
        )}
      </nav>
    </div>
  )
}

export default function ListLayoutWithTags({
  posts,
  title,
  initialDisplayPosts = [],
  pagination,
}: ListLayoutProps) {
  const pathname = usePathname()
  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a])

  const displayPosts = initialDisplayPosts.length > 0 ? initialDisplayPosts : postsreturn(
    <>
      <h1>{title}</h1>
      {pathname && pathname.startsWith('/blog') ? <h3>All Posts</h3> : <Link href={`/blog`}>All Posts</Link>}
      <ul>
        {sortedTags.map((t) => {
          return (
            <li key={t}>
              {pathname && pathname.split('/tags/')[1] === slug(t) ? (
                <h3>{`${t} (${tagCounts[t]})`}</h3>
              ) : (
                <Link href={`/tags/${slug(t)}`} aria-label={`View posts tagged ${t}`}>
                  {`${t} (${tagCounts[t]})`}
                </Link>
              )}
            </li>
          )
        })}
      </ul>
      <ul>
        {displayPosts.map((post) => {
          const { path, date, title, summary, tags } = post
          return (
            <li key={path}>
              <article>
                <dl>
                  <dt>Published on</dt>
                  <dd>
                    <time dateTime={date}>{formatDate(date, siteConfig.locale)}</time>
                  </dd>
                </dl>
                <div>
                  <div>
                    <h2>
                      <Link href={`/${path}`}>{title}</Link>
                    </h2>
                    <div>{tags?.map((tag) => <Tag key={tag} text={tag} />)}</div>
                  </div>
                  <div>{summary}</div>
                </div>
              </article>
            </li>
          )
        })}
      </ul>
      {pagination && pagination.totalPages > 1 && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  )

}
