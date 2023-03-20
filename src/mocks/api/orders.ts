import { orders } from "mocks/db/orders";
import { rest } from "msw";

export const getOrders = rest.get(`${process.env.REACT_APP_SERVER_HOST}/orders`, (_, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json(orders)
  );
})
