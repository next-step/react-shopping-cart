import { rest } from "msw";
import { db } from "../store/db";

const ORDERS = db.orders;

export const ordersHandlers = [
  rest.get("/orders", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(ORDERS));
  }),
  rest.post("/orders", async (req, res, ctx) => {
    const orderItem = await req.json();
    const currentOrderItem = { ...orderItem, id: ORDERS.length + 1 };
    ORDERS.push(currentOrderItem);

    return res(ctx.status(201), ctx.json(currentOrderItem));
  }),
  rest.get("/orders/:orderId", (req, res, ctx) => {
    const { orderId } = req.params;
    const orderItem = ORDERS.find((order) => order.id === +orderId);
    return res(
      ctx.status(200),
      ctx.json(orderItem || { message: "product not found" })
    );
  }),
];
