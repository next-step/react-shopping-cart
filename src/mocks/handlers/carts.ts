import { rest } from 'msw';
import { Cart } from 'types/cart';
import { CARTS } from 'constants/carts';
import cartsData from 'mocks/data/carts.json';

const handlers = [
  // 카트 리스트 가져오기
  rest.get<Cart[]>(`/${CARTS}`, (_, res, ctx) => {
    return res(ctx.status(200), ctx.json<Cart[]>(cartsData.carts));
  }),
  // 카트 아이템 추가
  rest.post<Cart[]>(`/${CARTS}`, async (req, res, ctx) => {
    const selectedCart: Cart = await req.json();

    const selected: Cart | undefined = cartsData.carts.find(
      (cart) => cart.id === selectedCart.id
    );
    return res(ctx.status(201), ctx.json<Cart | undefined>(selected));
  }),
  // 카트 아이템 삭제
  rest.delete(`/${CARTS}/:id`, (req, res, ctx) => {
    return res(ctx.status(204));
  }),
];
export default handlers;
