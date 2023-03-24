import * as Styled from './Item.styles';
import { ProductType } from 'types';

type CartItemProps = ProductType;

const CartItem = ({ image, price, name }: CartItemProps) => {
  return (
    <Styled.Layout display={'flex'} justifyContent={'space-between'}>
      <Styled.LeftFlexBox display={'flex'}>
        <Styled.CheckBox type={'checkbox'} name="checkbox" />
        <Styled.CartItemImage src={image} alt={name} />
        <Styled.CartItemName>{name}</Styled.CartItemName>
      </Styled.LeftFlexBox>
      <Styled.RightFlexBox display={'flex'} flexDirection="column" justifyContent={'center'} alignItems={'center'}>
        <Styled.CartRemoveButton />
        <Styled.CartInputNumberContainer display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <Styled.CartInputNumber type="number" />
          <div>
            <Styled.CartInputNumberButton>▲</Styled.CartInputNumberButton>
            <Styled.CartInputNumberButton>▼</Styled.CartInputNumberButton>
          </div>
        </Styled.CartInputNumberContainer>
        <Styled.CartPriceText>{price}원</Styled.CartPriceText>
      </Styled.RightFlexBox>
    </Styled.Layout>
  );
};

export default CartItem;
