import './styles/indes.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { getEnvMode } from './constants';
import App from './App';

console.log(getEnvMode());

if (getEnvMode() === 'mock' || getEnvMode() === 'test') {
  import('./mocks/browser')
    .then(async ({ worker }) => {
      await worker.start();
    })
    .catch(error => console.error(error));
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
