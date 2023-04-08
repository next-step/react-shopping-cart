import { useContext } from 'react';

import { CartApiContext, CartContext } from './cartStore';

export function useCartContext() {
  return useContext(CartContext);
}

export function useCartContextApis() {
  return useContext(CartApiContext);
}
