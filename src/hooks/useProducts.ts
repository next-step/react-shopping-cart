import { useEffect, useState } from "react";
import { requestProducts, requestAddItem } from "../apis";
import { IProduct } from "../domain/types";

const useProducts = () => {
  const [products, setProducts] = useState([] as IProduct[]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await requestProducts({
        /*TODO: PAGING */
      });
      setProducts(() => response.products);
    } catch (error) {
      alert("상품 목록 불러오기 실패. 다시 시도해 주세요.");
    }
  };

  const handleAddToCart = async (product: IProduct) => {
    if (!confirm(`${product.name}을 장바구니에 담으시겠습니까?`)) {
      return;
    }

    const result = await requestAddItem(product);
    if (!result) {
      alert("장바구니에 담지 못했습니다. 다시 시도해 주세요");
    }
  };

  return { products, handleAddToCart };
};
export default useProducts;
