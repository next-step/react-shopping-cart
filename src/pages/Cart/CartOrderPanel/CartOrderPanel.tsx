import React from 'react';
import { Currency } from '@/components';

import {
  StyledCartOrderPanel,
  StyledCartOrderPanelHeader,
  StyledCartOrderPanelBody,
  StyledTotalPrice,
  StyledOrderButton,
  StyledPriceSpan,
} from './CartOrderPanel.styled';
import { CartStore } from '@/stores/CartContext';

interface CartOrderPanelProps {
  cart: CartStore;
}

export function CartOrderPanel({ cart }: CartOrderPanelProps) {
  const products = Object.values(cart);

  return (
    <StyledCartOrderPanel>
      <StyledCartOrderPanelHeader>결제예상금액</StyledCartOrderPanelHeader>
      <StyledCartOrderPanelBody>
        <StyledTotalPrice>
          <StyledPriceSpan>결제예상금액</StyledPriceSpan>
          <StyledPriceSpan>
            <Currency price={20000} />
          </StyledPriceSpan>
        </StyledTotalPrice>
        <StyledOrderButton type="button">
          <span>주문하기</span>
          <span>{`${products?.length}개`}</span>
        </StyledOrderButton>
      </StyledCartOrderPanelBody>
    </StyledCartOrderPanel>
  );
}
