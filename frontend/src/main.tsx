import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactGA from 'react-ga';

import worker from '@/mocks/server';

import routes from '@/routes';

if (import.meta.env.DEV) {
  worker.start();
}

const gaTrackingId = import.meta.env.VITE_GA_TRACKING_ID;

console.log(gaTrackingId);
ReactGA.initialize(gaTrackingId, { debug: import.meta.env.DEV });
ReactGA.pageview(window.location.pathname);

const router = createBrowserRouter(routes);

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
