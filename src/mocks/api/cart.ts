import { carts } from "mocks/db/carts";
import { rest } from "msw";

export const getCarts = rest.get(`${process.env.REACT_APP_SERVER_HOST}/carts`, (_, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json(carts)
  );
})

export const postCart = rest.post(`${process.env.REACT_APP_SERVER_HOST}/carts`, async (req, res, ctx) => {
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
      orderDetails,
    })
  );
})

export const deleteCart = rest.delete(`${process.env.REACT_APP_SERVER_HOST}/carts/:id`, (req, res, ctx) => {
  const { id } = req.params;

  return res(
    ctx.status(200),
    ctx.json({
      id: Number(id),
    })
  );
})
