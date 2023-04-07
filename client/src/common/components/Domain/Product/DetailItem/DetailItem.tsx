import { useParams } from 'react-router-dom';
import * as Styled from './DetailItem.styles';
import type { ProductType } from 'types';
import useProductItem from '../hooks/useProductItem';

type DetailItemProps = {
  products: ProductType[];
};

const DetailItem = ({ products }: DetailItemProps) => {
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
        <Styled.CartButton onClick={addToCart} theme="brown">
          장바구니
        </Styled.CartButton>
      </Styled.ItemInfoContainer>
    </Styled.Container>
  );
};

export default DetailItem;
