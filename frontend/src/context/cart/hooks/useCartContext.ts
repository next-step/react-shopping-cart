import { useContext } from 'react';

import { ERROR_MESSAGE } from '@/constants/errorMessage';
import { CartContext } from '@/context/cart/CartProvider';
import { assert } from '@/utils/validation';

export default function useCartContext() {
  const cartContext = useContext(CartContext);

  assert(cartContext != null, ERROR_MESSAGE.PROVIDER.INVALID_SCOPE);

  return cartContext;
}
