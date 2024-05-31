import { createFileRoute } from '@tanstack/react-router';
import { orderQueryOptions } from '../-queryOptions';
import { z } from 'zod';
import PageTitle from '../../../components/PageTitle/PageTitle';
import * as styles from '../order.css';
import { OrderInfo } from '../-components/OrderInfo';
import CartModal from '../-components/CartModal';
import { useModal } from '../../../hooks';
import { OrderItemList } from './-components';

export const OrderDetail = () => {
  const { isOpen, openModal, closeModal: handleClose, modalRef } = useModal();
  return (
    <>
      <section className={styles.orderSectionContainer}>
        <PageTitle>주문내역상세</PageTitle>
        <div className={styles.orderContentSection}>
          <div className={styles.innerContainer}>
            <OrderItemList openModal={openModal} />
            <OrderInfo />
          </div>
        </div>
      </section>
      <CartModal ref={modalRef} open={isOpen} onClose={handleClose} />
    </>
  );
};

export const Route = createFileRoute('/orderList/$orderId/')({
  component: OrderDetail,
  parseParams: ({ orderId }) => ({
    orderId: z.number().int().parse(Number(orderId)),
  }),
  loader: ({ context, params }) =>
    context.queryClient.ensureQueryData(orderQueryOptions(params.orderId)),
  pendingComponent: () => <div />,
});
