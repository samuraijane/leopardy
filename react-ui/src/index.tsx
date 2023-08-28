import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store';
import { verifyAuth } from './feature/isLoggedInSlice';
import { createRoot } from 'react-dom/client';

import './styles/style.scss';

const container: any = document.getElementById('root');

// store.dispatch(verifyAuth());

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
