import React from "react";
import { Provider } from "react-redux";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import store from "../store";
import Main from "./Main";

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: "https://api.github.com/graphql",
  headers: {
    Authorization: `Bearer ${
      process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
    }`
  }
});

const client = new ApolloClient({
  cache,
  link
});

const App = () => (
  <Provider store={store}>
    <ApolloProvider client={client}>
      <Main />
    </ApolloProvider>
  </Provider>
);

export default App;
