import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const client = new ApolloClient({
  uri: "https://api.jobboard.tedbree.com/v1/my/jobs/1",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// APOLLO_KEY=service:Tedbree-1:7MG7vW1fKoY4Gqukhd1IgQ
// APOLLO_GRAPH_ID=Tedbree-1
// APOLLO_GRAPH_VARIANT=current
// APOLLO_SCHEMA_REPORTING=true

reportWebVitals();
