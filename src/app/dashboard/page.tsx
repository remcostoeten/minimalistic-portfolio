"use client"

import { useState } from "react"
import Link from "next/link"
import { auth } from "@/core/(database)/firebase"
import { GET_USER_REPOSITORIES } from "@/core/(graphql)/queries/queries"
import { useQuery } from "@apollo/client"
import { AnimatePresence, motion } from "framer-motion"
import { GithubIcon, SearchIcon } from "lucide-react"

import { SearchFormProps } from "@/core/types/types"
import CardBody from "@/components/dashboard/shell/CardBody"
import CardFooter from "@/components/dashboard/shell/CardFooter"
import CardHeader from "@/components/dashboard/shell/CardHeader"
import GitHubCalendar from "@/components/data/github/GithubCalender"
import GithubContributionCards from "@/components/data/github/GithubContributions"
import SectionHeading from "@/components/layout/SectionHeading"
import SectionSubHeading from "@/components/layout/SectionSubHeading"
import { CardShellSkeleton } from "@/components/loaders/Skeleton"

const SearchForm: React.FC<SearchFormProps> = ({
  handleSubmit,
  inputValue,
  setInputValue,
}) => {
  return (
    <form className="relative text-gray-600 w-full" onSubmit={handleSubmit}>
      <input
        type="search"
        name="search"
        placeholder="Search"
        className="bg-transparent border border-dash h-10 px-5 pr-10 rounded-full text-sm focus:outline-none w-full"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
        <SearchIcon />
      </button>
    </form>
  )
}

export default function CardShell() {
  const [visibleCard, setVisibleCard] = useState([])
  const [query, setQuery] = useState("remcostoeten")
  const [inputValue, setInputValue] = useState("")
  const [userNotFound, setUserNotFound] = useState(false)
  const [username, setUsername] = useState("")
  const user = auth.currentUser
  const { loading, error, data, refetch } = useQuery(GET_USER_REPOSITORIES, {
    variables: { login: query, first: 5 },
    onCompleted: (data) => {
      setVisibleCard(data.user.repositories.nodes.map((node) => node.id))
      setUserNotFound(false)
    },
    onError: (error) => {
      if (error.message.includes("Could not resolve to a User")) {
        setUserNotFound(true)
      }
    },
  })

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setUsername(inputValue)
    await refetch({ login: inputValue, first: 5 })
  }

  if (error) {
    return (
      <>
        <SearchForm
          handleSubmit={handleSubmit}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
        <p>Error: {error.message}</p>
      </>
    )
  }

  if (loading) return <CardShellSkeleton />

  const repositories = loading ? [] : data.user.repositories.nodes

  const getUserName = () => {
    if (user?.displayName) {
      return user?.displayName
    } else if (user?.email) {
      return user?.email.split("@")[0]
    } else {
      return null
    }
  }

  const userName = getUserName()

  return (
    <>
      <main className="flex w-full flex-1 flex-col gap-4">
        <section className="flex flex-col gap-y-2">
          <SectionHeading
            title="Contributions"
            icon={<GithubIcon className="mr-1" />}
          />
          <SectionSubHeading>
            <p className="dark:text-neutral-400">
              My contributions from last year on github.
            </p>
            <Link
              href="https://github.com/remcostoeten"
              target="_blank"
              passHref
              className="text-primary-500 dark:text-primary-400"
            >
              View on Github
            </Link>
          </SectionSubHeading>
          <GithubContributionCards />
          <GitHubCalendar username="remcostoeten" />
        </section>
        {repositories.map((repository) => {
          let formattedDate = "Invalid date"

          if (typeof repository.createdAt === "string") {
            const date = new Date(repository.createdAt)
            if (!isNaN(date.getTime())) {
              formattedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`
            }
          }

          return (
            <div key={repository.id}>
              <CardHeader
                title={repository.name}
                toggleCardbody={() => {
                  if (visibleCard.includes(repository.id)) {
                    setVisibleCard(
                      visibleCard.filter((id) => id !== repository.id)
                    )
                  } else {
                    setVisibleCard([...visibleCard, repository.id])
                  }
                }}
              />
              <AnimatePresence>
                {visibleCard.includes(repository.id) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CardBody
                      loading={loading}
                      created={formattedDate}
                      name={repository.name}
                      description={repository.description}
                      open_issues_count={repository.issues.totalCount}
                      language={repository.languages.nodes
                        .map((lang) => lang.name)
                        .join(", ")}
                      updated_at={repository.updatedAt}
                      created_at={formattedDate}
                      clone_url={repository.url}
                      homepage={repository.homepageUrl}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
              <CardFooter
                button="view repository"
                href={`https://github.com/${repository.owner.login}/${repository.name}`}
              />
            </div>
          )
        })}
      </main>
    </>
  )
}
