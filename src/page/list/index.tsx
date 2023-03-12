import { useCallback, useEffect, useMemo, useState } from "react";

import { ProductItem } from "store/type";

import { ProductContainer } from "./style";
import Item from "./item";
import Header from "components/header";
import Nav from "components/nav";
import { getProducts } from "api/product";

const ProductListPage = () => {
  const [products, setProducts] = useState<ProductItem[]>([]);

  const fetchProduct = useCallback(async () => {
    const data = await getProducts();
    return data;
  }, []);

  const memoizedProduct = useMemo(async () => {
    const data = await fetchProduct();
    return data;
  }, [fetchProduct]);

  useEffect(() => {
    memoizedProduct.then((res) => {
      setProducts(res);
    });
  }, [memoizedProduct]);

  return (
    <>
      <Header />
      <Nav />
      <ProductContainer>
        {products.map((item: ProductItem) => {
          return <Item key={item.id} item={item} />;
        })}
      </ProductContainer>
    </>
  );
};

export default ProductListPage;
