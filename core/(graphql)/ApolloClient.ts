import { ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client';

const clienttt: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    cache: new InMemoryCache(),
    headers: {
        Authorization: "Bearer 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 "
        // Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`
    },
});

export default clienttt;


