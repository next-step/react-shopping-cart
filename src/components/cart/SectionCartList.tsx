import { Section, CartList, CartTotal } from '../index';
import styled from '@emotion/styled';
import { mediaQuery } from '../../utils';
import { CartItemType } from '../../types';

const S = {
  Content: styled.div(
    mediaQuery({
      display: 'grid',
      gridTemplateColumns: ['1fr', '1fr', '2fr 1fr'],
      columnGap: ['0', '0', '50px'],
      rowGap: ['50px', '50px', '0'],
      margin: ['0 0 100px'],
    })
  ),
};

interface SectionCartListProps {
  carts: CartItemType[];
}
const SectionCartList = ({ carts }: SectionCartListProps) => {
  return (
    <Section>
      <S.Content>
        <CartList cartList={carts} />
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
