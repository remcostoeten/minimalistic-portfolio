'use client';
import Spinner from '@/components/loaders/Spinners';
import React from 'react'
import { GET_REPOS_AND_LATEST_COMMIT } from './queries/CommitQuery';
import { useQuery } from '@apollo/client';
import { Card } from '@/components/ui/card';

export default function Getcommits() {
    const { loading, error, data } = useQuery(GET_REPOS_AND_LATEST_COMMIT, {
        variables: { login: "remcostoeten" },
    });

    if (loading) return <p className="text-center">Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <div className="flex flex-wrap justify-center">
            {
                data && data.user.repositories.nodes.map((repo) => (
                    <Card key={repo.name} className="m-4 w-64 shadow-md rounded p-4">
                        <h2 className="font-bold text-xl mb-2">{repo.name}</h2>
                        {repo.ref && (
                            <>
                                <p className="text-gray-700 text-base">{repo.ref.target.messageHeadline}</p>
                                <p className="text-gray-500 text-sm">{repo.ref.target.oid}</p>
                                <p className="text-gray-500 text-sm">{new Date(repo.ref.target.committedDate).toLocaleDateString()}</p>
                            </>
                        )}
                    </Card>
                ))
            }
        </div>
    )
}