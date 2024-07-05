import axios from 'axios';
import { Product } from '@/types/product';

export const deleteCartProducts = async (products: Product['id'][]) => {
  const response = await axios.delete('/carts/products', {
    data: products,
  });

  return response.data;
};
