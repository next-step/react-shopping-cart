import { Section, CartList, CartTotal } from '../index';
import styled from '@emotion/styled';
import { mediaQuery } from '../../utils';
import { CartInfoType } from '../../types';

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
  cartList: CartInfoType[];
}
const SectionCartList = ({ cartList }: SectionCartListProps) => {
  return (
    <Section>
      <S.Content>
        <CartList items={cartList} />
        <CartTotal
          title="결제예상금액"
          label="결제예상금액"
          totalPrice={21700}
          buttonText="주문하기(2개)"
        />
      </S.Content>
    </Section>
  );
};

export default SectionCartList;
