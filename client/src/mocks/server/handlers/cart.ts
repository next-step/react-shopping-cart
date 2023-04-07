import { rest } from 'msw';
import type { CartListType, CartProductType } from 'types';
type UserCartType = CartListType;

let userCarts: UserCartType = [];

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
export const getCarts = rest.get('/carts', (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(userCarts));
});

export const deleteCart = rest.post('/cart/delete', async (req, res, ctx) => {
  const product = (await req.json()) as CartProductType;

  // Todo : product에대해 스키마 유효성검사

  const newCarts = userCarts.filter((item) => item.id !== product.id);
  userCarts = newCarts;
  return res(ctx.status(200), ctx.json(newCarts));
});
export const updateCart = rest.put('/cart/update', async (req, res, ctx) => {
  const product = (await req.json()) as CartProductType;

  // Todo : product에대해 스키마 유효성검사
  const newCarts = userCarts.map((item) => {
    if (item.id === product.id) {
      return product;
    }
    return item;
  });
  userCarts = newCarts;

  return res(ctx.status(200), ctx.json(newCarts));
});
