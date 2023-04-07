import styled from 'styled-components';
import HorizontalLine from '../HorizontalLine';

export const Layout = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
export const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
`;
export const Horizontal = styled(HorizontalLine)`
  border: 2px solid black;
`;
