import React, { useState } from "react";
import { useCart, useCartItemHandlers } from "../../hooks";
import { useNavigate } from "react-router-dom";
import { CartItems } from "../../components/CartItems";
import EstimatedPaymentSide from "../../components/EstimatedPaymentSide/EstimatedPaymentSide";
import { SectionHeader } from "../../components/SectionHeader";

const template = (children: React.ReactNode) => <div>{children}</div>;

function Cart() {
  const navigate = useNavigate();
  const [errorMessage, setError] = useState<string | null>(null);

  const {
    status,
    error,
    cart,
    values: { estimatedPrice, allChecked, checkedItems },
  } = useCart();

  const { toggleAllCheck, deleteCheckedItems, cartItemHandlers } = useCartItemHandlers({ setError });

  if (status === "loading") {
    return template("불러오고 있어요"); // not working.. TODO: 템플릿 작업
  }

  if (status === "error") {
    return template(error.message); // not working.. TODO: 템플릿 작업
  }

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <section className="cart-section">
      {errorMessage && <div>{errorMessage}</div>}
      <SectionHeader title="장바구니" />

      <div className="flex">
        <section className="cart-left-section">
          <div className="flex justify-between items-center">
            <div className="checkbox-container">
              <input
                className="checkbox"
                name="checkbox"
                type="checkbox"
                readOnly
                defaultChecked={allChecked}
                onChange={toggleAllCheck}
              />
              <label className="checkbox-label" htmlFor="checkbox">
                선택해제
              </label>
            </div>
            <button className="delete-button" onClick={deleteCheckedItems}>
              상품삭제
            </button>
          </div>
          {cart?.items?.length > 0 && (
            <CartItems items={cart.items} title={`든든배송 상품(${cart.items.length}개)`} handlers={cartItemHandlers} />
          )}
        </section>
        <section className="cart-right-section">
          <EstimatedPaymentSide
            title="결제예상금액"
            subtitle="결제예상금액"
            estimatedPrice={estimatedPrice}
            label={`주문하기(${checkedItems.length})개`}
            onClick={handleCheckout}
          />
        </section>
      </div>
    </section>
  );
}

export default Cart;
