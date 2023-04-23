import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import './css/index.css';
import { worker } from './mocks/browser';

// vercel에서도 모킹된 데이터를 사용할 예정이에요
// if (process.env.NODE_ENV === 'development') {
worker.start();
// }

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
