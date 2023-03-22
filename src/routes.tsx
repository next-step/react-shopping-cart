import { ProductList, Cart, ProductDetail, Order, OrderDetail, OrderList } from '@/pages'

const routes = [
  { path: '/product-list', element: <ProductList /> },
  { path: '/cart', element: <Cart /> },
  { path: '/detail/:id', element: <ProductDetail /> },
  { path: '/order', element: <Order /> },
  { path: '/order-detail', element: <OrderDetail /> },
  { path: '/order-list', element: <OrderList /> },
]

export default routes
