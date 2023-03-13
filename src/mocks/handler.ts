import { rest } from "msw";
import cart from "./cart.json";
import order from "./order.json";

const URL = "http://localhost:3003";

export const handlers = [
  rest.get(`/carts`, async (req, res, ctx) => {
    await sleep(200);

    return res(ctx.status(200), ctx.json(cart));
  }),
  rest.get(`/orders`, async (req, res, ctx) => {
    await sleep(200);

    return res(ctx.status(200), ctx.json(order));
  }),
];

async function sleep(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
