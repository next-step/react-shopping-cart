import { ProductItem } from "types/type";
import { ProductContainer } from "./style";
import Item from "./item";
import Header from "components/header";
import Nav from "components/nav";
import { useProduct } from "hooks/useProduct";

const ProductListPageContent = () => {

  const { data: products, isLoading, isError } = useProduct();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading product data</div>;
  }

  if (!products) {
    return <div>No product data available</div>;
  }

  return (
    <ProductContainer>
      {products.map((item: ProductItem) => {
        return <Item key={item.id} item={item} />;
      })}
    </ProductContainer>
  );
};

const ProductListPage = () => {
  return (
    <>
      <Header />
      <Nav />
      <ProductListPageContent />
    </>
  );
};

export default ProductListPage;