import * as Styled from './CartItem.styles';
import { CartProductType } from 'types';
import { useCartItem } from 'hooks';

type CartItemProps = CartProductType;

const CartItem = ({ id, image, price, name, isOrder, amount }: CartItemProps) => {
  const currentCartItem = { id, image, price: price, name, amount, isOrder };
  const { handleIncreaseButton, handleDecreaseButton, inputNumber, handleRemoveButton, handleCheckBox } =
    useCartItem(currentCartItem);

  return (
    <Styled.Layout display={'flex'} justifyContent={'space-between'}>
      <Styled.LeftFlexBox>
        <Styled.CheckBox type={'checkbox'} name="checkbox" onChange={handleCheckBox} checked={isOrder} />
        <Styled.CartItemImage src={image} alt={name} />
        <Styled.CartItemName>{name}</Styled.CartItemName>
      </Styled.LeftFlexBox>
      <Styled.RightFlexBox>
        <Styled.CartRemoveButton onClick={handleRemoveButton} />
        <Styled.FlexContainer>
          <Styled.CartInputNumber type="text" value={inputNumber} readOnly={true} />
          <div>
            <Styled.CartInputNumberButton onClick={handleIncreaseButton}>▲</Styled.CartInputNumberButton>
            <Styled.CartInputNumberButton onClick={handleDecreaseButton}>▼</Styled.CartInputNumberButton>
          </div>
        </Styled.FlexContainer>

        <Styled.CartPriceText>{price * inputNumber}원</Styled.CartPriceText>
      </Styled.RightFlexBox>
    </Styled.Layout>
  );
};

export default CartItem;
