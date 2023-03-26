import { useProducts } from 'hooks';
import { useParams } from 'react-router-dom';
import * as Styled from './DetailItem.styles';

const DetailItem = () => {
  const params = useParams();
  const { products } = useProducts();
  const { id } = params;

  const currentDetailItem = products.filter((product) => product.id === Number(id))[0];

  // 리덕스 스토어에 있는 productList렌더링하기!

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
        <Styled.CartButton>장바구니</Styled.CartButton>
      </Styled.Container>
    </Styled.Layout>
  );
};

export default DetailItem;
