import { rest } from 'msw';

import { Cart, Carts } from 'types/cart';
import { API } from 'constants/api';

let carts: Carts = [];

const getCarts = rest.get<Carts>(API.CARTS, (_, res, ctx) => {
  return res(ctx.status(200), ctx.delay(0), ctx.json(carts));
});

const addCart = rest.post<Carts>(API.CARTS, async (req, res, ctx) => {
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

const deleteCarts = rest.delete<Carts>(API.CARTS, async (req, res, ctx) => {
  const ids = await req.json<number[]>();

  const filteredCarts = carts.filter((cart) => !ids.includes(cart.id));

  carts = filteredCarts;

  return res(ctx.status(200), ctx.delay(500), ctx.json(filteredCarts));
});

export const cartHandlers = [getCarts, addCart, deleteCarts];
