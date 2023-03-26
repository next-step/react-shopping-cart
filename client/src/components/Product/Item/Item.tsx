import { useCart } from 'hooks';
import * as Styled from './Item.styles';
import { ItemProps } from './Item.types';
import { useNavigate } from 'react-router-dom';

const ProductItem = ({ name, price, image, id }: ItemProps) => {
  const { AddCart } = useCart();
  const navigate = useNavigate();

  return (
    // Item을 누르면 productDetail Page로이동
    <Styled.Layout data-testid="product">
      <Styled.ItemImage src={image} alt={name} onClick={() => navigate('/product/' + id)} />
      <Styled.FlexContainer display="flex" justifyContent="space-between">
        <Styled.FlexBox display="flex" flexDirection="column">
          <Styled.NameText>{name}</Styled.NameText>
          <Styled.PriceText>{price}원</Styled.PriceText>
        </Styled.FlexBox>
        <Styled.CartIcon onClick={() => AddCart({ name, price, image, id, isOrder: false, amount: 1 })} />
      </Styled.FlexContainer>
    </Styled.Layout>
  );
};

export default ProductItem;
