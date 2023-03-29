import './css/index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { worker } from './mocks/browser';

function prepare() {
  if (import.meta.env.MODE === 'development') {
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
