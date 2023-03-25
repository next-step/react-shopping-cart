import { rest } from 'msw';

import json from './db.json';

export const handlers = [
  rest.get('/products', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(json.products));
  }),
];
