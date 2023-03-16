import styled from "styled-components";

export default function OrderProduct() {
  return (
    <Product>
      <Info>
        <Img src="assets/images/product.png" alt="PET보틀-정사각(420ml)" />
        <InfoDetail>
          <Name>PET보틀-정사각(420ml)</Name>
          <Price>54,800원 / 수량: 3개</Price>
        </InfoDetail>
      </Info>
      <Button>장바구니</Button>
    </Product>
  );
}

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 40px;

  border: 1px solid #aaaaaa;
`;

const Info = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;
`;

const Img = styled.img`
  width: 144px;
  height: 144px;
`;

const InfoDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Name = styled.span`
  font-size: 20px;
`;

const Price = styled.span`
  color: #888888;
`;

const Button = styled.button`
  background: #2ac1bc;
  font-size: 20px;
  color: white;
  padding: 14px 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
`;
