import { rest } from 'msw';
import db from './db';

const {
  products,
  // carts, orders
} = db;

export const handlers = [
  rest.get('/api/products', (_, res, context) => {
    return res(
      context.status(200),
      context.json({
        products,
      })
    );
  }),
];
