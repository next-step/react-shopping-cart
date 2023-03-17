import React from "react";

import type { OrderedProduct } from "@/api/orders";
import { numberWithCommas } from "@/helpers";

import * as S from "./orderProduct.style";

export interface OrderProductProps {
  orderedProductInfo: OrderedProduct;
}

export default function OrderProduct({ orderedProductInfo }: OrderProductProps) {
  const { imageUrl, name, quantity, price } = orderedProductInfo;
  return (
    <S.OrderProductContainer>
      <S.ProductImageWrapper>
        <img src={imageUrl} alt={name} />
      </S.ProductImageWrapper>

      <S.OrderProductContentWrapper>
        <S.OrderProductNameWrapper>
          <span>{name}</span>
          <S.AddCartButton variant="contained">장바구니</S.AddCartButton>
        </S.OrderProductNameWrapper>
        <div>
          <S.OrderProductPrice>
            {numberWithCommas(price * quantity)} 원 / 수량: {quantity}
          </S.OrderProductPrice>
        </div>
      </S.OrderProductContentWrapper>
    </S.OrderProductContainer>
  );
}
