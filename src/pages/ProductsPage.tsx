import React, { useEffect, useState } from "react";
import ProductInfo from "../components/domain/Product/ProductInfo/ProductInfo";
import { fetchProducts } from "../hooks/httpHooks";

const PRODUCTS_URL = "http://localhost:3000/";

const ProductsPage = () => {
  const [products, setProducts] = useState([
    { id: "", price: 0, name: "", imageUrl: "" },
  ]);

  useEffect(() => {
    fetchProducts(PRODUCTS_URL)
      .then((res) => setProducts(res))
      .catch((err) => console.warn(err));
  }, []);

  return (
    <section className="product-container">
      {products.map(({ id, name, price }) => (
        <ProductInfo
          key={id}
          imageUrl="./assets/images/product.png"
          name={name}
          price={price}
        />
      ))}
    </section>
  );
};

export default ProductsPage;
