import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './app/store'
import { verifyAuth } from "./feature/isLoggedInSlice";

import "./styles/style.scss";

const container: HTMLElement | null = document.getElementById("root");

store.dispatch(verifyAuth())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  container
);
