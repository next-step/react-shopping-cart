import { rest } from 'msw';
import { cartRepository, orderRepository, productRepository } from '../repositories';

const PATH = {
  product: '/products',
  cart: '/carts',
  order: '/orders'
};

export const handlers = [
  // 제품 리스트
  rest.get(PATH.product, (req, res, ctx) => {
    const productItems = productRepository.get();

    return res(ctx.status(200), ctx.json(productItems));
  }),

  // 장바구니 리스트
  rest.get(PATH.cart, (req, res, ctx) => {
    const cartItems = cartRepository.get();

    return res(ctx.status(200), ctx.json(cartItems));
  }),

  // 장바구니 추가
  rest.post(PATH.cart, async (req, res, ctx) => {
    const cartItems = cartRepository.get();

    const newItem = await req.json();
    const newCartItems = [
      ...cartItems,
      newItem
    ];

    cartRepository.set(newCartItems);

    return res(ctx.status(200), ctx.json(true));
  }),

  // 주문 리스트
  rest.get(PATH.order, (req, res, ctx) => {
    const orderItems = orderRepository.get();

    return res(ctx.status(200), ctx.json(orderItems));
  })
];
