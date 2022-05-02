import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
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
