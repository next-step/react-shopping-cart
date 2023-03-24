import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Product from "../components/product/ProductList";
import { ROUTE } from "../constants/route";
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
        <Link
          to={{
            pathname: `${ROUTE.PRODUCTS}/${product.id}`,
            state: { product },
          }}
          key={idx}
        >
          <Product
            imageUrl={product.imageUrl}
            price={product.price}
            name={product.name}
          ></Product>
        </Link>
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
