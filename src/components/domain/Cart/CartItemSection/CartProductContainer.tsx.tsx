import React from "react";
import { numberFormat } from "../../../../utils/numberFormat";
import Checkbox from "../../../common/Input/Checkbox/Checkbox";
import QuantityCounter from "../../../common/Input/QuantityCounter/QuantityCounter";
import { Product } from "../../../../store/store";
import { useAppDispatch, useAppSelector } from "../../../../hooks/storeHooks";
import { deleteFromCart, selectItem } from "../../../../store/cartSlice";
import Modal from "../../../common/Modal/Modal";
import Button from "../../../common/Button/Button";

type Props = {
  product: Product;
};

const CartProductContainer = ({ product }: Props) => {
  const dispatch = useAppDispatch();
  const { id, name, price, imageUrl } = product;
  const updatedQuantity = useAppSelector((state) => {
    const theItem = state.cart.products.find(
      (globalCartProduct) => globalCartProduct.id === product.id
    );
    return theItem?.quantity;
  });
  const { isOpen, message } = useAppSelector((state) => state.modal);

  const handleCheckboxClick = () => {
    dispatch(selectItem(product));
  };

  const handleDeleteButtonClick = () => {
    alert("해당 아이템을 삭제하시겠습니까?");
    dispatch(deleteFromCart(product.id));
  };

  return (
    <div className="cart-container">
      <div className="flex gap-15 mt-10">
        {isOpen && <Modal type="delete" message={message} />}
        <Checkbox product={product} onClick={handleCheckboxClick} />
        <img className="w-144 h-144" src={imageUrl} alt={name} />
        <span className="cart-name">{name}</span>
      </div>
      <div className="flex-col-center justify-end gap-15">
        <Button className="cart-trash-svg" onClick={handleDeleteButtonClick}>
          <img src="./assets/svgs/trash.svg" alt="삭제" />
        </Button>
        <QuantityCounter product={product} />
        <span className="cart-price">
          {numberFormat(price * updatedQuantity!)}원
        </span>
      </div>
    </div>
  );
};

export default CartProductContainer;
