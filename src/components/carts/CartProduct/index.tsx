import React, { CSSProperties } from "react";
import { FlattenSimpleInterpolation } from "styled-components";

import { Trash } from "@/assets/svgs";
import { Button, CheckBox, NumberCounter } from "@/components/common";
import { numberWithCommas } from "@/helpers";
import type { CartGroup } from "@/views/carts";

import * as S from "./cartProduct.style";

export interface CartProductProps {
  cartProductInfo: CartGroup;
  onIncreaseProductQuantity: () => void;
  onDecreaseProductQuantity: () => void;
  className?: string;
  css?: FlattenSimpleInterpolation;
}

export default function CartProduct({
  cartProductInfo,
  onIncreaseProductQuantity,
  onDecreaseProductQuantity,
  className,
  css,
}: CartProductProps) {
  const { imageUrl, name, price, count } = cartProductInfo;

  return (
    <S.CartProductContainer className={className} css={css}>
      <div>
        <CheckBox width="20px" />
      </div>
      <S.CartProductImageWrapper>
        <img src={imageUrl} alt={name} />
      </S.CartProductImageWrapper>
      <S.CartProductContentWrapper>
        <S.CartProductNameWrapper>
          <span>{name}</span>
          <Button variant="text">
            <Trash />
          </Button>
        </S.CartProductNameWrapper>
        <S.CartProductCounterWrapper>
          <NumberCounter value={count} onIncrease={onIncreaseProductQuantity} onDecrease={onDecreaseProductQuantity} />
        </S.CartProductCounterWrapper>
        <S.CartProductPriceWrapper>
          <span>{numberWithCommas(price)} 원</span>
        </S.CartProductPriceWrapper>
      </S.CartProductContentWrapper>
    </S.CartProductContainer>
  );
}
