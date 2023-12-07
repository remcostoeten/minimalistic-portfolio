'use client';
import React, { useEffect, useState } from 'react';

const FetchCommits: React.FC = () => {
    const [commits, setCommits] = useState([]);

    useEffect(() => {
        const fetchGithubCommits = async () => {
            try {
                const response = await fetch(
                    'https://api.github.com/repos/remcostoeten/remcostoeten/commits?per_page=20'
                );
                const data = await response.json();
                setCommits(data);
            } catch (error) {
                console.error('Error fetching commits:', error);
            }
        }
        fetchGithubCommits();
    }
        , []);





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
