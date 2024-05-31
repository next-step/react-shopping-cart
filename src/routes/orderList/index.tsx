import { createFileRoute } from '@tanstack/react-router';
import { orderListQueryOptions } from './-queryOptions';
import PageTitle from '../../components/PageTitle/PageTitle';
import * as styles from './order.css';
import { OrderItemList } from './-components';
import { useModal } from '../../hooks';
import CartModal from './-components/CartModal';

function Order() {
  const { isOpen, openModal, closeModal: handleClose, modalRef } = useModal();
  const data = Route.useLoaderData();

  return (
    <>
      <section className={styles.orderSectionContainer}>
        <PageTitle>주문 목록</PageTitle>

        <div className={styles.orderContentSection}>
          {data.length ? (
            <div className={styles.innerContainer}>
              <OrderItemList openModal={openModal} />
            </div>
          ) : (
            <div className={styles.emptyOrderContainer}>
              주문 목록이 비었습니다
            </div>
          )}
        </div>
      </section>
      <CartModal ref={modalRef} open={isOpen} onClose={handleClose} />
    </>
  );
}

export const Route = createFileRoute('/orderList/')({
  component: Order,
  loader: ({ context }) =>
    context.queryClient.ensureQueryData(orderListQueryOptions()),
  pendingComponent: () => <div />,
});
