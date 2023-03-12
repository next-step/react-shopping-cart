import styled from 'styled-components';
import { Image } from 'components/common';

const ListDetailItem = () => {
  return (
    <Layout>
      <Image src="../../../public/assets/images/product.png" alt="Pet보틀-정사각"></Image>
      <Container>
        <Box>
          <Name>Pet보틀-정사각(420ml)</Name>
          <Horizontal />
          <InfoBox>
            <Text>금액</Text>
            <Price>43,000원</Price>
          </InfoBox>
        </Box>
      </Container>
    </Layout>
  );
};
const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 280px;
  padding: 5px;
`;
const Box = styled.div`
  width: 100%;
`;
const Name = styled.span`
  font-size: 24px;
`;
const Horizontal = styled.hr``;
const InfoBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Text = styled.span``;
const Price = styled.span`
  font-size: 24px;
`;

export default ListDetailItem;
