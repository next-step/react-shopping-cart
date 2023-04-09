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

export const PaginatedProductsSchema = z.object({
  contents: z.array(ProductSchema),
  pageNumber: z.number(),
  pageSize: z.number(),
  totalPages: z.number(),
  totalCount: z.number(),
  isLastPage: z.boolean(),
});
export type PaginatedProducts = z.infer<typeof PaginatedProductsSchema>;
