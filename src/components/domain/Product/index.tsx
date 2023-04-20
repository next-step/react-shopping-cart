import React from "react";
import ProductInfo from "./ProductInfo/ProductInfo";
import { useFetchData } from "../../../hooks/useFetchData";
import { useAppSelector } from "../../../hooks/storeHooks";

const Products = () => {
  const globalProduct = useAppSelector((state) => state.cart.products);
  const products = useFetchData(PRODUCTS_URL, globalProduct);

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
