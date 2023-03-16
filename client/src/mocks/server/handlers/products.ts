import { rest } from 'msw';
import products from '../data/products.json';
export const getProducts = rest.get('/products', (req, res, ctx) => {
  return res(ctx.json(products));
});
