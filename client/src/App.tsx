import { RouterProvider } from 'react-router-dom';

import { ErrorBoundary } from 'components';

import router from 'router';

import './css/index.css';

function App() {
  return (
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
}

export default App;
