import React, { useEffect, useState } from "react";
import ProductInfo from "../components/domain/Product/ProductInfo/ProductInfo";

type ProductType = {
  id: string;
  price: number;
  name: string;
  imageUrl: string;
};

type ProductsType = ProductType[];

const Products = () => {
  const [products, setProducts] = useState([
    { id: "", price: 0, name: "", imageUrl: "" },
  ]);

  useEffect(() => {
    fetch("http://localhost:3000/products").then((res) =>
      res.json().then((res) => {
        setProducts(res);
      })
    );
  }, []);

  return (
    <section className="product-container">
      {products.map((product: ProductType) => (
        <ProductInfo
          key={product.id}
          imageUrl="./assets/images/product.png"
          name={product.name}
          price={product.price}
        />
      ))}
    </section>
  );
};

export default Products;
