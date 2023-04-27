import * as Styled from './CartItem.styles';
import type { CartProductType } from 'domain/types';
import useCartItem from 'domain/components/hooks/useCartItem';

type CartItemProps = CartProductType;

const CartItem = ({ id, image, price, name, isOrder, amount }: CartItemProps) => {
  const currentCartItem = { id, image, price, name, amount, isOrder };
  const { increaseCartItem, decreaseCartItem, cartIteminput, updateOrder } = useCartItem(currentCartItem);

  return (
    <Styled.Contianer>
      <Styled.LeftBox>
        <Styled.CheckBox
          type={'checkbox'}
          name="checkbox"
          onChange={updateOrder}
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
          <Styled.CartInputNumber type="text" value={cartIteminput} readOnly={true} />
          <div>
            <Styled.CartInputNumberButton onClick={increaseCartItem}>▲</Styled.CartInputNumberButton>
            <Styled.CartInputNumberButton onClick={decreaseCartItem}>▼</Styled.CartInputNumberButton>
          </div>
        </Styled.CartInputContainer>
        <Styled.CartPriceText>{price * cartIteminput}원</Styled.CartPriceText>
      </Styled.RightBox>
    </Styled.Contianer>
  );
};

export default CartItem;
