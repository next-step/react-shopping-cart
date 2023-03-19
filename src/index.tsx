import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import OrderForm from './pages/OrderForm'
import Orders from './pages/Orders'
import OrderDetail from './pages/OrderDetail'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Products /> },
      { path: '/products', element: <Products /> },
      { path: '/product/:productId', element: <ProductDetail /> },
      { path: '/cart', element: <Cart /> },
      { path: '/order/form', element: <OrderForm /> },
      { path: '/orders', element: <Orders /> },
      { path: '/order/:orderId', element: <OrderDetail /> },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
