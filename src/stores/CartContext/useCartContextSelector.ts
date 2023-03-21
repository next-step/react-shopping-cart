import { useContext } from 'react';

import { CartApiContext, CartContext } from './cartStore';

export function useCartSelector() {
  return useContext(CartContext);
}

export function useCartContextApiSelector() {
  return useContext(CartApiContext);
}
