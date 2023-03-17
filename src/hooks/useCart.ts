import { UseQueryResult, useQuery } from 'react-query';
import { getCarts } from 'services/cart';
import { CartItem } from 'types/type';


export function useCart(): UseQueryResult<CartItem[], Error> {
  return useQuery(['cart'], () => getCarts());
}

