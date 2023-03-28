import { carts } from "mocks/db/carts";
import { rest } from "msw";

export const getCarts = rest.get(`${process.env.REACT_APP_SERVER_HOST}/carts`, (_, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json(carts)
  );
})

export const addCart = rest.post(`${process.env.REACT_APP_SERVER_HOST}/carts`, (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      id: Date.now(),
      product: req.body
    })
  );
})
