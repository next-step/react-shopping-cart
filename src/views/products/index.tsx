import React, { useEffect } from "react";

import { Product } from "@/components/products";
import { useFetchProducts } from "@/hooks/api";

import * as S from "./products.style";

export default function Products() {
  const { products, fetchProducts } = useFetchProducts();

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <S.ProductsContainer>
      {products.map((product) => (
        <Product key={product.id} productInfo={product} />
      ))}
    </S.ProductsContainer>
  );
}
