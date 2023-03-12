import { useCallback, useEffect } from "react";
import { ProductItem } from "store/type";
import { ProductContainer } from "./style";
import Item from "./item";
import Header from "components/header";
import Nav from "components/nav";
import { useProductsContext } from "store/context/ProductsContext";

const ProductListPageContent = () => {
  const { products, fetchProducts } = useProductsContext();

  const handleFetchProducts = useCallback(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    handleFetchProducts();
  }, [handleFetchProducts]);

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