import { rest } from 'msw';
import products from '../data/products.json';

// todo: 무한스크롤 기능 모킹
export const getProducts = rest.get('/products', (req, res, ctx) => {
  return res(ctx.json(products));
});
