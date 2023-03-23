import { rest } from "msw";

import EndPoint from "@/api/endPoints";

import data from "../mockData.json";

const fetchCartProducts = rest.get(EndPoint.CARTS.GET_CARTS, (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(data.carts));
});

export default [fetchCartProducts];
