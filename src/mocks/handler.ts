import { rest } from "msw";
import MOCK from "./data.json";

export const handlers = [
  rest.get(`/carts`, async (req, res, ctx) => {
    await sleep(200);

    return res(ctx.status(200), ctx.json(MOCK.carts));
  }),
  rest.get(`/orders`, async (req, res, ctx) => {
    await sleep(200);

    return res(ctx.status(200), ctx.json(MOCK.orders));
  }),
  rest.get(`/products`, async (req, res, ctx) => {
    await sleep(200);

    return res(ctx.status(200), ctx.json(MOCK.products));
  }),
];

async function sleep(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
