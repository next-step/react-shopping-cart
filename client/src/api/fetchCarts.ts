import { API } from 'constants/api';
import { CartsSchema } from 'types/cart';

import apiClient from './apiClient';

export default async function fetchCarts() {
  const response = await apiClient.get(API.CARTS);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = await response.json();

  return CartsSchema.parse(data);
}
