import { ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client';

const clienttt: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    cache: new InMemoryCache(),
    headers: {
        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",
        // Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`
    },
});

export default clienttt;


