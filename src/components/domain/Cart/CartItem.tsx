import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

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
  return (
    <div className="cart-container">
      <div className="flex gap-15 mt-10">
        <Checkbox id={id} handleToggle={() => alert("toggle!")} />
        <img className="w-144 h-144" src={imageUrl} alt={name} />
        <span className="cart-name">{name}</span>
      </div>
      <div className="flex-col-center justify-end gap-15">
        <img
          className="cart-trash-svg"
          src="./assets/svgs/trash.svg"
          alt="삭제"
        />
        <QuantityCounter />
        <span className="cart-price">{numberFormat(price)}원</span>
      </div>
    </div>
  );
};

export default CartItem;
