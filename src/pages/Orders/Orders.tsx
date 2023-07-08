import React, { Suspense } from "react";
import OrderTemplate from "./OrderTemplate";
import OrderList from "./OrderList";
import { Spinner } from "../../components/Spinner";
import { QueryErrorResetBoundary } from "react-query";
import { ErrorBoundary } from "react-error-boundary";
import { UnknownError } from "../../components/UnknownError";
import { IResponseError } from "../../domain/types/response";

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
