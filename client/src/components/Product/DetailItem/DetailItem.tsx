import { useProducts, useCart, useRouter } from 'hooks';
import { useParams } from 'react-router-dom';
import * as Styled from './DetailItem.styles';

const DetailItem = () => {
  const params = useParams();
  const { products } = useProducts();
  const { AddCart } = useCart();
  const { push } = useRouter();
  const { id } = params;
  // 리덕스 스토어에 있는 productList렌더링하기!
  const currentDetailItem = products.filter((product) => product.id === Number(id))[0];

  // Q1 . 기능이 한가지 밖에 없는데 커스텀 훅으로 추상화 시키는게 맞나?
  const handleCartButton = () => {
    AddCart({ ...currentDetailItem, isOrder: false, amount: 1 });
    push('/carts');
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
        <Styled.CartButton onClick={handleCartButton}>장바구니</Styled.CartButton>
      </Styled.Container>
    </Styled.Layout>
  );
};

export default DetailItem;
