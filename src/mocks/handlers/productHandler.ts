import { rest } from "msw";

import EndPoint from "@/api/endPoints";

import data from "../mockData.json";

const fetchProducts = rest.get(EndPoint.PRODUCTS.GET_PRODUCTS, (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(data.products));
});

export default [fetchProducts];
