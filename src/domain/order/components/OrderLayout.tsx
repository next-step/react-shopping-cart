import { CartTotal } from '../../cart/components';
import styled from '@emotion/styled';
import { mediaQuery } from '../../../utils';
import { CartDispatchType, CartType } from '../../../context/CartContext';
import OrderList from './OrderList';

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
  cartState: CartType;
  cartDispatch: CartDispatchType;
}
const OrderLayout = ({ cartState, cartDispatch }: SectionCartListProps) => {
  return (
    <S.Content>
      {/*<OrderList items={} cartDispatch={} />*/}
      <CartTotal
        title="결제금액"
        label="총 결제금액"
        totalPrice={cartState.totalPrice}
        buttonText={`주문하기(${cartState.totalCount}개)`}
      />
    </S.Content>
  );
};
// 총 결제금액
// 21,800원 결제하기

export default OrderLayout;
