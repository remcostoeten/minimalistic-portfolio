import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer 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`,
  },
});

export default client;

