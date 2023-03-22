import React from 'react';

import { useOrderSelector } from '@/stores/OrderContext';
import { TitleLayout } from '@/components';

export function OrderList() {
  const orderStore = useOrderSelector();

  return <TitleLayout title="주문/결제">주문</TitleLayout>;
}
