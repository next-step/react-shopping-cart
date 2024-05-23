import ProductItem from "./ProductItem";

import { ProductDetail } from "../../types";

type ProductListProps = {
  products: ProductDetail[];
};

export default function ProductList({ products }: ProductListProps) {
  return (
    <section className="product-container">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </section>
  );
}
