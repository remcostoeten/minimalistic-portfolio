import React from 'react';
import { useQuery } from '@apollo/client';
import { USER_COMMITS } from '@/core/(graphql)/(prev)_/queries';

function GithubCommitWrapper() {
    const { loading, error, data } = useQuery(USER_COMMITS, {
        variables: { login: "remcostoeten" },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const formattedData = data.githubData.map((week: any) => ({
        date: new Date(week.week * 1000).toISOString().split('T')[0],
        commits: week.total,
    }));

    return (
        <>
            <h2 className="text-2xl font-bold">Commits</h2>

            <div className="flex flex-wrap justify-center">
                {formattedData.map((week: any) => (
                    <div key={week.date} className="flex flex-col items-center m-4">
                        <p className="text-gray-600">{week.date}</p>
                        <p className="text-gray-600">{week.commits}</p>
                    </div>
                ))}
            </div>

        </>
    )
}

export default GithubCommitWrapper;