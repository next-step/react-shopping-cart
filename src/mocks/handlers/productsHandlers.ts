import { products } from '@/mocks/data/product';

import { rest } from 'msw';

const getAllProducts: Parameters<typeof rest.get>[1] = (_req, res, ctx) => {
  return res(ctx.delay(3000), ctx.status(200), ctx.json([...products]));
};

const handlers = [rest.get('/products', getAllProducts)];
export default handlers;
