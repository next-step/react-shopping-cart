// src/mocks/handlers.js
import { rest } from 'msw'
import MOCK_DATA from '../../shared/mocks/db.json'
const { orders } = MOCK_DATA

export const ordersHandlers = [
  rest.get('/api/orders', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(orders))
  }),
  rest.post('/api/order', async (req, res, ctx) => {
    const { params: orderItem } = await req.json()
    const currentOrderItem = { ...orderItem, id: orders.length + 1 }
    orders.push(currentOrderItem)

    return res(ctx.status(201), ctx.json(currentOrderItem))
  }),
  rest.get('/api/order/:orderId', (req, res, ctx) => {
    const { orderId } = req.params
    const orderItem = orders.find((order) => order.id.toString() === orderId)
    return res(
      ctx.status(200),
      ctx.json(orderItem || { message: 'product not found' }),
    )
  }),
]
