import React, { PropsWithChildren } from "react";
import { SectionHeader } from "../../components";

interface IProps extends PropsWithChildren {
  errorMessage?: string;
}

function CartTemplate({ children, errorMessage }: IProps) {
  return (
    <section className="cart-section">
      {errorMessage && <div>{errorMessage}</div>}
      <SectionHeader title="장바구니" />
      {children}
    </section>
  );
}

export default CartTemplate;
