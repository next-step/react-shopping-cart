import React from 'react';

import {
  StyledCartProduct,
  StyledCartContent,
  StyledProductImage,
  StyledProductTitle,
  StyledCartProductController,
} from './CartProduct.styled';

interface CartProductProps {}

export function CartProduct({}: CartProductProps) {
  return (
    <StyledCartProduct>
      <input type="checkbox" className="checkbox" />
      <StyledProductImage>그림</StyledProductImage>
      <StyledCartContent>
        <StyledProductTitle>제목</StyledProductTitle>
        <StyledCartProductController>
          <div>쓰레기통 아이콘</div>
          <div>카운터</div>
          <div>가격</div>
        </StyledCartProductController>
      </StyledCartContent>
    </StyledCartProduct>
  );
}
