import { formatDate } from "@/core/utillities/utils"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/icons"
import { GET_TOTAL_REPOSITORIES, GET_TOTAL_REPOSITORIES_AND_COMMITS } from "../(database)/graphql/queries/GetTotalReposQuery"
import { useQuery } from "@apollo/client"
import { auth } from "@/core/(database)/firebase"


type SearchParams = {
  from?: string
  to?: string
}

interface DashboardCardsProps {
  data: {
    streak: {
      currentStreak: number
      longestStreak: number
    }
    totalLogs: number
    mostLoggedActivity: string | undefined
  }
  searchParams: SearchParams
}

function displayDateRange(searchParams: SearchParams) {
  return (
    <>
      {searchParams.from && searchParams.to
        ? `${formatDate(
          new Date(searchParams.from).toISOString()
        )} - ${formatDate(new Date(searchParams.to).toISOString())}`
        : "Last year"}
    </>
  )
}




export function DashboardCards({ data, searchParams }: DashboardCardsProps) {

  const { loading, error, data: githubData } = useQuery(GET_TOTAL_REPOSITORIES_AND_COMMITS, {
    variables: { login: 'remcostoeten' },
  });

  if (loading) return <p>aaas...</p>;
  if (error) return <p>Error :(</p>;

  const totalCommits = githubData.user.repositories.nodes.reduce((total, repo) => {
    return total + (repo.defaultBranchRef?.target.history.totalCount || 0);
  }, 0);

  const languageCounts = githubData.user.repositories.nodes.reduce((counts, repo) => {
    if (repo.languages) {
      repo.languages.nodes.forEach((language) => {
        counts[language.name] = (counts[language.name] || 0) + 1;
      });
    }
    return counts;
  }, {});

  const mostUsedLanguages = Object.entries(languageCounts)
    .sort((a, b) => (b[1] as number) - (a[1] as number))
    .slice(0, 10)
    .map(([language]: [string, number]): string => language)
    .join(', ');

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Most Used Languages</CardTitle>
          <Icons.github className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{mostUsedLanguages}</div>
          <p className="text-xs text-muted-foreground">
            {displayDateRange(searchParams)}
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Commits</CardTitle>
          <Icons.github className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalCommits}</div>
          <p className="text-xs text-muted-foreground">
            {displayDateRange(searchParams)}
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Repositories</CardTitle>
          <Icons.github className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{githubData && githubData.user.repositories.totalCount}</div>
          <p className="text-xs text-muted-foreground">
            {displayDateRange(searchParams)}
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Current Streak</CardTitle>
          <Icons.fire className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data.streak.currentStreak}</div>
          <p className="text-xs text-muted-foreground">All time</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Longest Streak</CardTitle>
          <Icons.fire className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data.streak.longestStreak}</div>
          <p className="text-xs text-muted-foreground">All time</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Logs</CardTitle>
          <Icons.history className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data.totalLogs}</div>
          <p className="text-xs text-muted-foreground">
            {displayDateRange(searchParams)}
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Most Logged Activity
          </CardTitle>
          <Icons.activity className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="overflow-hidden overflow-ellipsis whitespace-nowrap text-2xl font-bold">
            {data.mostLoggedActivity}
          </div>
          <p className="text-xs text-muted-foreground">
            {displayDateRange(searchParams)}
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
