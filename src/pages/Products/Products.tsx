import React from "react";

import { ProductItem } from "../../components/ProductItem";

//TODO: 지우기
import { sampleProducts } from "../../tododelete/sampledb";

function Products() {
  return (
    <section className="product-container">
      {sampleProducts.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </section>
  );
}

export default Products;
