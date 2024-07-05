import axios from 'axios';
import { Product } from '@/types/product';

export const deleteCartProduct = async (id: Product['id']) => {
  const response = await axios.delete(`/carts/product/${id}`);

  return response.data;
};
