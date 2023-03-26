import { API } from 'constants/api';
import { Cart, CartsSchema } from 'types/cart';

export default async function addCart(params: Omit<Cart, 'id'>) {
  const response = await fetch(API.CART, {
    method: 'POST',
    body: JSON.stringify(params),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = await response.json();

  return CartsSchema.parse(data);
}
