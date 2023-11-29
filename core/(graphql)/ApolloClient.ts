import { ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client';

const clienttt: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    cache: new InMemoryCache(),
    headers: {
        Authorization: "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"
        // Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`
    },
});

export default clienttt;


