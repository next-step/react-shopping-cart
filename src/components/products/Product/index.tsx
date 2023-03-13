import React from "react";

import type { Product } from "@/api/products";
import { Cart } from "@/assets/svgs";
import { numberWithCommas } from "@/helpers";

import * as S from "./product.style";

interface ProductProps {
  productInfo: Product;
  onClickProduct?: () => void;
  onAddCart?: () => void;
}

export default function Product({ productInfo, onClickProduct, onAddCart }: ProductProps) {
  const { imageUrl, name, price } = productInfo;

  return (
    <S.ProductContainer onClick={onClickProduct}>
      <S.ProductImageWrapper>
        <S.ProductImage src={imageUrl} alt={name} />
      </S.ProductImageWrapper>
      <S.ProductBottomWrapper>
        <S.ProductInfoWrapper>
          <S.ProductName>{name}</S.ProductName>
          <span>{numberWithCommas(price)} 원</span>
        </S.ProductInfoWrapper>
        <button onClick={onAddCart}>
          <Cart />
        </button>
      </S.ProductBottomWrapper>
    </S.ProductContainer>
  );
}
