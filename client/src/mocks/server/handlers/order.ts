import { rest } from 'msw';
import type { OrderListType } from 'types';
let orderItems: OrderListType = [];

export const updateOrders = rest.post('/order/update', async (req, res, ctx) => {
  const userOrderItem = await req.json();
  const newOrderItem = [...userOrderItem];
  orderItems = newOrderItem;
  return res(ctx.status(200), ctx.json(orderItems));
});

export const getOrders = rest.get('/orders', (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(orderItems));
});
