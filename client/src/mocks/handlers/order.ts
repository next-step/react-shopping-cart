import { rest } from 'msw';

import { API } from 'constants/api';
import { Order, Orders } from 'types/order';

import { carts } from './cart';

let orders: Orders = [];

const addOrder = rest.post<Order>(API.ORDERS, async (req, res, ctx) => {
  const cartIds = await req.json<number[]>();

  const orderDetails = carts
    .filter((cart) => cartIds.includes(cart.id))
    .map(({ product, count }) => ({ ...product, count }));

  for (let i = 0; i < cartIds.length; i++) {
    const id = cartIds[i];

    const index = carts.findIndex((cart) => cart.id === id);
    if (index !== -1) {
      carts.splice(index, 1);
    }
  }

  const newOrder: Order = {
    id: new Date().getTime(),
    orderDetails,
  };

  orders = [newOrder, ...orders];

  return res(ctx.status(200), ctx.delay(500), ctx.json(newOrder));
});

export const orderHandlers = [addOrder];
