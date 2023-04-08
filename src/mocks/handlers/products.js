import { rest } from "msw";
import db from "../db/db";

const products_data = db.products;

const products = [
  rest.get("/products", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(products_data));
  }),

  rest.post("/products", (req, res, ctx) => {
    todos.push(req.body);
    return res(ctx.status(201));
  }),
];

export default products;
