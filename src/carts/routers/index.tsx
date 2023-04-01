import React from 'react'
import Cart from '../pages/Cart'

export const CARTS_PATH = {
  CARTS: '/carts',
} as const

export const cartsRouter = [{ path: CARTS_PATH.CARTS, element: <Cart /> }]
