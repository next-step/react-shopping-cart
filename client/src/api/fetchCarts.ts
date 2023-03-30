import { API } from 'constants/api';
import { CartsSchema } from 'types/cart';

export default async function fetchCarts() {
  const response = await fetch(API.CARTS);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = await response.json();

  return CartsSchema.parse(data);
}
