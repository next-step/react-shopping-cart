import React, { useCallback } from 'react';

import { TrashIcon } from '@/components/Icons';
import { Currency } from '@/components';
import { CartProductModel } from '@/models';
import { useCartContextApiSelector } from '@/stores/CartContext';

import {
  StyledCartProduct,
  StyledCartContent,
  StyledProductImage,
  StyledProductTitle,
  StyledCartProductController,
  CounterWithInputStyle,
} from './CartProduct.styled';
import { CounterWithInput } from '@/components/CounterWithInput/CounterWithInput';

interface CartProductProps {
  cartProduct: CartProductModel;
}

export function CartProduct({ cartProduct }: CartProductProps) {
  const { id, imageUrl, name, price } = cartProduct.product;
  const cartContextApis = useCartContextApiSelector();

  const handleCartProductDeleteIconClick = useCallback(() => {
    cartContextApis?.dispatch({ type: 'delete', payload: cartProduct });
  }, [cartContextApis, cartProduct]);

  const handleCartProductCountChange = useCallback(
    (callback: number | ((prev: number) => number)) => {
      if (typeof callback !== 'function') return;

      cartProduct.setCount(callback);
      cartContextApis?.dispatch({ type: 'update', payload: new CartProductModel(cartProduct) });
    },
    [cartProduct, cartContextApis]
  );

  return (
    <StyledCartProduct>
      <input type="checkbox" className="checkbox" />
      <StyledProductImage src={imageUrl} alt={`product image, id of ${id}`} />
      <StyledCartContent>
        <StyledProductTitle>{name}</StyledProductTitle>
        <StyledCartProductController>
          <TrashIcon className="pointer" onClick={handleCartProductDeleteIconClick} />
          <CounterWithInput
            onlyNaturalNumber
            className={CounterWithInputStyle()}
            stateBundle={[cartProduct.count, handleCartProductCountChange]}
          />
          <Currency price={price} />
        </StyledCartProductController>
      </StyledCartContent>
    </StyledCartProduct>
  );
}
