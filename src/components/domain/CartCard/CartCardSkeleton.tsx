import { LazyImage } from '@/components/common';
import CheckBox from '@/components/common/CheckBox';

const CartCardSkeleton = () => {
  return (
    <div className="cart-container">
      <div className="flex gap-15 mt-10">
        <CheckBox />
        <LazyImage className="w-144 h-144" width={144} height={144} />
      </div>
    </div>
  );
};

export default CartCardSkeleton;
