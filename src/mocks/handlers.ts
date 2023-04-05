import { rest } from 'msw';

import { convertToNumberSafe } from '@/utils';

import json from './db.json';

const { products } = json;

export const handlers = [
  rest.get('/products', async (req, res, ctx) => {
    const currentPage = convertToNumberSafe(req.url.searchParams.get('page')) || 10;
    const nextPage = products.length <= currentPage ? null : currentPage + 10;

    await wait();

    return res(ctx.status(200), ctx.json({ products: products.slice(currentPage - 10, currentPage), nextPage }));
  }),
  // TODO: 장바구니 get, post 생성
  // TODO: 주문 get, post 생성
];

function wait(waitMMS = 1000) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, waitMMS);
  });
}
