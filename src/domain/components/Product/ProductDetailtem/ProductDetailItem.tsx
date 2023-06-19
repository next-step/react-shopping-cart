import * as Styled from './ProductDetailItem.styles';
import type { ProductDetailItemProps } from './ProductDetailItem.types';
import useProductItem from 'domain/components/hooks/useProductItem';

const ProductDetailItem = ({ id, image, name, price }: ProductDetailItemProps) => {
  const currentDetailItem = { id, image, name, price };
  const { addToCart } = useProductItem(currentDetailItem);

  return (
    <Styled.Container>
      <Styled.ItemImage src={currentDetailItem.image} alt={currentDetailItem.name} width={640}></Styled.ItemImage>
      <Styled.ItemInfoContainer>
        <Styled.Name>{currentDetailItem.name}</Styled.Name>
        <Styled.Horizontal />
        <Styled.ItemInfoBox>
          <Styled.Text>금액</Styled.Text>
          <Styled.Price>{currentDetailItem.price}</Styled.Price>
        </Styled.ItemInfoBox>
        <Styled.CartButton onClick={addToCart} theme="brown">
          장바구니
        </Styled.CartButton>
      </Styled.ItemInfoContainer>
    </Styled.Container>
  );
};

export default ProductDetailItem;
