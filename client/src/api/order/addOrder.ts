import { API } from 'constants/api';
import { OrderCheckout, OrderSchema } from 'types/order';

import apiClient from '../apiClient';

export default async function addOrder(orderCheckout: OrderCheckout) {
  const data = await apiClient.post(API.ORDERS, { body: orderCheckout });

  return OrderSchema.parse(data);
}
