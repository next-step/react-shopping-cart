import axios from 'axios';
import { Order } from '@/types/order';

export const postOrderList = async (order: Order[]) => {
  const response = await axios.post('/order', order);

  return response.data;
};
