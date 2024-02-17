import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { worker } from './mocks/worker';

worker.start({
  // turn off MSW warnings for specific routes
  onUnhandledRequest(req, print) {
    // specify routes to exclude
    const excludedRoutes = ['/favicon.ico', '/manifest.json', '/logo192.png', '/assets'];

    // check if the req.url.pathname contains excludedRoutes
    const isExcluded = excludedRoutes.some((route) => req.url.pathname.includes(route));

    if (isExcluded) {
      return;
    }

    print.warning();
  }
});

const defaultTheme = {};
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
