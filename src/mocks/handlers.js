import { rest } from 'msw';
import db from './db';

const {
  products,
  orders,
  // carts
} = db;

const API_PREFIX = '/api';
const APIS = {
  products,
  orders,
};

export const handlers = Object.keys(APIS).map((api) =>
  rest.get(`${API_PREFIX}/${api}`, (_, res, context) => res(context.status(200), context.json({ [api]: APIS[api] })))
);
