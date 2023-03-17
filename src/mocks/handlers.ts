import { rest } from 'msw';
import { carts, orders, products } from './data';
import { cartRepository, orderRepository, productRepository } from '../repositories';

const PATH = {
  product: '/products',
  cart: '/carts',
  order: '/orders'
};

export const handlers = [
  // 제품 리스트
  rest.get(PATH.product, (req, res, ctx) => {
    let productItems = productRepository.get();
    if (!productItems.length) {
      productItems = products;
      productRepository.set(products);
    }

    return res(ctx.status(200), ctx.json(productItems));
  }),

  // 장바구니 리스트
  rest.get(PATH.cart, (req, res, ctx) => {
    let cartItems = cartRepository.get();

    if (!cartItems.length) {
      cartItems = carts;
      cartRepository.set(carts);
    }

    return res(ctx.status(200), ctx.json(cartItems));
  }),

  // 장바구니 추가
  rest.post(PATH.cart, async (req, res, ctx) => {
    let cartItems = cartRepository.get();
    if (!cartItems.length) {
      cartItems = carts;
      cartRepository.set(carts);
    }

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
    let orderItems = orderRepository.get();
    if (!orderItems.length) {
      orderItems = orders;
      orderRepository.set(orders);
    }

    return res(ctx.status(200), ctx.json(orderItems));
  })
];
