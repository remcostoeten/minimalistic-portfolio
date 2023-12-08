import { gql } from "@apollo/client";

export const GET_TOTAL_REPOSITORIES_AND_COMMITS = gql`
  query GetRepositoriesAndLanguages($login: String!) {
    user(login: $login) {
      repositories(first: 100) {
        nodes {
          name
          defaultBranchRef {
            target {
              ... on Commit {
                history(first: 0) {
                  totalCount
                }
              }
            }
          }
          refs(refPrefix: "refs/heads/") {
            totalCount
          }
          languages(first: 10) {
            nodes {
              name
            }
          }
        }
        totalCount
      }
    }
  }
`;

