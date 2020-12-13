import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <header>Modal Demo</header>
    <App />
  </React.StrictMode>,
  rootElement
);
