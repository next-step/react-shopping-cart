import React, { Suspense } from "react";
import { QueryErrorResetBoundary } from "react-query";
import { ErrorBoundary } from "react-error-boundary";
import CartList from "./CartList";
import CartTemplate from "./CartTemplate";
import { IResponseError } from "../../domain/types/response";
import { Spinner, UnknownError } from "../../components";

function Cart() {
  return (
    <CartTemplate>
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary
            onReset={reset}
            fallbackRender={({ resetErrorBoundary, error }) => (
              <UnknownError resetErrorBoundary={resetErrorBoundary} error={error as IResponseError} />
            )}
          >
            <Suspense fallback={<Spinner />}>
              <CartList />
            </Suspense>
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </CartTemplate>
  );
}

export default Cart;
