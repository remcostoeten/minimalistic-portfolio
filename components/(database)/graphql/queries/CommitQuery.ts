import { gql } from "@apollo/client";

export const GET_REPOS_AND_LATEST_COMMIT = gql`
query GetRepositoriesAndLanguages($login: String!) {
  user(login: $login) {
    repositories(first: 100) {
      nodes {
        defaultBranchRef {
          target {
            ... on Commit {
              history(first: 0) {
                totalCount
              }
            }
          }
        }
        languages(first: 10) {
          nodes {
            name
          }
        }
        refs(refPrefix: "refs/heads/", first: 100) {
          totalCount
        }
      }
      totalCount
    }
  }
}
`;

