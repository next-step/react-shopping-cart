import { useCart, useRouter } from 'hooks';
import * as Styled from './Item.styles';
import { ItemProps } from './Item.types';

const ProductItem = ({ name, price, image, id }: ItemProps) => {
  const { addCart } = useCart();
  const { push } = useRouter();

  return (
    // Item을 누르면 productDetail Page로이동
    <Styled.Layout data-testid="product">
      <Styled.ItemImage src={image} alt={name} onClick={() => push('/product/' + id)} />
      <Styled.FlexContainer display="flex" justifyContent="space-between">
        <Styled.FlexBox display="flex" flexDirection="column">
          <Styled.NameText>{name}</Styled.NameText>
          <Styled.PriceText>{price}원</Styled.PriceText>
        </Styled.FlexBox>
        <Styled.CartIcon onClick={() => addCart({ name, price, image, id })} />
      </Styled.FlexContainer>
    </Styled.Layout>
  );
};

export default ProductItem;
