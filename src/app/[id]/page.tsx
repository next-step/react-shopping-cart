import { useRef } from "react";
import { useProduct, usePostCarts } from "@/api";
import { useParams, Link } from "react-router-dom";
import { Loading, Modal } from "@/components";
import type { ModalRef } from "@/components";

const ItemDetail = () => {
  const { id } = useParams();
  const modalRef = useRef<ModalRef | null>(null);
  const { data, isLoading, isError } = useProduct(id!);
  const mutation = usePostCarts();
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
                <span className="font-medium">{price.toLocaleString()}</span>원
              </div>
            </div>
            <button
              className="bg-secondary-400 py-4 text-white hover:bg-secondary-500 transition-colors
        "
              onClick={() => {
                modalRef.current?.open();
                mutation.mutate(data);
              }}
            >
              장바구니
            </button>
          </div>
        </div>
      </div>
      <Modal ref={modalRef}>
        <div className="flex flex-col gap-4 p-8">
          <h2 className="text-lg">장바구니에 상품이 추가되었습니다.</h2>
          <div className="grid grid-cols-2 gap-4">
            <button
              className=" text-primary-400 border flex items-center justify-center p-2"
              onClick={(e) => {
                modalRef.current?.close();
                e.stopPropagation();
              }}
            >
              계속 쇼핑하기
            </button>
            <Link
              to="/cart"
              className="bg-primary-400 text-white p-2 flex items-center justify-center"
            >
              장바구니 보기
            </Link>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ItemDetail;
