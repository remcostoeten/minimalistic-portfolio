import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    cache: new InMemoryCache(),
    headers: {
        Authorization: "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"
    },
});

export default client;

