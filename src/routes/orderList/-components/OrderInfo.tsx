import { Route } from '../$orderId';
import HighlightText from '../../../components/HighlightText/HighlightText';
import * as styles from '../order.css';

export const OrderInfo = () => {
  const data = Route.useLoaderData();

  const totalPrice = data.orderDetails.reduce(
    (acc, { price, quantity }) => acc + price * quantity,
    0
  );

  return (
    <div className={styles.orderDetailContainer}>
      <div className={styles.orderTotalPriceText}>
        <span className={styles.orderDetailTitle}>결제금액 정보</span>
        <hr className={styles.orderDivideThinLine} style={{ marginTop: 20 }} />

        <div className={styles.orderContainer}>
          <HighlightText>총 결제금액</HighlightText>
          <HighlightText>{totalPrice.toLocaleString()}원</HighlightText>
        </div>
      </div>
    </div>
  );
};
