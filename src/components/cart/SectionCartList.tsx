import Section from '../common/Section';
import CartList from './CartList';
import CartTotal from './CartTotal';
import styled from '@emotion/styled';
import mq from '../../utils/style/mediaQuery';
import { useEffect, useState } from 'react';
import { CartItemType, fetchCartList } from '../../api/cart';

const S = {
  Content: styled.div(
    mq({
      display: 'grid',
      gridTemplateColumns: ['1fr', '1fr', '2fr 1fr'],
      columnGap: ['0', '0', '50px'],
      rowGap: ['50px', '50px', '0'],
      margin: ['0 0 100px'],
    })
  ),
};

const SectionCartList = () => {
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
    <Section>
      <S.Content>
        <CartList cartList={cartList} />
        <CartTotal
          title="결제예상금액"
          totalText="결제예상금액"
          totalPrice={21700}
          buttonText="주문하기(2개)"
        />
      </S.Content>
    </Section>
  );
};

export default SectionCartList;
