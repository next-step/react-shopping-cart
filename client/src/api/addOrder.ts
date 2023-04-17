import { API } from 'constants/api';
import { OrderSchema } from 'types/order';

import apiClient from './apiClient';

export default async function addOrder(ids: number[]) {
  const data = await apiClient.post(API.ORDERS, { body: ids });

  return OrderSchema.parse(data);
}
