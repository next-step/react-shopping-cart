import React, { MouseEvent } from 'react';

import { postOrder } from '@/apis';
import { CartSidePanel, Currency, LayeredTitleLayout } from '@/components';
import { useModal } from '@/hooks';
import { routes } from '@/router';
import { TPaymentStore } from '@/stores/PaymentContext';

import {
  StyledPaymentModal,
  StyledModalBottomContainer,
  StyledPaymentButtonWrapper,
  StyledPaymentButton,
  PaymentModalStyle,
} from './PaymentPanel.styled';

interface PaymentPanelProps {
  orderStore: TPaymentStore;
}

export function PaymentPanel({ orderStore }: PaymentPanelProps) {
  const orderProducts = Object.values(orderStore);

  const { Modal, showModal } = useModal();

  const handlePaymentButtonClick = () => {
    showModal();
  };

  const handlePaymentModalButtonClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation();
    postOrder(orderProducts);
  };

  return (
    <>
      <CartSidePanel
        cart={orderStore}
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
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '80px',
                backgroundColor: 'whitesmoke',
              }}
            >
              여기 payment가 들어옵니다!
            </div>
            <StyledModalBottomContainer>
              <CartSidePanel className={PaymentModalStyle()} cart={orderStore} title="결제금액" body="총 결제금액" />
              <StyledPaymentButtonWrapper>
                <StyledPaymentButton to={routes.orders} onClick={handlePaymentModalButtonClick}>
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
