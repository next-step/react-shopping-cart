import { rest } from 'msw';

import fixtures from '@/mocks/fixtures';

const BASE_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:3000';

const handlers = [
  rest.get(`${BASE_URL}/products`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ products: fixtures.products }));
  }),
  rest.get(`${BASE_URL}/products/:id`, (req, res, ctx) => {
    const { id } = req.params;

    const product = fixtures.products.find((product) => product.id === Number(id));

    return res(ctx.status(200), ctx.json({ ...product }));
  }),
];

export default handlers;
