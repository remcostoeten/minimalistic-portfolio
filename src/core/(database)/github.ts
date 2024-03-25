import { useEffect, useState } from "react"

export const GITHUB_ACCOUNTS = [
  {
    type: "personal",
    username: "remcostoeten",
    token: process.env.GITHUB_TOKEN,
    endpoint: "/api/github?type=personal",
    is_active: true,
  },
]

const GITHUB_USER_ENDPOINT = "https://api.github.com/graphql"

export const GITHUB_USER_QUERY = `query($username: String!) {
  user(login: $username) {
    contributionsCollection {
      contributionCalendar {
        colors
        totalContributions
        months {
          firstDay
          name
          totalWeeks
        }
        weeks {
          contributionDays {
            color
            contributionCount
            date
          }
          firstDay
        }
      }
    }
  }
}`

const fetchData = async (url: string, options = {}) => {
  const response = await fetch(url, options)
  const data = await response.json()

  if (response.status > 400) {
    throw new Error(data.message)
  }

  return data
}

export const useGithubCommits = () => {
  const [commits, setCommits] = useState([])

  useEffect(() => {
    fetchData(
      "https://api.github.com/repos/remcostoeten/remcostoeten/commits?per_page=20"
    )
      .then((data) => setCommits(data))
      .catch((error) => console.error("Error fetching commits:", error))
  }, [])

  return commits
}

export const fetchGithubData = async (
  username: string,
  token: string | undefined
) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
    },
    body: JSON.stringify({
      query: GITHUB_USER_QUERY,
      variables: {
        username: username,
      },
    }),
  }

  return await fetchData(GITHUB_USER_ENDPOINT, options)
}

export const getGithubUser = async (type: string) => {
  const account = GITHUB_ACCOUNTS.find(
    (account) => account?.type === type && account?.is_active
  )

  if (!account) {
    throw new Error("Invalid user type")
  }

  const { username, token } = account
  return await fetchGithubData(username, token)
}
