import React from 'react';

import { InputWithLabel } from '@/components';

import { StyledCartList, StyledCartListHeader, StyledCartCounter, StyledCartContent } from './CartList.styled';
import { CartProduct } from './CartProduct';

interface CartListProps {}

export function CartList({}: CartListProps) {
  return (
    <StyledCartList>
      <StyledCartListHeader>
        <InputWithLabel type="checkbox" name="select" inputClassName="checkbox" labelClassName="checkbox-label">
          선택해제
        </InputWithLabel>
        <button type="button" className="delete-button">
          상품삭제
        </button>
      </StyledCartListHeader>
      <StyledCartCounter>
        <span>든든배송상품</span>
        <span>(3개)</span>
      </StyledCartCounter>
      <StyledCartContent>
        <CartProduct />
        <CartProduct />
        <CartProduct />
      </StyledCartContent>
    </StyledCartList>
  );
}
