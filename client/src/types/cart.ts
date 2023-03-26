import { z } from 'zod';
import { ProductSchema } from './product';

export const CartSchema = z.object({
  id: z.number(),
  product: ProductSchema,
  count: z.number(),
});
export type Cart = z.infer<typeof CartSchema>;

export const CartsSchema = z.array(CartSchema);
export type Carts = z.infer<typeof CartsSchema>;
