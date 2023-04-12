import { Header } from '@/components/common';

import OrderList from '../OrderList';

const Order = () => {
  return (
    <section className="order-section">
      <Header title="주문목록" />
      <OrderList />
    </section>
  );
};

export default Order;
