import { object, string, number, boolean, array } from 'yup';
import type { InferType } from 'yup';
export const CartProductsSchema = array(
  object({
    price: number().defined(),
    image: string().defined(),
    name: string().defined(),
    id: number().defined(),
    isOrder: boolean().defined(),
    amount: number().defined(),
  })
);

export type CartProductSchemaType = InferType<typeof CartProductsSchema>;
