import React from 'react';
import ReactDOM from 'react-dom/client';
import { worker } from './domain/api/browser';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { router } from './common/routes/index';

import store from './store/index';
import { PaymentAppContextProvider } from 'payment-junyoung';
worker.start();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <PaymentAppContextProvider>
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </PaymentAppContextProvider>
  </React.StrictMode>
);
