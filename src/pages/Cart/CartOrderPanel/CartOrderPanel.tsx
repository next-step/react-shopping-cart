import React from 'react';

import { Currency } from '@/components';
import { TCartStore } from '@/stores/CartContext';

import {
  StyledCartOrderPanel,
  StyledCartOrderPanelHeader,
  StyledCartOrderPanelBody,
  StyledTotalPrice,
  StyledOrderButton,
  StyledPriceSpan,
} from './CartOrderPanel.styled';

interface CartOrderPanelProps {
  cart: TCartStore;
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
            <Currency price={products.reduce((prev, curr) => prev + curr.getTotalPrice(), 0)} />
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
