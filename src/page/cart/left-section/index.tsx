import { CartItem } from "types/type";
import Item from "./item";

type LeftSectionProps = {
  carts: CartItem[];
};
const LeftSection = ({ carts }: LeftSectionProps) => {
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
      <h3 className="cart-title">든든배송 상품(3개)</h3>
      <hr className="divide-line-gray mt-10" />
      {carts.map((item: CartItem) => (
        <Item item={item} />
      ))}
    </section>
  );
};

export default LeftSection;
