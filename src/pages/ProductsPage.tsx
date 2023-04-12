import React, { useEffect, useState } from "react";
import ProductInfo from "../components/domain/Product/ProductInfo/ProductInfo";

const ProductsPage = () => {
  const [products, setProducts] = useState([
    { id: "", price: 0, name: "", imageUrl: "" },
  ]);

  useEffect(() => {
    fetch("http://localhost:3000/").then((res) =>
      res.json().then((res) => {
        setProducts(res);
      })
    );
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
