import React from 'react'
import OrderForm from '../pages/OrderForm'
import Orders from '../pages/Orders'
import OrderDetail from '../pages/OrderDetail'

export const ORDERS_PATH = {
  ORDERS: '/orders',
  ORDER_FORM: '/order/form',
  ORDER: '/order/:oriderId',
} as const

export const ordersRouter = [
  { path: ORDERS_PATH.ORDER_FORM, element: <OrderForm /> },
  { path: ORDERS_PATH.ORDERS, element: <Orders /> },
  { path: ORDERS_PATH.ORDER, element: <OrderDetail /> },
]
