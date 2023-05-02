import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style/css/index.css';
import { worker } from './mocks/setupBrowerWorker';

// if (process.env.NODE_ENV === 'development') {
worker.start();
// }

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
