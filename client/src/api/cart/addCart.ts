import { API } from 'constants/api';
import { Cart, CartsSchema } from 'types/cart';

import apiClient from '../apiClient';

export default async function addCart(params: Omit<Cart, 'id'>) {
  const data = await apiClient.post(API.CARTS, { body: params });

  return CartsSchema.parse(data);
}
