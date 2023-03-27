import { useProductItem } from 'hooks';
import * as Styled from './Item.styles';
import { ItemProps } from './Item.types';

const ProductItem = ({ name, price, image, id }: ItemProps) => {
  const currentItem = { name, price, image, id };
  const { handleCartButton, handleProductImage } = useProductItem(currentItem);

  return (
    <Styled.Layout data-testid="product">
      <Styled.ItemImage src={image} alt={name} onClick={handleProductImage} />
      <Styled.FlexContainer display="flex" justifyContent="space-between">
        <Styled.FlexBox display="flex" flexDirection="column">
          <Styled.NameText>{name}</Styled.NameText>
          <Styled.PriceText>{price}원</Styled.PriceText>
        </Styled.FlexBox>
        <Styled.CartIcon onClick={handleCartButton} />
      </Styled.FlexContainer>
    </Styled.Layout>
  );
};

export default ProductItem;
