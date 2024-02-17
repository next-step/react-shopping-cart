import React from 'react';

import { LayeredTitleLayout } from '@/components';
import { CartProductList } from '@/containers';
import { usePaymentContext } from '@/stores/PaymentContext';

import { PaymentPanel } from './PaymentPanel';
import { StyledOrderListBody, StyledLeftSection } from './Payment.styled';

export function Payment() {
  const paymentStore = usePaymentContext();

  if (!paymentStore) return null;

  return (
    <LayeredTitleLayout title="주문/결제">
      <StyledOrderListBody>
        <StyledLeftSection>
          <CartProductList orderStore={paymentStore} />
        </StyledLeftSection>
        <PaymentPanel orderStore={paymentStore} />
      </StyledOrderListBody>
    </LayeredTitleLayout>
  );
}
