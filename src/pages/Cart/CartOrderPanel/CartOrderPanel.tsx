import React from 'react';

import { CartSidePanel } from '@/components';
import { CartProductList } from '@/containers';
import { useModal } from '@/hooks';
import { routes } from '@/router';
import { TCartStore, useCartContextApis } from '@/stores/CartContext';
import { usePaymentContextApis } from '@/stores/PaymentContext';

import { StyledConfirmModal, StyledOrderButton, StyledOrderList } from './CartOrderPanel.styled';

interface CartOrderPanelProps {
  cart: TCartStore;
}

export function CartOrderPanel({ cart }: CartOrderPanelProps) {
  const cartProducts = Object.values(cart);

  const cartContextApis = useCartContextApis();
  const orderContextApis = usePaymentContextApis();
  const { Modal, showModal } = useModal();

  const checkedCartProducts = cartProducts.filter((cartProduct) => cartProduct.isChecked);

  const handleOrderButtonClick = () => {
    if (!checkedCartProducts || checkedCartProducts.length <= 0) {
      alert('주문하실 상품을 선택해주세요.');
      return;
    }

    showModal();
  };

  const handleConfirmButtonClick = () => {
    cartContextApis?.dispatch({ type: 'delete', payload: checkedCartProducts });
    orderContextApis?.dispatch({ type: 'add', payload: checkedCartProducts });
  };

  return (
    <>
      <CartSidePanel
        cart={cart}
        title="결제예상금액"
        body="결제예상금액"
        buttonContent={
          <>
            <span>주문하기</span>
            <span>{`${checkedCartProducts?.length}개`}</span>
          </>
        }
        onButtonClick={handleOrderButtonClick}
      />

      <Modal verticalAlign="center">
        <StyledConfirmModal>
          <StyledOrderList>
            <CartProductList orderStore={checkedCartProducts} />
          </StyledOrderList>
          <StyledOrderButton to={routes.payment} onClick={handleConfirmButtonClick}>
            확인
          </StyledOrderButton>
        </StyledConfirmModal>
      </Modal>
    </>
  );
}
