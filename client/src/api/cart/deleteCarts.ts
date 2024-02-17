import { API } from 'constants/api';
import { CartsSchema } from 'types/cart';

import apiClient from '../apiClient';

export default async function deleteCarts(params: number[]) {
  const data = await apiClient.delete(API.CARTS, { body: params });

  return CartsSchema.parse(data);
}
