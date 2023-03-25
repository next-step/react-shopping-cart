import React, { ReactElement } from 'react';

import { Currency } from '@/components';
import { CartProductModel } from '@/models';

import { StyledOrder, StyledOrderImage, StyledProductContainer, StyledInfoContainer } from './OrderProduct.styled';

interface OrderProductProps {
  order: CartProductModel;
  additionalElement?: ReactElement | string;
  className?: string;
}

export function OrderProduct({ order, additionalElement, className }: OrderProductProps) {
  const { name, id, imageUrl, price } = order.product;

  return (
    <StyledOrder className={className}>
      <StyledOrderImage src={imageUrl} alt={`order of ${id}`} />
      <StyledProductContainer>
        <div>{name}</div>
        <StyledInfoContainer>
          <Currency price={price} />
          <span>{` / `}</span>
          <span>{`수량 : ${order.count}`}</span>
        </StyledInfoContainer>
      </StyledProductContainer>
      {additionalElement}
    </StyledOrder>
  );
}
