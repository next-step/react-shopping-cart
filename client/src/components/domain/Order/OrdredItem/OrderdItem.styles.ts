import styled from 'styled-components';
import { Image } from 'components/common';

export const Title = styled.h3`
  display: flex;
  align-items: center;
  font-size: 20px;
`;

export const Container = styled.div`
  display: flex;
  margin: 20px 0px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const OrderContainer = styled.div`
  display: flex;
  gap: 15px;
  padding: 10px;
  width: 100%;
  overflow: hidden;
  text-overflow: clip;
  white-space: nowrap;

  @media (max-width: 450px) {
    flex-direction: column;
    img {
      width: 100%;
      height: fit-content;
    }
  }
`;

export const OrderItemBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;
export const OrderItemImage = styled(Image)`
  height: 144px;
  width: 144px;
`;
export const OrderName = styled.span`
  font-size: 18px;
`;
export const OrderNumber = styled.span`
  font-size: 16px;
`;
