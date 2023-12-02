'use client';
import { GET_TOTAL_REPOSITORIES_AND_COMMITS } from "@/components/(database)/graphql/queries/GetTotalReposQuery";
import { CommitsGraph } from "@/components/dashboard/CommitsGraph";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DateRangePicker } from "@/components/date-range-picker";
import { Icons } from "@/components/icons";
import { Shell } from "@/components/layout/shell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { auth } from "@/core/(database)/firebase";
import { useQuery } from "@apollo/client";
import { Icon } from "@radix-ui/react-select";
import { Suspense } from "react";
import Image from "next/image";
import IntroWrapper from "@/components/dashboard/shell/IntroWrapper.";


const dummyData = {
    logs: [],
    streak: 0,
    totalLogs: 0,
    mostLoggedActivity: null,
    activityCountByDate: {},
    topActivities: [],
    dailyAverage: 0,
}

function useGithubData(login: string) {
    const { loading, error, data: githubData, refetch } = useQuery(GET_TOTAL_REPOSITORIES_AND_COMMITS, {
        variables: { login },
    });
    const commitsLabels = githubData?.user.commitsLabels || [];

    if (loading || error) {
        return { loading, error };
        console.log(error)
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

type CardProps = {
    title: string;
    icon: any;
    value?: string;
    subtext?: string;
    isLoading?: boolean;
};


const InfoCard = ({ title, icon, value, subtext, isLoading }: CardProps) => {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{title}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className={`fade-in ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
                    {value !== undefined ? (
                        <>
                            <div className="text-2xl font-bold">{value}</div>
                            <p className="text-xs text-muted-foreground">{subtext}</p>
                        </>
                    ) : (
                        <div className="flex flex-col gap-2">
                            <div className="skeleton h-4 w-full"></div>
                            <div className="skeleton h-4 w-full"></div>
                        </div>
                    )}
                </div>
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


    if (error) return <p>Error :(</p>;
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
                <Suspense fallback={<div>Loading...</div>}>
                    <CommitsGraph labels={labels} data={data} secondData={secondData} isLoading={false} />
                </Suspense>
                <InfoCard title="Most Active Repository" icon={Icons.github} value={mostActiveRepo?.name || 'N/A'} subtext={`Commits: ${mostActiveRepo?.defaultBranchRef?.target.history.totalCount || 0}`} />
                <InfoCard title="Total Commits" icon={Icons.github} value={totalCommits} subtext="All time" />
                <InfoCard title="Most Used Languages" icon={Icons.github} value={mostUsedLanguages?.join(', ')} subtext="All time" />
                <InfoCard title="Total Repositories" icon={Icons.github} value={totalRepositories} subtext="All time" />
                <InfoCard title="Total Branches" icon={Icons.github} value={totalBranches} subtext="All time" />
            </div>
        </Shell>
    );
}