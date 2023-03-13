import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const ProductImage = styled.img`
  object-fit: contain;
`;

export const ProductBottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProductInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductName = styled.span`
  font-size: 20px;
`;
