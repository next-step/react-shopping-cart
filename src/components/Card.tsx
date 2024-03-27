import Cart from "@/assets/cart.svg?react";
import { useRef } from "react";
import { usePostCarts } from "@/api";
import { Modal, Button, LinkButton } from "@/components";

import type { IProduct } from "@/types";
import type { ModalRef } from "@/components";

const Card = (props: IProduct) => {
  const modalRef = useRef<ModalRef | null>(null);
  const { name, imageUrl, price } = props;
  const { mutate: addCart } = usePostCarts();

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
              {price.toLocaleString("ko-KR")}
              <span className="font-sans font-normal">원</span>
            </div>
          </div>
          <button
            className="shrink-0 px-2 hover:text-primary-400 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              addCart(props);
              modalRef.current?.open();
            }}
          >
            <Cart />
          </button>
        </div>
      </div>
      <Modal ref={modalRef}>
        <div className="flex flex-col gap-4 p-8">
          <h2 className="text-lg">장바구니에 상품이 추가되었습니다.</h2>
          <div className="grid grid-cols-2 gap-4">
            <Button
              onClick={(e) => {
                modalRef.current?.close();
                e.stopPropagation();
              }}
            >
              계속 쇼핑하기
            </Button>
            <LinkButton to="/cart" type="primary">
              장바구니 보기
            </LinkButton>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Card;
