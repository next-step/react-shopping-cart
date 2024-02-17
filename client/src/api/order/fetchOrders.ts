import { API } from 'constants/api';
import { OrdersSchema } from 'types/order';

import apiClient from '../apiClient';

export default async function fetchOrders() {
  const data = await apiClient.get(API.ORDERS);

  return OrdersSchema.parse(data);
}
