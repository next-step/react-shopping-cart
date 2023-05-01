import { orders } from "mocks/db/orders";
import { rest } from "msw";

export const getOrders = rest.get(`${process.env.REACT_APP_SERVER_HOST}/orders`, (_, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json(orders)
  );
})

export const postAddOrder = rest.post(`${process.env.REACT_APP_SERVER_HOST}/carts`, async (req, res, ctx) => {
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
      orders,
    })
  );
})
