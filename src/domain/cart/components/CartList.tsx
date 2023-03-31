import styled from '@emotion/styled';
import { CartItemType } from '../../../types';
import { CartItem } from '../components';
import { CartDispatchType } from '../../../context/CartContext';
import Checkbox from '../../../components/input/Checkbox';
import { CONFIRM } from '../../../constant';

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

const CartList = ({ items, cartDispatch }: CartListProps) => {
  const allChecked = () => {
    cartDispatch({ type: 'SELECT_ALL_ITEM' });
  };
  const deleteProduct = () => {
    const confirmRes = confirm(CONFIRM.CART_DELETE);
    if (confirmRes) cartDispatch({ type: 'DELETE_SELECT_ITEM' });
  };

  return (
    <S.Wrapper>
      <div className="flex justify-between items-center">
        <div className="checkbox-container">
          <Checkbox
            initValue={items.every((item) => item.select)}
            onClick={allChecked}
          />
          <label className="checkbox-label" htmlFor="checkbox">
            전체 선택
          </label>
        </div>
        <button className="delete-button" onClick={deleteProduct}>
          선택 삭제
        </button>
      </div>

      <S.H3>든든배송 상품({items.length}개)</S.H3>
      <hr className="divide-line-gray mt-10" />
      {items.map((item) => (
        <CartItem
          key={item.id}
          productInfo={item}
          cartDispatch={cartDispatch}
        />
      ))}
      {items.length === 0 && <div>장바구니가 비어있습니다.</div>}
    </S.Wrapper>
  );
};

export default CartList;
