import { z } from 'zod'

export const ProductSchema = z.object({
  id: z.number(),
  name: z.string(),
  price: z.number(),
  imageUrl: z.string(),
})

export const ProductListSchema = z.object({
  productList: z.array(ProductSchema),
  totalPage: z.number(),
})

export const ProductSchemaWithCheckedAndQuantity = ProductSchema.extend({
  checked: z.boolean(),
  quantity: z.number().int().min(0),
})

export type ProductSchemaInfer = z.infer<typeof ProductSchema>
export type ProductListSchemaInfer = z.infer<typeof ProductListSchema>
export type ProductSchemaWithCheckedAndQuantityInfer = z.infer<typeof ProductSchemaWithCheckedAndQuantity>
