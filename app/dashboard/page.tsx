'use client';
import { GET_TOTAL_REPOSITORIES_AND_COMMITS } from "@/components/(database)/graphql/queries/GetTotalReposQuery";
import { CommitsGraph } from "@/components/dashboard/CommitsGraph";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import CardSkeleton from "@/components/dashboard/shell/CardSkeleton";
import IntroWrapper from "@/components/dashboard/shell/IntroWrapper.";
import { DateRangePicker } from "@/components/date-range-picker";
import { Icons } from "@/components/icons";
import { Shell } from "@/components/layout/shell";
import Spinner from "@/components/loaders/Spinners";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { auth } from "@/core/(database)/firebase";
import { useQuery } from "@apollo/client";
import { Icon } from "@radix-ui/react-select";
import { Suspense } from "react";

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
    const commitsLabels = githubData?.user.commitsLabels || [];

    if (loading) return <CardSkeleton loading={loading} />;

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

    return { loading, error, totalCommits, mostUsedLanguages, totalRepositories, totalBranches, mostActiveRepo, commitsLabels };
}


const InfoCard = ({ title, icon, value, subtext, loading }) => {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{title}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                {loading ? (
                    <CardSkeleton />
                ) : (
                    <>
                        <div className="text-2xl font-bold">{value || <CardSkeleton />}</div>
                        <p className="text-xs text-muted-foreground">{subtext}</p>
                    </>
                )}
            </CardContent>
        </Card>
    );
};


export default function DashboardCards({ data, searchParams }) {
    const { loading, error, totalCommits, mostUsedLanguages, totalRepositories, totalBranches, mostActiveRepo, commitsLabels } = useGithubData('remcostoeten');
    const user = auth.currentUser;
    const displayName = () => {
        return user?.displayName
    }


    if (error) return <p>Error :( </p>;
    const labels = ['2022-01-01', '2022-01-02', '2022-01-03', '2022-01-04'];
    const secondData = [5, 15, 25, 35]; // Number of issues opened each day

    return (

        <Shell>
            <IntroWrapper subtitle="3" title="Metrics" />
            <DashboardHeader heading={`So ${displayName()}'s....`} text="here are your 2023 Github metrics 💡🎯.">
                <DateRangePicker />
            </DashboardHeader>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <img src='https://dribbble.com/shots/20709368-datadock-web-design-visuals-app' fit alt='d' />
                <CommitsGraph labels={commitsLabels} data={totalRepositories} secondData={[]} isLoading={false} />
                <Suspense fallback={<div><Spinner size='large' /></div>}>
                    <CommitsGraph labels={labels} data={data} secondData={secondData} isLoading={false} />
                </Suspense>

                <InfoCard
                    title="Most Active Repository"
                    icon={Icons.github}
                    value={mostActiveRepo?.name || <CardSkeleton />}
                    subtext={`Commits: ${mostActiveRepo?.defaultBranchRef?.target.history.totalCount || 0}`}
                    loading={loading}
                />

                <InfoCard
                    title="Total Commits"
                    icon={Icons.github}
                    value={totalCommits}
                    subtext="All time"
                    loading={loading}
                />

                <InfoCard
                    title="Most Used Languages"
                    icon={Icons.github}
                    value={mostUsedLanguages ? mostUsedLanguages.join(', ') : <CardSkeleton />}
                    subtext="All time"
                    loading={loading}
                />

                <InfoCard
                    title="Total Repositories"
                    icon={Icons.github}
                    value={totalRepositories}
                    subtext="All time"
                    loading={loading}
                />

                <InfoCard
                    title="Total Branches"
                    icon={Icons.github}
                    value={totalBranches}
                    subtext="All time"
                    loading={loading}
                />
            </div>
        </Shell>
    );
}