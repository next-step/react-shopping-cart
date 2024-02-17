import { Suspense } from 'react';

import { ErrorBoundary } from 'components';

import { OrderList, OrderListFallback } from './components';

function Order() {
  return (
    <section className="order-section">
      <header className="flex-col-center mt-20">
        <h2 className="order-section__title">주문 목록</h2>
        <hr className="divide-line mt-20" />
      </header>
      <ErrorBoundary>
        <Suspense fallback={<OrderListFallback />}>
          <OrderList />
        </Suspense>
      </ErrorBoundary>
    </section>
  );
}

export default Order;
