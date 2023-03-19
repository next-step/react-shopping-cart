import { ProductContainer } from "../style";

import "style/common/utils.css";
import "./style.css";
import Header from "components/header";
import Nav from "components/nav";
import { useParams } from "react-router-dom";
import { useSelectedProduct } from "hooks/product";
import { printWon } from "common/util";

export const Contents = () => {
  const { id } = useParams<{ id: string }>();

  const selectedProduct = useSelectedProduct(Number(id));
  
  if (!selectedProduct) {
    return <div>no Have Detail Item</div>;
  }

  return (
    <ProductContainer>
      <div className="flex-col-center w-520">
        <img
          className="w-480 h-480 mb-10"
          src={`${selectedProduct.imageUrl}`}
          alt="상세 이미지"
        />
        <div className="product-detail-info">
          <span className="product-detail-info__name">
            {selectedProduct.name}
          </span>
          <hr className="divide-line-gray my-20" />
          <div className="flex justify-between">
            <span>금액</span>
            <span className="product-detail-info__price">
              {printWon(selectedProduct.price)}
            </span>
          </div>
        </div>
        <button className="product-detail-button flex-center mt-20">
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
