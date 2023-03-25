import React from 'react';

import { LayeredTitleLayout } from '@/components';
import { useCartSelector } from '@/stores/CartContext';

import { CartList } from './CartList';
import { CartOrderPanel } from './CartOrderPanel';
import { StyledCartContentContainer } from './Cart.styled';

export function Cart() {
  const cartStore = useCartSelector();

  if (!cartStore) return null;

  return (
    <LayeredTitleLayout title="장바구니">
      <StyledCartContentContainer>
        <CartList cart={cartStore} />
        <CartOrderPanel cart={cartStore} />
      </StyledCartContentContainer>
    </LayeredTitleLayout>
  );
}
