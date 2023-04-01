import styled from '@emotion/styled';
import { CartItemType } from '../../../types';
import { CartItem } from '../components';
import Checkbox from '../../../components/input/Checkbox';
import { CartDispatchFunctionType } from '../hooks/useCart';
import { DELETE_TYPE } from '../../../constant';

const S = {
  Wrapper: styled.div({
    width: '100%',
  }),
  H3: styled.h3({
    fontSize: '20px',
    marginTop: '20px',
  }),
  H4: styled.h4({
    marginTop: '50px',
    textAlign: 'center',
    fontSize: '18px',
  }),
};

interface CartListProps {
  items: CartItemType[];
  cartDispatch: CartDispatchFunctionType;
}

const CartList = ({ items, cartDispatch }: CartListProps) => {
  return (
    <S.Wrapper>
      <div className="flex justify-between items-center">
        <div className="checkbox-container">
          <Checkbox
            initValue={items.every((item) => item.select)}
            onClick={cartDispatch.selectAllProduct}
          />
          <label className="checkbox-label" htmlFor="checkbox">
            전체 선택
          </label>
        </div>
        <button
          className="delete-button"
          onClick={() => cartDispatch.deleteProduct(DELETE_TYPE.SELECT)}
        >
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
      {items.length === 0 && <S.H4>장바구니가 비어있습니다.</S.H4>}
    </S.Wrapper>
  );
};

export default CartList;
