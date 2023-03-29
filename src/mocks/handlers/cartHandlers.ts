import { rest } from 'msw';

import { userCarts } from '@/mocks/data/cart';

const getAllCarts: Parameters<typeof rest.get>[1] = (_req, res, ctx) => {
  return res(ctx.delay(3000), ctx.status(200), ctx.json([...userCarts]));
};

const postAddCart: Parameters<typeof rest.post>[1] = async (req, res, ctx) => {
  const { product } = await req.json();

  if (!product.id) {
    return res(
      ctx.status(403),
      ctx.json({
        errorMessage: `상품 id가 존재하지 않습니다.`,
      })
    );
  }

  return res(
    ctx.status(200),
    ctx.json({
      product,
    })
  );
};

const removeCart: Parameters<typeof rest.delete>[1] = async (req, res, ctx) => {
  const { cardId } = req.params;

  return res(
    ctx.status(200),
    ctx.json({
      cardId,
    })
  );
};

const handlers = [
  rest.get('/carts', getAllCarts),
  rest.post('/carts', postAddCart),
  rest.delete('/carts/:cardId', removeCart),
];
export default handlers;
