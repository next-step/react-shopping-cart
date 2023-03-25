import { UseMutationResult, UseQueryResult, useMutation, useQuery } from 'react-query';
import { addCart, getCarts } from 'services/cart';
import { CartItem, ProductItem } from 'types/type';

const CART = 'cart'

export function useCart(): UseQueryResult<CartItem[], Error> {
  return useQuery([CART], () => getCarts());
}

export function useAddCart(): UseMutationResult<unknown, Error, ProductItem, unknown> {
  const mutation = useMutation((item: ProductItem) => addCart(item));

  function addCartItem(item: ProductItem) {
    mutation.mutate(item);
  }

  return {
    ...mutation,
    mutate: addCartItem
  } as UseMutationResult<unknown, Error, ProductItem, unknown>;
}