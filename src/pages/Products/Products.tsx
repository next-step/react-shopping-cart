import React from "react";
import { ProductItem } from "../../components/ProductItem";
import { useProducts } from "../../hooks";

const template = (children: React.ReactNode) => <section className="product-container">{children}</section>;

function Products() {
  const { status, error, products, handleAddToCart } = useProducts();

  if (status === "loading") {
    return template(<div>loading...</div>);
  }

  if (status === "error") {
    return template(<div>{error.message}</div>);
  }

  return template(
    products?.map((product) => <ProductItem key={product.id} product={product} onAddInCart={handleAddToCart} />)
  );
}

export default Products;
