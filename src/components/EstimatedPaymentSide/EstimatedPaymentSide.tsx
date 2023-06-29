import React from "react";

type TProps = {
  title: string;
  subtitle: string;
  estimatedPrice: number;
  label: string;
  onClick?: () => void;
};

function EstimatedPaymentSide({ title, subtitle, estimatedPrice, label, onClick }: TProps) {
  return (
    <div>
      <div className="cart-right-section__top">
        <h3 className="cart-title">{title}</h3>
      </div>
      <hr className="divide-line-thin" />
      <div className="cart-right-section__bottom">
        <div className="flex justify-between p-20 mt-20">
          <span className="highlight-text">{subtitle}</span>
          <span className="highlight-text">{estimatedPrice.toLocaleString()}원</span>
        </div>
        <div className="flex-center mt-30 mx-10">
          <button className="primary-button flex-center" onClick={() => onClick?.()}>
            {label}
          </button>
        </div>
      </div>
    </div>
  );
}

export default EstimatedPaymentSide;
