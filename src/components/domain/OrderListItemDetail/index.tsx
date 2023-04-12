import { Button, LazyImage } from '@/components/common';
import { currency } from '@/utils/filter/currency';

type Props = {
  orderDetail: OrderDetail;
};

const OrderListItemDetail = ({ orderDetail }: Props) => {
  return (
    <div className="order-list-item">
      <div className="flex gap-15 mt-10">
        <LazyImage src={orderDetail.imageUrl} width={144} height={144} />
        <div className="flex-col gap-15">
          <span className="order-name">{orderDetail.name}</span>
          <span className="order-info">
            {currency(orderDetail.price)} / 수량: {orderDetail.quantity}개
          </span>
        </div>
      </div>
      <div className="flex-center">
        <Button theme="primary" size="small">
          장바구니
        </Button>
      </div>
    </div>
  );
};

export default OrderListItemDetail;
