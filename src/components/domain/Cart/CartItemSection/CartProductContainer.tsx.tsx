import React from "react";
import { numberFormat } from "../../../../utils/numberFormat";
import Checkbox from "../../../common/Input/Checkbox/Checkbox";
import QuantityCounter from "../../../common/Input/QuantityCounter/QuantityCounter";
import Modal from "../../../common/Modal/Modal";
import Button from "../../../common/Button/Button";
import useModal from "../../../../hooks/useModal";
import useCart from "../../../../hooks/useCart";
import type { Product } from "../../../../store/cartSlice";

type Props = {
  product: Product;
};

const CartProductContainer = ({ product }: Props) => {
  const { name, price, imageUrl } = product;
  const { selectItem, setCurrentItem, getItemQuantity } = useCart();
  const { isModalOpen, modalMessage, openModal } = useModal();
  const eachItemQuantity = getItemQuantity(product);
  const modalType = "delete";

  const handleCheckboxClick = () => {
    selectItem(product);
  };

  const handleDeleteButtonClick = () => {
    setCurrentItem(product);
    openModal(modalType);
  };

  return (
    <div className="cart-container">
      <div className="flex gap-15 mt-10">
        {isModalOpen && <Modal type="delete" message={modalMessage} />}
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
          {numberFormat(price * eachItemQuantity)}원
        </span>
      </div>
    </div>
  );
};

export default CartProductContainer;
