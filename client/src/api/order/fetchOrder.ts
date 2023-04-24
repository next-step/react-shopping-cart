import { API } from 'constants/api';
import { OrderSchema } from 'types/order';

import apiClient from '../apiClient';

export default async function fetchOrder(id: number) {
  const data = await apiClient.get(`${API.ORDERS}/${id}`);

  return OrderSchema.parse(data);
}
