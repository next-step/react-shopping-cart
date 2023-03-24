import { rest } from 'msw';
import productData from './data/product.json';
import cartData from './data/cart.json';
import orderData from './data/order.json';

// controller 역할
/* 
request: Information about the captured request.
response: Function to create the mocked response.
context: Context utilities specific to the current request handler. */
export const handlers = [
  rest.get('/products', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(productData));
  }),
  rest.get('/products/:id', (req, res, ctx) => {
    const { id } = req.params;
    return res(ctx.status(200), ctx.json(productData.filter((product) => product.id === Number(id))));
  }),
  rest.get('/carts', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(cartData));
  }),
  rest.get('orders', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(orderData));
  }),
  rest.get('/orders/:id', (req, res, ctx) => {
    const { id } = req.params;
    return res(ctx.status(200), ctx.json(orderData.filter((order) => order.id === Number(id))));
  })
];
