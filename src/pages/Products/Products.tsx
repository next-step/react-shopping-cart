import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { ProductItem } from "../../components/ProductItem";
import { useProducts } from "../../hooks";
import { IProduct } from "../../domain/types";

const template = (children: React.ReactNode) => <section className="product-container">{children}</section>;

function Products() {
  const { ref: infiniteRef, inView } = useInView();

  const { pageRef, status, error, products, handleAddToCart, fetchNextPage } = useProducts();

  useEffect(() => {
    if (inView) {
      pageRef.current += 1;
      fetchNextPage({ pageParam: pageRef.current });
    }
  }, [inView]);

  if (status === "loading") {
    return template(<div>loading...</div>);
  }

  if (status === "error") {
    return template(<div>{error.message}</div>);
  }

  return (
    <>
      {template(
        products?.map((product: IProduct) => (
          <ProductItem key={product.id} product={product} onAddInCart={handleAddToCart} />
        )),
      )}
      <hr style={{ visibility: "hidden" }} ref={infiniteRef} />
    </>
  );
}

export default Products;
