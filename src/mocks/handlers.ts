// src/mocks/handlers.js
import { cartsHandlers } from './carts'
import { ordersHandlers } from './orders'
import { productsHandler } from './products'

export const handlers = [
  ...productsHandler,
  ...cartsHandlers,
  ...ordersHandlers,
]
