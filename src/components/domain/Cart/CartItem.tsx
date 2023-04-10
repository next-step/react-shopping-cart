import { State } from "@storybook/api";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleCheck } from "../../../store/cartSlice";
import { Cart, Product } from "../../../types/cartTypes";

import { numberFormat } from "../../../utils/numberFormat";
import Checkbox from "../../common/Input/Checkbox/Checkbox";
import QuantityCounter from "../../common/Input/QuantityCounter/QuantityCounter";

export type CartItemProps = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
};

const CartItem = ({ id, name, price, imageUrl }: CartItemProps) => {
  const priceTimesQuantity = useSelector((state: State) => {
    //TODO: products[0] -> products.find()로 변경하기
    const quantity = state.cart.products[0].quantity;
    return quantity * price;
  });

  return (
    <div className="cart-container">
      <div className="flex gap-15 mt-10">
        <Checkbox id={id} />
        <img className="w-144 h-144" src={imageUrl} alt={name} />
        <span className="cart-name">{name}</span>
      </div>
      <div className="flex-col-center justify-end gap-15">
        <img
          className="cart-trash-svg"
          src="./assets/svgs/trash.svg"
          alt="삭제"
        />
        <QuantityCounter productId={id} />
        <span className="cart-price">{numberFormat(priceTimesQuantity)}원</span>
      </div>
    </div>
  );
};

export default CartItem;
