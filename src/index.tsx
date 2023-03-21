import '@/styles/index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { Router } from './router';
import { CartContextProvider } from './stores/CartContext';
import { OrderContextProvider } from './stores/OrderContext';

if (process.env.NODE_ENV === 'development') {
  await import('./mocks/browser').then(({ worker }) => worker.start());
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartContextProvider>
        <OrderContextProvider>
          <Router />
        </OrderContextProvider>
      </CartContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
