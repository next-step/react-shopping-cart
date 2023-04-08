import { useEffect, useState } from "react";
import Product from "../../components/product";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <section className="product-container">
      {products.map((product, idx) => (
        <Product
          key={idx}
          id={product.id}
          name={product.name}
          price={product.price}
          imageUrl={product.imageUrl}
        ></Product>
      ))}
    </section>
  );
}
