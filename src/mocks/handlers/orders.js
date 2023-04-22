import { rest } from "msw";
import db from "../db/db";

const orders_data = db.orders;

const orders = [
  rest.get("/orders", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(orders_data));
  }),

  rest.post("/orders", (req, res, ctx) => {
    todos.push(req.body);
    return res(ctx.status(201));
  }),
];

export default orders;
