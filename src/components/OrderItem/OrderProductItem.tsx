import React from "react";
import { IProduct } from "../../types/types";

type TOrderProductItemProps = {
  item: IProduct;
};

function OrderProductItem({ item }: TOrderProductItemProps) {
  return (
    <div className="order-container">
      <div className="flex gap-15 mt-10">
        <img className="w-144 h-144" src={item.imageUrl} alt={item.name} />
        <div className="flex-col gap-15">
          <span className="order-name">{item.name}</span>
          <span>수량: {1}</span>
        </div>
        <button className="primary-button-small flex-center self-start">장바구니</button>
      </div>
    </div>
  );
}

export default OrderProductItem;
