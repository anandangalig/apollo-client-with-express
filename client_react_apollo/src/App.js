import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Launches from './components/Launches';
import Launch from './components/Launch';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Route exact path="/" component={Launches} />
        <Route exact path="/launch/:flight_number" component={Launch} />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
