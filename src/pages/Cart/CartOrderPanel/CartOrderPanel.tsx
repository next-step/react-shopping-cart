import React, { MouseEvent } from 'react';

import { CartSidePanel } from '@/components';
import { routes } from '@/router';
import { TCartStore } from '@/stores/CartContext';
import { useOrderContextApiSelector } from '@/stores/OrderContext';

interface CartOrderPanelProps {
  cart: TCartStore;
}

export function CartOrderPanel({ cart }: CartOrderPanelProps) {
  const cartProducts = Object.values(cart);

  const orderContextApis = useOrderContextApiSelector();

  const handleOrderButtonClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const checkedCartProduct = cartProducts.filter((cartProduct) => cartProduct.isChecked);
    if (!checkedCartProduct || checkedCartProduct.length <= 0) {
      e.preventDefault();
      alert('주문하실 상품을 선택해주세요.');
      return;
    }

    orderContextApis?.dispatch({ type: 'add', payload: cartProducts.filter((cartProduct) => cartProduct.isChecked) });
  };

  return (
    <CartSidePanel
      cart={cart}
      title="결제예상금액"
      body="결제예상금액"
      buttonContent={
        <>
          <span>주문하기</span>
          <span>{`${cartProducts?.length}개`}</span>
        </>
      }
      to={routes.orderList}
      onSubmit={handleOrderButtonClick}
    />
  );
}
