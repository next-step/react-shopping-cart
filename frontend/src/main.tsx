import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactGA from 'react-ga';
import TagManager from 'react-gtm-module';

import worker from '@/mocks/server';

import routes from '@/routes';

if (import.meta.env.DEV) {
  worker.start();
}
const tagManagerArgs = {
  gtmId: import.meta.env.VITE_GTM_ID,
};

const gaTrackingId = import.meta.env.VITE_GA_TRACKING_ID;

ReactGA.initialize(gaTrackingId, { debug: import.meta.env.DEV });
ReactGA.pageview(window.location.pathname);
TagManager.initialize(tagManagerArgs);

const router = createBrowserRouter(routes);

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
