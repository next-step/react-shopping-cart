import { API } from 'constants/api';
import { OrderSchema } from 'types/order';

export default async function addOrder(ids: number[]) {
  const response = await fetch(API.ORDERS, {
    method: 'POST',
    body: JSON.stringify(ids),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = await response.json();

  return OrderSchema.parse(data);
}
