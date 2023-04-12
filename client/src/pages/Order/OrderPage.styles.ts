import styled from 'styled-components';
import { HorizontalLine } from 'common/components/UI';
export const Layout = styled.section`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;
export const Title = styled.h3`
  display: flex;
  font-size: 20px;
`;
export const ItemSection = styled.section`
  width: 100%;
  overflow-y: scroll;
  height: 500px;
  padding: 30px;
  border: 1px solid #dddddd;

  ::-webkit-scrollbar {
    height: 10px;
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: rgb(42, 193, 188);
    border-radius: 5px;
  }
`;
export const PaymentSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 50px;
  height: fit-content;
  border: 1px solid #dddddd;
  overflow: hidden;
`;
export const DivideLine = styled(HorizontalLine)`
  border: 2px solid #aaaaaa;
`;
