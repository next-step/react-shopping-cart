import React from 'react';

import { useOrderSelector } from '@/stores/OrderContext';
import { LayeredTitleLayout } from '@/components';

export function OrderList() {
  const orderStore = useOrderSelector();

  return <LayeredTitleLayout title="주문/결제">주문</LayeredTitleLayout>;
}
