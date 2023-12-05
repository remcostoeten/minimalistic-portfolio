import { gql } from "@apollo/client";

export const CREATE_REPOSITORY = gql`
  mutation CreateRepository($name: String!, $description: String!) {
    createRepository(input: { name: $name, description: $description }) {
      repository {
        name
        description
        url
        id
      }
    }
  }
`;
