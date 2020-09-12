import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { Container } from "semantic-ui-react";

import "semantic-ui-css/semantic.min.css";
import "./App.css";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Container>
          <Router>
            <NavBar></NavBar>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/register" component={Register}></Route>
          </Router>
        </Container>
      </div>
    </ApolloProvider>
  );
}

export default App;
