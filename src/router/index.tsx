import { createBrowserRouter } from 'react-router-dom';
import { Cart, Detail, List, Order, OrderDetail, OrderList } from '../pages';
import App from '../App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '',
        element: <List/>,
      },
      {
        path: 'cart',
        element: <Cart/>,
      },
      {
        path: 'detail/:id',
        element: <Detail/>,
      },
      {
        path: 'order',
        element: <Order/>,
      },
      {
        path: 'order-detail',
        element: <OrderDetail/>,
      },
      {
        path: 'order-list',
        element: <OrderList/>,
      }
    ]
  }
]);

export default router;
