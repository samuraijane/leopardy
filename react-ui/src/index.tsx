import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "./styles/style.scss";
import SignUp from "./components/sign-up";

const container: HTMLElement | null = document.getElementById("root");


ReactDOM.render(
  <React.StrictMode>
    <SignUp />
  </React.StrictMode>,
  container
);
