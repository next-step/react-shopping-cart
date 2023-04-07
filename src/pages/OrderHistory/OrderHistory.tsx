import React, { Suspense } from 'react';
import { useQuery } from '@tanstack/react-query';

import { getOrders } from '@/apis';
import { LayeredTitleLayout, CartLoader } from '@/components';

import { Order } from './Order';
import { StyledOrderHistory, StyledOrderHistoryLoader } from './OrderHistory.styled';

export function OrderHistory() {
  return (
    <Suspense
      fallback={
        <StyledOrderHistoryLoader>
          <CartLoader />
        </StyledOrderHistoryLoader>
      }
    >
      <OrderHistoryContent />
    </Suspense>
  );
}

function OrderHistoryContent() {
  const { data: orders } = useQuery(
    ['orders'],
    () => {
      return getOrders();
    },
    {
      suspense: true,
      staleTime: 0,
    }
  );

  return (
    <StyledOrderHistory>
      {orders && (
        <LayeredTitleLayout title="주문목록">
          {Object.entries(orders).map(([id, orders]) => (
            <Order id={id} orderProducts={orders} />
          ))}
        </LayeredTitleLayout>
      )}
    </StyledOrderHistory>
  );
}
