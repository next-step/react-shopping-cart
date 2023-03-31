import { ProductContainer } from "../style";

import "style/common/utils.css";
import "./style.css";
import Header from "components/header";
import Nav from "components/nav";
import { useParams } from "react-router-dom";
import { useSelectedProduct } from "hooks/product";
import { printWon } from "common/util";
import { useRouter } from "hooks/useRouter";
import { ROUTE } from "router";
import { useEffect, useState } from "react";
import { useAddCart } from "hooks/cart";
import { handleModal } from "common/modal";

export const Contents = () => {
  const { id } = useParams<{ id: string }>();
  const { go } = useRouter();
  const { mutate } = useAddCart();
  const { data, isLoading, isError } = useSelectedProduct(Number(id));

  const [product, setProduct] = useState<Product>({} as Product);

  useEffect(() => {
    if (isError) {
      console.log("Error fetching product list", isError);

      alert("상품 목록을 불러오는데 실패했습니다.");
      return;
    }

    if (data) {
      setProduct(data);
    }
  }, [data, id, isError, setProduct]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!Object.values(product).length) {
    return <div>상품이 없습니다.</div>;
  }

  const HandleAddCart = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    item: Product
  ) => {
    e.stopPropagation();
    mutate(item);
    handleModal({
      title: "장바구니에 추가되었습니다",
      message: "해당 페이지로 이동하시겠습니까?",
      onConfirm: () => go(ROUTE.CART_LIST),
    });
  };

  return (
    <ProductContainer>
      <div className="flex-col-center w-520">
        <img
          className="w-480 h-480 mb-10"
          src={`${product.imageUrl}`}
          alt="상세 이미지"
        />
        <div className="product-detail-info">
          <span className="product-detail-info__name">{product.name}</span>
          <hr className="divide-line-gray my-20" />
          <div className="flex justify-between">
            <span>금액</span>
            <span className="product-detail-info__price">
              {printWon(product.price)}
            </span>
          </div>
        </div>
        <button
          className="product-detail-button flex-center mt-20"
          onClick={(e) => HandleAddCart(e, product)}
        >
          장바구니
        </button>
      </div>
    </ProductContainer>
  );
};
const Detail = () => {
  return (
    <>
      <Header />
      <Nav />
      <Contents />
    </>
  );
};

export default Detail;
