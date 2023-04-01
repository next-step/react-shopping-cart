import React from 'react'
import App from './App'
import NotFound from './shared/pages/NotFound'

import { createBrowserRouter } from 'react-router-dom'
import { productsRouter } from './products/routers'
import { ordersRouter } from './orders/routers'
import { cartsRouter } from './carts/routers'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [...productsRouter, ...ordersRouter, ...cartsRouter],
  },
])
