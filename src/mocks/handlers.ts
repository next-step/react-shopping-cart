import { rest } from 'msw';
import { carts, orders, products } from './data';
import { cartRepository, orderRepository, productRepository } from '../repositories';

export const handlers = [
  // 제품 리스트
  rest.get('/products', (req, res, ctx) => {
    const productItems = productRepository.get();
    if (!productItems.length) {
      productRepository.set(products);
    }

    return res(ctx.status(200), ctx.json(productItems));
  }),

  // 장바구니 리스트
  rest.get('/carts', (req, res, ctx) => {
    const cartItems = cartRepository.get();
    if (!cartItems.length) {
      cartRepository.set(carts);
    }

    return res(ctx.status(200), ctx.json(cartItems));
  }),

  // 주문 리스트
  rest.get('/orders', (req, res, ctx) => {
    const orderItems = orderRepository.get();
    if (!orderItems.length) {
      orderRepository.set(orders);
    }

    return res(ctx.status(200), ctx.json(orderItems));
  })
];
