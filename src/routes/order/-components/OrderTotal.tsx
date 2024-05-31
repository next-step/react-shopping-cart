import { Route } from '../$orderId';
import Button from '../../../components/Button/Button';
import HighlightText from '../../../components/HighlightText/HighlightText';
import * as styles from '../../orderList/order.css';

export const OrderTotal = () => {
  const data = Route.useLoaderData();

  const totalPrice = data.orderDetails.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <section className={styles.orderRightSection}>
      <div className={styles.orderRightSectionTop}>
        <h3 className={styles.orderTitle}>결제금액</h3>
      </div>
      <hr className={styles.orderDivideThinLine} />
      <div>
        <div className={styles.orderTotalPrice}>
          <HighlightText>총 결제금액</HighlightText>
          <HighlightText>{totalPrice.toLocaleString()}원</HighlightText>
        </div>
        <div className={styles.orderButtonContainer}>
          <Button
            variant='contained'
            color='primary'
            className={styles.orderButton}
          >
            {totalPrice.toLocaleString()}원 결제하기
          </Button>
        </div>
      </div>
    </section>
  );
};
