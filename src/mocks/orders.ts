// src/mocks/handlers.js
import { rest } from 'msw'

const ORDERS = [
  {
    id: '1',
    totalPrice: 20000,
    totalQuantity: 5,
    orderItems: [
      {
        id: '1',
        price: 2500,
        name: '연필',
        imageUrl:
          'https://plus.unsplash.com/premium_photo-1670958553973-58e2ef388f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
        quantity: 4,
      },
      {
        id: '2',
        price: 200000,
        name: '갤럭시 워치',
        imageUrl:
          'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1099&q=80',
        quantity: 1,
      },
    ],
  },
  {
    id: '2',
    totalPrice: 40000,
    totalQuantity: 3,
    orderItems: [
      {
        id: '8',
        price: 11000,
        name: '아보카도 1kg (페루산)',
        imageUrl:
          'https://images.unsplash.com/photo-1677555024309-19edb4a1d40e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
        quantity: 1,
      },
      {
        id: '9',
        price: 7000,
        name: '과즙팡팡 원액 100% 감귤주스',
        imageUrl:
          'https://images.unsplash.com/photo-1676018407020-35d550638b3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        quantity: 1,
      },
      {
        id: '10',
        price: 18000,
        name: '대만 밀크티 (2통)',
        imageUrl:
          'https://images.unsplash.com/photo-1675730600698-c50cb8e53265?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        quantity: 1,
      },
    ],
  },
]

export const ordersHandlers = [
  rest.get('/api/orders', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(ORDERS))
  }),
  rest.post('/api/order', async (req, res, ctx) => {
    const { params: orderItem } = await req.json()
    const currentOrderItem = { ...orderItem, id: ORDERS.length + 1 }
    ORDERS.push(currentOrderItem)

    return res(ctx.status(201), ctx.json(currentOrderItem))
  }),
  rest.get('/api/order/:orderId', (req, res, ctx) => {
    const { orderId } = req.params
    const orderItem = ORDERS.find((order) => order.id === orderId)
    return res(
      ctx.status(200),
      ctx.json(orderItem || { message: 'product not found' }),
    )
  }),
]
