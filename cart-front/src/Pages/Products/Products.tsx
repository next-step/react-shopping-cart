import { ProductsList } from "./ProductsList";
import { ProductInfiniteScroll } from "../../Hooks/ProductInfiniteScroll/ProductInfiniteScroll";
import { Suspense } from "react";
import { LoadingSpinner } from "../../Components/LoadingSpinner/LoadingSpinner";
import { ProductLayout } from "../../routes/__root";
export const Products = () => {
  const [ref, products] = ProductInfiniteScroll();

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <ProductLayout>
        <ProductsList products={products} />
        <div ref={ref}></div>
      </ProductLayout>
    </Suspense>
  );
};
