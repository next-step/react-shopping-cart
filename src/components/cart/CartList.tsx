import styled from '@emotion/styled';
import { CartItemType } from '../../types';
import CartItem from './CartItem';

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
  cartList: CartItemType[];
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

      <S.H3>든든배송 상품({cartList.length}개)</S.H3>
      <hr className="divide-line-gray mt-10" />
      {cartList.length > 0 ? (
        cartList.map((item) => (
          <CartItem
            key={item.id}
            name={item.product.name}
            price={item.product.price}
            imageUrl={item.product.imageUrl}
          />
        ))
      ) : (
        <div>장바구니가 비어있습니다.</div>
      )}
    </S.Wrapper>
  );
};

export default CartList;
