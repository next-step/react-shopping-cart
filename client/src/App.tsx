import { CacheProvider } from 'contexts';
import { RouterProvider } from 'react-router-dom';

import router from 'router';

import './css/index.css';

function App() {
  return (
    <CacheProvider>
      <RouterProvider router={router} />
    </CacheProvider>
  );
}

export default App;
