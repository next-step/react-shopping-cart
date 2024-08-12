import { OrderSummary } from "./OrderSummary";
import { CartItemsList } from "./CartItemsList";
import { CartResetButton } from "./CartResetButton";
import { ToggleAllCheckbox } from "./ToggleAllCheckbox";
import { CartItemSummary } from "./CartItemSummary";
import { CartHeader } from "./CartTitleDivider";
import { CartLeftLayout } from "./CartLeft";
import { CartRightLayout } from "./CartRight";
import { CartTopLayout } from "./CartTop";
import { CartBodyLayout } from "./CartBody";
import Flex from "../../ComponentsPrototype/Layout/Flex";
import { ErrorBoundary } from "react-error-boundary";
export const CartView = () => {
  return (
    <>
      <CartTopLayout>
        <CartHeader />
      </CartTopLayout>
      <CartBodyLayout>
        <CartLeftLayout>
          <ErrorBoundary fallback={<div>left section error</div>}>
            <Flex className="flex flex-row justify-between ">
              <ErrorBoundary fallback={<div>ToggleAllCheckbox error</div>}>
                <ToggleAllCheckbox />
              </ErrorBoundary>
              <CartResetButton />
            </Flex>
            <CartItemSummary />
            <CartItemsList />
          </ErrorBoundary>
        </CartLeftLayout>
        <CartRightLayout>
          <ErrorBoundary fallback={<div>right section error</div>}>
            <OrderSummary />
          </ErrorBoundary>
        </CartRightLayout>
      </CartBodyLayout>
    </>
  );
};
