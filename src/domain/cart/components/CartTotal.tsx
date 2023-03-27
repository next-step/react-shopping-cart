import styled from '@emotion/styled';
import { priceFormat } from '../../../utils';

interface CartTotalProps {
  title: string;
  label: string;
  totalPrice: number;
  buttonText: string;
}

const S = {
  Wrapper: styled.div({
    width: '100%',
    height: '260px',
    border: '1px solid #dddddd',
  }),
};

const CartTotal = ({
  title,
  label,
  totalPrice,
  buttonText,
}: CartTotalProps) => {
  return (
    <S.Wrapper>
      <div className="cart-right-section__top">
        <h3 className="cart-title">{title}</h3>
      </div>
      <hr className="divide-line-thin" />
      <div className="cart-right-section__bottom">
        <div className="flex justify-between p-20 mt-20">
          <span className="highlight-text">{label}</span>
          <span className="highlight-text">{priceFormat(totalPrice)}</span>
        </div>
        <div className="flex-center mt-30 mx-10">
          <button className="primary-button flex-center">{buttonText}</button>
        </div>
      </div>
    </S.Wrapper>
  );
};

export default CartTotal;
