// src/mocks/handlers.js
import { cartsHandlers } from '../../carts/mocks/carts'
import { ordersHandlers } from '../../orders/mocks/orders'
import { productsHandler } from '../../products/mocks/products'

export const handlers = [
  ...productsHandler,
  ...cartsHandlers,
  ...ordersHandlers,
]
