export async function getGitHubStars(): Promise<string | null> {
  try {
    const response = await fetch(
      "https://api.github.com/repos/remcostoeten/minimalist-portfolio",
      {
        headers: {
          Accept: "application/vnd.github+json",
<<<<<<< HEAD
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
=======
          Authorization: `Bearer ${env.GITHUB_ACCESS_TOKEN}`,
>>>>>>> 6bacca5 ( just some dev work.)
        },
        next: {
          revalidate: 60,
        },
      }
    )

    if (!response?.ok) {
      return null
    }

    const json = await response.json()

    return parseInt(json["stargazers_count"]).toLocaleString()
  } catch (error) {
    return null
  }
}

//
// Usage
//
//  const stars = await getGitHubStars()
// {stars && (
//         {stars} stars on GitHub
// )}