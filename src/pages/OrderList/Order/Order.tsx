import React from 'react';

import { OrderProduct } from '@/components';
import { useModal } from '@/hooks';
import type { CartProductModel } from '@/models';
import { routes } from '@/router';

import { StyledOrder, StyledOrderHeader, StyledCartButton, StyledToCartButton, OrderStyle } from './Order.styled';

interface OrderProps {
  id: string;
  orderProducts: CartProductModel[];
}

export function Order({ id, orderProducts }: OrderProps) {
  const { Modal, showModal } = useModal();

  return (
    <StyledOrder>
      <StyledOrderHeader>
        <span>{`주문번호: ${id}`}</span>
        <span>{'상세보기 >'}</span>
      </StyledOrderHeader>
      {orderProducts.map((orderProduct) => (
        <OrderProduct
          order={orderProduct}
          additionalElement={
            <StyledCartButton type="button" onClick={() => showModal()}>
              장바구니
            </StyledCartButton>
          }
          className={OrderStyle()}
        />
      ))}

      <Modal verticalAlign="center">
        <StyledToCartButton to={routes.cart}>장바구니로 가시겠습니까?</StyledToCartButton>
      </Modal>
    </StyledOrder>
  );
}
