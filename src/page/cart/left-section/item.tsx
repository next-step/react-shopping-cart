import trash from "assets/svgs/trash.svg";
import { printWon } from "common/util";

import { handleModal } from "common/modal";
import { useCart } from "hooks/cart";
import CheckBox, { useCheckBox } from "components/common/checkBox";

type ItemProps = {
  item: UserCart;
};

const Item = ({ item }: ItemProps) => {
  const {
    selectCart,
    deleteCartItem,
    increaseCartItemQuantity,
    decreaseCartItemQuantity,
  } = useCart();

  const { handleSelect } = useCheckBox();

  const handleSelectItem = () => {
    handleSelect();
    selectCart(item);
  };

  const handleDeleteCartItem = () => {
    handleModal({
      title: "삭제",
      message: "장바구니 목록에서 삭제하시겠습니까?",
      onConfirm: () => deleteCartItem(String(item.id)),
    });
  };

  if (item.product === null) return <></>;

  return (
    <>
      <div className="cart-container">
        <div className="flex gap-15 mt-10">
          <CheckBox checked={item.checked} onSelect={handleSelectItem} />
          <img
            className="w-144 h-144"
            src={item.product.imageUrl}
            alt="상품 이미지"
          />
          <span className="cart-name">{item.product.name}</span>
        </div>
        <div className="flex-col-center justify-end gap-15">
          <img
            className="cart-trash-svg"
            src={trash}
            alt="삭제"
            onClick={() => handleDeleteCartItem()}
          />
          <div className="number-input-container">
            <input
              type="number"
              className="number-input"
              readOnly
              value={item.quantity}
            />
            <div>
              <button
                className="number-input-button"
                onClick={() => increaseCartItemQuantity(item.id)}
              >
                ▲
              </button>
              <button
                className="number-input-button"
                onClick={() => decreaseCartItemQuantity(item.id)}
              >
                ▼
              </button>
            </div>
          </div>
          <span className="cart-price">
            {printWon(item.product.price * item.quantity)}
          </span>
        </div>
      </div>
      <hr className="divide-line-thin mt-10" />
    </>
  );
};

export default Item;
