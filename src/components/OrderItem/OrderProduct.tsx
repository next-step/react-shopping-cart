import React from "react";
import { IProduct } from "../../domain/types";
import { PrimaryButton } from "../PrimaryButton";

type TProps = {
  product: IProduct;
  onClick?: (product: IProduct) => void;
};

function OrderProduct({ product, onClick }: TProps) {
  const { name, price, imageUrl, quantity = 1 } = product;

  return (
    <div className="order-list-item">
      <div className="flex gap-15 mt-10">
        <img className="w-144 h-144" src={imageUrl} alt="PET보틀-정사각(420ml)" />
        <div className="flex-col gap-15">
          <span className="order-name">{name}</span>
          <span className="order-info">
            {price}원 / 수량: {quantity}개
          </span>
        </div>
      </div>
      <PrimaryButton size="small" classNames={["flex-center", "self-start"]} onClick={() => onClick?.(product)}>
        장바구니
      </PrimaryButton>
    </div>
  );
}

export default OrderProduct;
