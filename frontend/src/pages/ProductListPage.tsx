import ProductList from "../components/product-list/ProductList";
import useProductListQuery from "../quires/useProductListQuery";

export default function ProductListPage() {
  const { data } = useProductListQuery();

  if (!data) {
    return null;
  }

  return <ProductList products={data} />;
}
