import { Order } from '@/types/order';
import { flex } from '@/styled-system/patterns';
import { css } from '@/styled-system/css';
import OrderDetailItem from '../Detail/OrderDetailItem';
import OrderHeader from '../@common/OrderHeader';

interface OrderListProps {
  orders: Order[];
}

export default function OrderList({ orders }: OrderListProps) {
  const isExistingOrders = !orders || orders.length > 0;
  return (
    <>
      {isExistingOrders ? (
        <>
          {orders?.map(({ id, orderDetails }: Order) => (
            <div key={id} className={flex({ flexDirection: 'column' })}>
              <OrderHeader id={id} detailButton />

              <OrderDetailItem orderList={orderDetails} />
            </div>
          ))}
        </>
      ) : (
        <div className={empty}>
          <p className={emptyMessage}>주문 내역이 없습니다.</p>
        </div>
      )}
    </>
  );
}

const empty = flex({
  marginTop: '200px',
  justifyContent: 'center',
});

const emptyMessage = css({
  fontSize: '20px',
  color: '#555',
});
