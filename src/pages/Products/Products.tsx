import React, { useEffect, useState } from "react";
import { ProductItem } from "../../components/ProductItem";
import { getProducts } from "../../apis/products";
import { IProduct } from "../../domain/shopping-cart/types";
import useCartDataHandlers from "../../hooks/useCart";
import axios from "axios";

function Products() {
  const [products, setProducts] = useState([] as IProduct[]);
  const {
    cartDataHandlers: { insertProduct },
  } = useCartDataHandlers();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await getProducts({});
      setProducts(() => response.products); // TODO: Paging
    } catch (error) {
      console.error(error);
    }
  };

  // 이벤트 핸들러

  const handleAddToCart = (product: IProduct) => {
    if (!confirm(`${product.name}을 장바구니에 담으시겠습니까?`)) {
      return;
    }

    try {
      insertProduct({ ...product, checked: true });
      axios.post("/api/cart", { product });
    } catch (error) {
      console.error(error);
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
