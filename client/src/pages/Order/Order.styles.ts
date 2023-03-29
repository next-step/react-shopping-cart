import styled from 'styled-components';
import { HorizontalLine } from 'components/common';
export const Container = styled.section`
  padding: 24px 300px;
`;

export const SectionContainer = styled.div`
  display: flex;
`;
export const Title = styled.h3`
  display: flex;
  align-items: center;
  font-size: 20px;
`;
export const LeftSectionLayout = styled.section`
  width: 60%;
  margin-top: 50px;
`;
export const DivideLine = styled(HorizontalLine)`
  border: 2px solid #aaaaaa;
`;
export const RightSectionLayout = styled.section`
  width: 35%;
  height: 260px;
  margin-left: 5%;
  margin-top: 80px;
  border: 1px solid #dddddd;
`;
