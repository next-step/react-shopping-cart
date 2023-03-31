import { CartList, CartTotal } from '../components';
import styled from '@emotion/styled';
import { mediaQuery } from '../../../utils';
import { CartListType } from '../../../context/CartContext';
import { CartDispatchFunctionType } from '../hooks/useCart';

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
  cartState: CartListType;
  cartDispatch: CartDispatchFunctionType;
}
const CartLayout = ({ cartState, cartDispatch }: SectionCartListProps) => {
  return (
    <S.Content>
      <CartList items={cartState.products} cartDispatch={cartDispatch} />
      <CartTotal
        title="결제예상금액"
        label="결제예상금액"
        totalPrice={cartState.totalPrice}
        buttonText={`주문하기(${cartState.totalCount}개)`}
      />
    </S.Content>
  );
};

export default CartLayout;
