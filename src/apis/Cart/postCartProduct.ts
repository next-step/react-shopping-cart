import axios from 'axios';
import { CartProduct } from '@/types/cart';

export const postCartProduct = async (
  product: Pick<CartProduct, 'product'>
) => {
  const response = await axios.post('/carts', product);

  return response.data;
};
