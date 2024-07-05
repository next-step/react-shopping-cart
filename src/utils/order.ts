import { OrderDetail } from '@/types/order';

export const calculateTotalAmount = (products: OrderDetail[]) => {
  return (products ?? []).reduce(
    (acc, cur) => acc + (cur.quantity ?? 0) * cur.price,
    0
  );
};
