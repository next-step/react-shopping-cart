import { rest } from "msw";

import EndPoint from "@/api/endPoints";

import data from "../mockData.json";

const fetchCartProducts = rest.get(EndPoint.CARTS, (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(data.carts));
});

const deleteCartProduct = rest.delete(`${EndPoint.CARTS}/:id`, (req, res, ctx) => {
  const productId = req.params.id as string;

  const currentCarts = data.carts;

  const deletedCarts = currentCarts.filter((cart) => cart.product.id === parseInt(productId));

  if (deletedCarts.length === 0) {
    return res(ctx.status(409, "Cannot delete cart item"));
  }

  return res(ctx.status(200), ctx.json(deletedCarts));
});

export default [fetchCartProducts, deleteCartProduct];
