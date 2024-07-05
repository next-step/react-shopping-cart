import axios from 'axios';
import { CartProduct } from '@/types/cart';

export const postCart = async (product: CartProduct[]) => {
  const response = await axios.post('/cart', product);

  return response.data;
};
