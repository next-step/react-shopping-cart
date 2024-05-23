import { useParams } from "react-router-dom";

import ProductList from "../components/product-detail/ProductList";

export default function ProductDetailPage() {
  const { id } = useParams();
  const productId = Number(id);

  if (!productId) {
    return null;
  }

  return <ProductList productId={productId} />;
}
