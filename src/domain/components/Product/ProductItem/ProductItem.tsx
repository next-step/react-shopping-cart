import * as Styled from './ProductItem.styles';
import { ItemProps } from './ProductItem.types';
import useProductItem from 'domain/components/hooks/useProductItem';

const ProductItem = ({ name, price, image, id }: ItemProps) => {
  const currentItem = { name, price, image, id };

  const { addToCart, moveToProductDetailPage } = useProductItem(currentItem);

  return (
    <Styled.Layout>
      <Styled.ItemImage src={image} alt={name} onClick={moveToProductDetailPage} />
      <Styled.FlexContainer>
        <Styled.FlexBox>
          <Styled.NameText>{name}</Styled.NameText>
          <Styled.PriceText>{price}원</Styled.PriceText>
        </Styled.FlexBox>
        <Styled.CartIcon onClick={addToCart} data-testid="cart-button" />
      </Styled.FlexContainer>
    </Styled.Layout>
  );
};

export default ProductItem;
