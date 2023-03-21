import React, { MouseEvent, useCallback } from 'react';

import { ProductModel } from '@/models';
import { Currency } from '@/components';
import { CartIcon } from '@/components/Icons';
import { useCartContextApiSelector } from '@/stores/CartContext';

import { StyledProduct, StyledProductBottom, StyledCardButton } from './Product.styled';

interface ProductProps {
  product: ProductModel;
}

export function Product({ product }: ProductProps) {
  const cartContextApis = useCartContextApiSelector();

  const handleCartButtonClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      cartContextApis?.dispatch({ type: 'add', payload: { count: 1, product } });
    },
    [product, cartContextApis]
  );

  return (
    <StyledProduct>
      <img src={product.imageUrl} alt="PET보틀-정사각(420ml)" />
      <StyledProductBottom>
        <div className="product-info">
          <span className="product-info__name">{product.name}</span>
          <Currency price={product.price} />
        </div>
        <StyledCardButton onClick={handleCartButtonClick}>
          <CartIcon />
        </StyledCardButton>
      </StyledProductBottom>
    </StyledProduct>
  );
}
