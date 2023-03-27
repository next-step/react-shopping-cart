import React, { ChangeEvent } from "react";
import { FlattenSimpleInterpolation } from "styled-components";

import { Trash } from "@/assets/svgs";
import { Button, CheckBox, NumberCounter } from "@/components/common";
import { numberWithCommas } from "@/helpers";
import type { CartGroup } from "@/views/carts";

import * as S from "./cartProduct.style";

export interface CartProductProps {
  id: string;
  cartProductInfo: CartGroup;
  onIncreaseProductQuantity: () => void;
  onDecreaseProductQuantity: () => void;
  onCheckItem: (e: ChangeEvent<HTMLInputElement>) => void;
  isChecked: boolean;
  className?: string;
  css?: FlattenSimpleInterpolation;
}

export default function CartProduct({
  id,
  cartProductInfo,
  onIncreaseProductQuantity,
  onDecreaseProductQuantity,
  onCheckItem,
  isChecked,
  className,
  css,
}: CartProductProps) {
  const { imageUrl, name, price, count } = cartProductInfo;

  return (
    <S.CartProductContainer className={className} css={css}>
      <div>
        <CheckBox id={id} isChecked={isChecked} width="20px" onChange={onCheckItem} />
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
          <NumberCounter
            id={id}
            value={count}
            onIncrease={onIncreaseProductQuantity}
            onDecrease={onDecreaseProductQuantity}
          />
        </S.CartProductCounterWrapper>
        <S.CartProductPriceWrapper>
          <span>{numberWithCommas(price)} 원</span>
        </S.CartProductPriceWrapper>
      </S.CartProductContentWrapper>
    </S.CartProductContainer>
  );
}
