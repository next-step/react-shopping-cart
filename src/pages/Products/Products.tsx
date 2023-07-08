import React, { Suspense } from "react";
import ProductList from "./ProductList";
import ProductTemplate from "./ProductTemplate";
import { QueryErrorResetBoundary } from "react-query";
import { ErrorBoundary } from "react-error-boundary";
import { IResponseError } from "../../domain/types/response";
import { UnknownError, CartItemsSkeleton } from "../../components";

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
