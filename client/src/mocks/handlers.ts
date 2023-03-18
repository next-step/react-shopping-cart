import { API } from 'constants/api';
import { rest } from 'msw';

import { ICart } from 'types/cart';
import { IProduct } from 'types/product';

import { carts, products } from './data';

const getProducts = rest.get<IProduct[]>(API.PRODUCTS, (_, res, ctx) => {
  return res(ctx.status(200), ctx.delay(1000), ctx.json(products));
});

const getCarts = rest.get<ICart[]>(API.CARTS, (_, res, ctx) => {
  return res(ctx.status(200), ctx.delay(1000), ctx.json(carts));
});

const addCart = rest.post<ICart[]>(API.CART, async (req, res, ctx) => {
  const newCart = await req.json<ICart>();
  carts.push(newCart);

  return res(ctx.status(200), ctx.delay(500), ctx.json(carts));
});

export const handlers = [getProducts, getCarts, addCart];
