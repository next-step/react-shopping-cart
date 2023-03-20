import { products } from '@/mocks/data/product';
import { faker } from '@faker-js/faker';

import { rest } from 'msw';

export default function handlers() {
  return [rest.get('/products', getAllProducts)];
}

const getAllProducts: Parameters<typeof rest.get>[1] = (_req, res, ctx) => {
  return res(
    ctx.delay(3000),
    ctx.status(200),
    ctx.json({ response: [...products] })
  );
};
