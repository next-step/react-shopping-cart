import React, { useCallback, useMemo, useState } from "react";
import { ICartItem } from "../../types/types";
import deleteSvg from "../../assets/svgs/trash.svg";
import AmountHandler from "./AmountHandler";

type TCartItem = {
  item: ICartItem;
};

function CartItem({ item: { product, checked } }: TCartItem) {
  const [amount, setAmount] = useState(1);
  const totalPrice = useMemo(() => product.price * amount, [amount]);

  const handleIncrement = useCallback(() => {
    setAmount((amount) => amount + 1);
  }, [amount]);

  const handleDecrement = useCallback(() => {
    if (amount <= 0) return;

    setAmount((amount) => amount - 1);
  }, [amount]);

  return (
    <div className="cart-container">
      <div className="flex gap-15 mt-10">
        <input className="checkbox" name="checkbox" type="checkbox" checked={checked} />
        <img className="w-144 h-144" src={product.imageUrl} alt="PET보틀-정사각(420ml)" />
        <span className="cart-name">{product.name}</span>
      </div>
      <div className="flex-col-center justify-end gap-15">
        <img className="cart-trash-svg" src={deleteSvg} alt="삭제" />
        <AmountHandler amount={amount} onIncrement={handleIncrement} onDecrement={handleDecrement} />
        <span className="cart-price">{totalPrice.toLocaleString()}원</span>
      </div>
    </div>
  );
}

export default CartItem;
