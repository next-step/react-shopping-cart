import React, { Suspense } from 'react';
import { useQuery } from '@tanstack/react-query';

import { getOrders } from '@/apis';
import { ORDERS_KEY } from '@/constants';
import { LayeredTitleLayout, CartLoader } from '@/components';

import { Order } from './Order';
import { StyledOrderList, StyledOrderListLoader } from './OrderList.styled';

export function OrderList() {
  return (
    <Suspense
      fallback={
        <StyledOrderListLoader>
          <CartLoader />
        </StyledOrderListLoader>
      }
    >
      <OrderListContent />
    </Suspense>
  );
}

function OrderListContent() {
  const { data: orders } = useQuery(
    ORDERS_KEY,
    () => {
      return getOrders();
    },
    {
      suspense: true,
      refetchOnMount: true,
    }
  );

  return (
    <StyledOrderList>
      {orders && (
        <LayeredTitleLayout title="주문목록">
          {Object.entries(orders).map(([id, orders]) => (
            <Order id={id} orderProducts={orders} />
          ))}
        </LayeredTitleLayout>
      )}
    </StyledOrderList>
  );
}
