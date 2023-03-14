import { rest } from 'msw';

import { IProduct } from 'types/product';
import { products } from './data';

export const handlers = [
  rest.get<IProduct[]>('/products', (_, res, ctx) => {
    return res(ctx.status(200), ctx.delay(1000), ctx.json(products));
  }),
];
