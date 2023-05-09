import React from "react";
import { numberFormat } from "../../../utils/numberFormat";

export type TotalPriceProps = {
  title: string;
  price: number;
  children: React.ReactNode;
};

const TotalPrice = ({ title, price, children }: TotalPriceProps) => {
  return (
    <section className="cart-right-section">
      <div className="cart-right-section__top">
        <h3 className="cart-title">{title}</h3>
      </div>
      <hr className="divide-line-thin" />
      <div className="cart-right-section__bottom">
        <div className="flex justify-between p-20 mt-20 items-center">
          <span className="highlight-text">{title}</span>
          <span className="highlight-text">{numberFormat(price)}원</span>
        </div>
        {children}
      </div>
    </section>
  );
};

export default TotalPrice;
