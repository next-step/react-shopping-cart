import Item from "./item";
import { cartsState, useCart } from "hooks/cart/useCart";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import CheckBox from "components/common/checkBox";
import Button from "components/common/button";
import Divider from "components/common/dvider";
import { handleModal } from "common/modal";
import { useCheckBox } from "hooks/\buseCheckBox";
import { useCartList } from "hooks/cart/useCartList";

const cartOrderText = (items: UserCart[]) => {
  return items.length ? `든든배송 상품(${items.length} 개)` : "";
};

const LeftSection = () => {
  const carts = useRecoilValue(cartsState);

  const { setCarts, setAllChecked, deleteCartItems } = useCart();

  const { data, isError } = useCartList();

  const { checked: checkedAll, handleSelect: handleSelectAll } = useCheckBox();

  useEffect(() => {
    if (isError) {
      console.error("Error fetching cart list:", isError);
      alert("Failed to load cart list.");
      return;
    }

    if (data) {
      setCarts(data.map((cart) => ({ ...cart, checked: false, quantity: 1 })));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isError]);

  const handleSelect = () => {
    handleSelectAll();
    setAllChecked(!checkedAll, carts);
  };

  const handleDeleteAll = () => {
    handleModal({
      title: "고갱님",
      message:
        "확인 버튼을 누르면 정말루 다 지워집니다. 그래도 삭제 가시겠습니까?",
      onConfirm: () => deleteCartItems(carts),
    });
  };

  // useMemo, useCallBack 활용
  const isAllCheck = carts.every((item) => item.checked);

  return (
    <section className="cart-left-section">
      <div className="flex justify-between items-center">
        <CheckBox
          label="선택해제"
          onSelect={handleSelect}
          checked={isAllCheck}
        />
        <Button handleDeleteAll={handleDeleteAll} text="상품삭제" />
      </div>
      <h3 className="cart-title">{cartOrderText(carts)}</h3>
      <Divider />
      {carts.map((item: UserCart) => (
        <Item item={item} key={item.id} />
      ))}
    </section>
  );
};

export default LeftSection;
