import * as Styled from './Item.styles';
import { CartProductType } from 'types';
import { useCartNumberInput } from 'hooks';

type CartItemProps = CartProductType;

const CartItem = ({ id, image, price, name, isOrder, amount }: CartItemProps) => {
  const { increaseNumber, decreaseNumber, number } = useCartNumberInput();

  const currentCartItem = { id, image, price: price, name, amount: number };

  return (
    <Styled.Layout display={'flex'} justifyContent={'space-between'}>
      <Styled.LeftFlexBox>
        <Styled.CheckBox
          type={'checkbox'}
          name="checkbox"
          // onChange={() => DeleteOrderProduct(currentCartItem)}
          checked={isOrder}
        />
        <Styled.CartItemImage src={image} alt={name} />
        <Styled.CartItemName>{name}</Styled.CartItemName>
      </Styled.LeftFlexBox>
      <Styled.RightFlexBox>
        <Styled.CartRemoveButton />
        <Styled.FlexContainer>
          <Styled.CartInputNumber type="text" value={amount} readOnly={true} />
          <div>
            <Styled.CartInputNumberButton onClick={increaseNumber}>▲</Styled.CartInputNumberButton>
            <Styled.CartInputNumberButton onClick={decreaseNumber}>▼</Styled.CartInputNumberButton>
          </div>
        </Styled.FlexContainer>
        <Styled.CartPriceText>{price * amount}원</Styled.CartPriceText>
      </Styled.RightFlexBox>
    </Styled.Layout>
  );
};

export default CartItem;
