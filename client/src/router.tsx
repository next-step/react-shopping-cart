import { createBrowserRouter } from 'react-router-dom'
import Layout from './layouts'
import OrderList from './orders/pages/OrderList'
import ProductList from './products/pages/ProductList'
import ShoppingCart from './shoppingCart/pages/ShoppingCart'

interface RouterBase {
  id: number
  path: string
  label: string
  element: React.ReactNode
}

const routerData: RouterBase[] = [
  {
    id: 0,
    label: '상품목록록',
    path: '/',
    element: <ProductList />,
  },
  {
    id: 1,
    label: '장바구니',
    path: '/shopping-cart',
    element: <ShoppingCart />,
  },
  {
    id: 2,
    label: '주문목록',
    path: '/order-list',
    element: <OrderList />,
  },
]

export const routers = createBrowserRouter(
  routerData.map((router) => {
    const route = {
      path: router.path,
      element: <Layout>{router.element}</Layout>,
    }
    return route
  })
)
