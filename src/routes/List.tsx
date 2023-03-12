import { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "../components/list/Product";
import { Product as ProductType } from "../types/product";
import { api } from "../utils/api";

function List() {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const products = await api.get<ProductType[]>("/products");
        setProducts(products);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <ListSection>
      {products.map((product, idx) => (
        <Product
          key={idx}
          imageUrl={product.imageUrl}
          price={product.price}
          name={product.name}
        ></Product>
      ))}
    </ListSection>
  );
}

const ListSection = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 50px 240px;
`;

export default List;
