import './styles/indes.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { getEnvMode } from './constants';
import { RouterProvider } from 'react-router-dom';
import { router } from './RootRouter';
import { worker } from './mocks/browser';
import { server } from './mocks/server';

const initMock = () => {
  if (typeof window !== 'undefined') {
    server.listen();
  } else {
    if (getEnvMode() === 'production' || getEnvMode() === 'development') {
      worker.start();
    }
  }
};

initMock();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />;
  </React.StrictMode>,
);
