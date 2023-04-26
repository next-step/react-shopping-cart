import { useParams } from 'react-router-dom';
import * as Styled from './ProductDetailItem.styles';
import type { ProductDetailItemProps } from './ProductDetailItem.types';
import useProductItem from 'domain/components/hooks/useProductItem';

const ProductDetailItem = ({ products }: ProductDetailItemProps) => {
  const params = useParams();
  const { id } = params;

  const currentDetailItem = products.filter((product) => product.id === Number(id))[0];
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
        <Styled.CartButton onClick={addToCart} theme="brown" data-testid="cart-brown-button">
          장바구니
        </Styled.CartButton>
      </Styled.ItemInfoContainer>
    </Styled.Container>
  );
};

export default ProductDetailItem;
