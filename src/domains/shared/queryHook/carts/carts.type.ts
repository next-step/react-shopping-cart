import { z } from "zod";
import { Product, productSchema } from "../types";

export type Carts = {
  id: number;
  product: Product;
};

export const cartScheme = z.object({
  id: z.number(),
  product: productSchema,
});

export const cartsScheme = z.array(cartScheme);
