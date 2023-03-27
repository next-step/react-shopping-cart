import { useCart, useDialog } from 'hooks';
import { useParams } from 'react-router-dom';
import * as Styled from './DetailItem.styles';
import type { ProductType } from 'types';
type DetailItemProps = {
  products: ProductType[];
};

const DetailItem = ({ products }: DetailItemProps) => {
  const params = useParams();
  const { AddCart } = useCart();
  const { showDialogUI } = useDialog();
  const { id } = params;
  const currentDetailItem = products.filter((product) => product.id === Number(id))[0];

  // Q1 . 기능이 한가지 밖에 없는데 커스텀 훅으로 추상화 시키는게 맞나?
  const handleCartButton = async () => {
    await AddCart({ ...currentDetailItem, isOrder: false, amount: 1 });
    showDialogUI('cart');
  };

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
