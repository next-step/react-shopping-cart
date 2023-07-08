import React, { Suspense } from "react";
import { QueryErrorResetBoundary } from "react-query";
import { ErrorBoundary } from "react-error-boundary";
import { Spinner, UnknownError } from "../../components";
import { IResponseError } from "../../domain/types/response";
import OrderTemplate from "./OrderTemplate";
import OrderList from "./OrderList";

function Orders() {
  return (
    <OrderTemplate>
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary
            onReset={reset}
            fallbackRender={({ resetErrorBoundary, error }) => (
              <UnknownError resetErrorBoundary={resetErrorBoundary} error={error as IResponseError} />
            )}
          >
            <Suspense fallback={<Spinner />}>
              <OrderList />
            </Suspense>
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </OrderTemplate>
  );
}

export default Orders;
