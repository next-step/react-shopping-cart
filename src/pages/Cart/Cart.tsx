import React from 'react';

import { LayeredWrapper } from '@/components';
import { useCartSelector } from '@/stores/CartContext';

import { CartList } from './CartList';
import { CartOrderPanel } from './CartOrderPanel';
import { StyledCartHeader, StyledCartContentContainer } from './Cart.styled';

export function Cart() {
  const cartStore = useCartSelector();

  if (!cartStore) return null;

  return (
    <LayeredWrapper outer={{ as: 'section' }}>
      <StyledCartHeader>
        <h2 className="cart-section__title">장바구니</h2>
      </StyledCartHeader>

      <StyledCartContentContainer>
        <CartList cart={cartStore} />
        <CartOrderPanel cart={cartStore} />
      </StyledCartContentContainer>
    </LayeredWrapper>
  );
}
