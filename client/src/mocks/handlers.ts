import { rest } from 'msw';

import { Cart, Carts } from 'types/cart';
import { Products } from 'types/product';
import { API } from 'constants/api';

import { carts, products } from './data';

const getProducts = rest.get<Products>(API.PRODUCTS, (_, res, ctx) => {
  return res(ctx.status(200), ctx.delay(1000), ctx.json(products));
});

const getCarts = rest.get<Carts>(API.CARTS, (_, res, ctx) => {
  return res(ctx.status(200), ctx.delay(1000), ctx.json(carts));
});

const addCart = rest.post<Carts>(API.CART, async (req, res, ctx) => {
  const cartWithoutId = await req.json<Omit<Cart, 'id'>>();

  const existedCart = carts.find((cart) => cart.product.id === cartWithoutId.product.id);

  if (existedCart) {
    existedCart.count += cartWithoutId.count;
  } else {
    const newCart = {
      ...cartWithoutId,
      id: new Date().getTime(),
    };

    carts.push(newCart);
  }

  return res(ctx.status(200), ctx.delay(500), ctx.json(carts));
});

export const handlers = [getProducts, getCarts, addCart];
