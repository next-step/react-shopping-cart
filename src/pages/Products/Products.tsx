import React, { useEffect, useState } from "react";
import { ProductItem } from "../../components/ProductItem";
import { requestProducts } from "../../apis/products";
import { IProduct } from "../../domain/shopping-cart/types";
import { requestAddItem } from "../../apis/cart";

function Products() {
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

  // 이벤트 핸들러

  const handleAddToCart = async (product: IProduct) => {
    if (!confirm(`${product.name}을 장바구니에 담으시겠습니까?`)) {
      return;
    }

    const result = await requestAddItem(product);
    if (!result) {
      alert("장바구니에 담지 못했습니다. 다시 시도해 주세요");
    }
  };

  return (
    <section className="product-container">
      {products?.map((product) => (
        <ProductItem key={product.id} product={product} onAddInCart={handleAddToCart} />
      ))}
    </section>
  );
}

export default Products;
