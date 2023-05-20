import * as Styled from './ProductItem.styles';
import { ItemProps } from './ProductItem.types';
import useProductItem from 'domain/components/hooks/useProductItem';

const ProductItem = ({ name, price, image, id }: ItemProps) => {
  const currentItem = { name, price, image, id };

  const { addToCart, moveToProductDetailPage } = useProductItem(currentItem);

  return (
    <Styled.Layout>
      <Styled.ItemImage src={image} alt={name} onClick={moveToProductDetailPage} data-testid="product-image" />
      <Styled.FlexContainer>
        <Styled.FlexBox>
          <Styled.NameText data-testid="product-name">{name}</Styled.NameText>
          <Styled.PriceText data-testid="product-price">{price}원</Styled.PriceText>
        </Styled.FlexBox>
        <Styled.CartIcon onClick={addToCart} data-testid="cart-button" />
      </Styled.FlexContainer>
    </Styled.Layout>
  );
};

export default ProductItem;
