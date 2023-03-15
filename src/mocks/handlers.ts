import { rest } from 'msw';
import { carts, orders, products } from './data';


export const handlers = [
  // 제품 리스트
  rest.get('/products', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(products));
  }),

  // 장바구니 리스트
  rest.get('/carts', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(carts));
  }),

  // 주문 리스트
  rest.get('/orders', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(orders));
  })
];
