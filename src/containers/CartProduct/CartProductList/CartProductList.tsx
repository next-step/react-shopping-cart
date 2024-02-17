import React from 'react';

import { ThreeLayeredFrame, OrderProduct } from '@/components';
import { TPaymentStore } from '@/stores/PaymentContext';

import { StyledOrderProductListTitle, OrderStyle } from './CartProductList.styled';

interface CartProductListProps {
  orderStore: TPaymentStore;
}

export function CartProductList({ orderStore }: CartProductListProps) {
  const orderList = Object.values(orderStore);
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
