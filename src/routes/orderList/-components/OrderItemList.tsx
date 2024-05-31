import { useNavigate } from '@tanstack/react-router';
import * as styles from '../order.css';
import { Route } from '..';
import { OrderItemCard } from './OrderItemCard';

interface Props {
  openModal: () => void;
}

export const OrderItemList = ({ openModal }: Props) => {
  const navigate = useNavigate();
  const data = Route.useLoaderData();

  return (
    <>
      {data.map((order) => {
        return (
          <div className={styles.orderList} key={order.id}>
            <div className={styles.orderListHeader}>
              <span>주문번호: {order.id}</span>
              <span
                style={{ cursor: 'pointer' }}
                onClick={() =>
                  navigate({
                    to: '/orderList/$orderId',
                    params: { orderId: order.id },
                  })
                }
              >
                상세보기 {'>'}
              </span>
            </div>
            {order.orderDetails.map((product) => {
              return (
                <OrderItemCard
                  key={product.id}
                  product={product}
                  openModal={openModal}
                />
              );
            })}
          </div>
        );
      })}
    </>
  );
};
