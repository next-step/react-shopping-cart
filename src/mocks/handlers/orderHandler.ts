import { rest } from "msw";

import EndPoint from "@/api/endPoints";

import data from "../mockData.json";

const fetchOrderProducts = rest.get(EndPoint.ORDERS.GET_ORDERS, (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(data.orders));
});

export default [fetchOrderProducts];
