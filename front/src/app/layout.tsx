"use client";

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Page from './page';

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_API_URL,
  cache: new InMemoryCache()
});

export default function Layout() {
  return (
    <html lang="ja">
      <body>
        <ApolloProvider client={client}>
          <Page />
        </ApolloProvider>
      </body>
    </html>
  );
}
