import { API } from 'constants/api';
import { Cart, CartsSchema } from 'types/cart';

import apiClient from './apiClient';

export default async function addCart(params: Omit<Cart, 'id'>) {
  const response = await apiClient.post(API.CARTS, { body: params });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = await response.json();

  return CartsSchema.parse(data);
}
