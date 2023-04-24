import { API } from 'constants/api';
import { OrderCheckoutSchema } from 'types/order';

import apiClient from '../apiClient';

export default async function fetchOrderCheckout() {
  const data = await apiClient.get(API.ORDER_CHECKOUT);

  return OrderCheckoutSchema.parse(data);
}
