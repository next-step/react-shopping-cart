import * as Styled from './CartItem.styles';
import { CartProductType } from 'types';
import { useCartItem } from 'hooks';

type CartItemProps = CartProductType;

const CartItem = ({ id, image, price, name, isOrder, amount }: CartItemProps) => {
  const currentCartItem = { id, image, price: price, name, amount, isOrder };
  const { handleIncreaseButton, handleDecreaseButton, inputNumber, handleRemoveButton, handleCheckBox } =
    useCartItem(currentCartItem);

  return (
    <Styled.Contianer>
      <Styled.LeftBox>
        <Styled.CheckBox type={'checkbox'} name="checkbox" onChange={handleCheckBox} checked={isOrder} />
        <Styled.CartItemImage src={image} alt={name} />
        <Styled.CartItemName>{name}</Styled.CartItemName>
      </Styled.LeftBox>
      <Styled.RightBox>
        <Styled.CartRemoveButton onClick={handleRemoveButton} />
        <Styled.CartInputContainer>
          <Styled.CartInputNumber type="text" value={inputNumber} readOnly={true} />
          <div>
            <Styled.CartInputNumberButton onClick={handleIncreaseButton}>▲</Styled.CartInputNumberButton>
            <Styled.CartInputNumberButton onClick={handleDecreaseButton}>▼</Styled.CartInputNumberButton>
          </div>
        </Styled.CartInputContainer>

        <Styled.CartPriceText>{price * inputNumber}원</Styled.CartPriceText>
      </Styled.RightBox>
    </Styled.Contianer>
  );
};

export default CartItem;
