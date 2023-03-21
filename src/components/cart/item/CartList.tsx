import styled from '@emotion/styled';
import mq from '../../../utils/style/mediaQuery';
import { useEffect, useState } from 'react';
import { CartItemType, fetchCartList } from '../../../api/cart';
import CartListItem from './CartListItem';

const S = {
  Wrapper: styled.div(
    mq({
      width: '100%',
    })
  ),
  H3: styled.h3(
    mq({
      fontSize: '20px',
      marginTop: '20px',
    })
  ),
};

const CartList = () => {
  const [cartList, setCartList] = useState<CartItemType[] | null>(null);

  const fetchCart = async () => {
    const list = await fetchCartList();
    if (list === null) return;
    setCartList(list);
  };

  useEffect(() => {
    fetchCart();
  }, []);
  return (
    <S.Wrapper>
      <div className="flex justify-between items-center">
        <div className="checkbox-container">
          <input className="checkbox" name="checkbox" type="checkbox" />
          <label className="checkbox-label" htmlFor="checkbox">
            선택해제
          </label>
        </div>
        <button className="delete-button">상품삭제</button>
      </div>

      <S.H3>든든배송 상품(3개)</S.H3>
      <hr className="divide-line-gray mt-10" />
      {cartList?.map((item) => (
        <CartListItem
          key={item.id}
          name={item.product.name}
          price={item.product.price}
          imageUrl={item.product.imageUrl}
        />
      ))}
    </S.Wrapper>
  );
};

export default CartList;
