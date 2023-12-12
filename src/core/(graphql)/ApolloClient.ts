import { ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client';

const GraphqlConnection: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    cache: new InMemoryCache(),
    headers: {
        // Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`
    },
});

export default GraphqlConnection;