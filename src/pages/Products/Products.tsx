import React, { Suspense } from "react";
import ProductList from "./ProductList";
import ProductTemplate from "./ProductTemplate";
import { CartItemsSkeleton } from "../../components/CartItemsSkeleton";
import { ErrorBoundary } from "react-error-boundary";
import { UnknownError } from "../../components/UnknownError";
import { QueryErrorResetBoundary } from "react-query";
import { IResponseError } from "../../domain/types/response";

function Products() {
  return (
    <ProductTemplate>
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary
            onReset={reset}
            fallbackRender={({ resetErrorBoundary, error }) => (
              <UnknownError resetErrorBoundary={resetErrorBoundary} error={error as IResponseError} />
            )}
          >
            <Suspense fallback={<CartItemsSkeleton />}>
              <ProductList />
            </Suspense>
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </ProductTemplate>
  );
}

export default Products;
