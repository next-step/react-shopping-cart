import React from 'react';

import { LayeredTitleLayout } from '@/components';
import { OrderProductList } from '@/containers';
import { usePaymentContext } from '@/stores/PaymentContext';

import { PaymentPanel } from './PaymentPanel';
import { StyledOrderListBody, StyledLeftSection } from './Payment.styled';

export function Payment() {
  const orderStore = usePaymentContext();

  if (!orderStore) return null;

  return (
    <LayeredTitleLayout title="주문/결제">
      <StyledOrderListBody>
        <StyledLeftSection>
          <OrderProductList order={orderStore} />
        </StyledLeftSection>
        <PaymentPanel order={orderStore} />
      </StyledOrderListBody>
    </LayeredTitleLayout>
  );
}
