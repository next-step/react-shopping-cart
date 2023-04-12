import { API } from 'constants/api';
import { OrderSchema } from 'types/order';

import apiClient from './apiClient';

export default async function addOrder(ids: number[]) {
  const response = await apiClient.post(API.ORDERS, { body: ids });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = await response.json();

  return OrderSchema.parse(data);
}
