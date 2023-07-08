import React, { Suspense } from "react";
import CartList from "./CartList";
import CartTemplate from "./CartTemplate";
import { Spinner } from "../../components/Spinner";
import { ErrorBoundary } from "react-error-boundary";
import { QueryErrorResetBoundary } from "react-query";
import { UnknownError } from "../../components/UnknownError";
import { IResponseError } from "../../domain/types/response";

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
