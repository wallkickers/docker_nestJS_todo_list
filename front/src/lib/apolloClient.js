import {ApolloClient, InMemoryCache, httpLink} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';

const httpLink = new httpLink({
    uri: 'http://localhost:3001/graphql',
});

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('token');
    return {
        headers: {
            ...headers,
            authrization: token ? `Bearer ${token}` : '',
        }
    };
});

// apolloClientを生成
const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

export default client;
