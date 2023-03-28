import { z } from 'zod';

export const ProductSchema = z.object({
  id: z.number(),
  name: z.string(),
  price: z.number(),
  imageUrl: z.string(),
});
export type Product = z.infer<typeof ProductSchema>;

export const ProductsSchema = z.array(ProductSchema);
export type Products = z.infer<typeof ProductsSchema>;
