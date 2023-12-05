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

export const DELETE_REPOSITORY = gql`
  mutation DeleteRepository($id: ID!) {
    deleteRepository(input: { id: $id }) {
      clientMutationId
    }
  }
`;

