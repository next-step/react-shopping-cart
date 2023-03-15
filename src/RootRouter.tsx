import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { HomePage } from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
]);

function RootRouter() {
  return <RouterProvider router={router} />;
}

export default RootRouter;
