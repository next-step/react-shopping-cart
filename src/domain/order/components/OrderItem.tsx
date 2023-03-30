import { CartInfoType } from '../../../types';
import { CartDispatchType } from '../../../context/CartContext';
import Checkbox from '../../../components/input/Checkbox';
import { CONFIRM } from '../../../constant';

interface CartItemProps {
  productInfo: CartInfoType;
  cartDispatch: CartDispatchType;
}

const OrderItem = ({
  productInfo: {
    id,
    select,
    product: { imageUrl, totalQuantity, name, totalPrice },
  },
  cartDispatch,
}: CartItemProps) => {
  return (
    <div className="order-container">
      <div className="flex gap-15 mt-10">
        <img
          className="w-144 h-144"
          src="./assets/images/product.png"
          alt="PET보틀-정사각(420ml)"
        />
        <div className="flex-col gap-15">
          <span className="order-name">PET보틀-정사각(420ml)</span>
          <span>수량: 3</span>
        </div>
      </div>
    </div>
    // <hr className="divide-line-thin mt-10" />
  );
};

export default OrderItem;
