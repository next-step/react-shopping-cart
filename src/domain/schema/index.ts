import { object, string, number, boolean, array } from 'yup';
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

export const ProductsSchema = object({
  products: array(
    object({
      id: number().defined(),
      name: string().defined(),
      price: number().defined(),
      image: string().defined(),
    })
  ),
  TOTAL_PAGE: number().defined(),
});

const OrderProductSchema = object({
  price: number().defined(),
  image: string().defined(),
  name: string().defined(),
  amount: number().defined(),
  id: number().defined(),
  isOrder: boolean().defined(),
});

export const OrdersSchema = array(
  object({
    id: number().defined(),
    ordered: object({
      items: array(OrderProductSchema),
      totalAmount: number().defined(),
      totalPrice: number().defined(),
    }),
  })
);
