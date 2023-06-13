import React from "react";
import { ProductItem } from "../../components/ProductItem";
import { useProducts } from "../../hooks";

function Products() {
  const { products, handleAddToCart } = useProducts();

  return (
    <section className="product-container">
      {products?.map((product) => (
        <ProductItem key={product.id} product={product} onAddInCart={handleAddToCart} />
      ))}
    </section>
  );
}

export default Products;
