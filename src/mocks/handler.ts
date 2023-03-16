import { Cart } from "./../types/cart";
import { rest } from "msw";
import MOCK from "./data.json";
import { Product } from "../types/product";

const state = {
  carts: MOCK.carts,
  orders: MOCK.orders,
  products: MOCK.products,
};

export const handlers = [
  rest.get(`/carts`, async (req, res, ctx) => {
    await sleep(200);

    return res(ctx.status(200), ctx.json(state.carts));
  }),
  rest.post(`/carts`, async (req, res, ctx) => {
    const product = JSON.parse(req.body as string) as Product;
    const cart = {
      id: Date.now(),
      product,
    };
    state.carts.push(cart);
    await sleep(200);
    return res(ctx.status(200), ctx.json(state.carts));
  }),
  rest.get(`/orders`, async (req, res, ctx) => {
    await sleep(200);

    return res(ctx.status(200), ctx.json(state.orders));
  }),
  rest.get(`/products`, async (req, res, ctx) => {
    await sleep(200);

    return res(ctx.status(200), ctx.json(state.products));
  }),
];

async function sleep(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
