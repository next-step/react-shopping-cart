import { LoaderIcon } from '@/assets/svgs';
import { Button, CheckBox, Divider, Header, Text } from '@/components/common';
import useHttp from '@/hooks/useHttp';
import useOnMounted from '@/hooks/useOnMounted';
import CartCard from '@/components/domain/CartCard';
import * as cartApi from '@/api/cart';
import { useCartContext } from '../CartSection/CartContext';
import { useEffect } from 'react';
import { useCheckBox } from '@/components/common/CheckBox';

const Cart = () => {
  const {
    sendRequest,
    data: cartData = [],
    loading,
  } = useHttp(cartApi.getAllCarts);

  const { carts, setCarts, setAllChecked, setAllUnChecked } = useCartContext();
  const { checked: checkedAll, handleSelect: handleSelectAll } = useCheckBox();

  useEffect(() => {
    if (cartData.length > 0) {
      setCarts(cartData.map((cart) => ({ ...cart, checked: false })));
    }
  }, [cartData]);

  useOnMounted(() => {
    sendRequest();
  });

  const handleSelect = () => {
    handleSelectAll();
    return checkedAll ? setAllUnChecked() : setAllChecked();
  };

  return (
    <section className="cart-section">
      <Header title="장바구니" />
      <div className="flex">
        <section className="cart-left-section">
          <div className="flex justify-between items-center">
            <CheckBox
              label="선택해제"
              checked={checkedAll}
              onSelect={handleSelect}
            />
            <Button type="outline">상품삭제</Button>
          </div>
          <Text as="h3" className="cart-title" loading={loading}>
            든든배송 상품{carts.length}개
          </Text>
          {loading ? (
            <LoaderIcon />
          ) : (
            <>
              {carts.map((cart) => (
                <div key={cart.id}>
                  <Divider type="gray" />
                  <CartCard cart={cart} />
                </div>
              ))}
            </>
          )}
        </section>
        <section className="cart-right-section">
          <div className="cart-right-section__top">
            <Text as="h3" className="cart-title">
              결제예상금액
            </Text>
          </div>
          <Divider type="thin" />
          <div className="cart-right-section__bottom">
            <div className="flex justify-between p-20 mt-20">
              <Text highlight>결제예상금액</Text>
              <Text highlight>21,800원</Text>
            </div>
            <div className="flex-center mt-30 mx-10">
              <Button>주문하기(3개)</Button>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Cart;
