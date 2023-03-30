import { CartItem } from "types/type";
import Item from "./item";
import { useCart, useCartList, useDeleteCart } from "hooks/cart";
import { useEffect, useState } from "react";
import { handleModal } from "common/modal";
import { useOrder } from "hooks/order";

const cartOrderText = (items: CartItem[]) => {
  return items.length ? `든든배송 상품(${items.length}개)` : "";
};

const LeftSection = () => {
  const { carts, setCarts, addTempAllCart } = useCart();

  const { data, isError } = useCartList();

  const { deleteCartItem } = useDeleteCart();

  // const tempCart = useRecoilValue(tempOrderState);

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (isError) {
      console.error("Error fetching cart list:", isError);
      alert("Failed to load cart list.");
      return;
    }

    console.log("data", data)

    if (data) {
      setCarts(data.map((cart) => ({ ...cart, checked: false, quantity: 1 })));
    }
  }, [data, isError, setCarts]);

  useEffect(() => {
    addTempAllCart(
      checked,
      carts
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked]);

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

  console.log("carts", carts)

  return (
    <section className="cart-left-section">
      <div className="flex justify-between items-center">
        <div className="checkbox-container">
          <input
            className="checkbox"
            name="checkbox"
            type="checkbox"
            readOnly
            // checked={tempCart.length === carts.length}
            checked={checked}
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
      <h3 className="cart-title">{cartOrderText(carts)}</h3>
      <hr className="divide-line-gray mt-10" />
      {carts.map((item: CartItem) => (
        <Item item={item} key={item.id} isAllChecked={checked} />
      ))}
    </section>
  );
};

export default LeftSection;
