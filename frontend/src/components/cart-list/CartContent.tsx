import { useEffect, useState } from "react";

import trash from "../../assets/svgs/trash.svg";

import Quantity from "./Quantity";
import Price from "./Price";

import Image from "../ui/Image";

import { CartDetail } from "../../types";

import { useOrderPayListContext } from "../../hooks/useOrderPayListContext";
import { useProductForm } from "../../hooks/useProductForm";
import useCartListMutationDelete from "../../quires/useCartListMutationDelete";

type CartContentProps = {
  cart: CartDetail;
};

export default function CartContent({ cart }: CartContentProps) {
  const { product } = cart;
  const { mutate } = useCartListMutationDelete();
  const [isChecked, setIsChecked] = useState(false);
  const { getProductTotalPrice, updateQuantity, quantity } = useProductForm();
  const {
    addProductToOrderPayList,
    deleteProductFromOrderPayList,
    updateTotalPrice,
    updateProductInOrderPayList,
  } = useOrderPayListContext();

  useEffect(() => {
    updateProductInOrderPayList(product, quantity);
  }, [quantity]);

  const handleToggleProductSelection: React.MouseEventHandler<
    HTMLInputElement
  > = (event) => {
    const { checked } = event.target;
    setIsChecked(!isChecked);

    if (checked) {
      addProductToOrderPayList(product, quantity);
      updateTotalPrice(product.price, quantity);

      return;
    }

    deleteProductFromOrderPayList(product.id);
    updateTotalPrice(-product.price, quantity);
  };

  return (
    <div className="cart-container">
      <div className="flex gap-15 mt-10">
        <input
          className="checkbox"
          name="checkbox"
          type="checkbox"
          checked={isChecked}
          onClick={handleToggleProductSelection}
        />
        <Image
          variant="small"
          src={product.imageUrl}
          alt="PET보틀-정사각(420ml)"
        />
        <span className="cart-name">{product.name}</span>
      </div>
      <div className="flex-col-center justify-end gap-15">
        <img
          className="cart-trash-svg"
          src={trash}
          alt="삭제"
          onClick={() => mutate(product.id)}
        />
        <Quantity quantity={quantity} updateQuantity={updateQuantity} />
        <Price totalPrice={getProductTotalPrice(product.price)} />
      </div>
    </div>
  );
}
