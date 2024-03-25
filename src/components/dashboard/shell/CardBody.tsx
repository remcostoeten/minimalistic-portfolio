import React from "react"

import { Card, CardContent } from "@/components/ui/card"

interface CardBodyProps {
  name?: string
  description?: string
  stargazers_count?: number
  forks_count?: number
  open_issues_count?: number
  language?: string
  updated_at?: string
  created_at?: any
  clone_url?: string
  homepage?: string
  loading?: boolean
  created?: string
}

export default function CardBody({
  name = "",
  description = "",
  stargazers_count = 0,
  forks_count = 0,
  open_issues_count = 0,
  language = "",
  updated_at = "",
  created_at = "",
  clone_url = "",
  homepage = "",
  loading = true,
  created = "",
}: CardBodyProps) {
  return (
    <div className="bg-[#1a1a1a] text-white">
      <div>
        <div className="grid grid-cols-1 gap-4 p-4">
          <div>
            <div className="font-bold">Description:</div>
            <div>
              {loading ? <div className="skeleton h-8 w-12" /> : description}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 p-4">
          <div>
            <div className="font-bold">Stars:</div>
            <div>
              {loading ? (
                <div className="skeleton h-8 w-12" />
              ) : (
                stargazers_count
              )}
            </div>
          </div>
          <div>
            <div className="font-bold">Forks:</div>
            <div>
              {loading ? <div className="skeleton h-8 w-12" /> : forks_count}
            </div>
          </div>
          <div>
            <div className="font-bold">Open Issues:</div>
            <div>
              {loading ? (
                <div className="skeleton h-8 w-12" />
              ) : (
                open_issues_count
              )}
            </div>
          </div>
          <div>
            <div className="font-bold">Language:</div>
            <div>
              {loading ? <div className="skeleton h-8 w-full" /> : language}
            </div>
          </div>
          <div>
            <div className="font-bold">Updated At:</div>
            <div>
              {loading ? <div className="skeleton h-8 w-full" /> : updated_at}
            </div>
          </div>
          <div>
            <div className="font-bold">Created At:</div>
            <div>
              {loading ? <div className="skeleton h-8 w-full" /> : created_at}
            </div>
          </div>
          <div>
            <div className="font-bold">Clone URL:</div>
            <div>
              {loading ? <div className="skeleton h-8 w-full" /> : clone_url}
            </div>
          </div>
          <div>
            <div className="font-bold">Homepage:</div>
            <div>
              {loading ? <div className="skeleton h-8 w-full" /> : homepage}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
