import { z } from 'zod'

export const ProductSchema = z.object({
  id: z.number(),
  name: z.string(),
  price: z.number(),
  imageUrl: z.string(),
  // dt: z.string(),
})

export type ProductSchemaInfer = z.infer<typeof ProductSchema>
