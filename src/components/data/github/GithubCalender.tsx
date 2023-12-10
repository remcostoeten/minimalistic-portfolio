'use client';
import { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';

interface Contribution {
    contributionCount: number;
    date: string;
}

const GitHubCalendar = ({ username }: { username: string }) => {
    const { loading, error, data } = useQuery(GET_CONTRIBUTIONS, {
        variables: { username },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const contributions: Contribution[] =
        data?.user?.contributionsCollection?.contributionCalendar?.weeks?.flatMap(
            (week: { contributionDays: Contribution[] }) => week.contributionDays
        ) || [];

    return (
        <div>
            <h2>{username}'s GitHub Contribution Graph</h2>
            <div>
                {contributions.map((contribution) => (
                    <div key={contribution.date}>
                        Date: {contribution.date}, Count: {contribution.contributionCount}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GitHubCalendar;

const GET_CONTRIBUTIONS = gql`
  query GetUserContributions($username: String!) {
    user(login: $username) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
            }
          }
        }
      }
    }
  }
`;