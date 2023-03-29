import { rest } from 'msw';

import { order } from '@/mocks/data/order';

const postAddOrder: Parameters<typeof rest.post>[1] = async (req, res, ctx) => {
  const orderDetails: OrderDetail[] = await req.json();

  if (orderDetails.length === 0) {
    return res(
      ctx.status(403),
      ctx.json({
        errorMessage: `선택 된 상품이 없습니다.`,
      })
    );
  }

  return res(
    ctx.status(200),
    ctx.json({
      order,
    })
  );
};

const handlers = [rest.post('/orders', postAddOrder)];
export default handlers;
