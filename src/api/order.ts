import { HTTP_METHOD, request } from '@/api/core';

export const postAddOrder = async (
  orderDetails: Pick<Order, 'orderDetails'>
): Promise<Order> => {
  const data = await request('/orders', HTTP_METHOD.POST(orderDetails));
  return data;
};
