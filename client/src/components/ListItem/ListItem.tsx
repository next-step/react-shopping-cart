import useCart from 'hooks/useCart';
import * as Styled from './ListItem.styles';
import { ListItemProp } from './ListItem.types';

const ListItem = ({ name, price, image }: ListItemProp) => {
  const { addCart } = useCart();

  return (
    <Styled.Layout>
      <Styled.ListItemImage src={image} alt="Pet보틀-정사각" />
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

export default ListItem;
