import { memo } from 'react';

import { Header } from '@/components/common';
import { OrderList } from '@/components/domain';

type Props = {
  onOpen: () => void;
};

const Order = ({ onOpen }: Props) => {
  return (
    <section className="order-section">
      <Header title="주문목록" />
      <OrderList onOpen={onOpen} />
    </section>
  );
};

export default memo(Order);
