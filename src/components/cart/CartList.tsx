import styled from '@emotion/styled';
import mq from '../../utils/style/mediaQuery';
import { CartItemType } from '../../types';
import CartItem from './CartItem';

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

interface CartListProps {
  cartList: CartItemType[] | null;
}

const CartList = ({ cartList }: CartListProps) => {
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
        <CartItem
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
