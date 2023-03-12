import { rest } from "msw";
import { products } from "./db/products";
import { carts } from "./db/carts";

export const handlers = [
  rest.get("/api/products", (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(products)
    );
  }),
  rest.get("/api/carts", (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(carts)
    );
  }),
];
