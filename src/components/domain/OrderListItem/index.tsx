import { Button, LazyImage } from '@/components/common';

const OrderListItem = () => {
  return (
    <div className="order-list-item">
      <div className="flex gap-15 mt-10">
        <LazyImage src="./assets/images/product.png" width={144} height={144} />
        <div className="flex-col gap-15">
          <span className="order-name">PET보틀-정사각(420ml)</span>
          <span className="order-info">54,800원 / 수량: 3개</span>
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

export default OrderListItem;
