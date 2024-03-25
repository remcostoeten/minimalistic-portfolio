"use client"

import { useState } from "react"
import { gql, useQuery } from "@apollo/client"
import clsx from "clsx"
import { format } from "date-fns"
import { motion } from "framer-motion"

import SkeletonBar from "@/components/loaders/Skeleton"

interface Contribution {
  contributionCount: number
  date: string
}
interface Month {
  name: string
  firstDay: string
  totalWeeks: number
  contributionsCount: number
}

const GitHubCalendar = ({ username }: { username: string }) => {
  const { loading, error, data } = useQuery(GET_CONTRIBUTIONS, {
    variables: { username },
  })
  const [selectContribution, setSelectContribution] = useState<{
    count: number | null
    date: string | null
  }>({
    count: null,
    date: null,
  })

  if (loading) return <SkeletonBar width={60} height={40} />
  if (error) return <p>Error: {error.message}</p>

  const contributions: Contribution[] =
    data?.user?.contributionsCollection?.contributionCalendar?.weeks?.flatMap(
      (week: { contributionDays: Contribution[] }) => week.contributionDays
    ) || []

  const weeks =
    data?.user?.contributionsCollection?.contributionCalendar?.weeks ?? []
  const contributionColors = data?.colors ?? []

  const getContributionColor = (count: number) => {
    if (count === 0) return "#171C21"
    if (count < 5) return "#1a5923"
    if (count < 10) return "#2c913a"
    if (count < 25) return "#3ED054"
    if (count < 50) return "#46e35c"
    return "#196127"
  }
  const months: string[] = []
  weeks.forEach((week) => {
    if (Date.parse(week.firstDay)) {
      const month = format(new Date(week.firstDay), "MMMM")
      if (!months.includes(month)) {
        months.push(month)
      }
    }
  })

  return (
    <div>
      <div className="flex justify-start gap-[3px] overflow-hidden">
        <div className="flex justify-start gap-[3px] overflow-hidden">
          {months.map((month, index) => (
            <div key={index} className="text-xs dark:text-neutral-400">
              {month}
            </div>
          ))}
        </div>
        {weeks?.map((week) => (
          <div key={week.firstDay}>
            {week.contributionDays.map((contribution) => {
              const backgroundColor = getContributionColor(
                contribution.contributionCount
              )
              const getRandomDelayAnimate =
                Math.random() * week.contributionDays.length * 0.15

              return (
                <motion.span
                  key={contribution.date}
                  initial="initial"
                  animate="animate"
                  variants={{
                    initial: { opacity: 0, translateY: -20 },
                    animate: {
                      opacity: 1,
                      translateY: 0,
                      transition: { delay: getRandomDelayAnimate },
                    },
                  }}
                  className="my-[2px] block h-[12px] w-[12px] rounded-sm bg-neutral-300 dark:bg-neutral-800"
                  style={backgroundColor ? { backgroundColor } : undefined}
                  onMouseEnter={() =>
                    setSelectContribution({
                      count: contribution.contributionCount,
                      date: contribution.date,
                    })
                  }
                  onMouseLeave={() =>
                    setSelectContribution({ count: null, date: null })
                  }
                />
              )
            })}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 text-sm">
        <span className="dark:text-neutral-400">Less</span>
        <ul className="flex gap-1">
          <motion.li className="h-[10px] w-[10px] rounded-sm bg-[#171C21]" />
          <motion.li className="h-[10px] w-[10px] rounded-sm bg-[#0E4529]" />
          <motion.li className="h-[10px] w-[10px] rounded-sm bg-[#006A32]" />
          <motion.li className="h-[10px] w-[10px] rounded-sm bg-[#3ED054]" />
          {contributionColors.map((item, index) => (
            <motion.li
              key={item}
              initial="initial"
              animate="animate"
              variants={{
                initial: { opacity: 0 },
                animate: {
                  opacity: 1,
                  transition: { delay: index * 0.3 },
                },
              }}
              className="h-[10px] relative w-[10px] rounded-sm"
              style={{ backgroundColor: item }}
            />
          ))}
        </ul>
        <span>More</span>
      </div>

      <div
        className={clsx(
          `${selectContribution?.date ? "opacity-100" : "opacity-0"}`,
          "rounded bg-neutral-200 px-2 w-fit absolute text-sm dark:bg-neutral-700"
        )}
      >
        {selectContribution?.count} contributions on {selectContribution?.date}
      </div>
    </div>
  )
}

export default GitHubCalendar

const GET_CONTRIBUTIONS = gql`
  query GetUserContributions($username: String!) {
    user(login: $username) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
            }
          }
        }
      }
    }
  }
`
