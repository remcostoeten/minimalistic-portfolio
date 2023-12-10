'use client';
import { useQuery } from '@apollo/client';
import { BsGithub as GithubIcon } from 'react-icons/bs';
import { GET_GITHUB_CONTRIBUTION_STATS } from '@/core/(graphql)/(prev)_/queries';
import Link from 'next/link';
import SectionHeading from '@/components/layout/SectionHeading';
import SectionSubHeading from '@/components/layout/SectionSubHeading';
import OverviewItem from '@/components/data/github/OverviewItem';
import { GithubStatisticsSkeleton } from '@/components/loaders/Skeleton';
import { ContributionsProps } from '@/core/types/types';
import { useMemo } from 'react';

const Contributions = ({ type }: ContributionsProps) => {
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

    // Rest of your component
    return (
        <section className='flex flex-col gap-y-2'>
            <SectionHeading title='Contributions' icon={<GithubIcon className='mr-1' />} />
            <SectionSubHeading>
                <p className='dark:text-neutral-400'>My contributions from last year on github.</p>
                <Link
                    href={`https://github.com/${data?.user?.login}`}
                    target='_blank'
                    passHref
                    className='text-primary-500 dark:text-primary-400'
                >
                    View on Github
                </Link>
            </SectionSubHeading>
            <div className='grid grid-cols-2 gap-3 py-2 sm:grid-cols-4'>
                <OverviewItem label='Total' value={totalCommits !== null ? totalCommits : 'Loading...'} />
                <OverviewItem label='Average per day' value={averageCommits !== null ? averageCommits : 'Loading...'} unit='/ day' />
                <OverviewItem label='Best day' value={highestDay !== null ? highestDay : 'Loading...'} />
                <OverviewItem label='Different languages' value={highestDay !== null ? amountOfLanguages : 'Loading...'} />
            </div>
        </section>
    );
};

export default Contributions;