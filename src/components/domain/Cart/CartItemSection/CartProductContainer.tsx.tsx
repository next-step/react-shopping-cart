import React from "react";
import { numberFormat } from "../../../../utils/numberFormat";
import Checkbox from "../../../common/Input/Checkbox/Checkbox";
import QuantityCounter from "../../../common/Input/QuantityCounter/QuantityCounter";
import { Product } from "../../../../store/store";
import { useAppDispatch, useAppSelector } from "../../../../hooks/storeHooks";
import { selectItem } from "../../../../store/cartSlice";

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
  const handleClickCheckbox = () => {
    dispatch(selectItem(product));
  };

  return (
    <div className="cart-container">
      <div className="flex gap-15 mt-10">
        <Checkbox product={product} onClick={handleClickCheckbox} />
        <img className="w-144 h-144" src={imageUrl} alt={name} />
        <span className="cart-name">{name}</span>
      </div>
      <div className="flex-col-center justify-end gap-15">
        <img
          className="cart-trash-svg"
          src="./assets/svgs/trash.svg"
          alt="삭제"
        />
        <QuantityCounter product={product} />
        <span className="cart-price">
          {numberFormat(price * updatedQuantity!)}원
        </span>
      </div>
    </div>
  );
};

export default CartProductContainer;
