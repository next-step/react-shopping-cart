import * as Styled from './CartItem.styles';
import type { CartProductType } from 'types';
import useCartItem from './hooks/useCartItem';

type CartItemProps = CartProductType;

const CartItem = ({ id, image, price, name, isOrder, amount }: CartItemProps) => {
  const currentCartItem = { id, image, price, name, amount, isOrder };
  const { increaseInputNumber, decreaseInputNumber, inputNumber, updateCart } = useCartItem(currentCartItem);

  return (
    <Styled.Contianer>
      <Styled.LeftBox>
        <Styled.CheckBox
          type={'checkbox'}
          name="checkbox"
          onChange={updateCart}
          checked={isOrder}
          data-testid="checkbox"
        />
        <Styled.CartItemBox>
          <Styled.CartItemImage src={image} alt={name} />
          <Styled.CartItemName>{name}</Styled.CartItemName>
        </Styled.CartItemBox>
      </Styled.LeftBox>
      <Styled.RightBox>
        <Styled.CartInputContainer>
          <Styled.CartInputNumber type="text" value={inputNumber} readOnly={true} />
          <div>
            <Styled.CartInputNumberButton onClick={increaseInputNumber}>▲</Styled.CartInputNumberButton>
            <Styled.CartInputNumberButton onClick={decreaseInputNumber}>▼</Styled.CartInputNumberButton>
          </div>
        </Styled.CartInputContainer>
        <Styled.CartPriceText>{price * inputNumber}원</Styled.CartPriceText>
      </Styled.RightBox>
    </Styled.Contianer>
  );
};

export default CartItem;
