import axios from 'axios';
import { CartProduct } from '@/types/cart';

export const getCartProducts = async (): Promise<CartProduct[]> => {
  const response = await axios.get<CartProduct[]>('/carts');

  return response.data;
};
