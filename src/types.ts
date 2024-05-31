import { z } from 'zod';

export const productSchema = z.object({
  id: z.number(),
  name: z.string(),
  price: z.number(),
  imageUrl: z.string(),
  quantity: z.number().optional(),
});

export const paginatedProductSchema = z.object({
  items: z.array(productSchema),
  pageNumber: z.number(),
  pageSize: z.number(),
  totalPages: z.number(),
  totalCount: z.number(),
  isLastPage: z.boolean(),
  isFirstPage: z.boolean(),
});

export const cartSchema = z.object({
  id: z.number(),
  product: productSchema,
});

const orderDetailSchema = productSchema.extend({
  quantity: z.number(),
});

export const orderSchema = z.object({
  id: z.number(),
  orderDetails: z.array(orderDetailSchema),
});

const cartStateScheme = z.object({
  items: z.array(productSchema),
  setItems: z.function().args(z.array(cartSchema)).returns(z.void()),
  handleQuantity: z.function().args(z.number(), z.number()).returns(z.void()),
  selectedItems: z.set(z.number()),
  isAllSelected: z.boolean(),
  toggleAllItemsSelection: z.function().returns(z.void()),
  toggleItemSelection: z.function().args(z.number()).returns(z.void()),
});

export type Cart = z.infer<typeof cartSchema>;
export type Product = z.infer<typeof productSchema>;
export type PaginatedProduct = z.infer<typeof paginatedProductSchema>;
export type Order = z.infer<typeof orderSchema>;
export type CartState = z.infer<typeof cartStateScheme>;
