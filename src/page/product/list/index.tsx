import { ProductItem } from "types/type";
import { ProductContainer } from "../style";
import Item from "./item";
import Header from "components/header";
import Nav from "components/nav";
import { productListState, useProductList } from "hooks/product";
import { useRecoilState } from "recoil";

import { useEffect } from "react";


const ProductListPageContent = () => {

  const { data, isLoading, isError } = useProductList();
  const [products, setProducts] = useRecoilState(productListState);

  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data, setProducts])

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