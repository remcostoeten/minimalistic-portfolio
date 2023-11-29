import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    cache: new InMemoryCache(),
    headers: {

        Authorization: "Bearer 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 "
    },
});

export default client;

