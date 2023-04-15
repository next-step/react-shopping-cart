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
