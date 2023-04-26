import React from 'react';
import ReactDOM from 'react-dom/client';
import { worker } from 'mocks/server/browser';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { router } from './routes/index';

import store from 'store';
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
