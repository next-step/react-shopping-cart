import { rest } from 'msw';
import { API } from 'constants/api';
import type { Product } from 'types/api';
import { PRODUCTS } from './data/Products';

const getProducts = rest.get<Product[]>(API.PRODUCTS, (_, res, ctx) => {
  return res(ctx.status(200), ctx.delay(1000), ctx.json(PRODUCTS));
});

export const handlers = [getProducts];
