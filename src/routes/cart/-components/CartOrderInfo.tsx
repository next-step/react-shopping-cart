import { useNavigate } from '@tanstack/react-router';
import { useCreateOrder } from '../-hooks';
import Button from '../../../components/Button/Button';
import HighlightText from '../../../components/HighlightText/HighlightText';
import { useModal } from '../../../hooks';
import { useCartStore } from '../../../store/cart';
import * as styles from '../cart.css';
import OrderConfirmModal from './OrderConfirmModal';

export const CartOrderInfo = () => {
  const navigate = useNavigate();
  const cartItems = useCartStore((state) => state.items);
  const selectedItems = useCartStore((state) => state.selectedItems);

  const createOrder = useCreateOrder();
  const { isOpen, openModal, closeModal, modalRef } = useModal();

  const totalAmount = cartItems.reduce((acc, { id, price, quantity }) => {
    if (selectedItems.has(id)) return acc + price * (quantity || 1);
    return acc;
  }, 0);

  return (
    <>
      <section className={styles.cartRightSection}>
        <div className={styles.cartRightSectionTop}>
          <h3 className={styles.cartTitle}>결제예상금액</h3>
        </div>
        <hr className={styles.cartDivideLineThin} />
        <div>
          <div className={styles.highlightTextContainer}>
            <HighlightText>결제예상금액</HighlightText>
            <HighlightText>{totalAmount.toLocaleString()}원</HighlightText>
          </div>
          <div className={styles.orderButtonContainer}>
            <Button
              className={styles.orderButton}
              variant='contained'
              color='primary'
              disabled={selectedItems.size === 0}
              onClick={openModal}
            >
              주문하기({selectedItems.size}개)
            </Button>
          </div>
        </div>
      </section>
      <OrderConfirmModal
        ref={modalRef}
        open={isOpen}
        onClose={closeModal}
        onOk={async () => {
          const ids = Array.from(selectedItems.values());
          const orderItems = cartItems.filter((item) => ids.includes(item.id));

          const { id } = await createOrder.mutateAsync(orderItems);
          navigate({
            to: '/order/$orderId',
            params: { orderId: id },
          });
        }}
      />
    </>
  );
};
