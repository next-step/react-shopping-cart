import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import worker from './mocks/server';

import routes from './routes';

if (import.meta.env.DEV) {
  worker.start();
}

const router = createBrowserRouter(routes);

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
