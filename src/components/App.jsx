import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Issues from "./Issues";

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: {
    Authorization: `Bearer ${
      process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
    }`
  }
});

const App = () => (
  <ApolloProvider client={client}>
    <main>
      <Issues states={["OPEN"]} />
    </main>
  </ApolloProvider>
);

export default App;
