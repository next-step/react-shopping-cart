import { rest } from 'msw';
import { type Product, PRODUCTS } from './data/getProducts';

const getProducts = rest.get<Product[]>('/products', (_, res, ctx) => {
  return res(ctx.status(200), ctx.delay(1000), ctx.json(PRODUCTS));
});

export const handlers = [getProducts];
