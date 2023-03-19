import { UseQueryResult, useQuery } from 'react-query';
import { getCarts } from 'services/cart';
import { CartItem } from 'types/type';

const CART = 'cart'

export function useCart(): UseQueryResult<CartItem[], Error> {
  return useQuery([CART], () => getCarts());
}

