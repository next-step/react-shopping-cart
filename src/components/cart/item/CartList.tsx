import styled from '@emotion/styled';
import mq from '../../../utils/style/mq';

interface CartTotal {
  title: string;
  totalText: string;
  totalPrice: number;
  buttonText: string;
}

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

const CartList = () => {
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
      <div className="cart-container">
        <div className="flex gap-15 mt-10">
          <input className="checkbox" name="checkbox" type="checkbox" />
          <img
            className="w-144 h-144"
            src="./assets/images/product.png"
            alt="PET보틀-정사각(420ml)"
          />
          <span className="cart-name">PET보틀-정사각(420ml)</span>
        </div>
        <div className="flex-col-center justify-end gap-15">
          <img
            className="cart-trash-svg"
            src="./assets/svgs/trash.svg"
            alt="삭제"
          />
          <div className="number-input-container">
            <input type="number" className="number-input" value="1" />
            <div>
              <button className="number-input-button">▲</button>
              <button className="number-input-button">▼</button>
            </div>
          </div>
          <span className="cart-price">123,456원</span>
        </div>
      </div>
      <hr className="divide-line-thin mt-10" />
      <div className="cart-container">
        <div className="flex gap-15 mt-10">
          <input className="checkbox" name="checkbox" type="checkbox" />
          <img
            className="w-144 h-144"
            src="./assets/images/product.png"
            alt="PET보틀-정사각(420ml)"
          />
          <span className="cart-name">PET보틀-정사각(420ml)</span>
        </div>
        <div className="flex-col-center justify-end gap-15">
          <img
            className="cart-trash-svg"
            src="./assets/svgs/trash.svg"
            alt="삭제"
          />
          <div className="number-input-container">
            <input type="number" className="number-input" value="1" />
            <div>
              <button className="number-input-button">▲</button>
              <button className="number-input-button">▼</button>
            </div>
          </div>
          <span className="cart-price">123,456원</span>
        </div>
      </div>
      <hr className="divide-line-thin mt-10" />
      <div className="cart-container">
        <div className="flex gap-15 mt-10">
          <input className="checkbox" name="checkbox" type="checkbox" />
          <img
            className="w-144 h-144"
            src="./assets/images/product.png"
            alt="PET보틀-정사각(420ml)"
          />
          <span className="cart-name">PET보틀-정사각(420ml)</span>
        </div>
        <div className="flex-col-center justify-end gap-15">
          <img
            className="cart-trash-svg"
            src="./assets/svgs/trash.svg"
            alt="삭제"
          />
          <div className="number-input-container">
            <input type="number" className="number-input" value="1" />
            <div>
              <button className="number-input-button">▲</button>
              <button className="number-input-button">▼</button>
            </div>
          </div>
          <span className="cart-price">123,456원</span>
        </div>
      </div>
      <hr className="divide-line-thin mt-10" />
    </S.Wrapper>
  );
};

export default CartList;
