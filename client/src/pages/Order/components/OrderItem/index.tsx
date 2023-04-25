import { Button } from 'components';

import { OrderDetail } from 'types/order';

interface OrderItemProps {
  product: OrderDetail;
}

function OrderItem({ product }: OrderItemProps) {
  const { name, imageUrl, price, count } = product;

  return (
    <div className="order-list-item">
      <div className="flex gap-15 mt-10">
        <img className="w-144 h-144" src={imageUrl} alt={name} />
        <div className="flex-col gap-15">
          <span className="order-name">{name}</span>
          <span className="order-info">
            {price.toLocaleString('ko')}원 / 수량: {count}개
          </span>
        </div>
      </div>

      <Button type="primary" size="large">
        장바구니
      </Button>
    </div>
  );
}

export default OrderItem;
