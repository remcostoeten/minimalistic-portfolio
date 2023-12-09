
'use client';
import { GET_TOTAL_REPOSITORIES_AND_COMMITS } from '@/components/(database)/graphql/queries/GetTotalReposQuery';
import { DashboardHeader } from '@/components/dashboard/dashboard-header';
import CardShell from '@/components/dashboard/shell/CardShell';
import IntroWrapper from '@/components/dashboard/shell/IntroWrapper.';
import { DateRangePicker } from '@/components/date-range-picker';
import { Icons } from '@/components/icons';
import { Shell } from '@/components/layout/shell';
import SkeletonBar from '@/components/loaders/Skeleton';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { auth } from '@/core/(database)/firebase';
import { useQuery } from '@apollo/client';
import React from 'react';

type DashboardProps = {
    data?: any;
    searchParams?: any;
    title?: string;
    children?: React.ReactNode;
    icon?: any;
    subtext?: string;
    value?: string | JSX.Element;
    loading?: boolean;
};

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
        // @ts-ignore
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

export default function Page(): JSX.Element {
    const user = auth.currentUser;
    const labels = ['2022-01-01', '2022-01-02', '2022-01-03', '2022-01-04'];
    const data = [10, 20, 30, 40];
    const secondData = [5, 15, 25, 35];
    const { loading, error, totalCommits, mostUsedLanguages, totalRepositories, totalBranches, mostActiveRepo, commitsLabels } = useGithubData('remcostoeten');

    const DataCard: React.FC<DashboardProps> = ({ title, icon, value, subtext, loading }) => {
        return (
            <><CardShell />

                <Card>
                    <CardHeader>
                        <div className="flex items-center gap-2">
                            <div className="text-xl font-bold">{title}</div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className='flex flex-col gap-2'>
                            <div className="text-2xl font-bold">
                                {loading ? <SkeletonBar height={4} width='100%' /> : value}
                            </div>
                            <p className="text-xs text-muted-foreground">
                                {loading ? <SkeletonBar height={4} width='100%' /> : subtext}
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </>
        );
    };
    if (error) {
        return (
            <DataCard
                title="Error"
                value={`Error: ${error.message}`}
                subtext=""
                loading={false}
            />
        ) as JSX.Element;
    }

    const getUserName = () => {
        if (user?.displayName) {
            return user?.displayName;
        } else if (user?.email) {
            return user?.email.split('@')[0];
        } else {
            return null;
        }
    }

    console.log(user);
    const userName = getUserName();
    return (
        <>
            <Shell>
                <DashboardHeader
                    heading={
                        userName
                            ? `So ${userName}....`
                            : <div style={{ display: 'flex', alignItems: 'center' }}>So <SkeletonBar additionalClasses='w-[200px] ml-2' height={4} /></div>
                    }
                    text="here are your 2023 Github metrics 💡🎯."
                >
                </DashboardHeader>
                <DateRangePicker />
                <div className="grid gap-4 grid-cols-">
                    <DataCard
                        title="Most Active Repository"
                        icon={Icons.github}
                        subtext={`Commits: ${Number(mostActiveRepo?.defaultBranchRef?.target.history.totalCount) || 0}`} loading={loading}
                    />
                    <DataCard
                        title="Total Commits"
                        icon={Icons.github}
                        value={totalCommits || <SkeletonBar />}
                        subtext="" loading={loading}
                    />
                    <DataCard
                        title="Total Repositories"
                        icon={Icons.github}
                        value={totalRepositories || <SkeletonBar />}
                        subtext="" loading={loading}
                    />
                    <DataCard
                        title="Total Branches"
                        icon={Icons.github}
                        value={totalBranches || <SkeletonBar />}
                        subtext="" loading={loading}
                    />
                    <DataCard
                        title="Most Used Languages"
                        icon={Icons.github}
                        value={mostUsedLanguages?.map(([language, count]) => `${language}: ${count}`).join(', ') || <SkeletonBar />}
                        subtext="" loading={loading}
                    />
                </div>https://gitlab.com/pleio/beheer/-/issues/13231
            </Shell >
        </>
    );
}

