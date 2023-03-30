import { API } from 'constants/api';
import { CartsSchema } from 'types/cart';

export default async function deleteCarts(params: number[]) {
  const response = await fetch(API.CARTS, {
    method: 'DELETE',
    body: JSON.stringify(params),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = await response.json();

  return CartsSchema.parse(data);
}
