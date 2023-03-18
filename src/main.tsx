import './css/index.css';

import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

import App from './App';

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
  createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
      <BrowserRouter>
        <App />;
      </BrowserRouter>
    </StrictMode>
  );
});
