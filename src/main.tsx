import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';
import './index.css';

import { worker } from './mocks/browser';

/**
 *
 * @returns
 * @link https://mswjs.io/docs/recipes/deferred-mounting
 */

function prepare() {
  if (import.meta.env.MODE == 'development') {
    return worker.start();
  }
  return Promise.resolve();
}
prepare().then(() => {
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />;
      </BrowserRouter>
    </React.StrictMode>
  );
});
