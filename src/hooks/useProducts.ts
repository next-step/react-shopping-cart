import { useNavigate } from "react-router-dom";
import { requestAddItem } from "../apis";
import { IProduct } from "../domain/types";
import { IResponseError } from "../domain/types/response";
import useProductsQuery from "../queries/useProductsQuery";
import { convertToViewError } from "./utils";

const useProducts = () => {
  const { data, status, error: queryError } = useProductsQuery();

  const error = convertToViewError(queryError as IResponseError);

  const products = data?.products || [];

  const navigate = useNavigate(); // TODO: 모달창으로 대체되면 삭제되어야 할 코드일 수도 있음
  const handleAddToCart = async (product: IProduct, isRequiredMovePage = true) => {
    if (!confirm(`${product.name}을 장바구니에 담으시겠습니까?`)) {
      return;
    }

    const result = await requestAddItem(product);
    if (!result) {
      alert("장바구니에 담지 못했습니다. 다시 시도해 주세요");
      return;
    }

    if (isRequiredMovePage) {
      //TODO:모달창으로 바꿔야 한다.
      if (!confirm("장바구니에 담겼습니다. 장바구니로 이동하시겠습니까?")) {
        return;
      }

      navigate("/cart");
    }
  };

  return { status, error, products, handleAddToCart };
};
export default useProducts;
