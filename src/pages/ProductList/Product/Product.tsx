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
      // TODO: api Post로 바꾸기 = loading도 넣기
      cartContextApis?.dispatch({ type: 'add', payload: [{ product }] });
    },
    [product, cartContextApis]
  );

  return (
    <StyledProduct>
      <img src={product.imageUrl} alt={product.name} />
      <StyledProductBottom>
        <div className="product-info">
          <span className="product-info__name">{product.name}</span>
          <Currency price={product.price} />
        </div>
        <StyledCardButton onClick={handleCartButtonClick}>
          {/* TODO: cart 클릭시 interaction 주기 */}
          <CartIcon />
        </StyledCardButton>
      </StyledProductBottom>
    </StyledProduct>
  );
}
