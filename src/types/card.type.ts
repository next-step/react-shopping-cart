import { z } from 'zod';

export const CardStateSchema = z.object({
  cardNumber: z.string(),
  cardBrandName: z.string(),
  cardColor: z.string(),
  month: z.string(),
  year: z.string(),
  name: z.string(),
  timestamp: z.number(),
});

const paymentResultSchema = z.object({
  success: z.boolean(),
  orderId: z.number(),
  totalPrice: z.number(),
  cardNumber: z.string(),
  cardBrandName: z.string(),
  paymentTimestamp: z.number(),
});

const paymentCancelSchema = paymentResultSchema.pick({
  success: true,
  orderId: true,
});

const paymentFormStateSchema = z.object({
  orderId: z.number(),
  totalPrice: z.number(),
  onPaymentCancel: z.function().args(paymentCancelSchema).returns(z.void()),
  onPaymentComplete: z.function().args(paymentResultSchema).returns(z.void()),
});

export type PaymentResult = z.infer<typeof paymentResultSchema>;
export type PaymentCancel = z.infer<typeof paymentCancelSchema>;
export type PaymentFormState = z.infer<typeof paymentFormStateSchema>;

export type CardState = z.infer<typeof CardStateSchema>;
