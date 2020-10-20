import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import createServer from "./helpers/server";
import "semantic-ui-css/semantic.min.css";


createServer();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);