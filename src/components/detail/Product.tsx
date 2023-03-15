import styled from "styled-components";
import { Product as ProductType } from "../../types/product";
import { formatPrice } from "../../utils/common";

interface ProductProps {
  product?: ProductType;
}

function Product({ product }: ProductProps) {
  return (
    <>
      <Name>{product?.name}</Name>
      <Hr />
      <InfoDetail>
        <span>금액</span>
        <Price>{formatPrice(product?.price)}원</Price>
      </InfoDetail>
    </>
  );
}

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

export default Product;
