import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Product } from "../../../../store/store";
import Button from "../../../common/Button/Button";
import { useAppDispatch, useAppSelector } from "../../../../hooks/storeHooks";
import { addToCart } from "../../../../store/cartSlice";
import Modal from "../../../common/Modal/Modal";
import { setIsModalOpen } from "../../../../store/modalSlice";

export type ProductInfoProps = {
  ref?: ((node: HTMLElement | null) => void) | null;
  product: Product;
};

const ProductInfo = ({ product }: ProductInfoProps) => {
  const { isOpen, message } = useAppSelector((state) => state.modal);
  const { name, price, imageUrl } = product;
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(addToCart(product));
    dispatch(setIsModalOpen(true));
  };

  return (
    <div className="w-280">
      {isOpen && <Modal type="add" message={message} product={product} />}
      <img src={imageUrl} alt="PET보틀-정사각(420ml)" />
      <div className="flex justify-between w-280 p-5">
        <div className="product-info">
          <p className="product-info__name">{name}</p>
          <p className="product-info__price">{price}</p>
        </div>
        <Button onClick={handleClick} className="">
          <img src="assets/svgs/cart.svg" alt="장바구니" />
        </Button>
      </div>
    </div>
  );
};

export default ProductInfo;
