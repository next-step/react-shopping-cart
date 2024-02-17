import { Button } from 'components';
import { OrderItem } from 'components/domain';
import { useRouter } from 'hooks';

import { PATHS } from 'constants/router';

import { useOrders } from '../../hooks';

function OrderList() {
  const { data: orders = [] } = useOrders();
  const router = useRouter();

  const isEmpty = orders.length === 0;

  const handleClickDetailButton = (id: number) => {
    router.go(`${PATHS.ORDER}/${id}`);
  };

  return (
    <>
      {isEmpty && <h3 className="flex-center p-20 mt-40">이전에 주문한 상품이 없습니다.</h3>}
      {orders.map(({ id, orderDetails }) => (
        <div key={id} className="order-list">
          <div className="order-list__header">
            <span>주문번호: {id}</span>
            <Button onClick={() => handleClickDetailButton(id)}>상세보기</Button>
          </div>
          {orderDetails.map((product) => (
            <OrderItem key={product.id} product={product} />
          ))}
        </div>
      ))}
    </>
  );
}

export default OrderList;
