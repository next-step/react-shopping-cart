import { z } from 'zod'

export const OrderSchema = z.object({
  id: z.number(),
  name: z.string(),
  price: z.number(),
  imageUrl: z.string(),
  quantity: z.number(),
})

export type OrderSchemaInfer = z.infer<typeof OrderSchema>
