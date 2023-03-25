import React from 'react';

import { InputWithLabel } from '@/components';
import { TCartStore, useCartContextApiSelector } from '@/stores/CartContext';

import { StyledCartList, StyledCartListHeader, StyledCartCounter, StyledCartContent } from './CartList.styled';
import { CartProduct } from './CartProduct';

interface CartListProps {
  cart: TCartStore;
}

export function CartList({ cart }: CartListProps) {
  const cartContextApis = useCartContextApiSelector();

  const cartProducts = Object.values(cart);
  const isCartProductChecked = cartProducts.some((cartProduct) => cartProduct.isChecked);
  const labelContent = isCartProductChecked ? '선택해제' : '모두 선택';

  const handleCartListCheckboxClick = () => {
    if (isCartProductChecked) {
      cartProducts.forEach((cartProduct) => cartProduct.checkOff());
    } else {
      cartProducts.forEach((cartProduct) => cartProduct.checkOn());
    }

    cartContextApis?.dispatch({ type: 'update', payload: cartProducts });
  };

  const handleProductDeleteButtonClick = () => {
    const cartProductsForDelete = cartProducts.filter((cartProduct) => cartProduct.isChecked);
    cartContextApis?.dispatch({ type: 'delete', payload: cartProductsForDelete });
  };

  return (
    <StyledCartList>
      <StyledCartListHeader>
        <InputWithLabel
          type="checkbox"
          checked={isCartProductChecked}
          name="select"
          inputClassName="checkbox"
          labelClassName="checkbox-label"
          onClick={handleCartListCheckboxClick}
        >
          {labelContent}
        </InputWithLabel>
        <button type="button" className="delete-button" onClick={handleProductDeleteButtonClick}>
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
