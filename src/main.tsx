import './styles/indes.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import RootRouter from './RootRouter';
import { getEnvMode } from './constants';

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
    <RootRouter />
  </React.StrictMode>,
);
