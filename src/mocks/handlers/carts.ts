import { rest } from 'msw';
import { cartRepository } from '../../repositories';

const BASE_URL = '/carts';

export const cartsHandlers = [
  // 장바구니 리스트
  rest.get(BASE_URL, (req, res, ctx) => {
    const cartItems = cartRepository.get();

    return res(ctx.status(200), ctx.json(cartItems));
  }),

  // 장바구니 추가
  rest.post(BASE_URL, async (req, res, ctx) => {
    const cartItems = cartRepository.get();

    const newItem = await req.json();
    const newCartItems = [
      ...cartItems,
      newItem
    ];

    cartRepository.set(newCartItems);

    return res(ctx.status(200), ctx.json(true));
  }),
];

