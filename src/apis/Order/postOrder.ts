import axios from 'axios';
import { Order } from '@/types/order';

export const postOrder = async (order: Pick<Order, 'orderDetails'>[]) => {
  const response = await axios.post('/orders', order);

  return response.data;
};
