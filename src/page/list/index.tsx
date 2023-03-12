import { useEffect, useState } from "react";
import { ProductItem } from "store/type";
import { ProductContainer } from "./style";
import Item from "./item";
import Header from "components/header";
import Nav from "components/nav";
import { getProducts } from "api/product";

const ProductListPage = () => {
  const [products, setProducts] = useState<ProductItem[]>([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProducts();
      return data;
    };

    const fetchAndSetProducts = async () => {
      const res = await fetchProduct();
      setProducts(res);
    };

    fetchAndSetProducts();
  }, []);

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