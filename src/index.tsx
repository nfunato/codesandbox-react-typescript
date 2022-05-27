// import { StrictMode } from "react";
// import * as ReactDOMClient from "react-dom/client";

import React from "react"; // ココ!
import ReactDom from "react-dom";

import { App } from "./App";

ReactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
