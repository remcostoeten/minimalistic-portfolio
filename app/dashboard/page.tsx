'use client'
import { CommitsGraph } from "@/components/dashboard/CommitsGraph";
import CardSkeleton from "@/components/dashboard/shell/CardSkeleton";
import { DateRangePicker } from "@/components/date-range-picker";
import { Icons } from "@/components/icons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@apollo/client";
import { Suspense } from "react";
import { GET_TOTAL_REPOSITORIES_AND_COMMITS } from "@/components/(database)/graphql/queries/GetTotalReposQuery";
import { DashboardHeader } from "@/components/layout/DashboardHeader";
import { Shell } from "@/components/layout/shell";
import IntroWrapper from "@/components/dashboard/shell/IntroWrapper.";
import { auth } from "@/core/(database)/firebase";
import Spinner from "@/components/loaders/Spinners";

type DashboardCardsProps = {
    data: any;
    searchParams: any;
};

type InfoCardProps = {
    title: string;
    icon?: any;
    value: string | JSX.Element;
    subtext: string;
    loading: boolean;
};

const InfoCard: React.FC<InfoCardProps> = ({ title, icon: Icon, value, subtext, loading }) => {
    return (
        <Card>
            <CardHeader>
                <div className="flex items-center gap-2">
                    <div className="text-xl font-bold">{title}</div>
                </div>
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

export default function DashboardCards({ data, searchParams }: DashboardCardsProps) {
    // const { loading, error, totalCommits, mostUsedLanguages, totalRepositories, totalBranches, mostActiveRepo, commitsLabels } = data;
    const user = auth.currentUser;
    const { loading, error, data: githubData, refetch } = useQuery(GET_TOTAL_REPOSITORIES_AND_COMMITS, {});
    const commitsLabels = githubData?.user.commitsLabels || [];

    if (loading) return <CardSkeleton loading={loading} />;

    if (loading || error) {
        return { loading, error };
    }

    const totalCommits = githubData.user.repositories.nodes.reduce((total: any, repo: { defaultBranchRef: { target: { history: { totalCount: any; }; }; }; }) => {
        return total + (repo.defaultBranchRef?.target.history.totalCount || 0);
    }, 0);

    const languageCounts = githubData.user.repositories.nodes.reduce((counts: { [x: string]: any; }, repo: { languages: { nodes: { name: string | number; }[]; }; }) => {
        if (repo.languages) {
            repo.languages.nodes.forEach((language: { name: string | number; }) => {
                counts[language.name] = (counts[language.name] || 0) + 1;
            });
        }
        return counts;
    }, {});

    const mostUsedLanguages = Object.entries(languageCounts)
        .slice(0, 10);

    const totalRepositories = githubData?.user.repositories?.totalCount || 0;

    const totalBranches = (githubData?.user.repositories?.nodes || []).reduce((total: any, repo: { refs: { totalCount: number; }; }) => {
        const branchCount = repo.refs?.totalCount || 0;
        return total + branchCount;
    }, 0);

    const mostActiveRepo = githubData.user.repositories.nodes.reduce((maxRepo: { defaultBranchRef: { target: { history: { totalCount: any; }; }; }; }, repo: { defaultBranchRef: { target: { history: { totalCount: number; }; }; }; }) => {
        const repoCommits = repo.defaultBranchRef?.target.history.totalCount || 0;

        if (repoCommits > (maxRepo?.defaultBranchRef?.target.history.totalCount || 0)) {
            return repo;
        } else {
            return maxRepo;
        }
    }, null);

    // if (error) return <p>Error :( </p>;

    const labels = ['2022-01-01', '2022-01-02', '2022-01-03', '2022-01-04'];
    const secondData = [5, 15, 25, 35];

    return (
        <Shell>
            <IntroWrapper subtitle="3" title="Metrics" />
            <DashboardHeader heading={`So ${user?.displayName}'s....`} text="here are your 2023 Github metrics 💡🎯.">
                <DateRangePicker />
            </DashboardHeader>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <img src='https://dribbble.com/shots/20709368-datadock-web-design-visuals-app' width={600} height={600} alt='d' />
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
            </div>
        </Shell>
    );
}
