import * as Styled from './ListItem.styles';
import { ReactComponent as CartIcon } from 'assets/svgs/cart.svg';

const ListItem = () => {
  return (
    <Styled.Layout>
      <Styled.ListItemImage src="assets/images/product.png" alt="Pet보틀-정사각" />
      <Styled.FlexContainer display="flex" justifyContent="space-between">
        <Styled.FlexBox display="flex" flexDirection="column">
          <Styled.NameText>Pet보틀-정사각(420ml)</Styled.NameText>
          <Styled.PriceText>43,000원</Styled.PriceText>
        </Styled.FlexBox>
        <CartIcon />
      </Styled.FlexContainer>
    </Styled.Layout>
  );
};

export default ListItem;
