import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Product } from "../../../../store/store";
import Button from "../../../common/Button/Button";
import { useAppDispatch } from "../../../../hooks/storeHooks";
import { addToCart } from "../../../../store/cartSlice";

export type ProductInfoProps = {
  product: Product;
};

const ProductInfo = ({ product }: ProductInfoProps) => {
  const { name, price, imageUrl } = product;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

  return (
    <div className="w-280">
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
