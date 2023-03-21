import React from 'react';

import { LayeredWrapper } from '@/components';

import { CartList } from './CartList';
import { CartOrderPanel } from './CartOrderPanel';
import { StyledCartHeader, StyledCartContentContainer } from './Cart.styled';

export function Cart() {
  return (
    <LayeredWrapper outer={{ as: 'section' }}>
      <StyledCartHeader>
        <h2 className="cart-section__title">장바구니</h2>
      </StyledCartHeader>

      <StyledCartContentContainer>
        <CartList />
        <CartOrderPanel />
      </StyledCartContentContainer>
    </LayeredWrapper>
  );
}
