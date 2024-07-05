import axios from 'axios';
import { Order } from '@/types/order';

export const getOrder = async (): Promise<Order[]> => {
  const response = await axios.get<Order[]>('/orders');

  return response.data;
};
