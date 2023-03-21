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

export type ProductSchemaInfer = z.infer<typeof ProductSchema>
export type ProductListSchemaInfer = z.infer<typeof ProductListSchema>
