import { rest } from 'msw';
let userCarts = [];

export const addCart = rest.post('/carts', async (req, res, ctx) => {
  const product = await req.json();
  userCarts.push(product);
  return res(ctx.status(201));
});
export const getCarts = rest.get('/carts', (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(userCarts));
});

export const deleteCart = rest.post('/cart/delete', async (req, res, ctx) => {
  const product = await req.json();
  const newCarts = userCarts.filter((item) => item.id !== product.id);
  userCarts = newCarts;
  return res(ctx.status(200), ctx.json(newCarts));
});
export const updateCart = rest.put('/cart/update', async (req, res, ctx) => {
  const product = await req.json();
  const newCarts = userCarts.map((item) => {
    if (item.id === product.id) {
      return product;
    }
    return item;
  });
  userCarts = newCarts;

  return res(ctx.status(200), ctx.json(newCarts));
});
