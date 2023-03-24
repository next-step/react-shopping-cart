import React from 'react';
import ReactDOM from 'react-dom/client';
import { worker } from 'mocks/server/browser';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/index';
worker.start();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
