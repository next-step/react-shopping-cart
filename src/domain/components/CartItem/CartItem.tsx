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
          type="checkbox"
          name="checkbox"
          onChange={updateOrder}
          checked={isOrder}
          data-testid="item-checkbox"
        />
        <Styled.CartItemBox>
          <Styled.CartItemImage data-testid="cart-image" src={image} alt={name} />
          <Styled.CartItemName data-testid="cart-productName">{name}</Styled.CartItemName>
        </Styled.CartItemBox>
      </Styled.LeftBox>
      <Styled.RightBox>
        <Styled.CartInputContainer>
          <Styled.CartInputNumber type="text" value={cartIteminput} readOnly={true} data-testid="cart-input" />
          <div>
            <Styled.CartInputNumberButton onClick={increaseCartItem} data-testid="increase-button">
              ▲
            </Styled.CartInputNumberButton>
            <Styled.CartInputNumberButton onClick={decreaseCartItem} data-testid="decrease-button">
              ▼
            </Styled.CartInputNumberButton>
          </div>
        </Styled.CartInputContainer>
        <Styled.CartPriceText data-testid="cart-price">{price * cartIteminput}원</Styled.CartPriceText>
      </Styled.RightBox>
    </Styled.Contianer>
  );
};

export default CartItem;
