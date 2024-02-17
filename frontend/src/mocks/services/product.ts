import { rest } from 'msw';

import fixtures from '@/mocks/fixtures';

const MSW_BASE_URL = import.meta.env.MSW_BASE_URL ?? 'http://localhost:5173';

export const getProducts = rest.get(`${MSW_BASE_URL}/products`, (_, res, ctx) => {
  return res(ctx.status(200), ctx.json({ products: fixtures.products }));
});

export const getProductsDetail = rest.get(`${MSW_BASE_URL}/products/:id`, (req, res, ctx) => {
  const { id } = req.params;

  const product = fixtures.products.find((product) => product.id === Number(id));

  return res(ctx.status(200), ctx.json({ ...product }));
});
