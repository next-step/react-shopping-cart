import { CartItem } from "types/type";
import Item from "./item";
import { useRecoilValue } from "recoil";
import { cartState, tempCartState, useCart } from "hooks/cart";
import { useEffect, useState } from "react";
import { handleModal } from "common/modal";

const LeftSection = () => {
  const carts = useRecoilValue(cartState);
  const tempCart = useRecoilValue(tempCartState);

  const [checked, setChecked] = useState(false);

  const { addShopingCart, updateCartQuantity, deleteCartItem } = useCart();

  const isAllChecked = () => {
    return tempCart.length === carts.length;
  };

  useEffect(() => {
    // eslint-disable-next-line array-callback-return
    carts.map((item: CartItem) => {
      addShopingCart(checked, item);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked]);

  const cartOrderText = () => {
    return carts.length ? `든든배송 상품(${carts.length}개)` : "";
  };

  const handleDeleteAll = () => {
    handleModal({
      title: "고갱님",
      message:
        "확인 버튼을 누르면 정말루 다 지워집니다. 그래도 삭제 가시겠습니까?",
      onConfirm: () =>
        // eslint-disable-next-line array-callback-return
        carts.map((item: CartItem) => {
          deleteCartItem(item.id);
        }),
    });
  };

  return (
    <section className="cart-left-section">
      <div className="flex justify-between items-center">
        <div className="checkbox-container">
          <input
            className="checkbox"
            name="checkbox"
            type="checkbox"
            readOnly
            checked={isAllChecked()}
            onChange={() => setChecked(!checked)}
          />
          <label className="checkbox-label" htmlFor="checkbox">
            선택해제
          </label>
        </div>
        <button className="delete-button" onClick={() => handleDeleteAll()}>
          상품삭제
        </button>
      </div>
      <h3 className="cart-title">{cartOrderText()}</h3>
      <hr className="divide-line-gray mt-10" />
      {carts.map((item: CartItem) => (
        <Item
          item={item}
          key={item.id}
          addShopingCart={addShopingCart}
          updateCartQuantity={updateCartQuantity}
          deleteCartItem={deleteCartItem}
          isAllChecked={isAllChecked}
        />
      ))}
    </section>
  );
};

export default LeftSection;
