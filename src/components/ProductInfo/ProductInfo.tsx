import React from "react";

export type ProductInfoProps = {
  imageUrl: string;
  name: string;
  price: number;
};

const ProductInfo = ({ imageUrl, name, price }: ProductInfoProps) => {
  return (
    <div className="w-280">
      <img src={imageUrl} alt="PET보틀-정사각(420ml)" />
      <div className="flex justify-between w-280 p-5">
        <div className="product-info">
          <p className="product-info__name">{name}</p>
          <p className="product-info__price">{price}</p>
        </div>
        <img src="assets/svgs/cart.svg" alt="장바구니" />
      </div>
    </div>
  );
};

export default ProductInfo;
