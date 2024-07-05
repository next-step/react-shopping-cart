import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { OverlayProvider } from 'near-payments';

async function enableMocking() {
  // if (process.env.NODE_ENV !== 'development') {
  // return;
  // }

  const { worker } = await import('@/mocks/browser');

  return worker.start();
}

const root = ReactDOM.createRoot(document.getElementById('root')!);

enableMocking().then(() => {
  root.render(
    <React.StrictMode>
      <OverlayProvider>
        <App />
      </OverlayProvider>
    </React.StrictMode>
  );
});
