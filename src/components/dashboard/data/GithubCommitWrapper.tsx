'use client';
import { useGithubCommits } from '@/core/(database)/github';
import React from 'react';

const FetchCommits: React.FC = () => {
    const commits = useGithubCommits();

    const countCommitsByDate = () => {
        const counts = {};

        commits.forEach((commit: any) => {
            const date = new Date(commit.commit.author.date).toISOString().split('T')[0];
            counts[date] = (counts[date] || 0) + 1;
        });

        return counts;
    };

    return (
        <div>
            <ul>
                {commits.map((commit: any, index: number) => (
                    <li key={index}>
                        {commit.sha}: {commit.commit.message}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FetchCommits;