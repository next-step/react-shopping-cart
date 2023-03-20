import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App';

if (process.env.NODE_ENV === 'development') {
  await import('./mocks/browser').then(({ worker }) => worker.start());
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <div>index</div>
    <App />
  </React.StrictMode>
);
