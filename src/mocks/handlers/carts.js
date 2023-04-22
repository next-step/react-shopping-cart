import { rest } from "msw";
import db from "../db/db";

const carts_data = db.carts;

const carts = [
  rest.get("/carts", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(carts_data));
  }),

  rest.post("/carts", (req, res, ctx) => {
    todos.push(req.body);
    return res(ctx.status(201));
  }),
];

export default carts;
