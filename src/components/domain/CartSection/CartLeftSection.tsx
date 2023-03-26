import useHttp from '@/hooks/useHttp';
import * as cartApi from '@/api/cart';
import { Button, CheckBox, Divider, Text } from '@/components/common';
import CartCard from '@/components/domain/CartCard';
import { useCartContext } from '../Cart/CartContext';
import { useCheckBox } from '@/components/common/CheckBox';
import { REMOVE_CONFIRM_MESSAGE } from '@/constant/message';
import { useEffect } from 'react';
import useOnMounted from '@/hooks/useOnMounted';

const CartLeftSection = () => {
  const { sendRequest, loading, data: cartData = [] } = useHttp(cartApi.getAllCarts);
  const { carts, setCarts, setAllChecked, setAllUnChecked, removeSelectedItems } =
    useCartContext();

  const handleRemoveCartItem = () => {
    const result = confirm(REMOVE_CONFIRM_MESSAGE);
    result && removeSelectedItems();
  };
  const { checked: checkedAll, handleSelect: handleSelectAll } = useCheckBox();

  const handleSelect = () => {
    handleSelectAll();
    return checkedAll ? setAllUnChecked() : setAllChecked();
  };


  useEffect(() => {
    if (cartData.length > 0) {
      setCarts(
        cartData.map((cart) => ({ ...cart, checked: false, quantity: 1 }))
      );
    }
  }, [cartData]);

  useOnMounted(() => {
    sendRequest();
  });


  return (
    <section className="cart-left-section">
      <div className="flex justify-between items-center">
        <CheckBox
          label="선택해제"
          checked={checkedAll}
          onSelect={handleSelect}
        />
        <Button theme="outline" onClick={handleRemoveCartItem}>
          상품삭제
        </Button>
      </div>
      <Text as="h3" className="cart-title">
        든든배송 상품{carts.length}개
      </Text>
      {carts.map((cart) => (
        <div key={cart.id}>
          <Divider type="gray" />
          <CartCard cart={cart} />
        </div>
      ))}
      {loading &&
        Array.from({ length: SINGLE_PAGE_SIZE }).map((_, index) => (
          <div key={index}>
            <Divider type="gray" />
            <CartCard />
          </div>
        ))}
    </section>
  );
};

export default CartLeftSection;

const SINGLE_PAGE_SIZE = 5;
