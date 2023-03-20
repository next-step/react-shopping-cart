import { rest } from "msw";

const CARTS = [
  {
    id: "1",
    name: "test",
    price: 1234,
    imageUrl: "test.com",
  },
  {
    id: "5",
    name: "test",
    price: 1234,
    imageUrl: "test.com",
  },
];

export const cartsHandlers = [
  rest.get("/carts", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(CARTS));
  }),
  rest.post("/carts", async (req, res, ctx) => {
    const cartItem = await req.json();
    const currentCartItem = { ...cartItem, id: CARTS.length + 1 };
    CARTS.push(currentCartItem);

    return res(ctx.status(200), ctx.json(currentCartItem));
  }),
  rest.delete("/carts/:cardId", (req, res, ctx) => {
    const { cardId } = req.params;
    const cartIndex = CARTS.findIndex((cart) => cart.id === cardId);

    CARTS.splice(cartIndex, 1);

    return res(
      ctx.json({
        message: "Delete successfully",
      })
    );
  }),
];
