import { z } from 'zod';
import { ProductSchema } from './product';

const OrderDetailSchema = ProductSchema.extend({
  count: z.number(),
});

export const OrderCheckoutSchema = z.array(OrderDetailSchema);
export type OrderCheckout = z.infer<typeof OrderCheckoutSchema>;

export const OrderSchema = z.object({
  id: z.number(),
  orderDetails: z.array(OrderDetailSchema),
});
export type Order = z.infer<typeof OrderSchema>;

export const OrdersSchema = z.array(OrderSchema);
export type Orders = z.infer<typeof OrdersSchema>;
