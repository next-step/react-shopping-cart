import { useProductItem } from 'hooks';
import { useParams } from 'react-router-dom';
import * as Styled from './DetailItem.styles';
import type { ProductType } from 'types';
type DetailItemProps = {
  products: ProductType[];
};

const DetailItem = ({ products }: DetailItemProps) => {
  const params = useParams();
  const { id } = params;
  const currentDetailItem = products.filter((product) => product.id === Number(id))[0];
  const { handleCartButton } = useProductItem(currentDetailItem);

  return (
    <Styled.Layout>
      <Styled.ItemImage
        src={currentDetailItem.image}
        alt={currentDetailItem.name}
        width={480}
        height={480}
      ></Styled.ItemImage>
      <Styled.Container>
        <Styled.Name>{currentDetailItem.name}</Styled.Name>
        <Styled.Horizontal />
        <Styled.FlexBox display={'flex'} justifyContent={'space-between'}>
          <Styled.Text>금액</Styled.Text>
          <Styled.Price>{currentDetailItem.price}</Styled.Price>
        </Styled.FlexBox>
        <Styled.CartButton onClick={handleCartButton} theme="brown">
          장바구니
        </Styled.CartButton>
      </Styled.Container>
    </Styled.Layout>
  );
};

export default DetailItem;
