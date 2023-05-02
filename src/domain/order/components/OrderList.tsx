import styled from '@emotion/styled';
import { CartItemType } from '../../../types';
import { CartDispatchType } from '../../../context/CartContext';
import OrderItem from './OrderItem';

const S = {
  Wrapper: styled.div({
    width: '100%',
  }),
  H3: styled.h3({
    fontSize: '20px',
    marginTop: '20px',
  }),
};

interface CartListProps {
  items: CartItemType[];
  cartDispatch: CartDispatchType;
}

const OrderList = ({ items, cartDispatch }: CartListProps) => {
  return (
    <S.Wrapper>
      <S.H3>주문 상품(3건)</S.H3>
      <hr className="divide-line-gray mt-10" />
      {items.map((item) => (
        <OrderItem
          key={item.id}
          productInfo={item}
          cartDispatch={cartDispatch}
        />
      ))}
      {items.length === 0 && <div>장바구니가 비어있습니다.</div>}
    </S.Wrapper>
  );
};

export default OrderList;
