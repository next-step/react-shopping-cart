import { rest } from 'msw';
import { orderRepository } from '../../repositories';

const BASE_URL = '/orders';

export const ordersHandler = [
  // 주문 리스트
  rest.get(BASE_URL, (req, res, ctx) => {
    const orderItems = orderRepository.get();

    return res(ctx.status(200), ctx.json(orderItems));
  })
];
