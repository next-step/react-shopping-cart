import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactGA from 'react-ga';

import worker from '@/mocks/server';

import routes from '@/routes';

if (import.meta.env.DEV) {
  worker.start();
}

const gaTrackingId = import.meta.env.GA_TRACKING_ID;
ReactGA.initialize(gaTrackingId, { debug: true });
ReactGA.pageview(window.location.pathname);

const router = createBrowserRouter(routes);

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
