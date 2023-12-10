'use client';
import { useQuery } from '@apollo/client';
import { BsGithub as GithubIcon } from 'react-icons/bs';
import { GET_GITHUB_CONTRIBUTION_STATS } from '@/core/(graphql)/queries/queries';
import Link from 'next/link';
import SectionHeading from '@/components/layout/SectionHeading';
import SectionSubHeading from '@/components/layout/SectionSubHeading';
import OverviewItem from '@/components/data/github/OverviewItem';
import { GithubStatisticsSkeleton } from '@/components/loaders/Skeleton';
import { ContributionsProps } from '@/core/types/types';
import { useMemo } from 'react';
import GitHubCalendar from '@/components/data/github/GithubCalender';
import Calendar from '@/components/data/github/Calender';
import CreateCommunityModal from '@/components/dashboard/snippets/CreateCommunity';
export default function Contributions() {
    const { loading, error, data } = useQuery(GET_GITHUB_CONTRIBUTION_STATS, {
        variables: { username: 'remcostoeten' },
    });
    const totalCommits = useMemo(() => {
        return data?.user.repositories.nodes.reduce(
            (total: any, repo: { defaultBranchRef: { target: { history: { totalCount: any } } } }) => {
                return total + (repo.defaultBranchRef?.target.history.totalCount || 0);
            },
            0
        );
    }, [data]);

    const languageCounts = useMemo(() => {
        return data?.user.repositories.nodes.reduce((counts, repo) => {
            if (repo.languages) {
                repo.languages.nodes.forEach((language) => {
                    counts[language.name] = (counts[language.name] || 0) + 1;
                });
            }
            return counts;
        }, {});
    }, [data]);

    const amountOfLanguages = useMemo(() => {
        return languageCounts ? Object.keys(languageCounts).length : 0;
    }, [languageCounts]);

    const averageCommits = useMemo(() => {
        return totalCommits !== null ? totalCommits / 365 : null;
    }, [totalCommits]);

    const highestDay = useMemo(() => {
        let highestCommitsDay = null;
        data?.user?.contributionsCollection.contributionCalendar.weeks.forEach((week) => {
            week.contributionDays.forEach((day) => {
                if (!highestCommitsDay || day.contributionCount > highestCommitsDay.contributionCount) {
                    highestCommitsDay = day;
                }
            });
        });
        return highestCommitsDay?.contributionCount;
    }, [data]);

    if (error) return <p>Error: {error.message}</p>;
    if (loading) return <GithubStatisticsSkeleton />;

    return (
        <section className='flex my-8 flex-col gap-y-2'>
            <SectionHeading title='Contributions' icon={<GithubIcon className='mr-1' />} />
            <SectionSubHeading>
                <p className='dark:text-neutral-400'>My contributions from last year on github.</p>
                <Link
                    href='https://github.com/remcostoeten'
                    target='_blank'
                    passHref
                    className='text-primary-500 dark:text-primary-400'
                >
                    View on Github
                </Link>
            </SectionSubHeading>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 py-2'>
                <OverviewItem label='Total' value={totalCommits !== null ? totalCommits : 'Loading...'} />
                <OverviewItem label='Average per day' value={averageCommits !== null ? averageCommits : 'Loading...'} unit='/ day' />
                <OverviewItem label='Best day' value={highestDay !== null ? highestDay : 'Loading...'} />
                <OverviewItem label='Different languages' value={highestDay !== null ? amountOfLanguages : 'Loading...'} />
            </div>
            <GitHubCalendar username="remcostoeten" />
        </section>
    );
};
