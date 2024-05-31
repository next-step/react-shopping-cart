import { Fragment } from 'react/jsx-runtime';
import * as styles from '../../orderList/order.css';
import { Route } from '../$orderId';

export const OrderItemList = () => {
  const data = Route.useLoaderData();

  return (
    <section className={styles.orderLeftSection}>
      <h3 className={styles.orderTitle}>
        주문 상품({data.orderDetails.length}건)
      </h3>

      <hr className={styles.orderDivideLine} style={{ marginTop: 10 }} />

      {data.orderDetails.map((product, index) => {
        const { id, name, quantity, imageUrl } = product;
        return (
          <Fragment key={id + index}>
            <div className={styles.orderContainer}>
              <div className={styles.orderInfoContainer}>
                <img
                  className={styles.orderItemImage}
                  src={imageUrl}
                  alt={name}
                />
                <div className={styles.orderItemInfoContainer}>
                  <span className={styles.orderName}>{name}</span>
                  <span>수량: {quantity}</span>
                </div>
              </div>
            </div>
            <hr
              className={styles.orderDivideThinLine}
              style={{ marginTop: 10 }}
            />
          </Fragment>
        );
      })}
    </section>
  );
};
