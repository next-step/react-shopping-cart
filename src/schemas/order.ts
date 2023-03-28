import { z } from 'zod'

export const OrderSchema = z.object({
  id: z.number(),
  name: z.string(),
  price: z.number(),
  imageUrl: z.string(),
  quantity: z.number(),
})

export const OrderListSchema = z.object({
  orderListId: z.string(),
  orders: z.array(OrderSchema),
})

export const OrderListsSchema = z.array(OrderListSchema)

export type OrderSchemaInfer = z.infer<typeof OrderSchema>
export type OrderListSchemaInfer = z.infer<typeof OrderListSchema>
export type OrderListsSchemaInfer = z.infer<typeof OrderListsSchema>
