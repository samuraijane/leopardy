import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom'

import "./styles/style.scss";

const container: HTMLElement | null = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
=======
import "./styles/style.scss";
import SignUp from "./components/sign-up";

const container: HTMLElement | null = document.getElementById("root");


ReactDOM.render(
  <React.StrictMode>
    <SignUp />
>>>>>>> a40e2a7 (create sign up component)
  </React.StrictMode>,
  container
);
