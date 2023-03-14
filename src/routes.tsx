import { List, Cart, Detail, Order, OrderDetail, OrderList } from '@/pages'

const routes = [
  { path: '/', element: <List /> },
  { path: '/cart', element: <Cart /> },
  { path: '/detail/:id', element: <Detail /> },
  { path: '/order', element: <Order /> },
  { path: '/order-detail', element: <OrderDetail /> },
  { path: '/order-list', element: <OrderList /> },
]

export default routes
