import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import styled from "styled-components";
import { Product as ProductType } from "../types/product";
import { formatPrice } from "../utils/common";

interface RouteParams {
  id: string;
}

interface RouteState {
  product: ProductType;
}

function Detail() {
  const { id } = useParams<RouteParams>();
  const { state } = useLocation<RouteState>();
  const [product, setProduct] = useState<ProductType>();

  useEffect(() => {
    if (state) {
      setProduct(state.product);
    }
  }, [state]);

  return (
    <Container>
      <Box>
        <Img src={product?.imageUrl} alt={product?.name} />
        <Info>
          <Name>{product?.name}</Name>
          <Hr />
          <InfoDetail>
            <span>금액</span>
            <Price>{formatPrice(product?.price)}원</Price>
          </InfoDetail>
        </Info>
        <Button>장바구니</Button>
      </Box>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 520;
`;

const Img = styled.img`
  width: 480px;
  height: 480px;
  margin-bottom: 10px;
`;

const Info = styled.div`
  width: 100%;
`;

const Name = styled.span`
  font-size: 24px;
`;

const Hr = styled.hr`
  width: 100%;
  border: 2px solid #aaaaaa;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const InfoDetail = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Price = styled.span`
  font-size: 24px;
`;

const Button = styled.button`
  width: 100%;
  padding: 24px;
  background: #73675c;
  font-size: 24px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export default Detail;
