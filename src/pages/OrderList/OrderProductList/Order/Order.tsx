import React, { ReactElement } from 'react';

import { CartProductModel } from '@/models';

import { StyledOrder, StyledOrderImage, StyledProductContainer, StyledInfoContainer } from './Order.styled';
import { Currency } from '@/components';

interface OrderProps {
  order: CartProductModel;
  additionalElement?: ReactElement | string;
  className?: string;
}

export function Order({ order, additionalElement, className }: OrderProps) {
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
