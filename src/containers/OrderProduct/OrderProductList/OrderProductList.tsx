import React from 'react';

import { ThreeLayeredFrame, OrderProduct } from '@/components';
import { TPaymentStore } from '@/stores/PaymentContext';

import { StyledOrderProductListTitle, OrderStyle } from './OrderProductList.styled';

interface OrderProductListProps {
  order: TPaymentStore;
}

export function OrderProductList({ order }: OrderProductListProps) {
  const orderList = Object.values(order);
  const orderCount = orderList.length;

  return (
    <ThreeLayeredFrame
      dividerCss={{ backgroundColor: 'rgba(0,0,0,.3)' }}
      titleSection={<StyledOrderProductListTitle>{`주문 상품(${orderCount}건)`}</StyledOrderProductListTitle>}
      bodySection={orderList.map((order) => (
        <OrderProduct order={order} className={OrderStyle()} />
      ))}
    />
  );
}
