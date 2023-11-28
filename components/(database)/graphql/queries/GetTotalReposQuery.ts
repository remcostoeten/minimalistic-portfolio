import { gql } from "@apollo/client";

export const GET_TOTAL_REPOSITORIES = gql`
  query GetTotalRepositories($login: String!) {
    user(login: $login) {
      repositories {
        totalCount
      }
    }
  }
`;

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


export const GET_REPOSITORIES_AND_LANGUAGES = gql`
  query GetRepositoriesAndLanguages($login: String!) {
    user(login: $login) {
      repositories(first: 100) {
        nodes {
          languages(first: 10) {
            nodes {
              name
            }
          }
        }
      }
    }
  }
`;

export const GET_TOTAL_BRANCH_COUNT = gql`
  query GetTotalBranchCount($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      refs(refPrefix: "refs/heads/") {
        totalCount
      }
    }
  }
`;
