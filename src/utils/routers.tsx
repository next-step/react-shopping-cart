import React from 'react'
import App from '../App'
import NotFound from '../pages/NotFound'
import Products from '../pages/Products'
import ProductDetail from '../pages/ProductDetail'
import Cart from '../pages/Cart'
import OrderForm from '../pages/OrderForm'
import Orders from '../pages/Orders'
import OrderDetail from '../pages/OrderDetail'
import { createBrowserRouter } from 'react-router-dom'

export const NAVIGATE_URL = {
  PRODUCTS: '/products',
  PRODUCT: '/product/:productId',
  CARTS: '/carts',
  ORDERS: '/orders',
  ORDER_FORM: '/order/form',
  ORDER: '/order/:oriderId',
} as const

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Products /> },
      { path: NAVIGATE_URL.PRODUCTS, element: <Products /> },
      { path: NAVIGATE_URL.PRODUCT, element: <ProductDetail /> },
      { path: NAVIGATE_URL.CARTS, element: <Cart /> },
      { path: NAVIGATE_URL.ORDER_FORM, element: <OrderForm /> },
      { path: NAVIGATE_URL.ORDERS, element: <Orders /> },
      { path: NAVIGATE_URL.ORDER, element: <OrderDetail /> },
    ],
  },
])
