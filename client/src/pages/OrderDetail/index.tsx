import { Suspense } from 'react';

import { ErrorBoundary } from 'components';

import { OrderDetailList, OrderDetailListFallback } from './components';

function OrderDetail() {
  return (
    <section className="order-section">
      <header className="flex-col-center mt-20">
        <h2 className="order-section__title">주문내역상세</h2>
        <hr className="divide-line mt-20" />
      </header>

      <ErrorBoundary>
        <Suspense fallback={<OrderDetailListFallback />}>
          <OrderDetailList />
        </Suspense>
      </ErrorBoundary>
    </section>
  );
}

export default OrderDetail;
