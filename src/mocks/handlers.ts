import { rest } from 'msw';
import { API } from 'constants/api';
import type { Product } from 'types/api';
import { PRODUCTS, CARTS } from './data';

const getProducts = rest.get<Product[]>(API.PRODUCTS, (_, res, ctx) => {
  return res(ctx.status(200), ctx.delay(1000), ctx.json(PRODUCTS));
});
const getCarts = rest.get<Product[]>(API.CARTS, (_, res, ctx) => {
  return res(ctx.status(200), ctx.delay(1000), ctx.json(CARTS));
});

const addCarts = rest.post(API.CARTS, async (req, res, ctx) => {
  const data = await req.json();
  const product = data as Product;

  return res(
    ctx.status(200),
    ctx.json({
      id: Date.now(),
      product,
    })
  );
});

export const handlers = [getProducts, getCarts, addCarts];
