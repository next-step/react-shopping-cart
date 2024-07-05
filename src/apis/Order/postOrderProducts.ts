import { Order } from '@/types/order';
import axios from 'axios';

export const postOrderProducts = async (order: Pick<Order, 'orderDetails'>) => {
  const response = await axios.post('/orders', order);

  return response.data;
};
