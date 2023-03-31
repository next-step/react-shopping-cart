import { CartItemType } from '../../../types';
import { CartDispatchType } from '../../../context/CartContext';
import Checkbox from '../../../components/input/Checkbox';
import { CONFIRM } from '../../../constant';

interface CartItemProps {
  productInfo: CartItemType;
  cartDispatch: CartDispatchType;
}

const CartItem = ({
  productInfo: {
    id,
    select,
    product: { imageUrl, totalQuantity, name, totalPrice },
  },
  cartDispatch,
}: CartItemProps) => {
  const deleteProduct = () => {
    const confirmRes = confirm(CONFIRM.CART_DELETE);
    if (confirmRes) cartDispatch({ type: 'DELETE_ITEM', selectId: id });
  };

  return (
    <div className="cart-container">
      <div className="flex gap-15 mt-10">
        <Checkbox
          initValue={select}
          onClick={() => cartDispatch({ type: 'SELECT_ITEM', selectId: id })}
        />
        <img className="w-144 h-144" src={imageUrl} alt={name} />
        <span className="cart-name">{name}</span>
      </div>
      <div className="flex-col-center justify-end gap-15">
        <img
          className="cart-trash-svg"
          src="./assets/svgs/trash.svg"
          alt="삭제"
          onClick={deleteProduct}
        />
        <div className="number-input-container">
          <input type="number" className="number-input" value={totalQuantity} />
          <div>
            <button
              className="number-input-button"
              onClick={() =>
                cartDispatch({ type: 'COUNT_UP_ITEM', selectId: id })
              }
            >
              ▲
            </button>
            <button
              className="number-input-button"
              onClick={() =>
                cartDispatch({ type: 'COUNT_DOWN_ITEM', selectId: id })
              }
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
