import React, { MouseEvent, useCallback } from 'react';

import { ProductModel } from '@/models';
import { Currency, PopOverFrame } from '@/components';
import { CartIcon } from '@/components/Icons';
import { useCartContextApis } from '@/stores/CartContext';

import {
  StyledProduct,
  StyledProductBottom,
  StyledCardButton,
  StyledPopOver,
  PopOverElementStyle,
} from './Product.styled';

interface ProductProps {
  product: ProductModel;
}

export function Product({ product }: ProductProps) {
  const cartContextApis = useCartContextApis();

  const handleCartButtonClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
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
          <PopOverFrame
            popOverClassName={PopOverElementStyle()}
            onMouseOverElement={<StyledPopOver>장바구니 등록 🛒</StyledPopOver>}
            onClickElement={<StyledPopOver>장바구니에 등록되었습니다! 🎉</StyledPopOver>}
          >
            <CartIcon />
          </PopOverFrame>
        </StyledCardButton>
      </StyledProductBottom>
    </StyledProduct>
  );
}
