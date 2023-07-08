import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { ProductItem } from "../../components/ProductItem";
import { useProducts } from "../../hooks";
import { IProduct } from "../../domain/types";
import { Spinner } from "../../components/Spinner";

function ProductList() {
  const { ref: infiniteRef, inView } = useInView();

  const { pageRef, products, isFetching, handleAddToCart, fetchNextPage, hasNextPage } = useProducts();

  useEffect(() => {
    if (inView) {
      pageRef.current += 1;
      fetchNextPage({ pageParam: pageRef.current });
    }
  }, [inView]);

  return (
    <>
      <ul>
        {products?.map((product: IProduct) => (
          <li key={product.id}>
            <ProductItem product={product} onAddInCart={handleAddToCart} />
          </li>
        ))}
        {hasNextPage && products?.length && <hr style={{ visibility: "hidden" }} ref={infiniteRef} />}
      </ul>
      {isFetching && <Spinner />}
    </>
  );
}

export default ProductList;
