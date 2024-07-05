import { Order } from '@/types/order';
import axios from 'axios';

export const getOrderDetail = async ({ id }: Pick<Order, 'id'>) => {
  const response = await axios.get(`/orders/${id}`);

  return response.data;
};
