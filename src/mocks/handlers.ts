import { rest } from 'msw';
import productData from './data/product.json';
import cartData from './data/cart.json';
import orderData from './data/order.json';
import { ICartRequestBody } from '../@interface';
import { HttpStatusCode } from 'axios';

// controller 역할
/* 
request: Information about the captured request.
response: Function to create the mocked response.
context: Context utilities specific to the current request handler. */
export const handlers = [
  /* product */
  rest.get('/products', (req, res, ctx) => {
    return res(ctx.status(HttpStatusCode.Accepted), ctx.json(productData));
  }),
  rest.get('/products/:id', (req, res, ctx) => {
    const { id } = req.params;
    return res(
      ctx.status(HttpStatusCode.Accepted),
      ctx.json(productData.filter((product) => product.id === Number(id)))
    );
  }),
  /* cart */
  rest.get('/carts', (req, res, ctx) => {
    return res(ctx.status(HttpStatusCode.Accepted), ctx.json(cartData));
  }),

  rest.post<ICartRequestBody>('/carts', (req, res, ctx) => {
    if (!req.body)
      return res(ctx.status(HttpStatusCode.BadRequest), ctx.json({ ok: false, message: '추가할 상품이 없습니다.' }));
    const lastId = cartData[cartData.length - 1].id;
    cartData.push({ id: lastId, ...req.body });
    return res(
      ctx.status(HttpStatusCode.Created),
      ctx.json({ ok: true, message: '상품이 성공적으로 추가되었습니다.' })
    );
  }),

  /* order */
  rest.get('orders', (req, res, ctx) => {
    return res(ctx.status(HttpStatusCode.Ok), ctx.json(orderData));
  }),
  rest.get('/orders/:id', (req, res, ctx) => {
    const { id } = req.params;
    return res(ctx.status(HttpStatusCode.Ok), ctx.json(orderData.filter((order) => order.id === Number(id))));
  })
];
