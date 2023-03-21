import React from 'react';

import { InputWithLabel } from '@/components';
import type { CartStore } from '@/stores/CartContext';

import { StyledCartList, StyledCartListHeader, StyledCartCounter, StyledCartContent } from './CartList.styled';
import { CartProduct } from './CartProduct';

interface CartListProps {
  cart: CartStore;
}

export function CartList({ cart }: CartListProps) {
  const cartProducts = Object.values(cart);
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
        <span>{`${cartProducts.length}개`}</span>
      </StyledCartCounter>
      <StyledCartContent>
        {cartProducts.map((cartProduct) => (
          <CartProduct key={cartProduct.product.id} cartProduct={cartProduct} />
        ))}
      </StyledCartContent>
    </StyledCartList>
  );
}
