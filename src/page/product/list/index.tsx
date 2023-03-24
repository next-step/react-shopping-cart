import { ProductItem } from "types/type";
import { ProductContainer } from "../style";
import Item from "./item";
import GlobalHeader from "components/header";
import Nav from "components/nav";
import { useProductList } from "hooks/product";

import { useEffect, useState } from "react";

const ProductListPageContent = () => {
  const { data, isLoading, isError } = useProductList();
  const [products, setProducts] = useState<ProductItem[]>([]);

  useEffect(() => {
    if (isError) {
      console.log("Error fetching product list", isError);

      alert("상품 목록을 불러오는데 실패했습니다.");
      return;
    }

    if (data) {
      setProducts(data);
    }
  }, [data, isError, setProducts]);

  if (isLoading) {
    return <div>Loading...</div>;
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
      <GlobalHeader />
      <Nav />
      <ProductListPageContent />
    </>
  );
};

export default ProductListPage;
