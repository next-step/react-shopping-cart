import React from 'react';

import { useOrderSelector } from '@/stores/OrderContext';

export function OrderList() {
  const orderStore = useOrderSelector();

  return <div>orderList</div>;
}
