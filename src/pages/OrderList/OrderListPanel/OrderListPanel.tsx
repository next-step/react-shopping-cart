import React, { MouseEvent } from 'react';

import { Link } from 'react-router-dom';
import { CartSidePanel, Currency, LayeredTitleLayout } from '@/components';
import { routes } from '@/router';
import { TOrderStore } from '@/stores/OrderContext';
import { useModal } from '@/hooks';

import {
  StyledPaymentModal,
  StyledModalBottomContainer,
  StyledPaymentButtonWrapper,
  StyledPaymentButton,
  PaymentModalStyle,
} from './OrderListPanel.styled';

interface OrderListPanelProps {
  order: TOrderStore;
}

export function OrderListPanel({ order }: OrderListPanelProps) {
  const orderProducts = Object.values(order);

  const { Modal, showModal } = useModal();

  const handlePaymentButtonClick = () => {
    showModal();
  };

  const handlePaymentModalButtonClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // TODO: 결제 히스토리 페이지넣고 빼기
    e.preventDefault();
    e.stopPropagation();
    alert('서비스 준비중입니다!');
    // TODO: api를 통해 주문 전송하기
  };

  return (
    <>
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
        onButtonClick={handlePaymentButtonClick}
      />

      <Modal verticalAlign="center">
        <StyledPaymentModal>
          <LayeredTitleLayout title="결제">
            <div style={{ textAlign: 'center' }}>여기 payment가 들어옵니다!</div>
            <StyledModalBottomContainer>
              <CartSidePanel className={PaymentModalStyle()} cart={order} title="결제금액" body="총 결제금액" />
              <StyledPaymentButtonWrapper>
                <StyledPaymentButton to="/order_history" onClick={handlePaymentModalButtonClick}>
                  결제하기
                </StyledPaymentButton>
              </StyledPaymentButtonWrapper>
            </StyledModalBottomContainer>
          </LayeredTitleLayout>
        </StyledPaymentModal>
      </Modal>
    </>
  );
}
