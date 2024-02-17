import { API } from 'constants/api';
import { OrderCheckoutSchema } from 'types/order';

import apiClient from '../apiClient';

export default async function updateOrderCheckout(ids: number[]) {
  const data = await apiClient.post(API.ORDER_CHECKOUT, { body: ids });

  return OrderCheckoutSchema.parse(data);
}
