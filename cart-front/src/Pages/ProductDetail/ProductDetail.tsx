import { useSuspenseQuery } from "@tanstack/react-query";
import { Route } from "../../routes/_ProductDetail/Products.$ParamsId";
import { ProductDetailCard } from "../../Components/ProductCard/ProductDetailCard";
import { ProductDetailQueryOptions } from "../../Apis/QueryOptions/QueryOptions";
import { Suspense } from "react";
import { LoadingSpinner } from "../../Components/LoadingSpinner/LoadingSpinner";
import { ErrorBoundary } from "react-error-boundary";
import Flex from "../../ComponentsPrototype/Layout/Flex";
export const ProductDetail = () => {
  const url = Route.useParams().ParamsId;
  const { data: Product, error } = useSuspenseQuery(
    ProductDetailQueryOptions(url)
  );
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <ErrorBoundary fallback={<div>error{error?.message}</div>}>
        <Flex className="flex items-center justify-center">
          <ProductDetailCard Product={Product} />
        </Flex>
      </ErrorBoundary>
    </Suspense>
  );
};
