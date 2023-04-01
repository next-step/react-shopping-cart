import Item from "./item";
import CheckBox from "components/common/checkBox";
import Button from "components/common/button";
import Divider from "components/common/dvider";
import { handleModal } from "common/modal";
import { useCheckBox } from "hooks/useCheckBox";

const cartOrderText = (items: UserCart[]) => {
  return items.length ? `든든배송 상품(${items.length} 개)` : "";
};

type LeftSectionProps = {
  carts: UserCart[];
  selectCart: (cart: UserCart) => void;
  setAllChecked: (checked: boolean, carts: UserCart[]) => void;
  deleteCartItem: (itemId: number) => void;
  deleteCartItems: (items: UserCart[]) => void;
  increaseCartItemQuantity: (itemId: number) => void;
  decreaseCartItemQuantity: (itemId: number) => void;
};
const LeftSection = ({
  carts,
  selectCart,
  setAllChecked,
  deleteCartItem,
  deleteCartItems,
  increaseCartItemQuantity,
  decreaseCartItemQuantity,
}: LeftSectionProps) => {
  const { checked: checkedAll, handleSelect: handleSelectAll } = useCheckBox();

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
        <Item
          item={item}
          key={item.id}
          selectCart={selectCart}
          deleteCartItem={deleteCartItem}
          increaseCartItemQuantity={increaseCartItemQuantity}
          decreaseCartItemQuantity={decreaseCartItemQuantity}
        />
      ))}
    </section>
  );
};

export default LeftSection;
