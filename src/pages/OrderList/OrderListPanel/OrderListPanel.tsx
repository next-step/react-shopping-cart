import React, { MouseEvent } from 'react';

import { CartSidePanel, Currency } from '@/components';
import { routes } from '@/routes';
import { TOrderStore } from '@/stores/OrderContext';

interface OrderListPanelProps {
  order: TOrderStore;
}

export function OrderListPanel({ order }: OrderListPanelProps) {
  const orderProducts = Object.values(order);

  const handlePaymentButtonClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // TODO: 결제 로직
    e.preventDefault();
    alert('서비스 준비중입니다!');
  };

  return (
    <CartSidePanel
      cart={order}
      title="결제금액"
      body="총 결제금액"
      buttonContent={
        <>
          <Currency price={orderProducts.reduce((prev, curr) => prev + curr.getTotalPrice(), 0)} />
          <span>결제하기</span>
        </>
      }
      to={routes.home}
      onSubmit={handlePaymentButtonClick}
    />
  );
}
