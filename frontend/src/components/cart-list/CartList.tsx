import CartContent from "./CartContent";

import { CartDetail } from "../../types";

type CartListProps = {
  carts: CartDetail[];
};

export default function CartList({ carts }: CartListProps) {
  return (
    <section className="cart-left-section">
      <div className="flex justify-between items-center">
        <div className="checkbox-container">
          <input
            className="checkbox"
            name="checkbox"
            type="checkbox"
            checked={true}
          />
          <label className="checkbox-label" htmlFor="checkbox">
            선택해제
          </label>
        </div>
        <button className="delete-button">상품삭제</button>
      </div>
      <h3 className="cart-title">든든배송 상품({carts.length}개)</h3>
      <hr className="divide-line-gray mt-10" />
      {carts.map((cart) => (
        <div key={cart.id}>
          <CartContent cart={cart} />
          <hr className="divide-line-thin mt-10" />
        </div>
      ))}
    </section>
  );
}
