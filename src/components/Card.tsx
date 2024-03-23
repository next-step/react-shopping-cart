import Cart from "@/assets/cart.svg?react";
import { useRef } from "react";
import { useAtom } from "jotai";
import { cartAtom } from "@/atoms";
import { Modal } from "@/components";
import { addProductToCart } from "@/utils/cart";

import type { IProduct } from "@/types/product";
import type { ModalRef } from "@/components";

const Card = (props: IProduct) => {
  const [cart, setCart] = useAtom(cartAtom);
  const modalRef = useRef<ModalRef | null>(null);
  const { name, imageUrl, price } = props;
  const handleAddToCart = () => {
    setCart(addProductToCart(cart, props));
  };

  return (
    <>
      <div className="flex flex-col p-4 transition-all shadow border-primary-100 gap-2">
        <img
          src={imageUrl}
          alt={name}
          loading="lazy"
          className="aspect-square"
        />
        <div className="flex justify-between">
          <div className="flex flex-col truncate">
            <div className="text-xs truncate font-medium">{name}</div>
            <div className="font-campton-b">
              {price.toLocaleString()}
              <span className="font-sans font-normal">원</span>
            </div>
          </div>
          <button
            className="shrink-0 px-2 hover:text-primary-400 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleAddToCart();
              modalRef.current?.open();
            }}
          >
            <Cart />
          </button>
        </div>
      </div>
      <Modal ref={modalRef} className="backdrop:bg-dimmed">
        <div className="flex flex-col gap-4 p-8">
          <h2 className="text-lg">장바구니에 상품이 추가되었습니다.</h2>
          <button
            className="bg-primary-400 text-white py-2"
            onClick={(e) => {
              modalRef.current?.close();
              e.stopPropagation();
            }}
          >
            확인
          </button>
        </div>
      </Modal>
    </>
  );
};

export default Card;
