import { rest } from 'msw';

import { API } from 'constants/api';
import { Order, OrderCheckout, Orders } from 'types/order';

import { carts } from './cart';

let orders: Orders = [];
let orderCheckout: OrderCheckout = [];

const addOrder = rest.post<Order>(API.ORDERS, async (req, res, ctx) => {
  const orderDetails = orderCheckout.slice(0);

  orderCheckout = [];

  const newOrder: Order = {
    id: new Date().getTime(),
    orderDetails,
  };

  orders = [newOrder, ...orders];

  return res(ctx.status(200), ctx.delay(500), ctx.json(newOrder));
});

const getOrder = rest.get<Order>(`${API.ORDERS}/:id`, (req, res, ctx) => {
  const id = req.params.id;

  const order = orders.find((order) => order.id === +id);

  if (!order) {
    return res(ctx.status(404), ctx.delay(500));
  }

  return res(ctx.status(200), ctx.delay(500), ctx.json(order));
});

const getOrders = rest.get<Orders>(API.ORDERS, (_, res, ctx) => {
  console.log(orders);

  return res(ctx.status(200), ctx.delay(500), ctx.json(orders));
});

const updateOrderCheckout = rest.post<Order>(API.ORDER_CHECKOUT, async (req, res, ctx) => {
  const cartIds = await req.json<number[]>();

  const newOrderCheckout = carts
    .filter((cart) => cartIds.includes(cart.id))
    .map(({ product, count }) => ({ ...product, count }));

  for (let i = 0; i < cartIds.length; i++) {
    const id = cartIds[i];

    const index = carts.findIndex((cart) => cart.id === id);
    if (index !== -1) {
      carts.splice(index, 1);
    }
  }

  orderCheckout = newOrderCheckout;

  return res(ctx.status(200), ctx.delay(500), ctx.json(orderCheckout));
});

const getOrderCheckout = rest.get<OrderCheckout>(API.ORDER_CHECKOUT, (_, res, ctx) => {
  return res(ctx.status(200), ctx.delay(500), ctx.json(orderCheckout));
});

export const orderHandlers = [addOrder, getOrder, getOrders, updateOrderCheckout, getOrderCheckout];
