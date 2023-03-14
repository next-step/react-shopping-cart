import { createBrowserRouter } from 'react-router-dom';
import { List } from '../pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <List/>,
  },
]);

export default router;
