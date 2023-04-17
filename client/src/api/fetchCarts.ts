import { API } from 'constants/api';
import { CartsSchema } from 'types/cart';

import apiClient from './apiClient';

export default async function fetchCarts() {
  const data = await apiClient.get(API.CARTS);

  return CartsSchema.parse(data);
}
