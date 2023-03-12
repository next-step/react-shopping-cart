import * as Styled from './ListDetailItem.styles';

const ListDetailItem = () => {
  return (
    <Styled.Layout>
      <Styled.ItemImage
        src="assets/images/product.png"
        alt="Pet보틀-정사각"
        width={480}
        height={480}
      ></Styled.ItemImage>
      <Styled.Container>
        <Styled.Name>Pet보틀-정사각(420ml)</Styled.Name>
        <Styled.Horizontal />
        <Styled.FlexBox display={'flex'} justifyContent={'space-between'}>
          <Styled.Text>금액</Styled.Text>
          <Styled.Price>43,000원</Styled.Price>
        </Styled.FlexBox>
        <Styled.CartButton>장바구니</Styled.CartButton>
      </Styled.Container>
    </Styled.Layout>
  );
};

export default ListDetailItem;
