import { CartItemType } from '../../../types';
import Checkbox from '../../../components/input/Checkbox';
import { cartFunctionType } from '../hooks/useCart';
import { COUNT_TYPE, DELETE_TYPE, SELECT_TYPE } from '../../../constant';
import { priceFormat } from '../../../utils';

interface CartItemProps {
  productInfo: CartItemType;
  cartDispatch: cartFunctionType;
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
          onClick={() => cartDispatch.selectProduct(SELECT_TYPE.SINGLE, id)}
        />
        <img className="w-144 h-144" src={imageUrl} alt={name} />
        <span className="cart-name">{name}</span>
      </div>
      <div className="flex-col-center justify-end gap-15">
        <img
          className="cart-trash-svg"
          src="./assets/svgs/trash.svg"
          alt="삭제"
          onClick={() => cartDispatch.deleteProduct(DELETE_TYPE.DIRECT, id)}
        />
        <div className="number-input-container">
          <input type="number" className="number-input" value={totalQuantity} />
          <div>
            <button
              className="number-input-button"
              disabled={totalQuantity >= 20}
              onClick={() =>
                cartDispatch.updateCount({ selectId: id, type: COUNT_TYPE.UP })
              }
            >
              ▲
            </button>
            <button
              className="number-input-button"
              disabled={totalQuantity <= 1}
              onClick={() =>
                cartDispatch.updateCount({
                  selectId: id,
                  type: COUNT_TYPE.DOWN,
                })
              }
            >
              ▼
            </button>
          </div>
        </div>
        <span className="cart-price">{priceFormat(totalPrice)}</span>
      </div>
    </div>
  );
};

export default CartItem;
