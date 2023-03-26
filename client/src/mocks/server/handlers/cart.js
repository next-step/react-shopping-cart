import { rest } from 'msw';
const userCarts = [];

export const addCart = rest.post('/carts', async (req, res, ctx) => {
  const product = await req.json();
  userCarts.push(product);
  return res(ctx.status(201));
});
export const getCarts = rest.get('/carts', (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(userCarts));
});
