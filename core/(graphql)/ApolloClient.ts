import { ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client';

const clienttt: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    cache: new InMemoryCache(),
    headers: {
        authorization: "Bearer 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",
    },
});

export default clienttt;