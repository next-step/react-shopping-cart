import '@/styles/index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { ReactQueryProvider } from './configs';
import { CartContextProvider } from './stores/CartContext';
import { PaymentContextProvider } from './stores/PaymentContext';
import { App } from './App';

if (process.env.NODE_ENV === 'development') {
  await import('./mocks/browser').then(({ worker }) => worker.start());
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartContextProvider>
        <PaymentContextProvider>
          <ReactQueryProvider>
            <App />
          </ReactQueryProvider>
        </PaymentContextProvider>
      </CartContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
