import React from "react";
import sampleCartItems from "../../samplejson/cart";
import { CartItem } from "../../components/CartItem";

function Cart() {
  return (
    <section className="cart-section">
      <header className="flex-col-center mt-20">
        <h2 className="cart-section__title">장바구니</h2>
        <hr className="divide-line mt-20" />
      </header>

      <div className="flex">
        <section className="cart-left-section">
          <div className="flex justify-between items-center">
            <div className="checkbox-container">
              <input className="checkbox" name="checkbox" type="checkbox" checked />
              <label className="checkbox-label" htmlFor="checkbox">
                선택해제
              </label>
            </div>
            <button className="delete-button">상품삭제</button>
          </div>
          <h3 className="cart-title">든든배송 상품(3개)</h3>
          {sampleCartItems.map((cartItem) => (
            <React.Fragment key={cartItem.id}>
              <CartItem item={cartItem} />
              <hr className="divide-line-gray mt-10" />
            </React.Fragment>
          ))}
        </section>
      </div>
    </section>
  );
}

export default Cart;
