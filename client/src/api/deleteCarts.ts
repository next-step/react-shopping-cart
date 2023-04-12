import { API } from 'constants/api';
import { CartsSchema } from 'types/cart';

import apiClient from './apiClient';

export default async function deleteCarts(params: number[]) {
  const response = await apiClient.delete(API.CARTS, { body: params });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = await response.json();

  return CartsSchema.parse(data);
}
