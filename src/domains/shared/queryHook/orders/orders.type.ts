import { z } from "zod";
import { Product, productSchema } from "../types";

export type Order = Product & {
  quantity: number;
};

export type Orders = {
  id?: number;
  orderDetails: Order[];
};

export const orderScheme = z.object({
  id: z.number(),
  orderDetails: z.array(productSchema.and(z.object({ quantity: z.number() }))),
});

export const ordersScheme = z.array(orderScheme);
