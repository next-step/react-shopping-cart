import axios from 'axios';

import type { CartProductModel } from '@/models';

interface GetOrdersResult {
  [id: string]: CartProductModel[];
}

export function getOrders() {
  return axios.get('/orders').then((res) => res.data as GetOrdersResult);
}

export function postOrder(order: CartProductModel[]) {
  const data = {
    order,
  };

  return axios.post('/orders', { data }).then((res) => res.data);
}
