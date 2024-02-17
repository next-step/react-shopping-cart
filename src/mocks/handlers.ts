import { rest } from 'msw';

import type { CartProductModel } from '@/models';
import { convertToNumberSafe } from '@/utils';

import json from './db.json';
import { select, update } from './sessionStorageService';

const ORDERS = 'orders';
const ORDERS_URL = `/${ORDERS}`;

const { products } = json;

export const handlers = [
  rest.get('/products', async (req, res, ctx) => {
    const currentPage = convertToNumberSafe(req.url.searchParams.get('page')) || 10;
    const nextPage = products.length <= currentPage ? null : currentPage + 10;

    await wait();

    return res(ctx.status(200), ctx.json({ products: products.slice(currentPage - 10, currentPage), nextPage }));
  }),
  rest.get(ORDERS_URL, async (req, res, ctx) => {
    await wait();

    const orderHistories = select(ORDERS);

    if (!orderHistories) return res(ctx.status(200), ctx.json(null));
    return res(ctx.status(200), ctx.json(orderHistories));
  }),
  rest.post(ORDERS_URL, async (req, res, ctx) => {
    const reqOrders = await req.json<{ data: { order: CartProductModel[] } }>().then((res) => res.data.order);
    if (!reqOrders) return res(ctx.status(400), ctx.text('need orders in body'));

    await wait();

    const orders = select(ORDERS);
    if (!orders) {
      update(ORDERS, '1', reqOrders);
    } else {
      const newKey = Math.max(...Object.keys(orders).map((key) => Number(key))) + 1;
      update(ORDERS, String(newKey), reqOrders);
    }

    return res(ctx.status(200), ctx.json(select(ORDERS)));
  }),
];

function wait(waitMMS = 1000) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, waitMMS);
  });
}
