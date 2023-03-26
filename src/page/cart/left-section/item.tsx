import { CartItem } from "types/type";

import trash from "assets/svgs/trash.svg";
import { useEffect, useState } from "react";
import { printWon } from "common/util";
import { handleModal } from "common/modal";

type ItemProps = {
  item: CartItem;
  addShopingCart: (addable: boolean, item: CartItem) => void;
  updateCartQuantity: (id: number, quantity: number) => void;
  isAllChecked: () => boolean;
  deleteCartItem: (id: number) => void;
};

const Item = ({
  item,
  addShopingCart,
  updateCartQuantity,
  isAllChecked,
  deleteCartItem,
}: ItemProps) => {
  const [quantity, setQuantity] = useState(1);
  const [addable, setAddable] = useState(false);

  useEffect(() => {
    if (quantity < 1) {
      alert("최소 수량은 1개 입니다.");
      setQuantity(quantity + 1);
      return;
    }
    if (quantity > 20) {
      alert("최대 수량은 20개 입니다.");
      setQuantity(quantity - 1);
      return;
    }
    updateCartQuantity(item.id, quantity);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quantity]);

  useEffect(() => {
    addShopingCart(addable, item);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addable]);

  const handleDeleteCartItem = () => {
    handleModal({
      title: "삭제",
      message: "장바구니 목록에서 삭제하시겠습니까?",
      onConfirm: () => deleteCartItem(item.id),
    });
  };

  if(item.product === null) return (<></>)

  return (
    <>
      <div className="cart-container">
        <div className="flex gap-15 mt-10">
          <input
            className="checkbox"
            name="checkbox"
            type="checkbox"
            readOnly
            checked={isAllChecked() ? true : addable}
            onClick={() => setAddable(!addable)}
          />
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
              value={quantity}
            />
            <div>
              <button
                className="number-input-button"
                onClick={() => setQuantity(quantity + 1)}
              >
                ▲
              </button>
              <button
                className="number-input-button"
                onClick={() => setQuantity(quantity - 1)}
              >
                ▼
              </button>
            </div>
          </div>
          <span className="cart-price">
            {printWon(item.product.price * quantity)}
          </span>
        </div>
      </div>
      <hr className="divide-line-thin mt-10" />
    </>
  );
};

export default Item;
