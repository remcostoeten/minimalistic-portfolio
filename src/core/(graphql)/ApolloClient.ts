import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    cache: new InMemoryCache(),
    headers: {
        Authorization: `Bearer re_Vks5t5ob_8LipLMaoZFAa7Jy4zDwzqNWQ`,
    },
});

export default client;

