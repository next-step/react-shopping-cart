import React from "react";

import { numberWithCommas } from "@/helpers";

import * as S from "./priceDashBoard.style";

export interface PriceDashBoardProps {
  title: string;
  priceTitle: string;
  price: number;
  buttonLabel: string;
  className?: string;
  onSubmit: () => void;
}

export default function PriceDashBoard({
  title,
  priceTitle,
  price,
  buttonLabel,
  onSubmit,
  className,
}: PriceDashBoardProps) {
  return (
    <S.PriceDashBoardContainer className={className}>
      <S.PriceDashBoardTitleWrapper>
        <S.PriceDashBoardTitle>{title}</S.PriceDashBoardTitle>
      </S.PriceDashBoardTitleWrapper>
      <S.PriceDashBoardContentWrapper>
        <S.PriceWrapper>
          <span>{priceTitle}</span>
          <span>{numberWithCommas(price)} 원</span>
        </S.PriceWrapper>
        <S.PriceDashBoardButton variant="contained" onClick={onSubmit} disabled={!price}>
          {buttonLabel}
        </S.PriceDashBoardButton>
      </S.PriceDashBoardContentWrapper>
    </S.PriceDashBoardContainer>
  );
}
