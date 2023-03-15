import Section from '../frame/Section';
import CartList from './item/CartList';
import CartTotal from './item/CartTotal';
import styled from '@emotion/styled';
import mq from '../../utils/style/mq';

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
  return (
    <Section>
      <S.Content>
        <CartList />
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
