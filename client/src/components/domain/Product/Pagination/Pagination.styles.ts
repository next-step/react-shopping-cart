import styled from 'styled-components';
import { Button } from 'components/common';
export const PaginationList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 10px;
`;

export const PaginationItem = styled(Button)`
  cursor: pointer;
  font-size: 32px;
  padding: 10px;
  border-radius: 5px;
`;
