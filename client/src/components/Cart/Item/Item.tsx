import * as Styled from './Item.styles';
import { CartProductType } from 'types';
import { useCartInputNumber, useCart } from 'hooks';

type CartItemProps = CartProductType;

const CartItem = ({ id, image, price, name, isOrder, amount }: CartItemProps) => {
  const { increaseNumber, decreaseNumber, inputNumber } = useCartInputNumber(amount);
  const { UpdateCart } = useCart();

  const currentCartItem = { id, image, price: price, name, amount: inputNumber, isOrder };

  return (
    <Styled.Layout display={'flex'} justifyContent={'space-between'}>
      <Styled.LeftFlexBox>
        <Styled.CheckBox
          type={'checkbox'}
          name="checkbox"
          onChange={() => UpdateCart({ ...currentCartItem, isOrder: !isOrder })}
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
            <Styled.CartInputNumberButton onClick={() => increaseNumber(currentCartItem)}>
              ▲
            </Styled.CartInputNumberButton>
            <Styled.CartInputNumberButton onClick={() => decreaseNumber(currentCartItem)}>
              ▼
            </Styled.CartInputNumberButton>
          </div>
        </Styled.FlexContainer>
        {isOrder ? (
          <Styled.CartPriceText>{price * amount}원</Styled.CartPriceText>
        ) : (
          <Styled.CartPriceText>{price * inputNumber}원</Styled.CartPriceText>
        )}
      </Styled.RightFlexBox>
    </Styled.Layout>
  );
};

export default CartItem;
