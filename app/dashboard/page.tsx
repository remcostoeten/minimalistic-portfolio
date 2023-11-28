'use client';
import { useQuery } from "@apollo/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icons } from "@/components/icons";
import { GET_TOTAL_REPOSITORIES_AND_COMMITS } from "@/components/(database)/graphql/queries/GetTotalReposQuery";
import { auth } from "@/core/(database)/firebase";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { Shell } from "@/components/layout/shell";
import { DateRangePicker } from "@/components/date-range-picker";

const dummyData = {
    logs: [],
    streak: 0,
    totalLogs: 0,
    mostLoggedActivity: null,
    activityCountByDate: {},
    topActivities: [],
    dailyAverage: 0,
}

export function useGithubData(login: string) {



    const { loading, error, data: githubData, refetch } = useQuery(GET_TOTAL_REPOSITORIES_AND_COMMITS, {
        variables: { login },
    });

    if (loading || error) {
        return { loading, error };
    }

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
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10);

    const totalRepositories = githubData?.user.repositories?.totalCount || 0;

    const totalBranches = (githubData?.user.repositories?.nodes || []).reduce((total, repo) => {
        const branchCount = repo.refs?.totalCount || 0;
        return total + branchCount;
    }, 0);

    const mostActiveRepo = githubData.user.repositories.nodes.reduce((maxRepo, repo) => {
        const repoCommits = repo.defaultBranchRef?.target.history.totalCount || 0;

        if (repoCommits > (maxRepo?.defaultBranchRef?.target.history.totalCount || 0)) {
            return repo;
        } else {
            return maxRepo;
        }
    }, null);

    return { loading, error, totalCommits, mostUsedLanguages, totalRepositories, totalBranches, mostActiveRepo };
}

// Card Component
function InfoCard({ title, icon: Icon, value, subtext }) {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{title}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">{value}</div>
                <p className="text-xs text-muted-foreground">{subtext}</p>
            </CardContent>
        </Card>
    );
}

// Main Component
export default function DashboardCards({ data, searchParams }) {
    const { loading, error, totalCommits, mostUsedLanguages, totalRepositories, totalBranches, mostActiveRepo, secondMostActiveRepo } = useGithubData('remcostoeten');
    const user = auth.currentUser;
    const displayName = () => {
        return user?.displayName
    }

    const dashboardData = dummyData;
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (

        <Shell>
            <DashboardHeader heading={`So ${displayName()}'s....`} text="here are your  2023 Github metrics 💡🎯.">                <DateRangePicker />
            </DashboardHeader>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <InfoCard title="Most Active Repository" icon={Icons.github} value={mostActiveRepo?.name || 'N/A'} subtext={`Commits: ${mostActiveRepo?.defaultBranchRef?.target.history.totalCount || 0}`} />
                <InfoCard title="Second Most Active Repository" icon={Icons.github} value={secondMostActiveRepo?.name || 'N/A'} subtext={`Commits: ${secondMostActiveRepo?.defaultBranchRef?.target.history.totalCount || 0}`} />
                <InfoCard title="Total Commits" icon={Icons.github} value={totalCommits} subtext="All time" />
                <InfoCard title="Most Used Languages" icon={Icons.github} value={mostUsedLanguages.join(', ')} subtext="All time" />
                <InfoCard title="Total Repositories" icon={Icons.github} value={totalRepositories} subtext="All time" />
                <InfoCard title="Total Branches" icon={Icons.github} value={totalBranches} subtext="All time" />
            </div>
        </Shell>
    );
}