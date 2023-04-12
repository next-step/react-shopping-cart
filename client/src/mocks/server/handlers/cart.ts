import { rest } from 'msw';
import type { CartProductListType, CartProductType } from 'types';

let userCarts: CartProductListType = [];

export const addCart = rest.post('/carts', async (req, res, ctx) => {
  const product = (await req.json()) as CartProductType;

  const cartList = userCarts.find((cartProduct) => cartProduct.id === product.id);

  if (!cartList) {
    userCarts.push(product);
    return res(ctx.status(201));
  } else {
    return res(ctx.status(400));
  }
});
export const getCarts = rest.get('/carts', async (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(userCarts));
});

export const deleteCart = rest.post('/cart/delete', async (req, res, ctx) => {
  const product = (await req.json()) as CartProductType;

  const newCarts = userCarts.filter((item) => item.id !== product.id);

  if (!newCarts.length) {
    return res(ctx.status(400));
  }

  userCarts = newCarts;
  return res(ctx.status(200), ctx.json(newCarts));
});
export const updateCart = rest.put('/cart/update', async (req, res, ctx) => {
  const product = (await req.json()) as CartProductType;

  const newCarts = userCarts.map((item) => {
    if (item.id === product.id) {
      return product;
    }
    return item;
  });

  if (!newCarts.length) {
    return res(ctx.status(400));
  }
  userCarts = newCarts;

  return res(ctx.status(200), ctx.json(newCarts));
});
