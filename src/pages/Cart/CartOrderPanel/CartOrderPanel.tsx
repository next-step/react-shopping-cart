import React, { MouseEvent } from 'react';

import { Currency } from '@/components';
import { routes } from '@/routes';
import { TCartStore } from '@/stores/CartContext';
import { useOrderContextApiSelector } from '@/stores/OrderContext';

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
  const cartProducts = Object.values(cart);

  const orderContextApis = useOrderContextApiSelector();

  const handleOrderButtonClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const checkedCartProduct = cartProducts.filter((cartProduct) => cartProduct.isChecked);
    if (!checkedCartProduct || checkedCartProduct.length <= 0) {
      e.preventDefault();
      alert('주문하실 상품을 선택해주세요.');
      return;
    }

    orderContextApis?.dispatch({ type: 'add', payload: cartProducts.filter((cartProduct) => cartProduct.isChecked) });
  };

  return (
    <StyledCartOrderPanel>
      <StyledCartOrderPanelHeader>결제예상금액</StyledCartOrderPanelHeader>
      <StyledCartOrderPanelBody>
        <StyledTotalPrice>
          <StyledPriceSpan>결제예상금액</StyledPriceSpan>
          <StyledPriceSpan>
            <Currency price={cartProducts.reduce((prev, curr) => prev + curr.getTotalPrice(), 0)} />
          </StyledPriceSpan>
        </StyledTotalPrice>
        <StyledOrderButton to={routes.orderList} onClick={handleOrderButtonClick}>
          <span>주문하기</span>
          <span>{`${cartProducts?.length}개`}</span>
        </StyledOrderButton>
      </StyledCartOrderPanelBody>
    </StyledCartOrderPanel>
  );
}
