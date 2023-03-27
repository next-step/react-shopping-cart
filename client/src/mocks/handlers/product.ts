import { rest } from 'msw';

import { Products } from 'types/product';
import { API } from 'constants/api';

import { products } from '../data';

const getProducts = rest.get<Products>(API.PRODUCTS, (_, res, ctx) => {
  return res(ctx.status(200), ctx.delay(1000), ctx.json(products));
});

export const productHandlers = [getProducts];
