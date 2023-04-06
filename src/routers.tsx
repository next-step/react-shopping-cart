import React from 'react'
import NotFound from './shared/pages/NotFound'

import { createBrowserRouter } from 'react-router-dom'
import { productsRouter } from './products/routers'
import { ordersRouter } from './orders/routers'
import { cartsRouter } from './carts/routers'
import Products from 'products/pages/Products'
import App from 'App'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Products />,
      },
      ...productsRouter,
      ...ordersRouter,
      ...cartsRouter,
    ],
  },
])
