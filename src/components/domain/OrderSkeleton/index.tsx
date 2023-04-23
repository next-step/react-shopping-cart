import { LazyImage } from '@/components/common';

const OrderSkeleton = () => {
  return (
    <div className="order-list">
      <div className="order-list__header"></div>
      <div className="order-list-item">
        <div className="flex gap-15 mt-10">
          <LazyImage width={144} height={144} />
          <div className="flex-col gap-15">
            <span className="order-name"></span>
            <span className="order-info"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSkeleton;
