import { useRef } from "react";
import { useProduct, usePostCarts } from "@/api";
import { useParams } from "react-router-dom";
import { Loading, Modal, Button, LinkButton } from "@/components";
import type { ModalRef } from "@/components";

const ItemDetail = () => {
  const { id } = useParams();
  const modalRef = useRef<ModalRef | null>(null);
  const { data, isLoading, isError } = useProduct(id!);
  const { mutate: addCart } = usePostCarts();
  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <div>Error</div>;
  }
  if (!data) {
    return <div>상품이 존재하지 않습니다.</div>;
  }
  const { name, imageUrl, price } = data;

  return (
    <>
      <div className="grid md:grid-cols-2 gap-4 md:gap-8">
        <img
          src={imageUrl}
          alt={name}
          loading="lazy"
          className="aspect-square mx-auto"
        />
        <div className="flex flex-col flex-grow justify-between">
          <div className="border-b-2 border-secondary-400 font-medium px-2 md:px-0 pb-2 text-lg">
            {name}
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between p-2 md:p-0">
              <div>금액</div>
              <div className="text-xl">
                <span className="font-medium">
                  {price.toLocaleString("ko-KR")}
                </span>
                원
              </div>
            </div>
            <Button
              type="secondary"
              onClick={() => {
                modalRef.current?.open();
                addCart(data);
              }}
            >
              장바구니
            </Button>
          </div>
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

export default ItemDetail;
