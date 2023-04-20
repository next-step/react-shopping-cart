import React, { useState, useEffect } from "react";
import ProductInfo from "./ProductInfo/ProductInfo";
import { fetchProducts } from "../../../hooks/useFetchData";

const Products = () => {
  const [products, setProducts] = useState([
    { id: "", price: 0, name: "", imageUrl: "" },
  ]);

  useEffect(() => {
    fetchProducts(PRODUCTS_URL)
      .then((res) => setProducts(res))
      .catch((err) => {
        throw new Error(err);
      });
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

export default Products;

const PRODUCTS_URL = "http://localhost:3000/";
