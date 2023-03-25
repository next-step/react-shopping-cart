import useCart from 'hooks/useCart';
import * as Styled from './Item.styles';
import { ItemProps } from './Item.types';

const Item = ({ name, price, image }: ItemProps) => {
  const { addCart } = useCart();

  return (
    <Styled.Layout data-testid="product">
      <Styled.ItemImage src={image} alt="Pet보틀-정사각" />
      <Styled.FlexContainer display="flex" justifyContent="space-between">
        <Styled.FlexBox display="flex" flexDirection="column">
          <Styled.NameText>{name}</Styled.NameText>
          <Styled.PriceText>{price}원</Styled.PriceText>
        </Styled.FlexBox>
        <Styled.CartIcon onClick={() => addCart({ name, price, image })} />
      </Styled.FlexContainer>
    </Styled.Layout>
  );
};

export default Item;
