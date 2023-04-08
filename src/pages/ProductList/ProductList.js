import { useEffect, useState } from "react";
import Product from "../../components/Product";

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
      {products.map((product) => (
        <Product key={product.id} product={product}></Product>
      ))}
    </section>
  );
}
