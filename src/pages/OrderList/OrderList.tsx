import React from 'react';

import { LayeredTitleLayout } from '@/components';
import { useOrderSelector } from '@/stores/OrderContext';

import { OrderListPanel } from './OrderListPanel';
import { StyledOrderListBody, StyledLeftSection } from './OrderList.styled';
import { OrderProductList } from './OrderProductList';

export function OrderList() {
  const orderStore = useOrderSelector();

  if (!orderStore) return null;

  return (
    <LayeredTitleLayout title="주문/결제">
      <StyledOrderListBody>
        <StyledLeftSection>
          <OrderProductList order={orderStore} />
        </StyledLeftSection>
        <OrderListPanel order={orderStore} />
      </StyledOrderListBody>
    </LayeredTitleLayout>
  );
}
