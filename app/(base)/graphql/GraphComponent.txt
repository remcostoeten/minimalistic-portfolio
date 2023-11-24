import React, { Suspense } from 'react';
import { useQuery } from '@apollo/client';
import { Card } from '@nextui-org/react';
import { GET_COMMITS, GET_REPOSITORIES } from '@/lib/graphql/queries';
import Spinner, { LogoLoader, TextLoader } from '@/components/loaders/Spinners';

type Commit = {
    node: {
        oid: string;
        messageHeadline: string;
    };
}

type Repository = {
    name: string;
    description: string;
    url: string;
}

const CommitsList: React.FC<{ owner: string; repoName: string }> = ({ owner, repoName }) => {
    const { loading, error, data } = useQuery(GET_COMMITS, {
        variables: { owner, name: repoName },
    });

    if (loading) return <p>Loading commits...</p>;
    if (error) return <p>Error fetching commits</p>;

    if (!data || !data.repository || !data.repository.ref || !data.repository.ref.target || !data.repository.ref.target.history) {
        return <p>No commit data available</p>;
    }

    const commits: Commit[] = data.repository.ref.target.history.edges;

    return (
        <ul>
            {commits.map((commit: Commit) => (
                <li key={commit.node.oid}>{commit.node.messageHeadline}</li>
            ))}
        </ul>
    );
};

export default function GraphComponent() {
    const { loading: repoLoading, error: repoError, data: repoData } = useQuery(GET_REPOSITORIES);

    if (repoLoading) return <TextLoader text="GraphQL data is loading" />

    if (repoError) return 'Whoops :(' + repoError;

    return (
        <Card className='px-10 '>
            {repoData.viewer.repositories.nodes.map((repo: Repository) => (
                <Suspense fallback={<div><Spinner size='small' text={''} /></div>}>
                    <div key={repo.name}>
                        <h2>{repo.name}</h2>
                        <p>{repo.description}</p>
                        <a href={repo.url}>Go to Repository</a>
                        <CommitsList owner="remcostoeten" repoName={repo.name} />
                    </div>
                </Suspense>
            ))
            }
        </Card >
    );
};
