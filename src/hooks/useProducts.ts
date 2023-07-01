import { useNavigate } from "react-router-dom";
import { requestAddItem } from "../apis";
import { IProduct } from "../domain/types";
import { IResponseError } from "../domain/types/response";
import useProductsQuery from "../queries/useProductsQuery";
import { convertToViewError } from "./utils";
import { useRef } from "react";

const useProducts = () => {
  const pageRef = useRef(0);

  const { data, status, fetchNextPage, error: queryError } = useProductsQuery();

  const error = convertToViewError(queryError as IResponseError);

  const products = data?.pages.reduce((result, current) => {
    return [...result, ...current.products];
  }, [] as IProduct[]);

  const navigate = useNavigate();
  const handleAddToCart = async (product: IProduct, isRequiredMovePage = false) => {
    if (!confirm(`${product.name}을 장바구니에 담으시겠습니까?`)) {
      return;
    }

    const result = await requestAddItem(product);
    if (!result) {
      alert("장바구니에 담지 못했습니다. 다시 시도해 주세요");
      return;
    }

    if (isRequiredMovePage) {
      // TODO: 모달창 시간관계상 생략...
      if (!confirm("장바구니에 담겼습니다. 장바구니로 이동하시겠습니까?")) {
        return;
      }

      navigate("/cart");
    }
  };

  return { pageRef, status, error, products, handleAddToCart, fetchNextPage };
};
export default useProducts;
