import { Route } from '..';
import * as styles from '../../order.css';
import { OrderItemCard } from '../../-components/OrderItemCard';

interface Props {
  openModal: () => void;
}

export const OrderItemList = ({ openModal }: Props) => {
  const data = Route.useLoaderData();

  return (
    <>
      <div className={styles.orderList}>
        <div className={styles.orderListHeader}>
          <span>주문번호: {data.id}</span>
        </div>
        {data.orderDetails.map((product) => {
          return (
            <OrderItemCard
              key={product.id}
              product={product}
              openModal={openModal}
            />
          );
        })}
      </div>
    </>
  );
};
