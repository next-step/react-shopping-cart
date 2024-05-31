import { createFileRoute } from '@tanstack/react-router';
import { z } from 'zod';
import PageTitle from '../../components/PageTitle/PageTitle';
import { orderQueryOptions } from '../orderList/-queryOptions';
import * as styles from '../orderList/order.css';
import { OrderItemList, OrderTotal } from './-components';

export const Order = () => {
  return (
    <section className={styles.orderSectionContainer}>
      <PageTitle>주문/결제</PageTitle>

      <div className={styles.orderContentSection}>
        <section className={styles.orderSection}>
          <OrderItemList />
          <OrderTotal />
        </section>
      </div>
    </section>
  );
};

export const Route = createFileRoute('/order/$orderId')({
  component: Order,
  parseParams: ({ orderId }) => ({
    orderId: z.number().int().parse(Number(orderId)),
  }),
  loader: ({ context, params }) =>
    context.queryClient.ensureQueryData(orderQueryOptions(params.orderId)),
  pendingComponent: () => <div />,
});
