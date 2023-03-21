import React, { useCallback } from 'react';

import { TrashIcon } from '@/components/Icons';
import { Currency } from '@/components';
import type { CartProductModel } from '@/models';
import { useCartContextApiSelector } from '@/stores/CartContext';

import {
  StyledCartProduct,
  StyledCartContent,
  StyledProductImage,
  StyledProductTitle,
  StyledCartProductController,
} from './CartProduct.styled';

interface CartProductProps {
  cartProduct: CartProductModel;
}

export function CartProduct({ cartProduct }: CartProductProps) {
  const { id, imageUrl, name, price } = cartProduct.product;
  const cartContextApis = useCartContextApiSelector();

  const handleCartProductDeleteIconClick = useCallback(() => {
    cartContextApis?.dispatch({ type: 'delete', payload: cartProduct });
  }, [cartContextApis, cartProduct]);

  return (
    <StyledCartProduct>
      <input type="checkbox" className="checkbox" />
      <StyledProductImage src={imageUrl} alt={`product image, id of ${id}`} />
      <StyledCartContent>
        <StyledProductTitle>{name}</StyledProductTitle>
        <StyledCartProductController>
          <TrashIcon onClick={handleCartProductDeleteIconClick} />
          <div>카운터</div>
          <Currency price={price} />
        </StyledCartProductController>
      </StyledCartContent>
    </StyledCartProduct>
  );
}
