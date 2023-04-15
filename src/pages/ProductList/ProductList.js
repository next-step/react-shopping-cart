import { useEffect, useState } from "react";
import Product from "../../components/Product";
import apiClient from "../../api/apiClient";
import { API } from "../../constants/api";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProductData() {
      const products = await apiClient(API.PRODUCTS);
      setProducts(products);
    }
    getProductData();
  }, []);
  return (
    <>
      {products.length > 0 ? (
        <section className="product-container">
          {products.map((product) => (
            <Product key={product.id} product={product}></Product>
          ))}
        </section>
      ) : (
        <h1 className="product-empty flex-center">등록된 상품이 없습니다.</h1>
      )}
    </>
  );
}
