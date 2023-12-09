import { useQuery } from '@apollo/client';
import { BsGithub as GithubIcon } from 'react-icons/bs';
import { GET_GITHUB_CONTRIBUTION_STATS } from '@/core/(graphql)/(prev)_/queries';
import Link from 'next/link';
import SectionHeading from '../../layout/SectionHeading';
import SectionSubHeading from '../../layout/SectionSubHeading';
import OverviewItem from './OverviewItem';

type ContributionsProps = {
    username: string;
    type: string;
    endpoint: string;
};

const Contributions = ({ type }: ContributionsProps) => {
    const { loading, error, data } = useQuery(GET_GITHUB_CONTRIBUTION_STATS, {
        variables: { username: 'remcostoeten' },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    // Find the day with the highest commits
    let highestCommitsDay = null;
    data.user.contributionsCollection.contributionCalendar.weeks.forEach((week) => {
        week.contributionDays.forEach((day) => {
            if (!highestCommitsDay || day.contributionCount > highestCommitsDay.contributionCount) {
                highestCommitsDay = day;
            }
        });
    });

    console.log(highestCommitsDay);

    const totalCommits = data.user.repositories.nodes.reduce(
        (total: any, repo: { defaultBranchRef: { target: { history: { totalCount: any } } } }) => {
            return total + (repo.defaultBranchRef?.target.history.totalCount || 0);
        },
        0
    );

    const contributionCountMap = new Map();

    data.user.contributionsCollection.contributionCalendar.weeks.forEach((week) => {
        week.contributionDays.forEach((day) => {
            const date = day.date;
            const count = day.contributionCount;

            if (contributionCountMap.has(date)) {
                contributionCountMap.set(date, contributionCountMap.get(date) + count);
            } else {
                contributionCountMap.set(date, count);
            }
        });
    });

    // Filter out days with 0 commits
    const nonZeroContributionCountMap = new Map(
        [...contributionCountMap].filter(([_, count]) => count > 0)
    );

    // Initialize maxDay with the first entry in nonZeroContributionCountMap if it's not empty
    let maxDay: [string, number] | undefined;

    if (nonZeroContributionCountMap.size !== 0) {
        const [initialDate, initialCount] = nonZeroContributionCountMap.entries().next().value;
        maxDay = [initialDate, initialCount];
    }

    // Find the day with the maximum contribution count
    if (maxDay) {
        [...nonZeroContributionCountMap.entries()].forEach((entry) => {
            if (entry[1] > maxDay![1]) {
                maxDay = entry;
            }
        });

        console.log("Day with the most commits:", maxDay[0], "with", maxDay[1], "commits");
    } else {
        console.log("No contributions found with non-zero commits.");
    }

    const averageCommits = totalCommits / 365;

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
                <OverviewItem label='Total' value={totalCommits} />
                <OverviewItem label='Average per day' value={averageCommits} unit='/ day' />
            </div>
        </section>
    );
};

export default Contributions;
