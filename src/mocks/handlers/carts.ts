import { rest } from 'msw';
import { Cart } from 'types/cart';
import { CARTS } from 'constants/carts';
import cartsData from 'mocks/data/carts.json';

const handlers = [
  // 카트 리스트 가져오기
  rest.get<Cart[]>(`/${CARTS}`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json<Cart[]>(cartsData.carts));
  }),
];
export default handlers;
