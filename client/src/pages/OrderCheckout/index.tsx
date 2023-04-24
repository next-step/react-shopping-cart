import { Suspense } from 'react';

import { ErrorBoundary } from 'components';

import { OrderCheckoutList, OrderCheckoutListFallback } from './components';

function OrderCheckout() {
  return (
    <section className="order-section">
      <header className="flex-col-center mt-20">
        <h2 className="order-section__title">주문/결제</h2>
        <hr className="divide-line mt-20" />
      </header>

      <ErrorBoundary>
        <Suspense fallback={<OrderCheckoutListFallback />}>
          <OrderCheckoutList />
        </Suspense>
      </ErrorBoundary>
    </section>
  );
}

export default OrderCheckout;
