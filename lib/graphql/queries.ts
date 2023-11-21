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

export const GET_COMMITS = gql`
  query GetCommits($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      ref(qualifiedName: "master") {
        target {
          ... on Commit {
            history(first: 100) {
              edges {
                node {
                  messageHeadline
                  oid
                }
              }
            }
          }
        }
      }
    }
  }
`;