import { ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client';

const clienttt: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    cache: new InMemoryCache(),
    headers: {
        authorization: "Bearer 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",
    },
});

export default clienttt;