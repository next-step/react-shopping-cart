import React from "react";
import { Product } from "../../../../store/cartSlice";
import Button from "../../../common/Button/Button";
import Modal from "../../../common/Modal/Modal";
import useModal from "../../../../hooks/useModal";
import useCart from "../../../../hooks/useCart";

export type ProductInfoProps = {
  ref?: ((node: HTMLElement | null) => void) | null;
  product: Product;
};

const ProductInfo = ({ product }: ProductInfoProps) => {
  const { setCurrentItem } = useCart();
  const { isModalOpen, modalMessage, openModal } = useModal();
  const { name, price, imageUrl } = product;
  const modalType = "add";

  const handleClick = () => {
    setCurrentItem(product);
    openModal(modalType);
  };

  return (
    <div className="w-280">
      {isModalOpen && (
        <Modal type={modalType} message={modalMessage} product={product} />
      )}
      <img src={imageUrl} alt="상품 이미지" />
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
