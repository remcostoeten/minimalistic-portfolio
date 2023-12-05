import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query GetRepositories {
    viewer {
      repositories(first: 10) {
        nodes {
          name
          description
          url
          id
        }
      }
    }
  }
`;

const GET_COMMITS = gql`
  query GetCommits($login: String!) {
    user(login: $login) {
      repositories(first: 50, orderBy: {field: CREATED_AT, direction: DESC}) {
        nodes {
          defaultBranchRef {
            target {
              ... on Commit {
                history(first: 50) {
                  nodes {
                    messageHeadline
                    committedDate
                    author {
                      user {
                        name
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const USER_COMMITS = gql`
query GetGithubData {
  githubData(username: String!, repo: String!) {
    week
    total
  }
`;