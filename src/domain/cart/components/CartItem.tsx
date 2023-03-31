import { CartItemType } from '../../../types';
import Checkbox from '../../../components/input/Checkbox';
import { CartDispatchFunctionType } from '../hooks/useCart';

interface CartItemProps {
  productInfo: CartItemType;
  cartDispatch: CartDispatchFunctionType;
}

const CartItem = ({
  productInfo: {
    id,
    select,
    product: { imageUrl, totalQuantity, name, totalPrice },
  },
  cartDispatch,
}: CartItemProps) => {
  return (
    <div className="cart-container">
      <div className="flex gap-15 mt-10">
        <Checkbox
          initValue={select}
          onClick={() => cartDispatch.selectProduct(id)}
        />
        <img className="w-144 h-144" src={imageUrl} alt={name} />
        <span className="cart-name">{name}</span>
      </div>
      <div className="flex-col-center justify-end gap-15">
        <img
          className="cart-trash-svg"
          src="./assets/svgs/trash.svg"
          alt="삭제"
          onClick={() => cartDispatch.deleteProduct(id)}
        />
        <div className="number-input-container">
          <input type="number" className="number-input" value={totalQuantity} />
          <div>
            <button
              className="number-input-button"
              disabled={totalQuantity >= 20}
              onClick={() => cartDispatch.countUp(id)}
            >
              ▲
            </button>
            <button
              className="number-input-button"
              disabled={totalQuantity <= 1}
              onClick={() => cartDispatch.countDown(id)}
            >
              ▼
            </button>
          </div>
        </div>
        <span className="cart-price">{totalPrice.toLocaleString()} 원</span>
      </div>
    </div>
  );
};

export default CartItem;
