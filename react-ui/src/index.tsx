import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "./styles/style.scss";

const container: HTMLElement | null = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  container
);
