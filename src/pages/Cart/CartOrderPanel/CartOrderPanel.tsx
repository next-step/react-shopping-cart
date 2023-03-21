import React from 'react';

import {
  StyledCartOrderPanel,
  StyledCartOrderPanelHeader,
  StyledCartOrderPanelBody,
  StyledTotalPrice,
  StyledOrderButton,
  StyledPriceSpan,
} from './CartOrderPanel.styled';

interface CartOrderPanelProps {}

export function CartOrderPanel({}: CartOrderPanelProps) {
  return (
    <StyledCartOrderPanel>
      <StyledCartOrderPanelHeader>결제예상금액</StyledCartOrderPanelHeader>
      <StyledCartOrderPanelBody>
        <StyledTotalPrice>
          <StyledPriceSpan>결제예상금액</StyledPriceSpan>
          <StyledPriceSpan>200000원</StyledPriceSpan>
        </StyledTotalPrice>
        <StyledOrderButton type="button">
          <span>주문하기</span>
          <span>(3개)</span>
        </StyledOrderButton>
      </StyledCartOrderPanelBody>
    </StyledCartOrderPanel>
  );
}
