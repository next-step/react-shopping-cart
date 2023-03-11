import Item from "./item";
import API from "../../api";
import { ProductContainer } from "./style";
import { useEffect, useState } from "react";
import { ProductItem } from "../../store/type";
import { API_URIS } from "../../constants";

const ProductListPage = () => {
  const [products, setProducts] = useState<ProductItem[]>([]);

  const getProducts = async () => {
    const response = await API.get(API_URIS.PRODUCTS);
    setProducts(response.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductContainer>
      {products.map((item: ProductItem) => {
        return <Item key={item.id} item={item} />;
      })}
    </ProductContainer>
  );
};

export default ProductListPage;
