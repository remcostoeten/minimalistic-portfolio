// githubApi.ts
const GITHUB_API_ENDPOINT = 'https://api.github.com/graphql';

export async function fetchGitHubData(query: string) {
    const response = await fetch(GITHUB_API_ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
        body: JSON.stringify({ query }),
    });

    if (!response.ok) {
        throw new Error(`GitHub API request failed: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
}
