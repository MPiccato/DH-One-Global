import { ApolloProvider } from "@apollo/client/react";

import { ApolloClient, InMemoryCache } from "@apollo/client";

import "./App.css";
import SearchBar from "./components/SearchBar";
import { UserProvider } from "./context/UserContext";
import UserList from "./components/UserList";

function App() {
  const client = new ApolloClient({
    uri: "http://localhost:3001/graphql",
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <UserProvider value={[]}>
        <SearchBar />
        <UserList />
      </UserProvider>
    </ApolloProvider>
  );
}

export default App;
